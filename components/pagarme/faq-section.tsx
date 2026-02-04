"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowUp } from "lucide-react";

const faqs = [
  {
    question: "O que é uma plataforma de pagamento?",
    answer:
      "Uma plataforma de pagamento é um sistema que permite que empresas e empreendedores aceitem pagamentos online de seus clientes através de diversos meios, como cartão de crédito, débito, Pix, boleto e carteiras digitais.",
  },
  {
    question: "Por que ter uma plataforma de pagamento?",
    answer:
      "Ter uma plataforma de pagamento permite que você venda online de forma segura, aceite múltiplas formas de pagamento, gerencie suas vendas em um só lugar e ofereça uma melhor experiência de compra aos seus clientes.",
  },
  {
    question: "Como funciona o Pagar.me?",
    answer:
      "O Pagar.me é uma plataforma completa de pagamentos digitais que permite aceitar pagamentos online, gerenciar vendas, recebimentos e oferecer checkout seguro aos seus clientes.",
  },
  {
    question: "Quais métodos de pagamento posso aceitar com o Pagar.me?",
    answer:
      "Com o Pagar.me você pode aceitar cartão de crédito (parcelado ou à vista), cartão de débito, Pix, boleto bancário e carteiras digitais como Google Pay e Click to Pay da Visa.",
  },
  {
    question: "Pagar.me é seguro?",
    answer:
      "Sim, o Pagar.me possui certificação PCI DSS Nível 1, o mais alto padrão de segurança do mercado de pagamentos. Além disso, contamos com sistema antifraude e autenticação 3DS 2.0.",
  },
  {
    question: "O que preciso para vender com o Pagar.me?",
    answer:
      "Para começar a vender com o Pagar.me, você precisa fazer o cadastro na plataforma, passar pela análise de documentação e configurar sua conta. O processo é simples e rápido.",
  },
  {
    question: "Preciso ter um site para vender com o Pagar.me?",
    answer:
      "Não! Com o Link de Pagamento do Pagar.me, você pode vender pelas redes sociais, WhatsApp e outros canais sem precisar de um site ou maquininha de cartão.",
  },
  {
    question: "Como faço a integração com o Pagar.me?",
    answer:
      "O Pagar.me oferece diversas opções de integração: APIs robustas, SDKs, plugins para as principais plataformas de e-commerce e documentação completa para desenvolvedores.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-[#F0F4F8]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Content */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-4">
              Ficou com dúvidas sobre o Pagar.me?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Confira nossas perguntas mais frequentes.
            </p>
            <Button className="bg-[#00A868] hover:bg-[#008B55] text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105">
              Fale com um especialista
            </Button>
          </div>

          {/* Right FAQ Accordion */}
          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="font-medium text-[#1a1a2e]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "pb-5 max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="mx-auto flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-50 transition-colors duration-300 mt-8"
            >
              <ArrowUp className="w-4 h-4" />
              Retornar ao topo da página
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
