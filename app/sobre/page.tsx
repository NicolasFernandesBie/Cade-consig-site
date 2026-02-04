import type { Metadata } from "next";
import { Header } from "@/components/pagarme/header";
import { Footer } from "@/components/pagarme/footer";

export const metadata: Metadata = {
  title: "CadêConsig | Sistema para Correspondentes Bancários de Consignado",
  description:
    "A CadêConsig oferece sistema e automação para correspondentes bancários que vendem crédito consignado INSS, SIAPE e FGTS. Venda mais com menos custo.",
  keywords: [
    "sistema para correspondente bancário",
    "software para consignado",
    "sistema IN100",
    "automação consignado",
    "plataforma para correspondentes bancários",
    "ferramentas para venda de consignado",
  ],
  creator: "CadêConsig",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.cadeconsig.com.br/sobre",
  },
  openGraph: {
    title: "CadêConsig | Sistema para Correspondentes Bancários de Consignado",
    description:
      "Plataforma de automação para correspondentes bancários que vendem crédito consignado. Mais vendas, menos retrabalho.",
    url: "https://www.cadeconsig.com.br/sobre",
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

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[oklch(29.341%_0.07957_251.295)] to-[oklch(50%_0.1_251.295)]">
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)]" />
        <div className="relative py-20 md:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-white/90">
                Quem somos
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                Sobre a CadêConsig
              </h1>
              <p className="text-xl text-white/90">
                Plataforma completa para correspondentes bancários que vendem
                crédito consignado com mais escala, controle e segurança.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  "Consulta e validação rápida",
                  "Automação de atendimento",
                  "Gestão de operações",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white/10 px-4 py-3 text-sm text-white/90"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Introduction Section */}
          <div className="grid lg:grid-cols-3 gap-10 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tecnologia que acelera vendas de consignado
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                A CadêConsig é uma plataforma de sistemas e automação para
                correspondentes bancários que atuam com crédito consignado
                (INSS, SIAPE e FGTS). Nosso objetivo é aumentar a produtividade,
                reduzir custos e escalar vendas com processos mais rápidos,
                seguros e organizados.
              </p>
              <p className="text-lg text-gray-700">
                Atendemos call centers, lojas de crédito e consultores home
                office, oferecendo ferramentas de consulta, automação e apoio à
                formalização de contratos.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                O que entregamos em cada operação
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-blue-600" />
                  Consultas rápidas com validação inteligente
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-blue-600" />
                  Fluxos de atendimento automatizados
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-blue-600" />
                  Padronização de processos e compliance
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-blue-600" />
                  Indicadores claros para escalar vendas
                </li>
              </ul>
            </div>
          </div>

          {/* What We Deliver */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                O que a CadêConsig entrega
              </h2>
              <span className="hidden md:inline-flex rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                Benefícios principais
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Consulta e validação de dados",
                  description:
                    "Velocidade e precisão para consultar margens e validar informações.",
                },
                {
                  title: "Automação do atendimento",
                  description:
                    "Fluxos inteligentes que reduzem etapas e ganham tempo na pré-análise.",
                },
                {
                  title: "Aumento de conversão",
                  description:
                    "Processos padronizados para menos retrabalho e mais vendas.",
                },
                {
                  title: "Escala para times e operações",
                  description:
                    "Solução online para operações individuais ou equipes completas.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                      ✓
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Por que escolher a CadêConsig
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Mais agilidade nas consultas",
                  description:
                    "Respostas rápidas e precisas para suas consultas e análises.",
                },
                {
                  title: "Menos custo operacional",
                  description: "Reduza despesas com automação inteligente.",
                },
                {
                  title: "Mais assertividade nas abordagens",
                  description:
                    "Dados e insights para melhor qualificação de leads.",
                },
                {
                  title: "Operação escalável",
                  description:
                    "Do home office ao call center, você cresce com a gente.",
                },
                {
                  title: "Plataforma online, simples e segura",
                  description: "Acesse de qualquer lugar, sempre protegido.",
                  span: "md:col-span-2",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`bg-gray-50 p-6 rounded-2xl ${item.span ?? ""}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* For Whom */}
          <div className="rounded-3xl bg-blue-50 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Para quem é
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Correspondentes bancários",
                "Call centers de crédito consignado",
                "Lojas de crédito",
                "Consultores e times home office",
              ].map((item) => (
                <div key={item} className="flex items-center">
                  <span className="inline-block h-2 w-2 bg-blue-600 rounded-full mr-3" />
                  <span className="text-lg text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
