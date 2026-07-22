/**
 * Configuración de la marca y de los canales de venta.
 *
 * ⚠️ DEMO: los dos números de WhatsApp apuntan al número de Luis para poder
 * probar el flujo sin molestar al dueño. Antes de publicar hay que reemplazar
 * MAYORISTA y MINORISTA por los números reales de Tapias.Arg
 * (los que están en los links de la bio de Instagram).
 *
 * Formato: código de país + área sin el 0 + 9 + número sin el 15.
 * Ej: 11 5619-9449  ->  5491156199449
 */
export const WHATSAPP = {
  minorista: "5491156199449",
  mayorista: "5491156199449",
} as const;

/** El mismo número que WHATSAPP.mayorista, escrito para mostrar en pantalla. */
export const TEL_MAYORISTA_VISIBLE = "+54 9 11 5619-9449";

export const MARCA = {
  nombre: "Tapias.Arg",
  tagline: "Indumentaria masculina · Moda oversize & urbana",
  descripcion:
    "Fabricamos indumentaria masculina. Moda oversize y urbana de calidad premium, con envíos a todo el país.",
  ubicacion: "Flores, CABA",
  direccion: "Av. Avellaneda 425, Galería Oxford — Local 13",
  instagram: "https://www.instagram.com/tapias.arg/",
  facebook: "https://www.facebook.com/Tapiasarg/",
  /** ⚠️ DEMO: de ejemplo. Va el correo real cuando esté el dominio propio. */
  email: "ventas@tapias.com.ar",
} as const;

/** Cantidad mínima de prendas para acceder a precios mayoristas. */
export const MINIMO_MAYORISTA = 10;

/**
 * Subcarpeta desde la que se sirve el sitio ("/tapias-web" en GitHub Pages,
 * vacío en local y con dominio propio). La define el workflow de deploy.
 *
 * Hace falta para las imágenes de /public: next/image con `unoptimized` NO
 * agrega el basePath solo, así que hay que anteponerlo a mano.
 *
 * Tiene que empezar con NEXT_PUBLIC_ para que Next la incluya también en el
 * código que corre en el navegador.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * URL pública del sitio. La necesitan las etiquetas de compartir (WhatsApp,
 * Google) porque exigen direcciones absolutas.
 * El día que haya dominio propio, esto pasa a "https://tapias.com.ar".
 */
export const SITIO =
  process.env.NEXT_PUBLIC_SITIO ?? "http://localhost:3000";
