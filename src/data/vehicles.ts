import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";

export type Vehicle = {
  slug: string;
  img: string;
  gallery: string[];
  name: string;
  brand: string;
  type: string;
  year: string;
  yearNum: number;
  km: string;
  gear: string;
  fuel: string;
  plate: string;
  price: string;
  priceNum: number;
  parcel: string;
  tag: string;
  pitch: string;
  highlights: string[];
  features: string[];
  condition: string;
  whyWorth: string[];
};

export const VEHICLES: Vehicle[] = [
  {
    slug: "hyundai-creta-limited-1-0-turbo-2023",
    img: car1, gallery: [car1, car2, car3, car1],
    name: "Hyundai Creta Limited 1.0 Turbo",
    brand: "Hyundai", type: "SUV", year: "2023/2023", yearNum: 2023,
    km: "18.420 km", gear: "Automático", fuel: "Flex", plate: "7",
    price: "R$ 124.900", priceNum: 124900, parcel: "R$ 1.890",
    tag: "Mais procurado", pitch: "SUV completo, ideal para família.",
    highlights: ["Motor 1.0 Turbo eficiente", "Central multimídia 10\"", "Painel digital", "Câmbio automático 6 marchas"],
    features: ["Ar-condicionado digital", "Direção elétrica", "Vidros e travas elétricos", "Airbags frontais e laterais", "ABS com EBD", "Controle de tração e estabilidade", "Sensor de estacionamento", "Câmera de ré", "Rodas de liga 17\"", "Faróis em LED"],
    condition: "Veículo em excelente estado, único dono, todas as revisões em concessionária, sem detalhes na lataria.",
    whyWorth: ["SUV com baixíssima quilometragem", "Garantia de fábrica vigente", "Procedência 100% comprovada", "Aceita troca e financiamento facilitado"],
  },
  {
    slug: "hyundai-hb20-comfort-plus-1-0-2022",
    img: car2, gallery: [car2, car1, car3, car2],
    name: "Hyundai HB20 Comfort Plus 1.0",
    brand: "Hyundai", type: "Hatch", year: "2022/2023", yearNum: 2022,
    km: "32.100 km", gear: "Manual", fuel: "Flex", plate: "3",
    price: "R$ 72.500", priceNum: 72500, parcel: "R$ 1.190",
    tag: "Entrada baixa", pitch: "Econômico, fácil de aprovar.",
    highlights: ["Baixo consumo", "Manutenção barata", "Excelente para o dia a dia", "Aprovação facilitada"],
    features: ["Ar-condicionado", "Direção hidráulica", "Vidros elétricos dianteiros", "Travas elétricas", "Airbags duplos", "Freios ABS", "Computador de bordo", "Central multimídia"],
    condition: "Carro revisado, pneus novos, documentação 100% em dia, pronto para transferência.",
    whyWorth: ["Entrada a partir de R$ 5.000", "Parcelas que cabem no bolso", "Hatch mais vendido do Brasil", "Revenda garantida"],
  },
  {
    slug: "infiniti-q50-sport-3-0-v6-2021",
    img: car3, gallery: [car3, car1, car2, car3],
    name: "Infiniti Q50 Sport 3.0 V6",
    brand: "Infiniti", type: "Sedan", year: "2021/2021", yearNum: 2021,
    km: "41.800 km", gear: "Automático", fuel: "Gasolina", plate: "1",
    price: "R$ 189.900", priceNum: 189900, parcel: "R$ 2.890",
    tag: "Premium", pitch: "Conforto, status e desempenho premium.",
    highlights: ["Motor V6 3.0 Biturbo 400cv", "Tração traseira esportiva", "Bancos em couro premium", "Som Bose 16 alto-falantes"],
    features: ["Teto solar panorâmico", "Bancos com ajuste elétrico e memória", "Ar-condicionado dual zone", "Piloto automático adaptativo", "Sensores 360º", "Câmera de ré HD", "Faróis full LED adaptativos", "Rodas de liga 19\"", "Partida sem chave", "Acabamento em alumínio escovado"],
    condition: "Veículo impecável, segundo dono, revisões em dia, interior preservado, sem retoques na pintura.",
    whyWorth: ["Sedã premium por preço de intermediário", "Pacote completo de tecnologia", "Desempenho de superesportivo", "Exclusividade nas ruas"],
  },
  {
    slug: "hyundai-creta-action-1-6-2022",
    img: car1, gallery: [car1, car2, car3, car1],
    name: "Hyundai Creta Action 1.6",
    brand: "Hyundai", type: "SUV", year: "2022/2022", yearNum: 2022,
    km: "39.800 km", gear: "Automático", fuel: "Flex", plate: "5",
    price: "R$ 108.900", priceNum: 108900, parcel: "R$ 1.690",
    tag: "Oportunidade", pitch: "SUV versátil com ótimo custo-benefício.",
    highlights: ["Motor 1.6 econômico", "Câmbio automático", "Espaço interno generoso", "Ótimo custo-benefício"],
    features: ["Ar-condicionado", "Direção elétrica", "Multimídia com Android Auto/CarPlay", "Airbags", "Freios ABS", "Controle de estabilidade", "Câmera de ré", "Rodas de liga"],
    condition: "Veículo bem cuidado, revisões em dia, sem retrabalhos, garantia adicional opcional.",
    whyWorth: ["SUV automático abaixo do mercado", "Excelente para família", "Ideal para troca", "Aceita entrada parcelada"],
  },
  {
    slug: "hyundai-hb20-sense-1-0-2023",
    img: car2, gallery: [car2, car1, car3, car2],
    name: "Hyundai HB20 Sense 1.0",
    brand: "Hyundai", type: "Hatch", year: "2023/2024", yearNum: 2023,
    km: "12.500 km", gear: "Manual", fuel: "Flex", plate: "9",
    price: "R$ 78.900", priceNum: 78900, parcel: "R$ 1.290",
    tag: "Mais procurado", pitch: "Quase zero, baixa quilometragem.",
    highlights: ["Praticamente zero km", "Garantia de fábrica", "Baixíssimo consumo", "Design atualizado"],
    features: ["Ar-condicionado", "Direção elétrica", "Vidros elétricos", "Airbags duplos", "ABS", "Computador de bordo", "Bluetooth"],
    condition: "Quase zero, único dono, sem detalhes, manual e chave reserva.",
    whyWorth: ["Garantia de fábrica ativa", "Quilometragem baixíssima", "Ideal para primeiro carro", "Revenda garantida"],
  },
  {
    slug: "infiniti-q50-luxe-2-0-turbo-2020",
    img: car3, gallery: [car3, car1, car2, car3],
    name: "Infiniti Q50 Luxe 2.0 Turbo",
    brand: "Infiniti", type: "Sedan", year: "2020/2020", yearNum: 2020,
    km: "58.200 km", gear: "Automático", fuel: "Gasolina", plate: "4",
    price: "R$ 159.900", priceNum: 159900, parcel: "R$ 2.490",
    tag: "Premium", pitch: "Sedã luxo com pacote completo.",
    highlights: ["Motor 2.0 Turbo 211cv", "Pacote luxo completo", "Bancos em couro", "Som premium"],
    features: ["Teto solar", "Bancos elétricos com memória", "Ar dual zone", "Sensores de estacionamento", "Câmera de ré", "Faróis LED", "Rodas 18\"", "Partida sem chave"],
    condition: "Carro de garagem, revisado, interior impecável, pintura original.",
    whyWorth: ["Luxo por preço justo", "Manutenção em dia", "Exclusividade garantida", "Aceita troca premium"],
  },
];

VEHICLES.push({
  slug: "infiniti-q50-premium-2019",
  img: car3, gallery: [car3, car1, car2, car3],
  name: "Infiniti Q50 Premium",
  brand: "Infiniti", type: "Sedan", year: "2019/2019", yearNum: 2019,
  km: "68.900 km", gear: "Automático", fuel: "Gasolina", plate: "8",
  price: "R$ 139.900", priceNum: 139900, parcel: "R$ 2.190",
  tag: "Premium", pitch: "Sedã premium com pacote completo por preço justo.",
  highlights: ["Motor 2.0 Turbo 211cv", "Pacote Premium completo", "Bancos em couro", "Multimídia dupla tela"],
  features: ["Teto solar", "Bancos elétricos com memória", "Ar-condicionado dual zone", "Sensores de estacionamento", "Câmera de ré", "Faróis LED", "Rodas de liga 18\"", "Partida sem chave", "Controle de estabilidade"],
  condition: "Veículo revisado, segundo dono, interior conservado, documentação em dia.",
  whyWorth: ["Sedã premium abaixo do valor de mercado", "Pacote completo de tecnologia", "Exclusividade e conforto", "Aceita troca e financiamento"],
});

const SLUG_ALIASES: Record<string, string> = {
  "hyundai-creta-limited-2023": "hyundai-creta-limited-1-0-turbo-2023",
  "hyundai-hb20-comfort-2022": "hyundai-hb20-comfort-plus-1-0-2022",
};

export const findVehicleBySlug = (slug: string) =>
  VEHICLES.find((v) => v.slug === slug) ??
  VEHICLES.find((v) => v.slug === SLUG_ALIASES[slug]);
