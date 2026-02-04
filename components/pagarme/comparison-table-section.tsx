"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Plus } from "lucide-react";

const features = [
  {
    name: "Cartão, boleto, Pix e carteiras digitais",
    pronto: true,
    customizado: true,
    link: false,
  },
  { name: "Split de Pagamento", pronto: true, customizado: true, link: true },
  {
    name: "Checkout transparente",
    pronto: true,
    customizado: true,
    link: true,
  },
  { name: "Recorrência", pronto: true, customizado: true, link: true },
  { name: "Link de Pagamento", pronto: true, customizado: true, link: true },
  { name: "Multicompradores", pronto: true, customizado: true, link: false },
  {
    name: "Multimeios de Pagamento",
    pronto: true,
    customizado: true,
    link: true,
  },
  { name: "Antecipação", pronto: true, customizado: true, link: true },
  { name: "Card Updater", pronto: false, customizado: true, link: true },
  {
    name: "Antifraude customizável",
    pronto: false,
    customizado: true,
    link: false,
  },
  { name: "Multiadquirência", pronto: false, customizado: true, link: false },
  {
    name: "Relatórios avançados",
    pronto: false,
    customizado: true,
    link: false,
  },
];

export function ComparisonTableSection() {
  const [showAll, setShowAll] = useState(false);

  const displayedFeatures = showAll ? features : features.slice(0, 8);

  return (
    <section className="py-20 bg-white rounded-t-4xl shadow-lg ">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 text-balance">
          Conheça as vantagens e diferenciais dos nossos planos
        </h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Table Header */}
            <thead>
              <tr>
                <th className="text-left py-4 px-4 text-gray-700 font-semibold">
                  Funcionalidades
                </th>
                <th className="text-center py-4 px-4">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-gray-700">
                      Planos{" "}
                      <span className="text-orange-500 font-semibold">
                        Pronto para usar
                      </span>
                    </span>
                    <Button className="bg-orange-500 hover:bg-[#008B55] text-white rounded-full px-6">
                      Cadastrar
                    </Button>
                  </div>
                </th>
                <th className="text-center py-4 px-4">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-gray-700">
                      Plano <span className="font-semibold">Customizado</span>
                    </span>
                    <Button className="bg-orange-500 hover:bg-[#008B55] text-white rounded-full px-6">
                      Cadastrar
                    </Button>
                  </div>
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {/* Section Header */}
              <tr>
                <td
                  colSpan={3}
                  className="bg-blue-50 py-3 px-4 font-semibold text-gray-900 border-l-4 border-[#2a5b8c]"
                >
                  Pagamentos
                </td>
              </tr>

              {displayedFeatures.map((feature, index) => (
                <tr
                  key={feature.name}
                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-4">
                    {feature.link ? (
                      <a href="#" className="text-orange-500 hover:underline">
                        {feature.name}
                      </a>
                    ) : (
                      <span className="text-gray-700">{feature.name}</span>
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {feature.pronto && (
                      <CheckCircle2 className="w-6 h-6 text-[#2a5b8c] mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-4">
                    {feature.customizado && (
                      <CheckCircle2 className="w-6 h-6 text-[#2a5b8c] mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Show more button */}
        {!showAll && (
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              onClick={() => setShowAll(true)}
              className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 gap-2"
            >
              <Plus className="w-4 h-4" />
              Exibir tudo
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
