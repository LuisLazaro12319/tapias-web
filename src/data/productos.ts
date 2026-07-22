import type { Categoria, Producto } from "@/lib/types";

/**
 * ⚠️ DEMO: productos y precios INVENTADOS, armados a partir de las publicaciones
 * de @tapias.arg2 para que la maqueta se vea creíble. El dueño los reemplaza
 * después desde el panel de administrador.
 *
 * En la Etapa 2 este archivo se cambia por una lectura de Firestore. El resto
 * de la app no se toca: todos los componentes consumen el tipo `Producto`.
 */

const TALLES_ROPA = ["S", "M", "L", "XL"];
const TALLES_PANTALON = ["38", "40", "42", "44", "46"];

const NEGRO = { nombre: "Negro", hex: "#1c1c1c" };
const BEIGE = { nombre: "Beige arena", hex: "#d9c9ae" };
const CREMA = { nombre: "Crema", hex: "#e8e0d0" };
const GRIS = { nombre: "Gris melange", hex: "#8f9490" };
const VERDE = { nombre: "Verde militar", hex: "#5c6250" };
const CHOCOLATE = { nombre: "Chocolate", hex: "#4a382c" };
const OFFWHITE = { nombre: "Off white", hex: "#f0ece4" };

export const productos: Producto[] = [
  {
    slug: "buzo-oversize-frisa-premium",
    nombre: "Buzo Oversize Frisa Premium",
    categoria: "buzos",
    descripcion:
      "Buzo cuello redondo de corte oversize, en frisa peinada de alto gramaje. La prenda insignia de la temporada.",
    detalle: "Frisa peinada 400gr · 80% algodón / 20% poliéster · Corte oversize",
    precioMinorista: 52000,
    precioMayorista: 31000,
    talles: TALLES_ROPA,
    colores: [BEIGE, GRIS, NEGRO, VERDE],
    destacado: true,
  },
  {
    slug: "hoodie-oversize-clasico",
    nombre: "Hoodie Oversize Clásico",
    categoria: "hoodies",
    descripcion:
      "Canguro con capucha forrada y bolsillo delantero. Hombro caído y cuerpo amplio.",
    detalle: "Frisa peinada 420gr · Capucha doble tela · Puño y cintura elastizados",
    precioMinorista: 61000,
    precioMayorista: 37000,
    talles: TALLES_ROPA,
    colores: [GRIS, NEGRO, BEIGE, CHOCOLATE],
    destacado: true,
  },
  {
    slug: "sweater-waffle-oversize",
    nombre: "Sweater Waffle Oversize",
    categoria: "sweaters",
    descripcion:
      "Sweater de hilo con textura waffle, cuello redondo. Liviano pero abrigado, ideal para entretiempo.",
    detalle: "Hilo de algodón · Textura waffle · Tejido en Argentina",
    precioMinorista: 58000,
    precioMayorista: 35000,
    talles: TALLES_ROPA,
    colores: [BEIGE, NEGRO, OFFWHITE],
    destacado: true,
  },
  {
    slug: "pantalon-wide-leg-gabardina",
    nombre: "Pantalón Wide Leg Gabardina",
    categoria: "pantalones",
    descripcion:
      "Pantalón de gabardina con pierna ancha y caída recta. Cintura con cordón interno.",
    detalle: "Gabardina de algodón · Cintura ajustable · Cuatro bolsillos",
    precioMinorista: 55000,
    precioMayorista: 33000,
    talles: TALLES_PANTALON,
    colores: [CREMA, NEGRO, VERDE, CHOCOLATE],
    destacado: true,
  },
  {
    slug: "jogger-frisa-recto",
    nombre: "Jogger de Frisa Recto",
    categoria: "pantalones",
    descripcion:
      "Jogger de frisa con caída recta, sin puño. Combina con toda la línea de buzos.",
    detalle: "Frisa peinada 350gr · Cordón de ajuste · Bolsillos laterales",
    precioMinorista: 47000,
    precioMayorista: 28000,
    talles: TALLES_PANTALON,
    colores: [GRIS, NEGRO, BEIGE],
  },
  {
    slug: "buzo-media-cierre",
    nombre: "Buzo Media Cierre",
    categoria: "buzos",
    descripcion:
      "Buzo con cierre a la mitad y cuello alto. Silueta oversize con terminación premium.",
    detalle: "Frisa peinada 400gr · Cierre metálico · Cuello alto",
    precioMinorista: 56000,
    precioMayorista: 34000,
    talles: TALLES_ROPA,
    colores: [CHOCOLATE, NEGRO, GRIS],
  },
  {
    slug: "remera-oversize-algodon-peinado",
    nombre: "Remera Oversize Algodón Peinado",
    categoria: "remeras",
    descripcion:
      "Remera de algodón peinado 24/1, corte boxy con hombro caído. Base de cualquier outfit.",
    detalle: "Algodón peinado 24/1 · Cuello reforzado · Corte boxy",
    precioMinorista: 28000,
    precioMayorista: 16000,
    talles: TALLES_ROPA,
    colores: [OFFWHITE, NEGRO, BEIGE, VERDE],
  },
  {
    slug: "hoodie-oversize-sin-capucha",
    nombre: "Sweater Cuello Redondo Hilo",
    categoria: "sweaters",
    descripcion:
      "Sweater de hilo fino, cuello redondo y calce holgado. Tejido de punto cerrado.",
    detalle: "Hilo fino · Punto cerrado · Puños acanalados",
    precioMinorista: 54000,
    precioMayorista: 32000,
    talles: TALLES_ROPA,
    colores: [NEGRO, CREMA, VERDE],
  },
  {
    slug: "pantalon-cargo-oversize",
    nombre: "Pantalón Cargo Oversize",
    categoria: "pantalones",
    descripcion:
      "Cargo de gabardina con bolsillos laterales y pierna amplia. Ajuste en el tobillo.",
    detalle: "Gabardina rígida · Seis bolsillos · Ajuste inferior con cordón",
    precioMinorista: 59000,
    precioMayorista: 36000,
    talles: TALLES_PANTALON,
    colores: [VERDE, NEGRO, BEIGE],
  },
  {
    slug: "buzo-cuello-redondo-liso",
    nombre: "Buzo Cuello Redondo Liso",
    categoria: "buzos",
    descripcion:
      "Buzo básico de frisa, sin estampa. El clásico de la marca en su versión más simple.",
    detalle: "Frisa peinada 380gr · Sin estampa · Corte oversize",
    precioMinorista: 48000,
    precioMayorista: 29000,
    talles: TALLES_ROPA,
    colores: [CREMA, GRIS, NEGRO, CHOCOLATE],
  },
  {
    slug: "bucket-hat-gabardina",
    nombre: "Bucket Hat Gabardina",
    categoria: "accesorios",
    descripcion:
      "Piluso de gabardina con ala media. Talle único con ajuste interno.",
    detalle: "Gabardina de algodón · Ala media · Talle único",
    precioMinorista: 18000,
    precioMayorista: 9500,
    talles: ["Único"],
    colores: [NEGRO, BEIGE, OFFWHITE],
  },
  {
    slug: "hoodie-oversize-boxy-heavy",
    nombre: "Hoodie Boxy Heavy",
    categoria: "hoodies",
    descripcion:
      "La versión más pesada del canguro: corte boxy, hombro bien caído y frisa de 500gr.",
    detalle: "Frisa peinada 500gr · Corte boxy · Cordón grueso",
    precioMinorista: 68000,
    precioMayorista: 41000,
    talles: TALLES_ROPA,
    colores: [NEGRO, GRIS],
    sinStock: true,
  },
];

export const CATEGORIAS: { id: Categoria; nombre: string }[] = [
  { id: "buzos", nombre: "Buzos" },
  { id: "hoodies", nombre: "Hoodies" },
  { id: "sweaters", nombre: "Sweaters" },
  { id: "pantalones", nombre: "Pantalones" },
  { id: "remeras", nombre: "Remeras" },
  { id: "accesorios", nombre: "Accesorios" },
];

export function getProducto(slug: string): Producto | undefined {
  return productos.find((p) => p.slug === slug);
}
