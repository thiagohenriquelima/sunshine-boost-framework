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
    img: car1,
    gallery: [car1, car2, car3, car1],
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
    img: car2,
    gallery: [car2, car1, car3, car2],
    name: "Hyundai HB20 Comfort Plus 1.0",
    brand: "Hyundai", type: "Hatch", year: "2022/2023", yearNum: 2022,
    km: "32.100 km", gear: "Manual", fuel: "Flex", plate: "3",
    price: "R$ 72.500", priceNum: 72500, parcel: "R$ 1.190",
    tag: "Entrada baixa", pitch: "Econômico, fácil de aprovar.",
    highlights: ["Baixo consumo de combustível", "Manutenção barata", "Excelente para o dia a dia", "Aprovação facilitada"],
    features: ["Ar-condicionado", "Direção hidráulica", "Vidros elétricos dianteiros", "Travas elétricas", "Airbags duplos", "Freios ABS", "Computador de bordo", "Central multimídia"],
    condition: "Carro revisado, pneus novos, documentação 100% em dia, pronto para transferência.",
    whyWorth: ["Entrada a partir de R$ 5.000", "Parcelas que cabem no bolso", "Hatch mais vendido do Brasil", "Revenda garantida"],
  },
  {
    slug: "infiniti-q50-sport-3-0-v6-2021",
    img: car3,
    gallery: [car3, car1, car2, car3],
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
];

export const findVehicleBySlug = (slug: string) => VEHICLES.find((v) => v.slug === slug);
