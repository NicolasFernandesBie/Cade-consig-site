"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Smartphone,
  FileText,
  Calendar,
  CheckCircle2,
  Shield,
  Layers,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const plans = [
  {
    badge: "Pronto para usar",
    badgeColor: "bg-[#2a5b8c]",
    name: "Plano Parcelado",
    description: "Ideal para quem aposta nas vendas parceladas",
    creditLabel: "Crédito à vista",
    creditRate: "5,59%",
    installmentRate: "13,59%",
    showRates: true,
    extras: [
      { icon: Smartphone, label: "Pix", value: "1,19%" },
      { icon: FileText, label: "Boleto pago", value: "R$ 3,49" },
      { icon: Calendar, label: "Recebimento", value: "15 dias" },
    ],
    buttonText: "Cadastrar agora",
    buttonVariant: "outline" as const,
  },
  {
    badge: "Pronto para usar",
    badgeColor: "bg-[#2a5b8c]",
    name: "Plano à Vista",
    description: "Perfeito para quem prioriza vendas à vista",
    creditLabel: "Crédito à vista",
    creditRate: "4,39%",
    installmentRate: "14,99%",
    showRates: true,
    extras: [
      { icon: Smartphone, label: "Pix", value: "1,19%" },
      { icon: FileText, label: "Boleto pago", value: "R$ 3,49" },
      { icon: Calendar, label: "Recebimento", value: "15 dias" },
    ],
    buttonText: "Cadastrar agora",
    buttonVariant: "outline" as const,
  },
  {
    badge: "Pronto para usar",
    badgeColor: "bg-[#2a5b8c]",
    name: "Plano Flex",
    description: "Para quem prefere personalizar suas taxas",
    customLabel: "Customize sua oferta:",
    customValue: "Taxas Variáveis",
    showRates: false,
    extras: [
      { icon: Smartphone, label: "Pix", value: "Flexível" },
      { icon: FileText, label: "Boleto pago", value: "Flexível" },
      { icon: Calendar, label: "Recebimento", value: "Flexível" },
    ],
    buttonText: "Fale com especialista",
    buttonVariant: "default" as const,
  },
  {
    badge: "Customizado",
    badgeColor: "bg-[#2a5b8c]",
    name: "Plano Customizado",
    description: "Para quem prefere personalizar suas taxas",
    customLabel: "Customize sua oferta:",
    customValue: "Taxas Variáveis",
    showRates: false,
    features: [
      {
        icon: CheckCircle2,
        label: "Todas as funcionalidades do Pronto para usar",
      },
      { icon: Shield, label: "Antifraude customizável" },
      { icon: Layers, label: "Multiadquirência" },
    ],
    buttonText: "Fale com especialista",
    buttonVariant: "default" as const,
  },
];

export function PricingPlansSection() {
  const [selectedInstallment] = useState("6x");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % plans.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + plans.length) % plans.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % plans.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + plans.length) % plans.length;
      cards.push({ ...plans[index], originalIndex: index, position: i });
    }
    return cards;
  };

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-balance">
            Escolha o plano ideal para o seu negócio
          </h1>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto">
            São três opções de planos <strong>Pronto para usar</strong> para
            você começar a vender de forma simples, rápida e com integração
            facilitada. Precisa de maior personalização? Conheça também o{" "}
            <strong>Plano Customizado</strong>, que oferece mais flexibilidade e
            autonomia para escalar o seu negócio.
          </p>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden lg:block mt-16 pb-16">
          <div className="flex items-center justify-center gap-6 overflow-visible">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-700 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Cards Slider */}
            <div className="flex gap-8 justify-center items-stretch w-full overflow-visible px-4">
              {getVisibleCards().map((plan) => {
                const isCenter = plan.position === 0;
                return (
                  <div
                    key={`${plan.name}-${plan.originalIndex}`}
                    className={`transition-all duration-700 ease-out ${
                      isCenter
                        ? "scale-100 opacity-100 z-10"
                        : "scale-85 opacity-40 z-0"
                    }`}
                  >
                    <div
                      className="relative group"
                      style={{ minWidth: "320px", maxWidth: "320px" }}
                    >
                      {/* Glow effect background */}
                      <div
                        className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br from-orange-500/20 to-orange-400/20 blur-2xl transition-opacityduration-500 ${
                          isCenter
                            ? "opacity-0 group-hover:opacity-100"
                            : "opacity-0"
                        }`}
                      />

                      {/* Main card */}
                      <div
                        className={`relative border border-gray-100/50 rounded-3xl overflow-hidden bg-white backdrop-blur-sm cursor-pointer ${
                          isCenter
                            ? "shadow-[0_20px_60px_-10px_rgba(0,0,0,0.2),0_8px_16px_-4px_rgba(0,0,0,0.15)] hover:shadow-[0_35px_100px_-10px_rgba(249,115,22,0.35),0_20px_40px_-4px_rgba(0,0,0,0.2)]"
                            : "shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]"
                        } transition-all duration-500 ${
                          isCenter
                            ? "hover:-translate-y-3 hover:scale-[1.02]"
                            : ""
                        } group-hover:border-orange-500/30 flex flex-col h-full`}
                      >
                        {/* Decorative top gradient bar */}
                        <div
                          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 transition-all duration-500 ${
                            isCenter ? "opacity-100" : "opacity-0"
                          }`}
                        />

                        {/* Badge */}
                        <div
                          className={`${plan.badgeColor} text-white text-center py-3 text-sm font-semibold transition-all duration-500 ${
                            isCenter
                              ? "group-hover:from-orange-500 group-hover:to-orange-700"
                              : ""
                          }`}
                        >
                          {plan.badge}
                        </div>

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          <h3
                            className={`text-xl font-bold transition-colors duration-500 ${
                              isCenter
                                ? "text-orange-500 group-hover:text-orange-600"
                                : "text-orange-500"
                            }`}
                          >
                            {plan.name}
                          </h3>
                          <p
                            className={`mt-2 text-sm transition-colors duration-500 ${
                              isCenter
                                ? "text-gray-600 group-hover:text-gray-700"
                                : "text-gray-600"
                            }`}
                          >
                            {plan.description}
                          </p>

                          {/* Rates */}
                          {plan.showRates ? (
                            <div className="mt-6">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">
                                  {plan.creditLabel}
                                </span>
                                <button className="flex items-center gap-1 text-sm border border-orange-500 rounded-full px-3 py-1 text-orange-500 hover:bg-orange-50 transition-colors">
                                  Parcelado {selectedInstallment}{" "}
                                  <ChevronDown className="w-4 h-4" />
                                </button>
                              </div>
                              <div className="flex items-baseline gap-4 mt-2">
                                <span className="text-3xl font-bold text-gray-900">
                                  {plan.creditRate}
                                </span>
                                <span className="text-3xl font-bold text-gray-900">
                                  {plan.installmentRate}
                                </span>
                              </div>
                              <p className="mt-4 text-xs text-gray-500">
                                Custos operacionais já inclusos!
                              </p>
                            </div>
                          ) : (
                            <div className="mt-6">
                              <p className="text-sm text-gray-500">
                                {plan.customLabel}
                              </p>
                              <p className="text-2xl font-bold text-gray-900 mt-1">
                                {plan.customValue}
                              </p>
                            </div>
                          )}

                          {/* Extras or Features */}
                          <div className="mt-6 space-y-3 flex-1">
                            {plan.extras?.map((extra) => (
                              <div
                                key={extra.label}
                                className="flex items-center justify-between"
                              >
                                <div className="flex items-center gap-2">
                                  <extra.icon className="w-4 h-4 text-orange-500" />
                                  <span className="text-sm text-gray-600">
                                    {extra.label}
                                  </span>
                                </div>
                                <span className="text-sm font-medium text-gray-900">
                                  {extra.value}
                                </span>
                              </div>
                            ))}
                            {plan.features?.map((feature) => (
                              <div
                                key={feature.label}
                                className="flex items-start gap-2"
                              >
                                <feature.icon className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-600">
                                  {feature.label}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Button */}
                          <div className="mt-6 space-y-3">
                            <Button
                              variant={plan.buttonVariant}
                              className={`w-full rounded-full py-6 font-semibold transition-all duration-300 hover:scale-105 ${
                                plan.buttonVariant === "default"
                                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                                  : "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                              }`}
                            >
                              {plan.buttonText}
                            </Button>
                            <button className="w-full text-sm text-orange-500 underline hover:text-orange-600 transition-colors">
                              Mais detalhes
                            </button>
                          </div>
                        </div>

                        {/* Bottom subtle indicator */}
                        {isCenter && (
                          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 opacity-50 group-hover:opacity-100 transition-opacity duration-500 mx-auto mb-4" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="p-2 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-700 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {plans.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-orange-500 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden mt-12 pb-8">
          <div className="overflow-hidden py-8 -my-8">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {plans.map((plan) => (
                <div key={plan.name} className="w-full flex-shrink-0 px-6">
                  <div className="relative group">
                    {/* Glow effect background */}
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-orange-500/20 to-orange-400/20 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

                    {/* Main card */}
                    <div className="relative border border-gray-100/50 rounded-3xl overflow-hidden bg-white to-gray-50/50 backdrop-blur-sm cursor-pointer shadow-sm hover:shadow-[0_35px_100px_-10px_rgba(249,115,22,0.35),0_20px_40px_-4px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] group-hover:border-orange-500/30 flex flex-col">
                      {/* Decorative top gradient bar */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 transition-all duration-500 opacity-0 group-hover:opacity-100" />

                      {/* Badge */}
                      <div
                        className={`${plan.badgeColor} text-white text-center py-3 text-sm font-semibold transition-all duration-500 group-hover:from-orange-500 group-hover:to-orange-700`}
                      >
                        {plan.badge}
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-orange-500 group-hover:text-orange-600 transition-colors duration-500">
                          {plan.name}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-500">
                          {plan.description}
                        </p>

                        {/* Rates */}
                        {plan.showRates ? (
                          <div className="mt-6">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">
                                {plan.creditLabel}
                              </span>
                              <button className="flex items-center gap-1 text-sm border border-orange-500 rounded-full px-3 py-1 text-orange-500 hover:bg-orange-50 transition-colors">
                                Parcelado {selectedInstallment}{" "}
                                <ChevronDown className="w-4 h-4" />
                              </button>
                            </div>
                            <div className="flex items-baseline gap-4 mt-2">
                              <span className="text-3xl font-bold text-gray-900">
                                {plan.creditRate}
                              </span>
                              <span className="text-3xl font-bold text-gray-900">
                                {plan.installmentRate}
                              </span>
                            </div>
                            <p className="mt-4 text-xs text-gray-500">
                              Custos operacionais já inclusos!
                            </p>
                          </div>
                        ) : (
                          <div className="mt-6">
                            <p className="text-sm text-gray-500">
                              {plan.customLabel}
                            </p>
                            <p className="text-2xl font-bold text-gray-900 mt-1">
                              {plan.customValue}
                            </p>
                          </div>
                        )}

                        {/* Extras or Features */}
                        <div className="mt-6 space-y-3 flex-1">
                          {plan.extras?.map((extra) => (
                            <div
                              key={extra.label}
                              className="flex items-center justify-between"
                            >
                              <div className="flex items-center gap-2">
                                <extra.icon className="w-4 h-4 text-orange-500" />
                                <span className="text-sm text-gray-600">
                                  {extra.label}
                                </span>
                              </div>
                              <span className="text-sm font-medium text-gray-900">
                                {extra.value}
                              </span>
                            </div>
                          ))}
                          {plan.features?.map((feature) => (
                            <div
                              key={feature.label}
                              className="flex items-start gap-2"
                            >
                              <feature.icon className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-600">
                                {feature.label}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Button */}
                        <div className="mt-6 space-y-3">
                          <Button
                            variant={plan.buttonVariant}
                            className={`w-full rounded-full py-6 font-semibold transition-all duration-300 hover:scale-105 ${
                              plan.buttonVariant === "default"
                                ? "bg-orange-500 hover:bg-orange-600 text-white"
                                : "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                            }`}
                          >
                            {plan.buttonText}
                          </Button>
                          <button className="w-full text-sm text-orange-500 underline hover:text-orange-600 transition-colors">
                            Mais detalhes
                          </button>
                        </div>
                      </div>

                      {/* Bottom subtle indicator */}
                      <div className="w-12 h-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mx-auto mb-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 hover:border-orange-600 hover:text-orange-600 hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {plans.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-orange-500 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-orange-500 flex items-center justify-center text-orange-500 hover:border-orange-600 hover:text-orange-600 hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Card brands */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-8 bg-red-500 rounded flex items-center justify-center">
              <div className="w-4 h-4 bg-yellow-500 rounded-full -mr-1" />
              <div className="w-4 h-4 bg-red-600 rounded-full" />
            </div>
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">
              <span className="text-blue-800 font-bold text-xs">VISA</span>
            </div>
            <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xs">elo</span>
            </div>
            <div className="w-12 h-8 bg-blue-900 rounded flex items-center justify-center">
              <span className="text-white font-bold text-[8px]">AMEX</span>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            Cadastro sujeito à análise de risco.
          </p>
        </div>
      </div>
    </section>
  );
}
