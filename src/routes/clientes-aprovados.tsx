import { createFileRoute } from "@tanstack/react-router";
import { Star, MessageCircle, BadgeCheck, Quote, MapPin, Calendar, Camera, Info } from "lucide-react";
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
  { name: "Marcos Almeida", city: "João Pessoa, PB", car: "Hyundai Creta 2023", initials: "MA", text: "Eu já tinha tentado em outros lugares e fui negado. A Top Veículos achou uma financeira que aprovou meu crédito em poucas horas. Atendimento sensacional.", rating: 5, profile: "Servidor público", date: "Mar/2025", color: "from-red-500 to-red-700" },
  { name: "Juliana Pereira", city: "Campina Grande, PB", car: "Hyundai HB20 2022", initials: "JP", text: "Comprei meu primeiro carro com eles. Me explicaram tudo, sem pressa, e a parcela coube no meu orçamento. Recomendo muito!", rating: 5, profile: "Autônoma", date: "Fev/2025", color: "from-blue-500 to-blue-700" },
  { name: "Rafael Souza", city: "Recife, PE", car: "Infiniti Q50 2021", initials: "RS", text: "Queria um sedã premium e consegui exatamente o que sonhava. Processo limpo e transparente do início ao fim.", rating: 5, profile: "Empresário", date: "Jan/2025", color: "from-zinc-600 to-zinc-800" },
  { name: "Ana Carolina", city: "João Pessoa, PB", car: "Hyundai HB20S 2023", initials: "AC", text: "Dei meu usado na troca e a avaliação foi muito justa. Saí dirigindo o carro novo no mesmo dia.", rating: 5, profile: "Professora", date: "Dez/2024", color: "from-rose-500 to-rose-700" },
  { name: "Pedro Henrique", city: "Bayeux, PB", car: "Hyundai Creta 2022", initials: "PH", text: "Tinha restrição no CPF e mesmo assim conseguiram uma alternativa. Equipe parceira, fora do comum.", rating: 5, profile: "Motorista de app", date: "Nov/2024", color: "from-indigo-500 to-indigo-700" },
  { name: "Camila Ribeiro", city: "Santa Rita, PB", car: "Hyundai HB20 2024", initials: "CR", text: "Atendimento humano de verdade. Me senti respeitada, sem aquela pressão de vendedor. Voltarei sempre!", rating: 5, profile: "Enfermeira", date: "Out/2024", color: "from-fuchsia-500 to-fuchsia-700" },
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
              <article key={t.name} className="relative p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all hover:-translate-y-1 shadow-card-premium flex flex-col">
                <div className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent/10 border border-accent/30 text-[10px] font-semibold text-accent uppercase tracking-wide">
                  <BadgeCheck className="h-3 w-3" /> Cliente aprovado
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`h-14 w-14 rounded-full bg-gradient-to-br ${t.color} grid place-items-center text-white font-bold text-lg shadow-lg ring-2 ring-background`}>
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="font-display font-bold text-base truncate">{t.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {t.city}
                    </div>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (<Star key={i} className="h-4 w-4 fill-primary text-primary" />))}
                </div>
                <Quote className="h-5 w-5 text-primary/40 mb-2" />
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{t.text}"</p>
                <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-xs">
                  <span className="font-semibold text-foreground">{t.car}</span>
                  <span className="text-muted-foreground inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {t.date}
                  </span>
                </div>
                <div className="mt-1 text-[11px] text-muted-foreground/80">{t.profile}</div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-2 text-xs text-muted-foreground/80 max-w-2xl mx-auto justify-center text-center">
            <Info className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
            <span>Depoimentos ilustrativos para apresentação. Substituir por clientes reais da loja.</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-graphite/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary uppercase tracking-wider mb-3">
              <Camera className="h-3.5 w-3.5" /> Galeria de entregas
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold">Entregas que viraram <span className="text-gradient-red">conquista</span></h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Momentos reais de clientes recebendo a chave do carro novo na nossa loja.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="group relative aspect-square rounded-xl overflow-hidden border border-border bg-gradient-to-br from-graphite to-background hover:border-primary/50 transition-all cursor-pointer">
                <div className="absolute inset-0 grid place-items-center">
                  <Camera className="h-10 w-10 text-muted-foreground/30 group-hover:text-primary/60 transition-colors" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-[11px] font-semibold text-white">Entrega #{i + 1}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground/70 text-center">Espaços reservados para fotos reais de entrega. Adicione as imagens dos seus clientes nesta galeria.</p>
        </div>
      </section>

      <section className="py-16">
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
