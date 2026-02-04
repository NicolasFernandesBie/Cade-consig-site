"use client";

import { Button } from "@/components/ui/button";
import {
  DollarSign,
  FileDown,
  FileSearch,
  FileText,
  MessageSquareLock,
  QrCode,
  SearchCheck,
  Wallet,
  Zap,
} from "lucide-react";

const in100Features = [
  {
    icon: SearchCheck,
    title: "Consulta rápida da margem",
    description: "Veja a margem consignável do cliente em poucos segundos.",
  },
  {
    icon: MessageSquareLock,
    title: "Validação por SMS (Token)",
    description: "Autorização por código garante mais proteção nas consultas.",
  },
  {
    icon: FileSearch,
    title: "Dados completos do benefício",
    description: "Todas as informações organizadas em um só lugar.",
  },
  {
    icon: FileDown,
    title: "Exportação em PDF",
    description:
      "Gere relatórios profissionais para registro e envio ao cliente.",
  },
];

export function In100Section() {
  return (
    <section className="py-20 bg-gradient-to-br from-[oklch(29.341%_0.07957_251.295)] to-[oklch(50%_0.1_251.295)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              Consulta IN100 <br />
              Margem consignável em segundos
            </h2>
            <p className="text-lg text-gray-100 mb-8">
              Tenha acesso rápido e seguro às informações de margem consignável
              do seu cliente. Com a consulta IN100, você verifica valor
              disponível para empréstimo, identifica restrições e monta
              propostas mais assertivas, tudo em poucos cliques.
            </p>

            <div className="space-y-6 mb-8">
              {in100Features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-100">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105">
              Cadastre-se
            </Button>
          </div>

          {/* Right Illustration */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main card with chart */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 relative backdrop-blur-sm border border-white/20">
                <div className="bg-white/95 rounded-2xl p-6">
                  {/* Chart lines */}
                  <svg className="w-full h-32" viewBox="0 0 200 80">
                    <path
                      d="M0 60 Q50 20 100 40 T200 30"
                      fill="none"
                      stroke="#FF8C00"
                      strokeWidth="3"
                    />
                    <circle cx="100" cy="40" r="4" fill="#FF8C00" />
                  </svg>
                  {/* Bar chart */}
                  <div className="flex items-end justify-center gap-3 h-20 mt-4">
                    <div className="w-8 h-8 bg-gradient-to-t from-orange-500 to-orange-300 rounded-t" />
                    <div className="w-8 h-12 bg-gradient-to-t from-orange-500 to-orange-300 rounded-t" />
                    <div className="w-8 h-16 bg-gradient-to-t from-orange-500 to-orange-300 rounded-t" />
                    <div className="w-8 h-20 bg-gradient-to-t from-orange-500 to-orange-300 rounded-t" />
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center animate-float shadow-lg">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="absolute top-1/4 -right-8 w-12 h-12 bg-orange-400 rounded-xl flex items-center justify-center animate-float-delayed shadow-lg">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -left-6 top-1/3 w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center animate-float shadow-lg">
                <div className="w-8 h-8 rounded-full bg-white/30" />
              </div>
              <div className="absolute bottom-1/4 -right-6 w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center animate-float-delayed shadow-lg">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-4 right-1/4 w-20 h-12 bg-orange-500 rounded-xl flex items-center justify-center animate-float shadow-lg">
                <svg className="w-10 h-6 text-white" viewBox="0 0 40 24">
                  <rect
                    x="5"
                    y="2"
                    width="30"
                    height="20"
                    rx="2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="5"
                    y1="10"
                    x2="35"
                    y2="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
