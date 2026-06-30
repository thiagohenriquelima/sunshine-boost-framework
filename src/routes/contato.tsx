import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, MapPin, Clock, Phone, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageShell, PageHero, createWhatsAppLink, WA_MSG, WHATSAPP_NUMBER } from "@/components/site-chrome";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Top Veículos" },
      { name: "description", content: "Fale com a Top Veículos pelo WhatsApp, conheça nossa loja e horário de atendimento. Atendimento humanizado e ágil." },
      { property: "og:title", content: "Contato — Top Veículos" },
      { property: "og:description", content: "WhatsApp, endereço, horário e formulário rápido para você falar com nossa equipe." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [form, setForm] = useState({ nome: "", whatsapp: "", assunto: "", mensagem: "" });
  const upd = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });
  const msg = `Olá, meu nome é ${form.nome || "[nome]"}. ${form.assunto ? `Assunto: ${form.assunto}. ` : ""}${form.mensagem || "Gostaria de falar com um consultor."}`;

  return (
    <PageShell>
      <PageHero
        eyebrow="Estamos prontos para te atender"
        title={<>Fale com a <span className="text-gradient-red">Top Veículos</span></>}
        subtitle="Escolha o canal de sua preferência. Respondemos rapidamente pelo WhatsApp."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6">
          <InfoCard icon={MessageCircle} title="WhatsApp" lines={["(83) 98108-9495", "Atendimento ágil e humanizado"]}
            cta={{ label: "Abrir conversa", href: createWhatsAppLink(WA_MSG.cta) }} highlight />
          <InfoCard icon={MapPin} title="Endereço" lines={["Av. Principal, 1000", "Bairro Centro · João Pessoa/PB"]} />
          <InfoCard icon={Clock} title="Horário" lines={["Seg a Sex · 08h às 18h", "Sábado · 08h às 13h"]} />
          <InfoCard icon={Phone} title="Telefone" lines={[`+55 ${WHATSAPP_NUMBER.slice(2, 4)} ${WHATSAPP_NUMBER.slice(4, 9)}-${WHATSAPP_NUMBER.slice(9)}`]} />
          <InfoCard icon={Mail} title="E-mail" lines={["contato@topveiculos.com.br"]} />
          <InfoCard icon={Instagram} title="Instagram" lines={["@topveiculos"]} />
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl overflow-hidden border border-border bg-card shadow-card-premium">
            <iframe
              title="Localização Top Veículos"
              src="https://www.google.com/maps?q=Joao+Pessoa+PB&output=embed"
              className="w-full h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <form className="rounded-3xl border border-border bg-card/60 backdrop-blur p-6 sm:p-8 shadow-card-premium space-y-5"
            onSubmit={(e) => { e.preventDefault(); window.open(createWhatsAppLink(msg), "_blank", "noopener,noreferrer"); }}>
            <h2 className="text-2xl font-bold">Envie uma mensagem rápida</h2>
            <p className="text-sm text-muted-foreground">Preencha e enviaremos sua mensagem direto para nosso WhatsApp.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5"><Label className="text-xs">Nome</Label><Input value={form.nome} onChange={upd("nome")} maxLength={80} className="h-11 bg-background border-border" required /></div>
              <div className="space-y-1.5"><Label className="text-xs">WhatsApp</Label><Input value={form.whatsapp} onChange={upd("whatsapp")} maxLength={20} placeholder="(00) 00000-0000" className="h-11 bg-background border-border" required /></div>
            </div>
            <div className="space-y-1.5"><Label className="text-xs">Assunto</Label><Input value={form.assunto} onChange={upd("assunto")} maxLength={100} placeholder="Ex: Quero financiar um carro" className="h-11 bg-background border-border" /></div>
            <div className="space-y-1.5"><Label className="text-xs">Mensagem</Label><Textarea value={form.mensagem} onChange={upd("mensagem")} maxLength={500} className="bg-background border-border min-h-32" required /></div>
            <Button type="submit" size="lg" className="w-full bg-gradient-red shadow-glow-red h-12">
              <MessageCircle className="h-5 w-5" /> Enviar pelo WhatsApp
            </Button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}

function InfoCard({ icon: Icon, title, lines, cta, highlight }: {
  icon: React.ComponentType<{ className?: string }>; title: string; lines: string[];
  cta?: { label: string; href: string }; highlight?: boolean;
}) {
  return (
    <div className={`p-6 rounded-2xl border bg-card transition-colors flex flex-col ${highlight ? "border-primary/50 shadow-glow-red" : "border-border hover:border-primary/40"}`}>
      <div className={`h-11 w-11 rounded-xl grid place-items-center mb-4 ${highlight ? "bg-gradient-red shadow-glow-red" : "bg-graphite"}`}>
        <Icon className={`h-5 w-5 ${highlight ? "text-primary-foreground" : "text-primary"}`} />
      </div>
      <h3 className="font-display font-bold">{title}</h3>
      <div className="mt-1 text-sm text-muted-foreground space-y-0.5">
        {lines.map((l) => <p key={l}>{l}</p>)}
      </div>
      {cta && (
        <Button asChild size="sm" className="mt-4 bg-gradient-red shadow-glow-red w-fit">
          <a href={cta.href} target="_blank" rel="noopener noreferrer">{cta.label}</a>
        </Button>
      )}
    </div>
  );
}
