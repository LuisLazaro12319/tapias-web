import Image from "next/image";
import { BASE_PATH } from "@/lib/config";

/**
 * Logo de la marca, entero (isotipo TP + "Tapias.Arg").
 *
 * El PNG tiene fondo transparente pero el dibujo es negro, así que se invierte
 * a blanco por CSS para que se vea sobre el fondo oscuro del sitio.
 *
 * El único recorte es sacarle los márgenes vacíos: el archivo es cuadrado y el
 * logo ocupa una franja en el medio, así que sin esto quedaría chico y
 * descentrado. Los valores salen de medir dónde empiezan y terminan los
 * píxeles opacos del original de 1024×1024.
 */
const CONTENIDO = { x: 62, y: 222, ancho: 870, alto: 551 };
const PROPORCION = CONTENIDO.ancho / CONTENIDO.alto;

export function Logo({ alto = 40 }: { alto?: number }) {
  return (
    <span
      className="relative block shrink-0 overflow-hidden"
      style={{ height: alto, width: alto * PROPORCION }}
    >
      <Image
        src={`${BASE_PATH}/logo-tapias.png`}
        alt="Tapias.Arg"
        width={1024}
        height={1024}
        priority
        className="absolute max-w-none"
        style={{
          width: `${(1024 / CONTENIDO.ancho) * 100}%`,
          left: `${(-CONTENIDO.x / CONTENIDO.ancho) * 100}%`,
          top: `${(-CONTENIDO.y / CONTENIDO.ancho) * 100}%`,
          filter: "invert(1)",
        }}
      />
    </span>
  );
}
