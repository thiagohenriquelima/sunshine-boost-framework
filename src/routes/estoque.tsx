import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Calculator, MessageCircle, Calendar, Gauge, Settings2, Fuel, Hash, BadgeCheck, ShieldCheck, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageShell, PageHero, createWhatsAppLink, WA_MSG } from "@/components/site-chrome";
import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";

export const Route = createFileRoute("/estoque")({
  head: () => ({
    meta: [
      { title: "Estoque de Veículos — Top Veículos" },
      { name: "description", content: "Explore nosso estoque de carros seminovos e usados com filtros por marca, preço, ano, câmbio e mais. Todos com procedência e prontos para financiar." },
      { property: "og:title", content: "Estoque de Veículos — Top Veículos" },
      { property: "og:description", content: "Veículos selecionados, inspecionados e prontos para financiar." },
    ],
  }),
  component: EstoquePage,
});

type Vehicle = {
  img: string; name: string; brand: string; type: string; year: string; yearNum: number;
  km: string; gear: string; fuel: string; plate: string; price: string; priceNum: number;
  parcel: string; tag: string; pitch: string;
};

const STOCK: Vehicle[] = [
  { img: car1, name: "Hyundai Creta Limited 1.0 Turbo", brand: "Hyundai", type: "SUV", year: "2023/2023", yearNum: 2023, km: "18.420 km", gear: "Automático", fuel: "Flex", plate: "7", price: "R$ 124.900", priceNum: 124900, parcel: "R$ 1.890", tag: "Mais procurado", pitch: "SUV completo, ideal para família." },
  { img: car2, name: "Hyundai HB20 Comfort Plus 1.0", brand: "Hyundai", type: "Hatch", year: "2022/2023", yearNum: 2022, km: "32.100 km", gear: "Manual", fuel: "Flex", plate: "3", price: "R$ 72.500", priceNum: 72500, parcel: "R$ 1.190", tag: "Entrada baixa", pitch: "Econômico, fácil de aprovar." },
  { img: car3, name: "Infiniti Q50 Sport 3.0 V6", brand: "Infiniti", type: "Sedan", year: "2021/2021", yearNum: 2021, km: "41.800 km", gear: "Automático", fuel: "Gasolina", plate: "1", price: "R$ 189.900", priceNum: 189900, parcel: "R$ 2.890", tag: "Premium", pitch: "Conforto, status e desempenho premium." },
  { img: car1, name: "Hyundai Creta Action 1.6", brand: "Hyundai", type: "SUV", year: "2022/2022", yearNum: 2022, km: "39.800 km", gear: "Automático", fuel: "Flex", plate: "5", price: "R$ 108.900", priceNum: 108900, parcel: "R$ 1.690", tag: "Oportunidade", pitch: "SUV versátil com ótimo custo-benefício." },
  { img: car2, name: "Hyundai HB20 Sense 1.0", brand: "Hyundai", type: "Hatch", year: "2023/2024", yearNum: 2023, km: "12.500 km", gear: "Manual", fuel: "Flex", plate: "9", price: "R$ 78.900", priceNum: 78900, parcel: "R$ 1.290", tag: "Mais procurado", pitch: "Quase zero, baixa quilometragem." },
  { img: car3, name: "Infiniti Q50 Luxe 2.0 Turbo", brand: "Infiniti", type: "Sedan", year: "2020/2020", yearNum: 2020, km: "58.200 km", gear: "Automático", fuel: "Gasolina", plate: "4", price: "R$ 159.900", priceNum: 159900, parcel: "R$ 2.490", tag: "Premium", pitch: "Sedã luxo com pacote completo." },
];

function EstoquePage() {
  const [brand, setBrand] = useState<string>("all");
  const [type, setType] = useState<string>("all");
  const [gear, setGear] = useState<string>("all");
  const [fuel, setFuel] = useState<string>("all");
  const [year, setYear] = useState<string>("all");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  const filtered = useMemo(() => STOCK.filter((v) => {
    if (brand !== "all" && v.brand !== brand) return false;
    if (type !== "all" && v.type !== type) return false;
    if (gear !== "all" && v.gear !== gear) return false;
    if (fuel !== "all" && v.fuel !== fuel) return false;
    if (year !== "all" && String(v.yearNum) !== year) return false;
    const max = Number(maxPrice.replace(/\D/g, ""));
    if (max > 0 && v.priceNum > max) return false;
    if (search && !v.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  }), [brand, type, gear, fuel, year, maxPrice, search]);

  const reset = () => { setBrand("all"); setType("all"); setGear("all"); setFuel("all"); setYear("all"); setMaxPrice(""); setSearch(""); };

  return (
    <PageShell>
      <PageHero
        eyebrow="Estoque selecionado"
        title={<>Encontre o carro <span className="text-gradient-red">certo para você</span></>}
        subtitle="Use os filtros para refinar por marca, tipo, ano, câmbio, combustível e preço. Todos os veículos passam por análise de procedência."
      />

      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-card/60 backdrop-blur p-6 sm:p-8 shadow-card-premium">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2 lg:col-span-2">
                <Label className="text-xs text-muted-foreground">Buscar modelo</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Ex: Creta, HB20..." className="h-11 pl-9 bg-background border-border" />
                </div>
              </div>
              <Filter label="Marca" value={brand} onChange={setBrand} options={["Hyundai", "Infiniti"]} />
              <Filter label="Tipo" value={type} onChange={setType} options={["Hatch", "Sedan", "SUV", "Picape"]} />
              <Filter label="Ano" value={year} onChange={setYear} options={["2024", "2023", "2022", "2021", "2020"]} />
              <Filter label="Câmbio" value={gear} onChange={setGear} options={["Automático", "Manual"]} />
              <Filter label="Combustível" value={fuel} onChange={setFuel} options={["Flex", "Gasolina", "Diesel"]} />
              <div className="space-y-2">
                <Label className="text-xs text-muted-foreground">Preço máximo</Label>
                <Input value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} placeholder="R$ 150.000" className="h-11 bg-background border-border" />
              </div>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-muted-foreground">{filtered.length} veículo{filtered.length === 1 ? "" : "s"} encontrado{filtered.length === 1 ? "" : "s"}</p>
              <Button variant="ghost" size="sm" onClick={reset}>Limpar filtros</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20 rounded-2xl border border-border bg-card/40">
              <p className="text-muted-foreground">Nenhum veículo encontrado com esses filtros.</p>
              <Button variant="outline" className="mt-4" onClick={reset}>Limpar filtros</Button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((v) => <VehicleCard key={v.name + v.year} v={v} />)}
            </div>
          )}
          <p className="mt-10 text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
            <ShieldCheck className="h-4 w-4 text-accent" />
            Todos os veículos passam por análise de procedência e podem ser simulados com nossa equipe.
          </p>
        </div>
      </section>
    </PageShell>
  );
}

function Filter({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div className="space-y-2">
      <Label className="text-xs text-muted-foreground">{label}</Label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="h-11 bg-background border-border"><SelectValue placeholder="Todos" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos</SelectItem>
          {options.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
        </SelectContent>
      </Select>
    </div>
  );
}

function VehicleCard({ v }: { v: Vehicle }) {
  const tagStyle =
    v.tag === "Premium" ? "bg-gradient-blue shadow-glow-blue"
    : v.tag === "Entrada baixa" ? "bg-accent shadow-glow-blue"
    : v.tag === "Oportunidade" ? "bg-gradient-blue shadow-glow-blue"
    : "bg-gradient-red shadow-glow-red";
  return (
    <article className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300 shadow-card-premium hover:-translate-y-1 flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-graphite">
        <img src={v.img} alt={v.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground ${tagStyle}`}>{v.tag}</div>
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
            <a href={createWhatsAppLink(`${WA_MSG.veiculo} (${v.name})`)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> Tenho interesse no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
