import Image from "next/image";
import { BASE_PATH } from "@/lib/config";

/**
 * Logo de la marca (isotipo TP + "Tapias.Arg"), blanco sobre transparente.
 *
 * Al venir ya en blanco no necesita ningún filtro: se dibuja tal cual.
 *
 * Lo único que se hace es recortar los márgenes vacíos, porque el archivo es
 * cuadrado y el logo ocupa una franja del medio. Los valores salen de medir
 * dónde empiezan y terminan los píxeles opacos del original.
 */
const ORIGINAL = 761;
const CONTENIDO = { x: 53, y: 174, ancho: 634, alto: 400 };
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
        width={ORIGINAL}
        height={ORIGINAL}
        priority
        className="absolute max-w-none"
        style={{
          width: `${(ORIGINAL / CONTENIDO.ancho) * 100}%`,
          left: `${(-CONTENIDO.x / CONTENIDO.ancho) * 100}%`,
          top: `${(-CONTENIDO.y / CONTENIDO.ancho) * 100}%`,
        }}
      />
    </span>
  );
}
