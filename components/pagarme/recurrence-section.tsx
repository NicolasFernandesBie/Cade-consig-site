"use client";

import { Button } from "@/components/ui/button";
import {
  RefreshCw,
  Mail,
  Settings,
  Users,
  Zap,
  Bell,
  UserCheck,
  ListChecks,
  Filter,
  LayoutDashboard,
} from "lucide-react";

export function RecurrenceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-16">
          {/* Left Illustration */}
          <div className="flex-1 relative">
            <div className="relative max-w-md mx-auto">
              {/* Calendar/notebook illustration */}
              <div className="bg-gradient-to-br from-[#E8F8F0] to-[#D0F0E0] rounded-3xl p-8">
                <div className="bg-gradient-to-br from-[#4CD98E] to-[#00A868] rounded-2xl p-6 relative">
                  {/* Calendar rings */}
                  <div className="flex justify-center gap-4 -mt-10 mb-4">
                    <div className="w-3 h-8 bg-[#D0F0E0] rounded-full" />
                    <div className="w-3 h-8 bg-[#D0F0E0] rounded-full" />
                    <div className="w-3 h-8 bg-[#D0F0E0] rounded-full" />
                    <div className="w-3 h-8 bg-[#D0F0E0] rounded-full" />
                  </div>

                  {/* Progress bar */}
                  <div className="bg-[#4CD98E] h-4 rounded-full mb-4" />

                  {/* Lines */}
                  <div className="space-y-3">
                    <div className="bg-white/20 h-2 rounded w-full" />
                    <div className="bg-white/20 h-2 rounded w-4/5" />
                    <div className="bg-white/20 h-2 rounded w-full" />
                    <div className="bg-white/20 h-2 rounded w-3/4" />
                  </div>

                  {/* Refresh icon overlay */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <RefreshCw className="w-8 h-8 text-[#00A868]" />
                  </div>
                </div>
              </div>

              {/* Credit card */}
              <div className="absolute -top-8 -left-4 w-24 h-16 bg-gradient-to-br from-[#4CD98E] to-[#00A868] rounded-xl shadow-lg transform -rotate-12 animate-float">
                <div className="absolute top-2 left-2 w-8 h-6 bg-white/30 rounded" />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-6 italic">
              Solução completa e flexível de recorrência
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Receba pagamentos recorrentes por cartão de crédito, débito
              Pinless e boleto. Crie e gerencie suas assinaturas de forma
              simples e eficiente.
            </p>

            <Button className="bg-[#00A868] hover:bg-[#008B55] text-white rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105">
              Aproveite já
            </Button>
          </div>
        </div>

        {/* Features Grid */}
      </div>
    </section>
  );
}
