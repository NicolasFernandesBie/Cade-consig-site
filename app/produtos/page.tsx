import { Header } from "@/components/pagarme/header";
import { ProductsHeroSection } from "@/components/pagarme/products-hero-section";
import { In100Section } from "@/components/pagarme/in100Section";
import { PaymentLinkSection } from "@/components/pagarme/payment-link-section";
import { LemitSection } from "@/components/pagarme/lemitSection";
import { LeadsSection } from "@/components/pagarme/leadsSection";
import { RecurrenceSection } from "@/components/pagarme/recurrence-section";
import { FaqSection } from "@/components/pagarme/faq-section";
import { TestimonialsSection } from "@/components/pagarme/testimonials-section";
import { Footer } from "@/components/pagarme/footer";
import { ChatButton } from "@/components/pagarme/chat-button";

export const metadata = {
  title:
    "Produtos - CadêConsig | Sistema Completo para Correspondentes Bancários",
  description:
    "Conheça os produtos do CadêConsig: consulta IN100, automação de atendimento, gestão de vendas, controle de comissões e integrações bancárias para crédito consignado.",
  keywords: [
    "produtos consignado",
    "sistema IN100",
    "consulta margem consignado",
    "automação correspondente bancário",
    "gestão de vendas consignado",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.cadeconsig.com.br/produtos",
  },
  openGraph: {
    title:
      "Produtos - CadêConsig | Sistema Completo para Correspondentes Bancários",
    description:
      "Descubra todas as funcionalidades do CadêConsig para gerenciar suas vendas de crédito consignado com eficiência.",
    url: "https://www.cadeconsig.com.br/produtos",
    siteName: "CadêConsig",
    type: "website",
    images: [
      {
        url: "https://www.cadeconsig.com.br/imagens/preview.jpg",
        width: 1200,
        height: 630,
        alt: "CadêConsig - Produtos e Funcionalidades",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Produtos - CadêConsig | Sistema Completo para Correspondentes",
    description:
      "Descubra todas as funcionalidades do CadêConsig para gerenciar suas vendas de consignado.",
    images: ["https://www.cadeconsig.com.br/imagens/preview.jpg"],
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.cadeconsig.com.br",
  ),
};

export default function ProdutosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[oklch(29.341%_0.07957_251.295)] to-[oklch(50%_0.1_251.295)]">
      <Header />
      <main>
        <ProductsHeroSection />
        <In100Section />

        <LemitSection />
        <LeadsSection />
        {/* <RecurrenceSection /> */}
        {/* <FaqSection /> */}
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
}
