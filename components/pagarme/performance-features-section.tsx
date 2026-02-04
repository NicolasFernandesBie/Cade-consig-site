"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Building2,
  Clock,
  Shield,
  TrendingUp,
  User,
} from "lucide-react";

const features = [
  {
    icon: ArrowUpRight,
    title: "Alta performance de pagamentos",
    description: "Soluções completas para aumentar sua conversão",
  },
  {
    icon: Building2,
    title: "Gestão centralizada",
    description: "Acompanhe vendas, saldos e motivos de recusa em tempo real",
  },
  {
    icon: Clock,
    title: "Flexibilidade para seu negócio",
    description: "Soluções prontas para usar e API robusta e personalizável",
  },
  {
    icon: Shield,
    title: "Segurança de ponta a ponta",
    description: "Infraestrutura PCI Compliance com proteção antifraude",
  },
  {
    icon: TrendingUp,
    title: "Alta estabilidade",
    description: "Tecnologia que processa milhares de transações por segundo",
  },
  {
    icon: User,
    title: "Atendimento humano de verdade",
    description: "Time especializado nas necessidades do seu negócio",
  },
];

export function PerformanceFeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16 text-balance">
          Alta performance de pagamentos
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#2a5b8c] transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-[#2a5b8c] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <Button className="bg-[#2a5b8c] hover:bg-[#1f4566] text-white rounded-full px-10 py-6 text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Cadastrar agora
          </Button>
        </div>
      </div>
    </section>
  );
}
