import type { Metadata } from "next";
import { Libre_Caslon_Display, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const libreCaslon = Libre_Caslon_Display({ 
  weight: "400",
  subsets: ["latin"], 
  variable: "--font-libre-caslon", 
  display: "swap" 
});

const poppins = Poppins({ 
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"], 
  variable: "--font-poppins", 
  display: "swap" 
});

export const metadata: Metadata = {
  title: "Mancuni — Forno Napolitano, Sabor Authentico",
  description: "Authentic Neapolitan pizzeria in Asunción, Paraguay. Wood-fired pizza, artisanal craft, real Italian tradition.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ES0Y38BDDS" strategy="afterInteractive" />
        <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-ES0Y38BDDS');`}</Script>
      </head>
      <body className={`${libreCaslon.variable} ${poppins.variable} antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
