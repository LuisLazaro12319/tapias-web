# Tapias.Arg — Demo de tienda

Demo de sitio web para **Tapias.Arg** (indumentaria masculina oversize, Flores CABA).
Catálogo + carrito + pedido por WhatsApp. **Sin pasarela de pago y sin backend.**

## Cómo levantarlo

```bash
npm install
npm run dev
```

Abrir http://localhost:3000

## Qué hay

| Ruta | Qué es |
|---|---|
| `/` | Home con hero, beneficios y destacados |
| `/productos` | Catálogo con filtro por categoría |
| `/productos/[slug]` | Ficha: colores, talles, cantidad |
| `/carrito` | Pedido + botón "Hacer el pedido por WhatsApp" |
| `/admin` | **Maqueta** del panel del dueño (no funciona todavía) |

## Modo minorista / mayorista

El toggle del header cambia tres cosas a la vez:

1. Los precios de todo el sitio
2. El mínimo de compra (10 prendas para mayorista)
3. **El número de WhatsApp al que se envía el pedido**

La elección queda guardada en el navegador del cliente.

## Antes de publicar — cambiar esto

- **`src/lib/config.ts`** → los dos números de WhatsApp. Hoy ambos apuntan al
  número de prueba de Luis. Van los números reales de la bio de Instagram.
- **`src/data/productos.ts`** → productos y precios son inventados.
- **Fotos**: hoy se muestran siluetas de color como placeholder
  (`src/components/PrendaPlaceholder.tsx`). Cuando lleguen las fotos reales,
  se reemplaza ese componente por `<Image />` y no hay que tocar nada más.

## Etapa 2 (solo si el dueño aprueba)

Conectar Firebase: **Auth** para el login del panel y **Firestore** para los
productos. El único archivo que cambia es `src/data/productos.ts`, que pasa de
devolver un array fijo a leer de la base. Todo el resto de la app consume el
tipo `Producto` de `src/lib/types.ts` y queda igual.

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4
