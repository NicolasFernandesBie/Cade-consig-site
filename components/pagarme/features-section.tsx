"use client";

import {
  DollarSign,
  Settings,
  Shield,
  LayoutGrid,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import { useIsMobile } from "@/hooks/use-mobile";

const features = [
  {
    icon: DollarSign,
    title: "Pagamentos otimizados",
    description:
      "Checkout intuitivo, Pix, recorrência e Split para você vender mais",
  },
  {
    icon: Settings,
    title: "Fácil integração",
    description:
      "Conecte o Pagar.me diretamente à sua plataforma ou implemente via API",
  },
  {
    icon: Shield,
    title: "Segurança e estabilidade",
    description:
      "Proteja suas vendas com infraestrutura PCI Compliance, antifraude e alta estabilidade",
  },
  {
    icon: LayoutGrid,
    title: "Gestão transparente",
    description: "Acompanhe suas vendas, saldos e repasses em um só lugar",
  },
  {
    icon: User,
    title: "Atendimento especializado",
    description: "Conte com um time que entende seu negócio",
  },
];

export function FeaturesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useAnimateOnScroll<HTMLElement>(0.2);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length);
    }, 5000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + features.length) % features.length;
      cards.push({ ...features[index], originalIndex: index, position: i });
    }
    return cards;
  };

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 bg-[#F7F9FC] rounded-xl overflow-visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center text-balance max-w-4xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          Plataforma de pagamento completa para sua empresa
        </h2>

        {/* Desktop Grid - Features Slider */}
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
              {getVisibleCards().map((feature, idx) => {
                const isCenter = feature.position === 0;
                return (
                  <div
                    key={`${feature.title}-${feature.originalIndex}`}
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
                        className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br from-orange-500/20 to-orange-400/20 blur-2xl transition-opacity duration-500 ${
                          isCenter
                            ? "opacity-0 group-hover:opacity-100"
                            : "opacity-0"
                        }`}
                      />

                      {/* Main card */}
                      <div
                        className={`relative flex flex-col items-center text-center gap-5 rounded-3xl bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm cursor-pointer overflow-hidden ${
                          isCenter
                            ? "p-8 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.2),0_8px_16px_-4px_rgba(0,0,0,0.15)] hover:shadow-[0_35px_100px_-10px_rgba(249,115,22,0.35),0_20px_40px_-4px_rgba(0,0,0,0.2)]"
                            : "p-6 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]"
                        } transition-all duration-500 ${
                          isCenter
                            ? "hover:-translate-y-3 hover:scale-[1.02]"
                            : ""
                        } border border-gray-100/50 group-hover:border-orange-500/30`}
                      >
                        {/* Decorative top gradient bar */}
                        <div
                          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 transition-all duration-500 ${
                            isCenter ? "opacity-100" : "opacity-0"
                          }`}
                        />

                        {/* Icon container with enhanced styling */}
                        <div className="relative">
                          {/* Icon glow ring */}
                          <div
                            className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/30 to-orange-400/30 blur-lg transition-all duration-500 ${
                              isCenter
                                ? "scale-100 opacity-0 group-hover:opacity-100 group-hover:scale-125"
                                : "scale-0 opacity-0"
                            }`}
                          />

                          <div
                            className={`relative rounded-2xl bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-transparent flex items-center justify-center group-hover:from-orange-500 group-hover:to-orange-700 group-hover:shadow-lg transition-all duration-500 ${
                              isCenter
                                ? "w-20 h-20 group-hover:scale-110 group-hover:rotate-3"
                                : "w-16 h-16"
                            } border border-orange-500/20 group-hover:border-transparent`}
                          >
                            <feature.icon
                              className={`text-orange-500 group-hover:text-white transition-all duration-500 group-hover:scale-110 ${
                                isCenter ? "w-9 h-9" : "w-7 h-7"
                              }`}
                            />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-3">
                          <h3
                            className={`font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-500 ${
                              isCenter ? "text-xl" : "text-lg"
                            } leading-tight`}
                          >
                            {feature.title}
                          </h3>
                          <p
                            className={`text-gray-600 group-hover:text-gray-700 transition-colors duration-500 leading-relaxed ${
                              isCenter ? "text-base" : "text-sm"
                            }`}
                          >
                            {feature.description}
                          </p>
                        </div>

                        {/* Hover shine effect */}

                        {/* Bottom subtle indicator for center card */}
                        {isCenter && (
                          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
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
            {features.map((_, index) => (
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
              {features.map((feature, index) => {
                return (
                  <div
                    key={feature.title}
                    className="w-full flex-shrink-0 px-6"
                  >
                    <div className="relative group">
                      {/* Glow effect background */}
                      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-orange-500/20 to-orange-400/20 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

                      {/* Main card */}
                      <div className="relative flex flex-col items-center text-center gap-5 rounded-3xl bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm cursor-pointer overflow-hidden p-8 shadow-sm lg:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.2),0_8px_16px_-4px_rgba(0,0,0,0.15)] hover:shadow-[0_35px_100px_-10px_rgba(249,115,22,0.35),0_20px_40px_-4px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] border border-gray-100/50 group-hover:border-orange-500/30">
                        {/* Decorative top gradient bar */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 transition-all duration-500 opacity-0 group-hover:opacity-100" />

                        {/* Icon container with enhanced styling */}
                        <div className="relative">
                          {/* Icon glow ring */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/30 to-orange-400/30 blur-lg transition-all duration-500 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-125" />

                          <div className="relative rounded-2xl bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-transparent flex items-center justify-center group-hover:from-orange-500 group-hover:to-orange-700 group-hover:shadow-lg transition-all duration-500 w-20 h-20 group-hover:scale-110 group-hover:rotate-3 border border-orange-500/20 group-hover:border-transparent">
                            <feature.icon className="w-9 h-9 text-orange-500 group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 space-y-3">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors duration-500 leading-tight">
                            {feature.title}
                          </h3>
                          <p className="text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-500 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>

                        {/* Bottom subtle indicator */}
                        <div className="w-12 h-1 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-orange-500 hover:text-orange-500 hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-orange-500 w-6" : "bg-gray-300 hover:bg-gray-400"}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-orange-500 hover:text-orange-500 hover:scale-110 active:scale-95 transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
