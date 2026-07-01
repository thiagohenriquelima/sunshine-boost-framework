import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";

export type VehicleType = "Hatch" | "Sedan" | "SUV" | "Picape";

export type Vehicle = {
  id: string;
  slug: string;
  img: string;
  gallery: string[];
  images: string[];
  name: string;
  brand: string;
  model: string;
  type: VehicleType;
  category: VehicleType;
  color: string;
  year: string;
  yearNum: number;
  km: string;
  kmNum: number;
  gear: string;
  transmission: string;
  fuel: string;
  /** Final da placa — apenas o último dígito. Público. */
  plate: string;
  plateEnd: string;
  /** Placa completa — apenas uso interno, nunca renderizar publicamente. */
  plateFull: string;
  price: string;
  formattedPrice: string;
  priceNum: number;
  parcel: string;
  estimatedInstallment: number;
  tag: string;
  tags: string[];
  pitch: string;
  description: string;
  highlights: string[];
  features: string[];
  idealUse: string[];
  condition: string;
  whyWorth: string[];
  featured?: boolean;
};

type Raw = {
  name: string; color: string; plateFull: string; year: number; price: number;
  type: VehicleType; gear: string; fuel: string; brand: string;
};

const RAW: Raw[] = [
  { name: "Onix LT 1.0", color: "Preta", plateFull: "QUT2H70", year: 2019, price: 58900, type: "Hatch", gear: "Manual", fuel: "Flex", brand: "Chevrolet" },
  { name: "Celta Life 1.0", color: "Prata", plateFull: "MYW1F03", year: 2007, price: 22900, type: "Hatch", gear: "Manual", fuel: "Flex", brand: "Chevrolet" },
  { name: "HB20 Vision 1.0", color: "Branca", plateFull: "RTT6B20", year: 2022, price: 65900, type: "Hatch", gear: "Manual", fuel: "Flex", brand: "Hyundai" },
  { name: "Mobi Like 1.0", color: "Branca", plateFull: "RVA3D59", year: 2023, price: 56900, type: "Hatch", gear: "Manual", fuel: "Flex", brand: "Fiat" },
  { name: "Onix LT 1.0", color: "Prata", plateFull: "QKQ2G50", year: 2015, price: 43900, type: "Hatch", gear: "Manual", fuel: "Flex", brand: "Chevrolet" },
  { name: "T-Cross TSI 1.0", color: "Prata", plateFull: "QFN3B12", year: 2022, price: 110900, type: "SUV", gear: "Automático", fuel: "Flex", brand: "Volkswagen" },
  { name: "Sandero Zen 1.0", color: "Branca", plateFull: "QSL0G33", year: 2021, price: 49900, type: "Hatch", gear: "Manual", fuel: "Flex", brand: "Renault" },
  { name: "Fox Connect 1.6", color: "Branca", plateFull: "QFW6J33", year: 2018, price: 57900, type: "Hatch", gear: "Manual", fuel: "Flex", brand: "Volkswagen" },
  { name: "Polo Track 1.0", color: "Branca", plateFull: "TDI9E50", year: 2025, price: 79900, type: "Hatch", gear: "Manual", fuel: "Flex", brand: "Volkswagen" },
  { name: "Saveiro Trend 1.6", color: "Branca", plateFull: "QFT6J18", year: 2016, price: 48900, type: "Picape", gear: "Manual", fuel: "Flex", brand: "Volkswagen" },
  { name: "Kwid Zen 1.0", color: "Prata", plateFull: "SKE1J31", year: 2025, price: 52900, type: "Hatch", gear: "Manual", fuel: "Flex", brand: "Renault" },
  { name: "Ford Ka 1.0", color: "Branca", plateFull: "OEU1953", year: 2013, price: 25900, type: "Hatch", gear: "Manual", fuel: "Flex", brand: "Ford" },
  { name: "Gol MSI 1.6", color: "Preta", plateFull: "RLS4E87", year: 2022, price: 58900, type: "Hatch", gear: "Manual", fuel: "Flex", brand: "Volkswagen" },
  { name: "Prisma LT 1.4", color: "Branca", plateFull: "QFJ4J48", year: 2015, price: 54900, type: "Sedan", gear: "Manual", fuel: "Flex", brand: "Chevrolet" },
  { name: "Prisma LT 1.4", color: "Azul", plateFull: "PCK9B21", year: 2015, price: 50900, type: "Sedan", gear: "Manual", fuel: "Flex", brand: "Chevrolet" },
  { name: "Frontier 2.3", color: "Azul", plateFull: "RLS8E79", year: 2021, price: 145900, type: "Picape", gear: "Automático", fuel: "Diesel", brand: "Nissan" },
  { name: "Creta M-Line 1.0", color: "Prata", plateFull: "RPQ7B60", year: 2023, price: 112900, type: "SUV", gear: "Automático", fuel: "Flex", brand: "Hyundai" },
  { name: "Agile LTZ 1.4", color: "Prata", plateFull: "MOT0A61", year: 2011, price: 27900, type: "Hatch", gear: "Manual", fuel: "Flex", brand: "Chevrolet" },
  { name: "Ford Ka 1.0 SE", color: "Branca", plateFull: "QSJ0A13", year: 2021, price: 52900, type: "Hatch", gear: "Manual", fuel: "Flex", brand: "Ford" },
  { name: "Jeep Compass", color: "Preta", plateFull: "QFZ6B07", year: 2017, price: 75900, type: "SUV", gear: "Automático", fuel: "Flex", brand: "Jeep" },
  { name: "S10 Rodeio", color: "Prata", plateFull: "MOC7J23", year: 2008, price: 45900, type: "Picape", gear: "Manual", fuel: "Flex", brand: "Chevrolet" },
];

const FEATURED_KEYS = new Set([
  "Polo Track 1.0-2025",
  "T-Cross TSI 1.0-2022",
  "Creta M-Line 1.0-2023",
  "Frontier 2.3-2021",
  "HB20 Vision 1.0-2022",
  "Jeep Compass-2017",
]);

const slugify = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const fmtBRL = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

function calcInstallment(price: number) {
  const financed = price * 0.8;
  const rate = 0.0199;
  const term = 60;
  const p = Math.pow(1 + rate, term);
  return (financed * (rate * p)) / (p - 1);
}

function imgFor(type: VehicleType, idx: number): string {
  if (type === "SUV") return car1;
  if (type === "Hatch") return car2;
  return car3; // Sedan, Picape
}

function estimateKm(year: number): number {
  const base = Math.max(5000, (2026 - year) * 11000);
  return Math.round(base / 500) * 500;
}

function tagFor(price: number, type: VehicleType): { tag: string; tags: string[] } {
  if (price >= 110000) return { tag: "Premium", tags: ["Premium", "Top de linha"] };
  if (price <= 45000) return { tag: "Entrada baixa", tags: ["Entrada baixa", "Econômico"] };
  if (type === "SUV" || type === "Picape") return { tag: "Oportunidade", tags: ["Oportunidade", "Robusto"] };
  return { tag: "Mais procurado", tags: ["Mais procurado", "Popular"] };
}

function useFor(type: VehicleType): string[] {
  if (type === "SUV") return ["Família", "Viagens", "Conforto"];
  if (type === "Picape") return ["Trabalho", "Viagens", "Carga"];
  if (type === "Sedan") return ["Trabalho", "Viagens"];
  return ["Cidade", "Trabalho", "Dia a dia"];
}

function highlightsFor(r: Raw): string[] {
  const base = [
    `Motor eficiente e econômico`,
    `Câmbio ${r.gear.toLowerCase()}`,
    `Combustível ${r.fuel.toLowerCase()}`,
    `Cor ${r.color.toLowerCase()}`,
  ];
  if (r.type === "SUV") base.push("Porte SUV com espaço interno generoso");
  if (r.type === "Picape") base.push("Caçamba versátil para trabalho e lazer");
  return base;
}

function featuresFor(r: Raw): string[] {
  const common = ["Ar-condicionado", "Direção assistida", "Vidros elétricos", "Travas elétricas", "Airbags", "Freios ABS", "Computador de bordo"];
  if (r.price >= 80000) common.push("Central multimídia", "Câmera de ré", "Sensor de estacionamento", "Rodas de liga leve");
  if (r.gear === "Automático") common.push("Câmbio automático");
  if (r.type === "SUV" || r.type === "Picape") common.push("Controle de estabilidade", "Controle de tração");
  return common;
}

function descFor(r: Raw): string {
  return `${r.name} ${r.year} ${r.color.toLowerCase()}, ${r.gear.toLowerCase()} a ${r.fuel.toLowerCase()}. Revisado, procedência verificada e pronto para financiar na Top Veículos.`;
}

function conditionFor(r: Raw): string {
  return `Veículo revisado, documentação em dia e procedência verificada. ${r.name} de ${r.year}, cor ${r.color.toLowerCase()}, pronto para transferência.`;
}

function whyWorthFor(r: Raw): string[] {
  return [
    `Preço competitivo para ${r.name} ${r.year}`,
    `Procedência 100% verificada`,
    `Aceitamos seu usado na troca`,
    `Financiamento facilitado em até 60x`,
  ];
}

const slugCounts = new Map<string, number>();

export const VEHICLES: Vehicle[] = RAW.map((r) => {
  const key = `${r.name}-${r.year}`;
  const base = `${slugify(r.name)}-${r.year}`;
  const seen = slugCounts.get(base) ?? 0;
  slugCounts.set(base, seen + 1);
  const slug = seen === 0 ? base : `${base}-${slugify(r.color)}`;

  const parcelaNum = calcInstallment(r.price);
  const kmNum = estimateKm(r.year);
  const { tag, tags } = tagFor(r.price, r.type);
  const gallery = [imgFor(r.type, 0), imgFor(r.type, 1), imgFor(r.type, 2), imgFor(r.type, 3)];
  const images = [1, 2, 3, 4].map((n) => `/vehicles/${slug}/0${n}.jpg`);

  return {
    id: slug,
    slug,
    img: gallery[0],
    gallery,
    images,
    name: r.name,
    brand: r.brand,
    model: r.name,
    type: r.type,
    category: r.type,
    color: r.color,
    year: `${r.year}/${r.year}`,
    yearNum: r.year,
    km: `${kmNum.toLocaleString("pt-BR")} km`,
    kmNum,
    gear: r.gear,
    transmission: r.gear,
    fuel: r.fuel,
    plate: r.plateFull.slice(-1),
    plateEnd: r.plateFull.slice(-1),
    plateFull: r.plateFull,
    price: fmtBRL(r.price),
    formattedPrice: fmtBRL(r.price),
    priceNum: r.price,
    parcel: fmtBRL(Math.round(parcelaNum)),
    estimatedInstallment: Math.round(parcelaNum),
    tag,
    tags,
    pitch: descFor(r).split(".")[0] + ".",
    description: descFor(r),
    highlights: highlightsFor(r),
    features: featuresFor(r),
    idealUse: useFor(r.type),
    condition: conditionFor(r),
    whyWorth: whyWorthFor(r),
    featured: FEATURED_KEYS.has(key),
  };
});

export const FEATURED_VEHICLES: Vehicle[] = VEHICLES.filter((v) => v.featured);

export const findVehicleBySlug = (slug: string) =>
  VEHICLES.find((v) => v.slug === slug);
