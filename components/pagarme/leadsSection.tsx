"use client";

import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  RefreshCw,
  Settings,
  DollarSign,
  Zap,
  Bell,
  UserCheck,
  ListChecks,
  Filter,
  LayoutDashboard,
} from "lucide-react";

const leadsQualificadosFeatures = [
  {
    icon: LayoutDashboard,
    title: "Dashboard com métricas em tempo real",
    description:
      "Acompanhe total de leads, aceitos, desempenho por usuário e canais de captação em um painel visual.",
  },
  {
    icon: Filter,
    title: "Filtros avançados por período e status",
    description:
      "Encontre rapidamente os leads certos por data, tabulação, canal, entidade e muito mais.",
  },
  {
    icon: ListChecks,
    title: "Gestão completa dos leads",
    description:
      "Edite status, defina data de retorno, adicione observações e acompanhe cada oportunidade.",
  },
  {
    icon: UserCheck,
    title: "Acompanhamento por usuário",
    description:
      "Veja quem está trabalhando cada lead e analise a performance individual da equipe.",
  },
];

export function LeadsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e] mb-6">
              Leads Qualificados – Organize oportunidades e feche mais contratos
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Centralize seus leads, acompanhe o desempenho da equipe e retome
              contatos no momento certo. Menos perda de oportunidades, mais
              conversão no consignado.
            </p>

            <div className="space-y-6 mb-8">
              {leadsQualificadosFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#F8FAFC] flex items-center justify-center text-[#CC6B00] group-hover:bg-[#CC6B00] group-hover:text-white transition-colors duration-300">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1a2e] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-orange-500 hover:bg-[#CC6B00] text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105">
              Leads Qualificados
            </Button>
          </div>

          {/* Right Illustration */}
          <div className="flex-1 relative">
            <div className="relative max-w-lg mx-auto">
              {/* Main card */}
              <div className="bg-gradient-to-br from-[#F8FAFC] to-orange-500/20 rounded-3xl p-8">
                <div className="bg-white/80 rounded-2xl p-6 relative">
                  {/* Center ball */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#CC6B00] to-[#FF8C00] rounded-full mx-auto mb-4 shadow-lg animate-pulse" />

                  {/* Connection lines SVG */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 300 200"
                  >
                    <path
                      d="M150 100 Q200 50 250 30"
                      fill="none"
                      stroke="#CC6B00"
                      strokeWidth="2"
                    />
                    <path
                      d="M150 100 Q200 100 260 100"
                      fill="none"
                      stroke="#CC6B00"
                      strokeWidth="2"
                    />
                    <path
                      d="M150 100 Q200 150 250 170"
                      fill="none"
                      stroke="#CC6B00"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>

              {/* Dollar circles */}
              <div className="absolute -top-4 right-0 w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-lg animate-float">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg animate-float-delayed">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="absolute bottom-0 right-4 w-18 h-18 bg-orange-500 rounded-full flex items-center justify-center shadow-lg animate-float">
                <DollarSign className="w-9 h-9 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
