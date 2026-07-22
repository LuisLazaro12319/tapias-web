import Link from "next/link";
import { MARCA } from "@/lib/config";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-borde">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-sm font-black tracking-tighter text-background">
              TP
            </span>
            <span className="titulo-display text-lg">{MARCA.nombre}</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-tenue">
            {MARCA.descripcion}
          </p>
        </div>

        <div className="text-sm">
          <h3 className="mb-3 font-medium">Showroom</h3>
          <p className="text-tenue">{MARCA.ubicacion}</p>
          <p className="text-tenue">{MARCA.direccion}</p>
          <p className="mt-3 text-tenue">Envíos a todo el país 📦</p>
        </div>

        <div className="text-sm">
          <h3 className="mb-3 font-medium">Navegación</h3>
          <ul className="space-y-2 text-tenue">
            <li>
              <Link href="/productos" className="hover:text-foreground">
                Ver productos
              </Link>
            </li>
            <li>
              <Link href="/carrito" className="hover:text-foreground">
                Mi pedido
              </Link>
            </li>
            <li>
              <a
                href={MARCA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-borde px-4 py-5 text-center text-xs text-tenue sm:px-6">
        Demo de sitio web · {MARCA.nombre} · Productos y precios de ejemplo
      </div>
    </footer>
  );
}
