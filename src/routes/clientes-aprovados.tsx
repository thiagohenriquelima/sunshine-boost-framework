import { createFileRoute } from "@tanstack/react-router";
import { Star, MessageCircle, BadgeCheck, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell, PageHero, createWhatsAppLink, WA_MSG } from "@/components/site-chrome";

export const Route = createFileRoute("/clientes-aprovados")({
  head: () => ({
    meta: [
      { title: "Clientes Aprovados — Top Veículos" },
      { name: "description", content: "Histórias reais de quem realizou o sonho do carro novo com a Top Veículos. Veja depoimentos e clientes aprovados." },
      { property: "og:title", content: "Clientes Aprovados — Top Veículos" },
      { property: "og:description", content: "Mais de 8 mil aprovações. Conheça quem confiou na Top Veículos." },
    ],
  }),
  component: ClientesAprovadosPage,
});

const TESTIMONIALS = [
  { name: "Marcos Almeida", car: "Hyundai Creta 2023", initials: "MA", text: "Eu já tinha tentado em outros lugares e fui negado. A Top Veículos achou uma financeira que aprovou meu crédito em poucas horas. Atendimento sensacional.", rating: 5, profile: "Servidor público" },
  { name: "Juliana Pereira", car: "Hyundai HB20 2022", initials: "JP", text: "Comprei meu primeiro carro com eles. Me explicaram tudo, sem pressa, e a parcela coube no meu orçamento. Recomendo muito!", rating: 5, profile: "Autônoma" },
  { name: "Rafael Souza", car: "Infiniti Q50 2021", initials: "RS", text: "Queria um sedã premium e consegui exatamente o que sonhava. Processo limpo e transparente do início ao fim.", rating: 5, profile: "Empresário" },
  { name: "Ana Carolina", car: "Hyundai HB20S 2023", initials: "AC", text: "Dei meu usado na troca e a avaliação foi muito justa. Saí dirigindo o carro novo no mesmo dia.", rating: 5, profile: "Professora" },
  { name: "Pedro Henrique", car: "Hyundai Creta 2022", initials: "PH", text: "Tinha restrição no CPF e mesmo assim conseguiram uma alternativa. Equipe parceira, fora do comum.", rating: 5, profile: "Motorista de app" },
  { name: "Camila Ribeiro", car: "Hyundai HB20 2024", initials: "CR", text: "Atendimento humano de verdade. Me senti respeitada, sem aquela pressão de vendedor. Voltarei sempre!", rating: 5, profile: "Enfermeira" },
];

function ClientesAprovadosPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow={<><BadgeCheck className="h-3.5 w-3.5 text-accent" /> +8 mil aprovações</>}
        title={<>Quem confia, <span className="text-gradient-red">sai dirigindo</span></>}
        subtitle="Depoimentos reais de clientes que realizaram o sonho do carro novo com a Top Veículos."
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <article key={t.name} className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors shadow-card-premium flex flex-col">
                <Quote className="h-6 w-6 text-primary mb-3" />
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-primary text-primary" />))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{t.text}"</p>
                <div className="mt-5 pt-5 border-t border-border flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-gradient-red grid place-items-center text-primary-foreground font-bold shadow-glow-red">{t.initials}</div>
                  <div>
                    <div className="font-display font-bold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.profile} · {t.car}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-graphite/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { n: "+8 mil", l: "Clientes aprovados" },
              { n: "12", l: "Financeiras parceiras" },
              { n: "4.9★", l: "Avaliação média" },
              { n: "98%", l: "Recomendam" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl sm:text-4xl font-display font-bold text-gradient-red">{s.n}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Quer ser o próximo aprovado?</h2>
          <p className="mt-3 text-muted-foreground">Comece agora sua análise e descubra a melhor condição para o seu perfil.</p>
          <Button asChild size="lg" className="mt-6 bg-gradient-red shadow-glow-red h-12 px-7">
            <a href={createWhatsAppLink(WA_MSG.aprovacao)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" /> Quero minha aprovação
            </a>
          </Button>
        </div>
      </section>
    </PageShell>
  );
}
