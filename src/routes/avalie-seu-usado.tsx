import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, CheckCircle2, Car, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageShell, PageHero, createWhatsAppLink, WA_MSG } from "@/components/site-chrome";

export const Route = createFileRoute("/avalie-seu-usado")({
  head: () => ({
    meta: [
      { title: "Avalie seu Usado — Top Veículos" },
      { name: "description", content: "Use seu carro usado como parte da entrada. Envie os dados, receba uma avaliação e troque por um veículo da Top Veículos." },
      { property: "og:title", content: "Avalie seu Usado — Top Veículos" },
      { property: "og:description", content: "Avaliação rápida e justa para você trocar de carro com segurança." },
    ],
  }),
  component: AvalieSeuUsadoPage,
});

function AvalieSeuUsadoPage() {
  const [form, setForm] = useState({
    nome: "", whatsapp: "", marca: "", modelo: "", ano: "", km: "", versao: "", obs: "",
  });
  const upd = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const msg = `Olá, meu nome é ${form.nome || "[nome]"}. Quero avaliar meu usado para dar como entrada na troca.\n\nMarca: ${form.marca || "-"}\nModelo: ${form.modelo || "-"}\nVersão: ${form.versao || "-"}\nAno: ${form.ano || "-"}\nKM: ${form.km || "-"}\nObservações: ${form.obs || "-"}`;

  return (
    <PageShell>
      <PageHero
        eyebrow="Avalie seu usado"
        title={<>Troque seu carro e <span className="text-gradient-red">saia de carro novo</span></>}
        subtitle="Envie os dados do seu veículo e nossa equipe faz uma avaliação para usar como entrada na troca."
      />

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold">Como funciona</h2>
            {[
              { t: "1. Envie os dados", d: "Preencha o formulário com as informações do seu carro." },
              { t: "2. Receba a avaliação", d: "Nossa equipe analisa e retorna uma proposta justa pelo seu usado." },
              { t: "3. Troque com facilidade", d: "Use o valor como entrada do seu novo veículo e finalize com nossas financeiras parceiras." },
            ].map((s) => (
              <div key={s.t} className="p-4 rounded-xl border border-border bg-card">
                <div className="font-display font-bold flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" />{s.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
            <div className="p-4 rounded-xl border border-border bg-card flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">Avaliação sem compromisso. Mesmo com financiamento ativo, podemos analisar a quitação.</p>
            </div>
          </div>

          <form className="lg:col-span-3 rounded-3xl border border-border bg-card/60 backdrop-blur p-6 sm:p-8 shadow-card-premium space-y-5"
            onSubmit={(e) => { e.preventDefault(); window.open(createWhatsAppLink(msg), "_blank", "noopener,noreferrer"); }}>
            <div className="flex items-center gap-2 mb-2"><Car className="h-5 w-5 text-primary" /><h3 className="font-display font-bold text-lg">Dados do seu veículo</h3></div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Seu nome"><Input value={form.nome} onChange={upd("nome")} maxLength={80} className="h-11 bg-background border-border" required /></Field>
              <Field label="WhatsApp"><Input value={form.whatsapp} onChange={upd("whatsapp")} maxLength={20} placeholder="(00) 00000-0000" className="h-11 bg-background border-border" required /></Field>
              <Field label="Marca"><Input value={form.marca} onChange={upd("marca")} maxLength={40} placeholder="Ex: Hyundai" className="h-11 bg-background border-border" required /></Field>
              <Field label="Modelo"><Input value={form.modelo} onChange={upd("modelo")} maxLength={60} placeholder="Ex: HB20" className="h-11 bg-background border-border" required /></Field>
              <Field label="Versão"><Input value={form.versao} onChange={upd("versao")} maxLength={60} placeholder="Ex: Comfort 1.0" className="h-11 bg-background border-border" /></Field>
              <Field label="Ano">
                <Select value={form.ano} onValueChange={(v) => setForm({ ...form, ano: v })}>
                  <SelectTrigger className="h-11 bg-background border-border"><SelectValue placeholder="Selecione" /></SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 20 }, (_, i) => 2025 - i).map((y) => (
                      <SelectItem key={y} value={String(y)}>{y}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Quilometragem"><Input value={form.km} onChange={upd("km")} maxLength={15} placeholder="Ex: 45.000" className="h-11 bg-background border-border" required /></Field>
            </div>
            <Field label="Observações (opcional)">
              <Textarea value={form.obs} onChange={upd("obs")} maxLength={500} placeholder="Estado de conservação, financiamento ativo, etc." className="bg-background border-border min-h-24" />
            </Field>
            <Button type="submit" size="lg" className="w-full bg-gradient-red shadow-glow-red h-12">
              <MessageCircle className="h-5 w-5" /> Quero minha avaliação no WhatsApp
            </Button>
            <p className="text-xs text-muted-foreground text-center">Ao enviar, abriremos uma conversa no WhatsApp com nossa equipe.</p>
            <Button asChild type="button" variant="outline" className="w-full border-border">
              <a href={createWhatsAppLink(WA_MSG.avaliacao)} target="_blank" rel="noopener noreferrer">Prefiro falar direto agora</a>
            </Button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs text-muted-foreground">{label}</Label>
      {children}
    </div>
  );
}
