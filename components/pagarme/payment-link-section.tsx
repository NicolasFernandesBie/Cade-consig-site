"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const features = [
  "Crie pedidos e ofertas customizadas",
  { text: "Venda sem site ou ", highlight: "maquininha de cartão" },
  "Recupere carrinhos abandonados",
  { text: "Acompanhe suas vendas em ", highlight: "tempo real" }
]

export function PaymentLinkSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Images */}
          <div className="flex-1 relative">
            <div className="relative max-w-md mx-auto">
              {/* Top image - woman at store */}
              <div className="relative z-10">
                <div className="bg-gray-200 rounded-2xl overflow-hidden aspect-[4/3]">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500')] bg-cover bg-center" />
                </div>
                {/* Payment link sent notification */}
                <div className="absolute -top-4 left-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2 animate-float">
                  <div className="w-6 h-6 bg-[#00A868] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-[#00A868]">Link de pagamento enviado</span>
                </div>
              </div>

              {/* Table overlay */}
              <div className="absolute top-1/2 -right-4 bg-white rounded-lg shadow-xl p-4 z-20 animate-float-delayed">
                <table className="text-xs">
                  <thead>
                    <tr className="text-gray-500">
                      <th className="px-2 py-1">TIPO</th>
                      <th className="px-2 py-1">VALOR TOTAL</th>
                      <th className="px-2 py-1">STATUS</th>
                      <th className="px-2 py-1">CRIADO EM</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-2 py-1">Cobrança única</td>
                      <td className="px-2 py-1 font-medium">R$ 3.052,98</td>
                      <td className="px-2 py-1">
                        <span className="bg-[#00A868] text-white px-2 py-0.5 rounded text-[10px]">Ativo</span>
                      </td>
                      <td className="px-2 py-1">25/11/2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Bottom image - person with phone */}
              <div className="relative -mt-8 ml-8">
                <div className="bg-gray-200 rounded-2xl overflow-hidden aspect-[4/3]">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500')] bg-cover bg-center" />
                </div>
                {/* Payment completed notification */}
                <div className="absolute bottom-4 right-4 bg-[#00A868] rounded-lg px-4 py-3 shadow-lg flex items-center gap-2 animate-float">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#00A868]" />
                  </div>
                  <span className="text-sm font-medium text-white">Pagamento realizado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-6">
              Venda nas redes sociais com o Link de Pagamento
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Simplifique compras por Instagram, WhatsApp e outras redes sociais, enviando
              um checkout seguro e personalizado para seu cliente pagar no cartão, Pix, boleto
              ou carteiras digitais.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-[#00A868] flex-shrink-0" />
                  <span className="text-gray-700">
                    {typeof feature === 'string' ? feature : (
                      <>
                        {feature.text}
                        <span className="text-[#00A868] underline">{feature.highlight}</span>
                      </>
                    )}
                  </span>
                </div>
              ))}
            </div>

            <Button 
              className="bg-[#00A868] hover:bg-[#008B55] text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Comece a vender
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
