import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TiendaProvider } from "@/context/TiendaContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MARCA } from "@/lib/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${MARCA.nombre} — ${MARCA.tagline}`,
    template: `%s · ${MARCA.nombre}`,
  },
  description: MARCA.descripcion,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <TiendaProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </TiendaProvider>
      </body>
    </html>
  );
}
