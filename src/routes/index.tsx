import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Car, MessageCircle, CheckCircle2, Calculator, Sparkles,
  ShieldCheck, Clock, Users, FileText, ArrowRight, Star, Gauge,
  Calendar, Settings2, Fuel, Hash, BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header, Footer, FloatingWhatsapp, WHATSAPP, WA_MSG, createWhatsAppLink } from "@/components/site-chrome";
import heroCar from "@/assets/hero-car.jpg";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Top Veículos — Seu próximo carro começa com a aprovação certa" },
      { name: "description", content: "Veículos selecionados, financiamento facilitado e atendimento especializado. Simule, aprove e saia de carro novo com a Top Veículos." },
      { property: "og:title", content: "Top Veículos — Aprovação certa, carro certo" },
      { property: "og:description", content: "Simulação rápida, parceria com as melhores financeiras e atendimento humanizado." },
      { property: "og:image", content: heroCar },
      { name: "twitter:image", content: heroCar },
    ],
  }),
  component: Index,
});

const VEHICLES = [
  { img: car1, name: "Hyundai Creta Limited 1.0 Turbo", year: "2023/2023", km: "18.420 km", gear: "Automático", fuel: "Flex", plate: "7", price: "R$ 124.900", parcel: "R$ 1.890", tag: "Mais procurado", pitch: "Ideal para famílias que querem SUV completo com baixa quilometragem." },
  { img: car2, name: "Hyundai HB20 Comfort Plus 1.0", year: "2022/2023", km: "32.100 km", gear: "Manual", fuel: "Flex", plate: "3", price: "R$ 72.500", parcel: "R$ 1.190", tag: "Entrada baixa", pitch: "Perfeito para o uso diário, econômico e fácil de aprovar." },
  { img: car3, name: "Infiniti Q50 Sport 3.0 V6", year: "2021/2021", km: "41.800 km", gear: "Automático", fuel: "Gasolina", plate: "1", price: "R$ 189.900", parcel: "R$ 2.890", tag: "Premium", pitch: "Para quem busca conforto, status e desempenho em um sedã premium." },
];

function Index() {
  return (
    <div id="inicio" className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="pb-28 sm:pb-0">
        <Hero />
        <FindCar />
        <Vehicles />
        <Advantages />
        <Simulator />
        <Trade />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}





function Hero() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-20 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium mb-6">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Aprovação inteligente · +12 financeiras parceiras
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Seu próximo carro começa com a <span className="text-gradient-red">aprovação certa</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Veículos selecionados, financiamento facilitado e atendimento especializado para você sair de carro novo com segurança.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-gradient-red shadow-glow-red hover:opacity-90 h-12 px-6">
              <Link to="/financiamento"><Calculator className="h-5 w-5" /> Simular financiamento</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 border-border bg-card/50 backdrop-blur">
              <Link to="/estoque"><Car className="h-5 w-5" /> Ver veículos</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="h-12 px-6 text-foreground hover:bg-muted">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" /> WhatsApp</a>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {[
              { n: "+8 mil", l: "Aprovações" },
              { n: "12", l: "Financeiras" },
              { n: "4.9★", l: "Avaliações" },
            ].map((s) => (
              <div key={s.l} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-display font-bold">{s.n}</div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative animate-scale-in">
          <div className="absolute -inset-4 bg-gradient-red opacity-20 blur-3xl rounded-3xl" />
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-card-premium">
            <img src={heroCar} alt="Carro premium em showroom Top Veículos" width={1600} height={1024}
              className="w-full h-auto object-cover" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-2xl bg-background/80 backdrop-blur-xl border border-border flex items-center justify-between">
              <div>
                <div className="text-xs text-muted-foreground">Pré-aprovação em</div>
                <div className="text-lg font-display font-bold">até 2 minutos</div>
              </div>
              <div className="h-10 w-10 rounded-full bg-gradient-red grid place-items-center shadow-glow-red">
                <Clock className="h-5 w-5 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const RECOMMENDATIONS = [
  {
    name: "Hyundai HB20 Comfort",
    reason: "Equilibrio entre preço, economia e revenda — encaixa na sua parcela ideal.",
    parcela: "R$ 1.290",
    profile: "Economia",
    profileTone: "bg-brand-blue/15 text-brand-blue border-brand-blue/30",
  },
  {
    name: "Hyundai Creta Limited",
    reason: "SUV espaçoso para família, com conforto e segurança para o dia a dia.",
    parcela: "R$ 1.890",
    profile: "Família",
    profileTone: "bg-primary/15 text-primary border-primary/30",
  },
  {
    name: "Infiniti Q50 Sport",
    reason: "Para quem busca conforto premium e performance sem abrir mão de status.",
    parcela: "R$ 2.690",
    profile: "Conforto",
    profileTone: "bg-foreground/10 text-foreground border-foreground/20",
  },
];

function FindCar() {
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setShowResults(false);
    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
    }, 900);
  };

  return (
    <section className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Match inteligente</div>
          <h2 className="text-3xl sm:text-4xl font-bold">Encontre o carro ideal para você</h2>
          <p className="mt-3 text-muted-foreground">Responda em segundos e veja opções com parcela que cabe no seu bolso.</p>
        </div>
        <div className="rounded-3xl border border-border bg-card/60 backdrop-blur p-6 sm:p-10 shadow-card-premium">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { label: "Orçamento total", placeholder: "R$ 80.000" },
              { label: "Entrada disponível", placeholder: "R$ 15.000" },
              { label: "Parcela ideal", placeholder: "R$ 1.500" },
            ].map((f) => (
              <div key={f.label} className="space-y-2">
                <Label className="text-xs text-muted-foreground">{f.label}</Label>
                <Input placeholder={f.placeholder} className="h-11 bg-background border-border" />
              </div>
            ))}
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">Tipo de carro</Label>
              <Select>
                <SelectTrigger className="h-11 bg-background border-border"><SelectValue placeholder="Selecione" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="hatch">Hatch</SelectItem>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="picape">Picape</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="text-xs text-muted-foreground">Uso principal</Label>
              <Select>
                <SelectTrigger className="h-11 bg-background border-border"><SelectValue placeholder="Selecione" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="cidade">Cidade</SelectItem>
                  <SelectItem value="trabalho">Trabalho</SelectItem>
                  <SelectItem value="familia">Família</SelectItem>
                  <SelectItem value="viagens">Viagens</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground flex items-start gap-2">
            <Sparkles className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            Nossa inteligência cruza seu orçamento, entrada, parcela ideal e objetivo de uso para indicar as melhores opções.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button size="lg" onClick={handleGenerate} className="bg-gradient-red shadow-glow-red h-12 px-6">
              <Sparkles className="h-5 w-5" /> {loading ? "Analisando perfil..." : "Encontrar meu carro"}
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 border-border">
              <a href={createWhatsAppLink(WA_MSG.simulacao)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" /> Prefiro falar no WhatsApp
              </a>
            </Button>
          </div>

          {(loading || showResults) && (
            <div className="mt-10 pt-10 border-t border-border">
              <div className="flex items-center gap-2 mb-2">
                <div className="relative">
                  <Sparkles className="h-5 w-5 text-primary" />
                  {loading && <span className="absolute inset-0 animate-ping"><Sparkles className="h-5 w-5 text-primary opacity-60" /></span>}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Recomendações inteligentes</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                {loading ? "Cruzando seu perfil com nosso estoque..." : "3 opções selecionadas para o seu perfil."}
              </p>

              {loading ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="h-56 rounded-2xl border border-border bg-background/40 animate-pulse" />
                  ))}
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {RECOMMENDATIONS.map((r, i) => (
                    <article
                      key={r.name}
                      className="group rounded-2xl border border-border bg-background/60 p-5 hover:border-primary/50 transition-all duration-300 shadow-card-premium hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-2"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-semibold ${r.profileTone}`}>
                        <Sparkles className="h-3 w-3" /> {r.profile}
                      </div>
                      <h4 className="mt-3 font-display font-bold text-lg leading-tight">{r.name}</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{r.reason}</p>
                      <div className="mt-4 pt-4 border-t border-border">
                        <div className="text-xs text-muted-foreground">Parcela estimada</div>
                        <div className="text-xl font-bold text-primary">{r.parcela}<span className="text-xs text-muted-foreground font-normal">/mês</span></div>
                      </div>
                      <div className="mt-4 flex flex-col gap-2">
                        <Button asChild size="sm" className="bg-gradient-red shadow-glow-red w-full">
                          <a href={createWhatsAppLink(`Olá, quero esse perfil de carro: ${r.name} (${r.profile}).`)} target="_blank" rel="noopener noreferrer">
                            Quero esse perfil de carro
                          </a>
                        </Button>
                        <Button asChild size="sm" variant="outline" className="w-full border-border">
                          <a href={createWhatsAppLink(WA_MSG.cta)} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="h-4 w-4" /> Falar com consultor
                          </a>
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Vehicles() {
  return (
    <section id="estoque" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Estoque selecionado</div>
            <h2 className="text-3xl sm:text-4xl font-bold">Veículos em destaque</h2>
            <p className="mt-3 text-muted-foreground">Inspecionados, com procedência e laudo cautelar. Todos liberados para financiamento.</p>
          </div>
          <Button asChild variant="outline" className="border-border">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">Ver estoque completo <ArrowRight className="h-4 w-4" /></a>
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VEHICLES.map((v) => {
            const tagStyle =
              v.tag === "Premium" ? "bg-gradient-blue shadow-glow-blue"
              : v.tag === "Entrada baixa" ? "bg-accent shadow-glow-blue"
              : v.tag === "Oportunidade" ? "bg-gradient-blue shadow-glow-blue"
              : "bg-gradient-red shadow-glow-red";
            return (
            <article key={v.name} className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300 shadow-card-premium hover:-translate-y-1 flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-graphite">
                <img src={v.img} alt={v.name} width={1024} height={768} loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground ${tagStyle}`}>
                  {v.tag}
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur text-[10px] font-semibold flex items-center gap-1 border border-border">
                  <BadgeCheck className="h-3 w-3 text-accent" /> Procedência
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display font-bold text-lg leading-tight">{v.name}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground italic">{v.pitch}</p>
                <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{v.year}</span>
                  <span className="flex items-center gap-1.5"><Gauge className="h-3.5 w-3.5" />{v.km}</span>
                  <span className="flex items-center gap-1.5"><Settings2 className="h-3.5 w-3.5" />{v.gear}</span>
                  <span className="flex items-center gap-1.5"><Fuel className="h-3.5 w-3.5" />{v.fuel}</span>
                  <span className="flex items-center gap-1.5 col-span-2"><Hash className="h-3.5 w-3.5" />Final de placa {v.plate}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-border flex items-end justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">A partir de</div>
                    <div className="text-2xl font-display font-bold text-gradient-red">{v.price}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Parcela estimada</div>
                    <div className="text-sm font-semibold">{v.parcel}<span className="text-muted-foreground font-normal">/mês</span></div>
                  </div>
                </div>
                <div className="mt-4 grid gap-2">
                  <Button asChild size="sm" className="bg-gradient-red shadow-glow-red">
                    <Link to="/financiamento"><Calculator className="h-4 w-4" /> Simular este veículo</Link>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="border-border">
                    <a href={createWhatsAppLink(`${WA_MSG.veiculo} (${v.name})`)} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" /> Tenho interesse no WhatsApp</a>
                  </Button>
                </div>
              </div>
            </article>
          );})}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
          <ShieldCheck className="h-4 w-4 text-accent" />
          Todos os veículos passam por análise de procedência e podem ser simulados com nossa equipe.
        </p>
      </div>
    </section>
  );
}

function Advantages() {
  const items = [
    { i: Clock, t: "Análise rápida", d: "Pré-aprovação em até 2 minutos com mínima documentação." },
    { i: ShieldCheck, t: "+12 financeiras", d: "Parceria com bancos e fintechs para a melhor taxa do mercado." },
    { i: Sparkles, t: "Entrada facilitada", d: "A partir de 10% de entrada e parcelamento em até 60x." },
    { i: Users, t: "Atendimento humano", d: "Consultor dedicado do primeiro contato até a entrega das chaves." },
    { i: CheckCircle2, t: "Acompanhamento total", d: "Acompanhamos seu processo até a aprovação final, sem burocracia." },
    { i: FileText, t: "Documentação clara", d: "Contratos transparentes, sem letras miúdas ou tarifas escondidas." },
  ];
  return (
    <section className="py-16 sm:py-24 relative bg-graphite/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Diferenciais</div>
          <h2 className="text-3xl sm:text-4xl font-bold">A melhor em aprovação</h2>
          <p className="mt-3 text-muted-foreground">Tecnologia + relacionamento humano para você dirigir seu novo carro o quanto antes.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <div key={it.t} className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors">
              <div className="h-11 w-11 rounded-xl bg-gradient-red grid place-items-center shadow-glow-red mb-4">
                <it.i className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold">{it.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Simulator() {
  const [valor, setValor] = useState(80000);
  const [entrada, setEntrada] = useState(15000);
  const [prazo, setPrazo] = useState(48);
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [veiculo, setVeiculo] = useState("");
  const financiado = Math.max(valor - entrada, 0);
  const taxa = 0.0179; // estimada
  const parcela = financiado > 0
    ? (financiado * taxa) / (1 - Math.pow(1 + taxa, -prazo))
    : 0;
  const fmt = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

  const propostaMsg = `Olá, meu nome é ${nome || "[nome]"}. Fiz uma simulação no site da Top Veículos. Tenho interesse no veículo ${veiculo || "[veículo]"}, com entrada de ${fmt(entrada)} e prazo de ${prazo} meses. Parcela estimada: ${fmt(parcela)}. Quero receber uma proposta.${whatsapp ? ` Meu WhatsApp: ${whatsapp}.` : ""}`;

  return (
    <section id="financiamento" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Simulador</div>
            <h2 className="text-3xl sm:text-4xl font-bold">Simule seu financiamento agora</h2>
            <p className="mt-3 text-muted-foreground max-w-md">Valores estimados. Para a proposta oficial com a melhor taxa, finalize com um consultor.</p>
            <div className="mt-8 space-y-6 max-w-md">
              <Field label="Valor do veículo" value={fmt(valor)}>
                <input type="range" min={20000} max={300000} step={1000} value={valor}
                  onChange={(e) => setValor(+e.target.value)}
                  className="w-full accent-[var(--brand-red)]" />
              </Field>
              <Field label="Entrada" value={fmt(entrada)}>
                <input type="range" min={0} max={valor} step={500} value={Math.min(entrada, valor)}
                  onChange={(e) => setEntrada(+e.target.value)}
                  className="w-full accent-[var(--brand-red)]" />
              </Field>
              <Field label="Prazo" value={`${prazo} meses`}>
                <input type="range" min={12} max={60} step={6} value={prazo}
                  onChange={(e) => setPrazo(+e.target.value)}
                  className="w-full accent-[var(--brand-red)]" />
              </Field>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-blue opacity-20 blur-3xl rounded-3xl" />
            <div className="relative rounded-3xl border border-border bg-card p-8 shadow-card-premium">
              <div className="text-sm text-muted-foreground">Parcela estimada</div>
              <div className="mt-2 text-5xl sm:text-6xl font-display font-extrabold text-gradient-red">
                {fmt(parcela)}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">por mês · {prazo}x</div>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <Stat l="Financiado" v={fmt(financiado)} />
                <Stat l="Entrada" v={fmt(entrada)} />
                <Stat l="Total estimado" v={fmt(parcela * prazo + entrada)} />
                <Stat l="Taxa a partir de" v="1,79% a.m." />
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="sm:col-span-2">
                  <Label className="text-xs text-muted-foreground">Nome</Label>
                  <Input value={nome} onChange={(e) => setNome(e.target.value)} maxLength={80} placeholder="Seu nome completo" className="mt-1" />
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">WhatsApp</Label>
                  <Input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} maxLength={20} placeholder="(00) 00000-0000" className="mt-1" />
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Veículo de interesse</Label>
                  <Input value={veiculo} onChange={(e) => setVeiculo(e.target.value)} maxLength={60} placeholder="Ex.: Hyundai HB20" className="mt-1" />
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-gradient-red shadow-glow-red h-12 flex-1 text-base font-semibold">
                  <a href={createWhatsAppLink(propostaMsg)} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" /> Receber proposta no WhatsApp
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-[11px] text-muted-foreground leading-relaxed">
                Simulação aproximada. A proposta final depende da análise de crédito e condições da financeira.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, children }: { label: string; value: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <Label className="text-xs text-muted-foreground">{label}</Label>
        <span className="text-sm font-semibold">{value}</span>
      </div>
      {children}
    </div>
  );
}

function Stat({ l, v }: { l: string; v: string }) {
  return (
    <div className="p-3 rounded-xl bg-background border border-border">
      <div className="text-[11px] text-muted-foreground">{l}</div>
      <div className="font-semibold">{v}</div>
    </div>
  );
}

function Trade() {
  return (
    <section id="avaliacao" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border overflow-hidden bg-gradient-blue/10 backdrop-blur relative">
          <div className="absolute inset-0 bg-gradient-blue opacity-10" />
          <div className="relative grid lg:grid-cols-2 gap-10 p-8 sm:p-12">
            <div>
              <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Avalie seu usado</div>
              <h2 className="text-3xl sm:text-4xl font-bold">Dê seu carro na troca e pague menos</h2>
              <p className="mt-3 text-muted-foreground">Avaliação justa, ágil e baseada em referência de mercado. Aceitamos seu usado como parte do pagamento.</p>
              <ul className="mt-6 space-y-3 text-sm">
                {["Avaliação em até 24h", "Quitamos seu financiamento atual", "Documentação por nossa conta"].map((t) => (
                  <li key={t} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />{t}
                  </li>
                ))}
              </ul>
            </div>
            <form className="space-y-4 p-6 rounded-2xl bg-background/70 backdrop-blur border border-border">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2"><Label>Marca / Modelo</Label><Input placeholder="Ex: Honda Civic" className="bg-background" /></div>
                <div className="space-y-2"><Label>Ano</Label><Input placeholder="2020" className="bg-background" /></div>
                <div className="space-y-2"><Label>KM</Label><Input placeholder="45.000" className="bg-background" /></div>
                <div className="space-y-2"><Label>WhatsApp</Label><Input placeholder="(00) 90000-0000" className="bg-background" /></div>
              </div>
              <Button asChild className="w-full h-11 bg-gradient-blue shadow-glow-blue">
                <a href={createWhatsAppLink(WA_MSG.avaliacao)} target="_blank" rel="noopener noreferrer">
                  Quero minha avaliação <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const data = [
    { n: "Marcos R.", c: "Renegade 2022", t: "Aprovaram em menos de 1 hora. Saí com o carro no mesmo dia, atendimento impecável." },
    { n: "Camila S.", c: "HB20 2021", t: "Tinha restrição e fui aprovada. A consultora me acompanhou em cada etapa." },
    { n: "Eduardo M.", c: "Compass 2023", t: "Dei meu usado na troca, pagaram o preço justo e a parcela coube no orçamento." },
  ];
  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-graphite/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Clientes aprovados</div>
          <h2 className="text-3xl sm:text-4xl font-bold">Histórias reais de quem saiu de carro novo</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {data.map((d) => (
            <figure key={d.n} className="p-6 rounded-2xl border border-border bg-card">
              <div className="flex gap-1 text-primary mb-3">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground">"{d.t}"</blockquote>
              <figcaption className="mt-5 pt-4 border-t border-border flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-red grid place-items-center font-bold text-sm text-primary-foreground">
                  {d.n[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm">{d.n}</div>
                  <div className="text-xs text-muted-foreground">{d.c}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const items = [
    { q: "Em quanto tempo recebo a aprovação?", a: "Em muitos casos, conseguimos iniciar a análise rapidamente após o envio dos dados. O prazo final depende da financeira e da documentação enviada." },
    { q: "Qual o valor mínimo de entrada?", a: "O valor de entrada pode variar de acordo com o veículo, perfil de crédito e condições disponíveis. Nossa equipe ajuda você a encontrar a melhor opção possível." },
    { q: "Tenho restrição no nome. Consigo financiar?", a: "Cada caso precisa ser analisado individualmente. Mesmo com restrição, podemos verificar alternativas e orientar você sobre as possibilidades." },
    { q: "Aceitam carro na troca?", a: "Sim. Você pode usar seu usado como parte do pagamento. Basta enviar os dados do veículo para nossa equipe fazer uma avaliação." },
    { q: "Quais documentos preciso enviar?", a: "Normalmente são solicitados documento com foto, CPF, comprovante de residência e comprovante de renda. A documentação pode variar conforme a financeira." },
    { q: "Os veículos têm garantia?", a: "As condições de garantia podem variar conforme o veículo. Consulte nossa equipe para saber os detalhes do carro de interesse." },
  ];
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Perguntas frequentes</div>
          <h2 className="text-3xl sm:text-4xl font-bold">Tudo o que você precisa saber</h2>
        </div>
        <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`i${i}`} className="border-b-0 px-5">
              <AccordionTrigger className="text-left font-semibold">{it.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="contato" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-red opacity-15" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-6xl font-display font-extrabold leading-tight">
          Pronto para sair de <span className="text-gradient-red">carro novo?</span>
        </h2>
        <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
          Fale agora com um consultor Top Veículos e receba a melhor proposta do mercado.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="bg-gradient-red shadow-glow-red h-13 px-7 text-base h-12">
            <a href={createWhatsAppLink(WA_MSG.cta)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-border h-12 px-7 text-base">
            <Link to="/financiamento"><Calculator className="h-5 w-5" /> Simular agora</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

