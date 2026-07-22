import type { NextConfig } from "next";

/**
 * GitHub Pages sirve archivos estáticos desde una subcarpeta
 * (usuario.github.io/tapias-web), así que exportamos HTML plano y
 * declaramos el basePath.
 *
 * Si más adelante mudamos a Vercel o Cloudflare Pages con dominio propio,
 * se borran las tres opciones y Next vuelve a su modo normal.
 */
const REPO = "/tapias-web";
const esPages = process.env.DEPLOY_TARGET === "gh-pages";

const nextConfig: NextConfig = {
  output: "export",
  basePath: esPages ? REPO : "",
  images: { unoptimized: true },
};

export default nextConfig;
