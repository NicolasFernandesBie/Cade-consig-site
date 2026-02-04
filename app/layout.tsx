import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Cade Consig | Sistema de Gestão para Corban e Correspondentes Bancários",
  description:
    "Gerencie vendas, comissões, repasses e resultados do seu Corban em tempo real. O sistema ideal para profissionalizar e escalar sua operação.",
  keywords: [
    "sistema para corban",
    "gestão para correspondentes bancários",
    "sistema de crédito consignado",
    "controle de comissões corban",
    "software para corban",
    "plataforma para correspondentes bancários",
    "gestão de vendas consignado",
  ],
  creator: "Cade Consig Tecnologia",
  publisher: "Cade Consig",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://cadeconsig.com.br",
    title: "Cade Consig | Sistema de Gestão para Corban",
    description:
      "Controle vendas, comissões e repasses do seu Corban em tempo real. Profissionalize sua operação com o Cade Consig.",
    siteName: "Cade Consig",
    images: [
      {
        url: "https://cadeconsig.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cade Consig - Sistema de Gestão para Corban",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cade Consig | Sistema de Gestão para Corban",
    description:
      "Sistema para controle total de vendas, comissões e repasses do seu Corban.",
    images: ["https://cadeconsig.com.br/og-image.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  other: {
    "Content-Security-Policy": "upgrade-insecure-requests",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
