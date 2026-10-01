import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ variable: "--font-body", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ variable: "--font-display", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Gonzalo | Desarrollador Full-Stack", template: "%s | Gonzalo" },
  description: "Portafolio de Gonzalo, desarrollador full-stack que convierte ideas complejas en productos digitales claros.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${archivo.variable} ${spaceGrotesk.variable}`}>{children}</body></html>;
}
