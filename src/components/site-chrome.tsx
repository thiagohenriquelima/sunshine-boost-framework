import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle, Menu, X, Phone, Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/logo-top-veiculos.png.asset.json";

function BrandLogo() {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <span className="font-display font-bold text-base sm:text-lg tracking-tight">
        Top <span className="text-gradient-red">Veículos</span>
      </span>
    );
  }
  return (
    <img
      src={logoAsset.url}
      alt="Top Veículos"
      onError={() => setErrored(true)}
      className="w-auto object-contain h-[38px] sm:h-[52px]"
    />
  );
}

export const WHATSAPP_NUMBER = "5583981089495";
export const createWhatsAppLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const WA_MSG = {
  hero: "Olá, vim pelo site da Top Veículos e quero encontrar meu próximo carro.",
  simulacao: "Olá, vim pelo site da Top Veículos e quero fazer uma simulação de financiamento.",
  veiculo: "Olá, tenho interesse neste veículo e gostaria de saber as condições.",
  avaliacao: "Olá, quero avaliar meu usado para dar como entrada na troca.",
  aprovacao: "Olá, quero tentar minha aprovação para comprar um carro.",
  cta: "Olá, quero falar com um consultor da Top Veículos.",
};

export const WHATSAPP = createWhatsAppLink(WA_MSG.hero);

type NavItem = { label: string; to: "/" | "/estoque" | "/financiamento" | "/avalie-seu-usado" | "/clientes-aprovados" | "/contato" };
export const NAV: NavItem[] = [
  { label: "Início", to: "/" },
  { label: "Estoque", to: "/estoque" },
  { label: "Financiamento", to: "/financiamento" },
  { label: "Avalie seu usado", to: "/avalie-seu-usado" },
  { label: "Clientes aprovados", to: "/clientes-aprovados" },
  { label: "Contato", to: "/contato" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center group" aria-label="Top Veículos - Início">
          <BrandLogo />
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="text-sm hover:text-foreground transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <Button asChild size="sm" className="bg-gradient-red shadow-glow-red hover:opacity-90">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </Button>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-foreground" aria-label="Menu">
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-3.5 rounded-md text-base hover:bg-muted active:bg-muted transition-colors"
              >
                {n.label}
              </Link>
            ))}
            <Button asChild className="mt-3 bg-gradient-red shadow-glow-red h-12 text-base">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
                <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10 bg-graphite/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-red grid place-items-center"><Car className="h-4 w-4 text-primary-foreground" /></div>
          <span className="font-display font-bold text-foreground">Top Veículos</span>
          <span className="hidden sm:inline">· Aprovação certa, carro certo.</span>
        </div>
        <div className="flex items-center gap-5">
          <Link to="/estoque" className="hover:text-foreground">Estoque</Link>
          <Link to="/financiamento" className="hover:text-foreground">Financiamento</Link>
          <Link to="/contato" className="hover:text-foreground flex items-center gap-1">
            <Phone className="h-3.5 w-3.5" /> Contato
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsapp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[var(--whatsapp)] opacity-30 blur-xl animate-pulse" />
      <span className="relative flex items-center justify-center gap-2 h-14 w-14 sm:w-auto sm:px-5 rounded-full bg-[var(--whatsapp)] text-white font-semibold shadow-[0_10px_30px_-5px_oklch(0.7_0.18_150/0.6)] active:scale-95 sm:hover:scale-105 transition-transform">
        <MessageCircle className="h-6 w-6" />
        <span className="hidden sm:inline">Falar no WhatsApp</span>
      </span>
    </a>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main className="pt-16 pb-28 sm:pb-16">{children}</main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: ReactNode; title: ReactNode; subtitle: string }) {
  return (
    <section className="relative pt-10 pb-10 sm:pt-24 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-10 -right-32 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 -left-32 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-xs font-medium mb-5">
          {eyebrow}
        </div>
        <h1 className="text-[28px] leading-[1.1] sm:text-5xl font-extrabold tracking-tight text-balance">{title}</h1>
        <p className="mt-4 sm:mt-5 text-[15px] sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      </div>
    </section>
  );
}
