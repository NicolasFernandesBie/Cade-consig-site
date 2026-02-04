import { Header } from "@/components/pagarme/header";
import { OffersHeroSection } from "@/components/pagarme/offers-hero-section";
import { PricingPlansSection } from "@/components/pagarme/pricing-plans-section";
import { ComparisonTableSection } from "@/components/pagarme/comparison-table-section";
import { PerformanceFeaturesSection } from "@/components/pagarme/performance-features-section";
import { TestimonialsSection } from "@/components/pagarme/testimonials-section";
import { FaqSection } from "@/components/pagarme/faq-section";
import { Footer } from "@/components/pagarme/footer";
import { ChatButton } from "@/components/pagarme/chat-button";

export const metadata = {
  title: "Ofertas - CadêConsig | Planos para Correspondentes Bancários",
  description:
    "Conheça os planos do CadêConsig: Starter, Professional e Enterprise. Escolha o plano ideal para escalar suas vendas de crédito consignado.",
  keywords: [
    "planos consignado",
    "preços correspondente bancário",
    "planos para corban",
    "sistema consignado preço",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.cadeconsig.com.br/ofertas",
  },
  openGraph: {
    title: "Ofertas - CadêConsig | Planos para Correspondentes Bancários",
    description:
      "Descubra os planos perfeitos para escalar sua operação de crédito consignado com gestão profissional.",
    url: "https://www.cadeconsig.com.br/ofertas",
    siteName: "CadêConsig",
    type: "website",
    images: [
      {
        url: "https://www.cadeconsig.com.br/imagens/preview.jpg",
        width: 1200,
        height: 630,
        alt: "CadêConsig - Planos e Ofertas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ofertas - CadêConsig | Planos para Correspondentes Bancários",
    description:
      "Descubra os planos perfeitos para escalar sua operação de crédito consignado.",
    images: ["https://www.cadeconsig.com.br/imagens/preview.jpg"],
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.cadeconsig.com.br",
  ),
};

export default function OfertasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[oklch(29.341%_0.07957_251.295)] to-[oklch(50%_0.1_251.295)]">
      <Header />
      <main>
        {/* <OffersHeroSection /> */}
        <PricingPlansSection />
        <ComparisonTableSection />
        <PerformanceFeaturesSection />
        {/* <TestimonialsSection /> */}
        {/* <FaqSection /> */}
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
}
