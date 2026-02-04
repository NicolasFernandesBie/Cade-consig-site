"use client";

import { Button } from "@/components/ui/button";
import {
  Check,
  AlertTriangle,
  ChevronDown,
  Zap,
  Users,
  Database,
  Search,
  MessageSquareLock,
} from "lucide-react";

const lemitFeatures = [
  {
    icon: Database,
    title: "Dados cadastrais completos",
    description:
      "Acesse telefone, e-mail, endereço e informações essenciais do cliente em uma única consulta.",
  },
  {
    icon: Search,
    title: "Consulta rápida por CPF",
    description:
      "Basta informar o CPF para obter os dados organizados na tela em poucos segundos.",
  },
  {
    icon: MessageSquareLock,
    title: "Validação de WhatsApp",
    description:
      "Identifique quais números possuem WhatsApp para aumentar a assertividade no contato com o cliente.",
  },
  {
    icon: Users,
    title: "Melhor abordagem comercial",
    description:
      "Planeje sua comunicação com base em dados atualizados e aumente suas chances de conversão.",
  },
];

export function LemitSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Dashboard Mockup */}
          <div className="flex-1 relative">
            <div className="max-w-lg mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-orange-500 px-4 py-2 flex items-center gap-2">
                  <span className="text-white text-xs font-medium">ATIVO</span>
                </div>

                <div className="flex">
                  {/* Sidebar */}
                  <div className="w-48 border-r border-gray-100 p-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">J2</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium">
                          J2 Modas e Acessórios
                        </div>
                        <div className="text-xs text-gray-500">
                          88.131.791/2299-86
                        </div>
                      </div>
                    </div>
                    <nav className="space-y-2 text-sm">
                      <div className="font-medium">RESUMO</div>
                      <div className="text-orange-500 font-medium flex items-center justify-between">
                        VENDAS
                        <ChevronDown className="w-4 h-4" />
                      </div>
                      <div className="pl-4 space-y-1 text-gray-600">
                        <div>Pedidos</div>
                        <div className="text-orange-500">Cobranças</div>
                        <div>Links de pagamento</div>
                      </div>
                    </nav>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 p-4 space-y-4">
                    {/* Ticket médio */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 animate-float">
                      <div className="text-sm text-gray-500">Ticket médio</div>
                      <div className="text-2xl font-bold text-orange-500">
                        R$ 143,50
                      </div>
                    </div>

                    {/* Alert */}
                    <div className="bg-[#FFF8E6] border-l-4 border-[#F5A623] rounded-lg p-3 animate-float-delayed">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-[#F5A623] flex-shrink-0 mt-0.5" />
                        <div className="text-xs">
                          <p className="font-medium text-gray-800">
                            Esta cobrança foi avaliada como suspeita e, por
                            segurança, não foi aprovada pelo Antifraude.
                          </p>
                          <p className="text-gray-600 mt-1">
                            Entenda o que é possível fazer, acessando a nossa
                            Central de Ajuda.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Volume total */}
                    <div className="bg-white border border-gray-200 rounded-lg p-4 animate-float">
                      <div className="text-sm text-gray-500">
                        Volume total transacionado
                      </div>
                      <div className="text-3xl font-bold text-orange-500">
                        R$ 54.321,12
                      </div>
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-4 py-2 text-sm mt-3">
                        Antecipar recebíveis
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-6 ">
              Consulta Lemit <br /> Dados certos para fechar mais negócios
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Encontre rapidamente os dados cadastrais do cliente e descubra
              quais números têm WhatsApp ativo. Mais assertividade no contato,
              menos tempo perdido e mais conversões no consignado.
            </p>

            <div className="space-y-6 mb-8">
              {lemitFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105">
              Cadastre-se agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
