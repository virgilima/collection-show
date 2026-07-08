import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";

export type Category =
  | "lancamentos"
  | "promocoes"
  | "vestidos"
  | "acessorios"
  | "blusas"
  | "alfaiataria";

export const CATEGORIES: { id: Category | "todos"; label: string }[] = [
  { id: "todos", label: "Todas" },
  { id: "lancamentos", label: "Lançamentos" },
  { id: "promocoes", label: "Promoções" },
  { id: "vestidos", label: "Vestidos" },
  { id: "blusas", label: "Blusas" },
  { id: "alfaiataria", label: "Alfaiataria" },
  { id: "acessorios", label: "Acessórios" },
];

export interface Product {
  id: string;
  name: string;
  price: string;
  oldPrice?: string;
  image: string;
  categories: Category[];
  detail: string;
  tag?: "novo" | "promo";
}

export const PRODUCTS: Product[] = [
  {
    id: "01",
    name: "Camisa Seda Marfim",
    price: "R$ 429",
    image: p1,
    categories: ["lancamentos", "blusas"],
    detail: "Seda pura, corte fluido",
    tag: "novo",
  },
  {
    id: "02",
    name: "Blazer Alfaiataria Noir",
    price: "R$ 689",
    image: p2,
    categories: ["lancamentos", "alfaiataria"],
    detail: "Lã fria, forro em cetim",
    tag: "novo",
  },
  {
    id: "03",
    name: "Vestido Longo Sage",
    price: "R$ 549",
    oldPrice: "R$ 749",
    image: p3,
    categories: ["vestidos", "promocoes"],
    detail: "Chiffon leve, gola V",
    tag: "promo",
  },
  {
    id: "04",
    name: "Conjunto Delicado Ouro",
    price: "R$ 289",
    image: p4,
    categories: ["acessorios", "lancamentos"],
    detail: "Colar + brincos folheados",
  },
  {
    id: "05",
    name: "Blusa Gola Alta Linho",
    price: "R$ 319",
    image: p5,
    categories: ["blusas"],
    detail: "Linho puro off-white",
  },
  {
    id: "06",
    name: "Terno Wide Areia",
    price: "R$ 949",
    image: p6,
    categories: ["alfaiataria", "lancamentos"],
    detail: "Blazer + calça pantalona",
    tag: "novo",
  },
  {
    id: "07",
    name: "Vestido Slip Cetim",
    price: "R$ 469",
    oldPrice: "R$ 599",
    image: p7,
    categories: ["vestidos", "promocoes"],
    detail: "Cetim fluido preto",
    tag: "promo",
  },
  {
    id: "08",
    name: "Bolsa Transversal Cru",
    price: "R$ 389",
    image: p8,
    categories: ["acessorios"],
    detail: "Couro legítimo, ferragem dourada",
  },
];
