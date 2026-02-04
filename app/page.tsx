import type { Metadata } from "next";
import { Header } from "@/components/pagarme/header";
import { HeroSection } from "@/components/pagarme/hero-section";
import { SalesControlSection } from "@/components/pagarme/sales-control-section";
import { PartnersSection } from "@/components/pagarme/partners-section";
import { FeaturesSection } from "@/components/pagarme/features-section";
import { StoneSection } from "@/components/pagarme/stone-section";
import { TestimonialsSection } from "@/components/pagarme/testimonials-section";
import { Footer } from "@/components/pagarme/footer";
import { ChatButton } from "@/components/pagarme/chat-button";

export const metadata: Metadata = {
  title: "CadêConsig | Sistema para Correspondentes Bancários de Consignado",
  description:
    "A CadêConsig oferece sistema e automação para correspondentes bancários que vendem crédito consignado INSS, SIAPE e FGTS. Venda mais com menos custo.",
  keywords: [
    "sistema para correspondente bancário",
    "software para consignado",
    "crédito consignado",
    "automação consignado",
    "plataforma para correspondentes bancários",
    "INSS",
    "SIAPE",
    "FGTS",
  ],
  creator: "CadêConsig",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.cadeconsig.com.br",
  },
  openGraph: {
    title: "CadêConsig | Sistema para Correspondentes Bancários de Consignado",
    description:
      "Plataforma de automação para correspondentes bancários que vendem crédito consignado. Mais vendas, menos retrabalho.",
    url: "https://www.cadeconsig.com.br",
    siteName: "CadêConsig",
    type: "website",
    images: [
      {
        url: "https://www.cadeconsig.com.br/imagens/preview.jpg",
        width: 1200,
        height: 630,
        alt: "CadêConsig - Sistema para Correspondentes Bancários",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CadêConsig | Sistema para Correspondentes Bancários",
    description:
      "Sistema para correspondentes bancários venderem consignado com mais escala e menos retrabalho.",
    images: ["https://www.cadeconsig.com.br/imagens/preview.jpg"],
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.cadeconsig.com.br",
  ),
};

export default function PagarMePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[oklch(29.341%_0.07957_251.295)] to-[oklch(50%_0.1_251.295)] ">
      <Header />
      <main>
        <HeroSection />
        <SalesControlSection />
        <PartnersSection />
        <FeaturesSection />
        <StoneSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
}
