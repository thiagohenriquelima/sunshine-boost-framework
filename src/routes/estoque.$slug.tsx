import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Calendar, Gauge, Settings2, Fuel, Hash, BadgeCheck, ShieldCheck,
  MessageCircle, Calculator, CalendarCheck, ChevronLeft, Check, Sparkles, Car,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageShell, createWhatsAppLink } from "@/components/site-chrome";
import { VEHICLES, findVehicleBySlug, type Vehicle } from "@/data/vehicles";

export const Route = createFileRoute("/estoque/$slug")({
  loader: ({ params }) => {
    const vehicle = findVehicleBySlug(params.slug);
    if (!vehicle) throw notFound();
    return { vehicle };
  },
  head: ({ loaderData }) => {
    const v = loaderData?.vehicle;
    const title = v ? `${v.name} — Top Veículos` : "Veículo — Top Veículos";
    const description = v
      ? `${v.name} ${v.year} · ${v.km} · ${v.gear} · ${v.fuel}. ${v.price}. Simule, agende visita ou fale no WhatsApp.`
      : "Detalhes do veículo na Top Veículos.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(v ? [{ property: "og:image", content: v.img }] : []),
      ],
    };
  },
  notFoundComponent: NotFoundVehicle,
  errorComponent: ({ reset }) => (
    <PageShell>
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold">Não foi possível carregar o veículo.</h1>
        <Button className="mt-6" onClick={reset}>Tentar novamente</Button>
      </div>
    </PageShell>
  ),
  component: VehicleDetailPage,
});

function NotFoundVehicle() {
  return (
    <PageShell>
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-display font-bold">Veículo não encontrado</h1>
        <p className="mt-3 text-muted-foreground">Este veículo pode já ter sido vendido. Veja outras opções no estoque.</p>
        <Button asChild className="mt-6 bg-gradient-red shadow-glow-red">
          <Link to="/estoque"><ChevronLeft className="h-4 w-4" /> Voltar ao estoque</Link>
        </Button>
      </div>
    </PageShell>
  );
}

const interestMsg = (v: Vehicle) =>
  `Olá, tenho interesse no ${v.name} que vi no site da Top Veículos. Gostaria de saber as condições.`;
const visitMsg = (v: Vehicle) =>
  `Olá, gostaria de agendar uma visita para conhecer o ${v.name} que vi no site da Top Veículos.`;
const simulateMsg = (v: Vehicle, entrada: string, prazo: string) =>
  `Olá, quero simular o financiamento do ${v.name} (${v.price}) com entrada de ${entrada || "a combinar"} e prazo de ${prazo} meses. Vim pelo site da Top Veículos.`;

function VehicleDetailPage() {
  const { vehicle: v } = Route.useLoaderData();
  const [activeImg, setActiveImg] = useState(0);

  const similar = useMemo(
    () => VEHICLES.filter((x) => x.slug !== v.slug && (x.type === v.type || x.brand === v.brand)).slice(0, 3),
    [v.slug, v.type, v.brand],
  );

  return (
    <PageShell>
      <section className="pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/estoque" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ChevronLeft className="h-4 w-4" /> Voltar ao estoque
          </Link>
        </div>
      </section>

      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-8">
          {/* Gallery */}
          <div className="lg:col-span-3 space-y-3">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-graphite border border-border shadow-card-premium">
              <img src={v.gallery[activeImg]} alt={v.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-red shadow-glow-red text-xs font-semibold text-primary-foreground">{v.tag}</div>
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur text-xs font-semibold flex items-center gap-1 border border-border">
                <BadgeCheck className="h-3.5 w-3.5 text-accent" /> Procedência verificada
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {v.gallery.map((g: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${i === activeImg ? "border-primary shadow-glow-red" : "border-border hover:border-muted-foreground/40"}`}
                >
                  <img src={g} alt={`${v.name} foto ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Summary + CTAs */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{v.brand} · {v.type}</p>
              <h1 className="mt-1 text-3xl sm:text-4xl font-display font-extrabold leading-tight">{v.name}</h1>
              <p className="mt-2 text-sm text-muted-foreground italic">{v.pitch}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <Spec icon={<Calendar className="h-4 w-4" />} label="Ano/Modelo" value={v.year} />
              <Spec icon={<Gauge className="h-4 w-4" />} label="Quilometragem" value={v.km} />
              <Spec icon={<Settings2 className="h-4 w-4" />} label="Câmbio" value={v.gear} />
              <Spec icon={<Fuel className="h-4 w-4" />} label="Combustível" value={v.fuel} />
              <Spec icon={<Hash className="h-4 w-4" />} label="Final de placa" value={v.plate} />
              <Spec icon={<Car className="h-4 w-4" />} label="Categoria" value={v.type} />
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-card-premium">
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">À vista</div>
                  <div className="text-3xl font-display font-bold text-gradient-red">{v.price}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Parcela a partir de</div>
                  <div className="text-base font-semibold">{v.parcel}<span className="text-muted-foreground font-normal">/mês</span></div>
                </div>
              </div>
              <div className="mt-5 grid gap-2">
                <Button asChild size="lg" className="bg-gradient-red shadow-glow-red">
                  <a href="#simular"><Calculator className="h-4 w-4" /> Simular este veículo</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-border">
                  <a href={createWhatsAppLink(interestMsg(v))} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" /> Tenho interesse no WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href={createWhatsAppLink(visitMsg(v))} target="_blank" rel="noopener noreferrer">
                    <CalendarCheck className="h-4 w-4" /> Agendar visita
                  </a>
                </Button>
              </div>
              <p className="mt-3 text-[11px] text-muted-foreground flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" /> Procedência verificada · Aceita troca · Financiamento facilitado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais + Itens + Conservação */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
          <Panel title="Diferenciais do veículo" icon={<Sparkles className="h-5 w-5 text-primary" />}>
            <ul className="space-y-2.5">
              {v.highlights.map((h: string) => (
                <li key={h} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 mt-0.5 text-accent shrink-0" /> {h}
                </li>
              ))}
            </ul>
          </Panel>
          <Panel title="Itens de série" icon={<BadgeCheck className="h-5 w-5 text-accent" />}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-3">
              {v.features.map((f: string) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 mt-0.5 text-accent shrink-0" /> {f}
                </li>
              ))}
            </ul>
          </Panel>
          <Panel title="Estado de conservação" icon={<ShieldCheck className="h-5 w-5 text-accent" />}>
            <p className="text-sm text-muted-foreground leading-relaxed">{v.condition}</p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <Tag>Revisado</Tag>
              <Tag>Procedência ok</Tag>
              <Tag>Doc. em dia</Tag>
              <Tag>Aceita troca</Tag>
            </div>
          </Panel>
        </div>
      </section>

      {/* Por que vale a pena */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-10 border border-border bg-gradient-hero relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
            <h2 className="relative text-2xl sm:text-3xl font-display font-bold">
              Por que esse veículo <span className="text-gradient-red">vale a pena?</span>
            </h2>
            <div className="relative mt-6 grid sm:grid-cols-2 gap-4">
              {v.whyWorth.map((w: string) => (
                <div key={w} className="flex items-start gap-3 rounded-xl border border-border bg-card/60 backdrop-blur p-4">
                  <div className="h-9 w-9 rounded-lg bg-gradient-red grid place-items-center shrink-0 shadow-glow-red">
                    <Sparkles className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <p className="text-sm">{w}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Simulador rápido */}
      <QuickSimulator vehicle={v} />

      {/* Similares */}
      {similar.length > 0 && (
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-6">
              <h2 className="text-2xl sm:text-3xl font-display font-bold">Veículos <span className="text-gradient-red">semelhantes</span></h2>
              <Link to="/estoque" className="text-sm text-muted-foreground hover:text-foreground">Ver todo estoque →</Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {similar.map((s) => <SimilarCard key={s.slug} v={s} />)}
            </div>
          </div>
        </section>
      )}
    </PageShell>
  );
}

function Spec({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/60 p-3">
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">{icon}{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}

function Panel({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-card-premium">
      <div className="flex items-center gap-2 mb-4">
        {icon}<h3 className="font-display font-bold text-lg">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-muted/50 border border-border text-muted-foreground">
      <Check className="h-3 w-3 text-accent" /> {children}
    </span>
  );
}

function QuickSimulator({ vehicle: v }: { vehicle: Vehicle }) {
  const [entrada, setEntrada] = useState("");
  const [prazo, setPrazo] = useState("48");
  const [nome, setNome] = useState("");

  const entradaNum = Number(entrada.replace(/\D/g, "")) || Math.round(v.priceNum * 0.2);
  const financiado = Math.max(v.priceNum - entradaNum, 0);
  const meses = Number(prazo) || 48;
  const i = 0.0179;
  const pmt = financiado > 0 ? (financiado * i) / (1 - Math.pow(1 + i, -meses)) : 0;
  const parcela = pmt.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

  const msg = `Olá, meu nome é ${nome || "[seu nome]"}. Quero simular o ${v.name} (${v.price}) com entrada de ${entrada || "R$ " + entradaNum.toLocaleString("pt-BR")} e prazo de ${meses} meses. Parcela estimada: ${parcela}. Vim pelo site da Top Veículos.`;

  return (
    <section id="simular" className="pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card shadow-card-premium p-6 sm:p-10 grid lg:grid-cols-2 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-xs font-medium">
              <Calculator className="h-3.5 w-3.5" /> Simulador rápido deste veículo
            </div>
            <h2 className="mt-4 text-2xl sm:text-3xl font-display font-bold">Veja sua <span className="text-gradient-red">parcela ideal</span></h2>
            <p className="mt-2 text-sm text-muted-foreground">Simulação aproximada. A proposta final depende da análise de crédito e condições da financeira.</p>

            <div className="mt-6 grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-xs">Seu nome</Label>
                  <Input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Como devemos chamar você?" className="h-11 bg-background" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Entrada</Label>
                  <Input value={entrada} onChange={(e) => setEntrada(e.target.value)} placeholder={`R$ ${Math.round(v.priceNum * 0.2).toLocaleString("pt-BR")}`} className="h-11 bg-background" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Prazo (meses)</Label>
                <div className="flex gap-2 flex-wrap">
                  {["24", "36", "48", "60"].map((p) => (
                    <button
                      key={p}
                      onClick={() => setPrazo(p)}
                      className={`px-4 h-10 rounded-md border text-sm transition-all ${prazo === p ? "border-primary bg-primary/10 text-foreground" : "border-border text-muted-foreground hover:border-muted-foreground/40"}`}
                    >{p}x</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-hero border border-border p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Parcela estimada</div>
              <div className="mt-1 text-5xl font-display font-extrabold text-gradient-red">{parcela}</div>
              <div className="mt-1 text-sm text-muted-foreground">em {meses}x · Total financiado {financiado.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</div>
            </div>
            <div className="mt-6 grid gap-2">
              <Button asChild size="lg" className="bg-gradient-red shadow-glow-red">
                <a href={createWhatsAppLink(msg)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" /> Receber proposta no WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={createWhatsAppLink(simulateMsg(v, entrada, prazo))} target="_blank" rel="noopener noreferrer">
                  Falar com consultor
                </a>
              </Button>
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground">Taxa estimada de 1,79% a.m. apenas para fins de simulação.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SimilarCard({ v }: { v: Vehicle }) {
  return (
    <article className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all shadow-card-premium hover:-translate-y-1">
      <Link to="/estoque/$slug" params={{ slug: v.slug }} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-graphite">
          <img src={v.img} alt={v.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-4">
          <h3 className="font-display font-bold leading-tight">{v.name}</h3>
          <div className="mt-1 text-xs text-muted-foreground">{v.year} · {v.km} · {v.gear}</div>
          <div className="mt-3 flex items-end justify-between">
            <div className="text-lg font-display font-bold text-gradient-red">{v.price}</div>
            <div className="text-xs text-muted-foreground">{v.parcel}/mês</div>
          </div>
        </div>
      </Link>
    </article>
  );
}
