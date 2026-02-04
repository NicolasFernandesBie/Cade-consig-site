"use client";

import { Button } from "@/components/ui/button";
import { Smartphone, ThumbsUp, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Venda online",
    description: "No cartão, Pix, boleto e carteiras digitais",
  },
  {
    icon: ThumbsUp,
    title: "Checkout seguro",
    description: "Ofereça a melhor experiência de compra",
  },
  {
    icon: Shield,
    title: "Proteção antifraude",
    description: "Mais segurança para suas vendas",
  },
  {
    icon: Users,
    title: "Split de Pagamento",
    description: "Automatize a divisão de recebíveis",
  },
];

export function ProductsHeroSection() {
  return (
    <section className="bg-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-tight mb-6">
              <span className="">Plataforma de</span>
              <br />
              <span className="">pagamento online</span>
              <br />
              <span className="">completa</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Impulsione suas conversões com o Pagar.me: a plataforma de
              pagamento que reúne tudo o que você precisa para vender online com
              alta performance.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105">
              Venda com Pagar.me
            </Button>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative animate-fade-in-right animation-delay-300">
            <div className="relative">
              {/* Main image placeholder - woman working */}
              <div className="relative bg-gradient-to-br from-orange-500 to-[#4CD98E] rounded-2xl overflow-hidden aspect-[4/3]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600')] bg-cover bg-center" />
                </div>
              </div>

              {/* Dashboard mockup overlay */}
              <div className="absolute -left-8 top-1/4 bg-white rounded-lg shadow-xl p-3 animate-float hidden lg:block">
                <div className="text-xs text-gray-500 mb-1">
                  JM Modas e Acessórios
                </div>
                <div className="space-y-1 text-xs">
                  <div className="font-medium">RESUMO</div>
                  <div className="text-orange-500">VENDAS</div>
                  <div>RECORRÊNCIA</div>
                  <div>RECEBEDORES</div>
                  <div>CLIENTES</div>
                  <div>MEIOS DE PAGAMENTO</div>
                </div>
              </div>

              {/* Payment methods card */}
              <div className="absolute -right-4 top-1/3 bg-white rounded-lg shadow-xl p-3 animate-float-delayed hidden lg:block">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded" />
                    <span>Cartão</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded" />
                    <span>Boleto</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded" />
                    <span>Pix</span>
                  </div>
                </div>
              </div>

              {/* Volume card */}
              <div className="absolute bottom-0 left-1/4 bg-white rounded-lg shadow-xl p-3 animate-float hidden lg:block">
                <div className="text-xs text-gray-500">
                  Volume total transacionado
                </div>
                <div className="h-8 flex items-end gap-1">
                  <div className="w-2 h-3 bg-orange-500 rounded-sm" />
                  <div className="w-2 h-5 bg-orange-500 rounded-sm" />
                  <div className="w-2 h-4 bg-orange-500 rounded-sm" />
                  <div className="w-2 h-6 bg-orange-500 rounded-sm" />
                  <div className="w-2 h-8 bg-orange-500 rounded-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-gray-200">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex items-start gap-3 opacity-0-initial animate-fade-in-up animation-delay-${(index + 1) * 100}`}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg border-2 border-orange-500 flex items-center justify-center text-orange-500">
                <feature.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[#1a1a2e]">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
