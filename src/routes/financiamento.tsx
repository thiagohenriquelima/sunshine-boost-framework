import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calculator, MessageCircle, Sparkles, ShieldCheck, Clock, FileText, CheckCircle2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageShell, PageHero, createWhatsAppLink, WA_MSG } from "@/components/site-chrome";

export const Route = createFileRoute("/financiamento")({
  head: () => ({
    meta: [
      { title: "Financiamento de Veículos — Top Veículos" },
      { name: "description", content: "Simule o financiamento do seu carro, veja parcela estimada, documentação necessária e tire suas dúvidas. Aprovação ágil e atendimento humanizado." },
      { property: "og:title", content: "Financiamento de Veículos — Top Veículos" },
      { property: "og:description", content: "Simulação rápida e aprovação inteligente com mais de 12 financeiras parceiras." },
    ],
  }),
  component: FinanciamentoPage,
});

function FinanciamentoPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={<><Sparkles className="h-3.5 w-3.5 text-primary" /> Aprovação inteligente</>}
        title={<>Financiamento facilitado para <span className="text-gradient-red">sair de carro novo</span></>}
        subtitle="Simule em segundos, envie sua documentação e acompanhe sua aprovação com um consultor dedicado."
      />
      <Simulator />
      <Benefits />
      <Docs />
      <Faq />
    </PageShell>
  );
}

const formatCPF = (v: string) =>
  v.replace(/\D/g, "").slice(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

function Simulator() {
  const [valor, setValor] = useState(80000);
  const [entrada, setEntrada] = useState(15000);
  const [prazo, setPrazo] = useState(48);
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [veiculo, setVeiculo] = useState("");
  const [cpf, setCpf] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [possuiCnh, setPossuiCnh] = useState(false);
  const financiado = Math.max(valor - entrada, 0);
  const taxa = 0.0179;
  const parcela = financiado > 0 ? (financiado * taxa) / (1 - Math.pow(1 + taxa, -prazo)) : 0;
  const fmt = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

  const propostaMsg = `Olá, meu nome é ${nome || "[nome]"}. Fiz uma simulação no site da Top Veículos. Tenho interesse no veículo ${veiculo || "[veículo]"}, com entrada de ${fmt(entrada)} e prazo de ${prazo}x. Quero receber uma proposta. Parcela estimada: ${fmt(parcela)}.${cpf ? ` CPF: ${cpf}.` : ""}${nascimento ? ` Data de nascimento: ${nascimento}.` : ""} Possuo CNH: ${possuiCnh ? "Sim" : "Não"}.`;

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card/60 backdrop-blur p-6 sm:p-10 shadow-card-premium">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="space-y-7">
              <SliderField label="Valor do veículo" value={valor} min={20000} max={300000} step={1000} fmt={fmt} onChange={setValor} />
              <SliderField label="Entrada" value={entrada} min={0} max={valor} step={500} fmt={fmt} onChange={setEntrada} />
              <SliderField label="Prazo (meses)" value={prazo} min={12} max={72} step={6} fmt={(n) => `${n}x`} onChange={setPrazo} />
            </div>
            <div className="rounded-2xl bg-background/60 border border-border p-6 flex flex-col">
              <div className="text-xs uppercase tracking-widest text-primary font-semibold">Parcela estimada</div>
              <div className="mt-2 text-4xl sm:text-5xl font-display font-bold text-gradient-red">{fmt(parcela)}<span className="text-base text-muted-foreground font-normal">/mês</span></div>
              <div className="mt-2 text-sm text-muted-foreground">Valor financiado: <span className="text-foreground font-semibold">{fmt(financiado)}</span> em {prazo}x</div>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <div className="space-y-1.5"><Label className="text-xs">Nome</Label><Input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome" maxLength={80} className="h-11 bg-background border-border" /></div>
                <div className="space-y-1.5"><Label className="text-xs">WhatsApp</Label><Input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="(00) 00000-0000" maxLength={20} className="h-11 bg-background border-border" /></div>
                <div className="space-y-1.5"><Label className="text-xs">CPF</Label><Input value={cpf} onChange={(e) => setCpf(formatCPF(e.target.value))} inputMode="numeric" placeholder="000.000.000-00" maxLength={14} className="h-11 bg-background border-border" /></div>
                <div className="space-y-1.5"><Label className="text-xs">Data de nascimento</Label><Input type="date" value={nascimento} onChange={(e) => setNascimento(e.target.value)} className="h-11 bg-background border-border" /></div>
                <div className="space-y-1.5 sm:col-span-2"><Label className="text-xs">Veículo de interesse</Label><Input value={veiculo} onChange={(e) => setVeiculo(e.target.value)} placeholder="Ex: Hyundai HB20" maxLength={80} className="h-11 bg-background border-border" /></div>
                <div className="flex items-center justify-between rounded-md border border-border bg-background px-3 h-11 sm:col-span-2">
                  <Label className="text-xs">Possui CNH?</Label>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">{possuiCnh ? "Sim" : "Não"}</span>
                    <Switch checked={possuiCnh} onCheckedChange={setPossuiCnh} />
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="mt-5 bg-gradient-red shadow-glow-red h-12">
                <a href={createWhatsAppLink(propostaMsg)} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5" /> Receber proposta no WhatsApp</a>
              </Button>
              <p className="mt-3 text-xs text-muted-foreground">Simulação aproximada. A proposta final depende da análise de crédito e condições da financeira.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SliderField({ label, value, min, max, step, fmt, onChange }: { label: string; value: number; min: number; max: number; step: number; fmt: (n: number) => string; onChange: (n: number) => void }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <Label className="text-sm">{label}</Label>
        <div className="text-sm font-semibold">{fmt(value)}</div>
      </div>
      <Slider value={[value]} min={min} max={max} step={step} onValueChange={(v) => onChange(v[0])} />
    </div>
  );
}

function Benefits() {
  const items = [
    { i: Clock, t: "Análise rápida", d: "Iniciamos a análise assim que recebemos seus dados, sem burocracia." },
    { i: ShieldCheck, t: "+12 financeiras", d: "Buscamos a melhor taxa entre bancos e fintechs parceiras." },
    { i: Sparkles, t: "Entrada facilitada", d: "Avaliamos diferentes percentuais de entrada para encaixar no seu orçamento." },
    { i: Users, t: "Atendimento humano", d: "Um consultor acompanha você do contato à entrega das chaves." },
    { i: CheckCircle2, t: "Acompanhamento total", d: "Você sabe em qual etapa está sua aprovação, sempre." },
    { i: FileText, t: "Documentação clara", d: "Contratos transparentes, sem letras miúdas." },
  ];
  return (
    <section className="py-16 bg-graphite/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">Por que financiar com a Top Veículos</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <div key={it.t} className="p-6 rounded-2xl border border-border bg-card">
              <div className="h-11 w-11 rounded-xl bg-gradient-red grid place-items-center shadow-glow-red mb-4"><it.i className="h-5 w-5 text-primary-foreground" /></div>
              <h3 className="font-display font-bold">{it.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Docs() {
  const docs = ["Documento de identidade com foto (RG ou CNH)", "CPF", "Comprovante de residência atualizado", "Comprovante de renda (holerite, extrato ou declaração)", "Para autônomos: extratos ou declaração de renda"];
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold">Documentação necessária</h2>
          <p className="mt-3 text-muted-foreground">A lista pode variar conforme a financeira escolhida. Nossa equipe orienta cada passo.</p>
          <Button asChild className="mt-6 bg-gradient-red shadow-glow-red">
            <a href={createWhatsAppLink(WA_MSG.aprovacao)} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" /> Iniciar minha aprovação</a>
          </Button>
        </div>
        <ul className="rounded-2xl border border-border bg-card divide-y divide-border">
          {docs.map((d) => (
            <li key={d} className="flex items-center gap-3 p-4 text-sm"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" />{d}</li>
          ))}
        </ul>
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
  ];
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Dúvidas frequentes sobre financiamento</h2>
        <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card divide-y divide-border overflow-hidden">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`f${i}`} className="border-b-0 px-5">
              <AccordionTrigger className="text-left font-semibold">{it.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
