import Image from "next/image";
import { BASE_PATH } from "@/lib/config";

/**
 * Isotipo TP de la marca.
 *
 * El archivo original es un cuadrado en negro sobre blanco que además incluye
 * la palabra "Tapias.Arg" abajo. Acá se recorta por CSS para dejar solo la
 * "TP" (el nombre ya va como texto al lado) y se invierte a blanco.
 *
 * `mixBlendMode: lighten` hace que el negro resultante del invertido no pinte
 * sobre el fondo oscuro: queda el logo blanco flotando, sin recuadro.
 *
 * Si algún día llega el logo en PNG con fondo transparente, se borra todo
 * este recorte y queda un <Image /> común.
 */

// Recorte medido sobre el original de 768×768.
const RECORTE = { x: 50, y: 160, ancho: 650, alto: 340 };
const PROPORCION = RECORTE.ancho / RECORTE.alto;

export function Logo({ alto = 28 }: { alto?: number }) {
  return (
    <span
      className="relative block shrink-0 overflow-hidden"
      style={{ height: alto, width: alto * PROPORCION }}
    >
      <Image
        src={`${BASE_PATH}/logo-tapias.jpg`}
        alt="Tapias.Arg"
        width={768}
        height={768}
        priority
        className="absolute max-w-none"
        style={{
          width: `${(768 / RECORTE.ancho) * 100}%`,
          left: `${(-RECORTE.x / RECORTE.ancho) * 100}%`,
          top: `${(-RECORTE.y / RECORTE.ancho) * 100}%`,
          filter: "invert(1)",
          mixBlendMode: "lighten",
        }}
      />
    </span>
  );
}
