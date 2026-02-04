"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";

const testimonials = [
  {
    quote:
      '"Mudei recentemente para o Pagar.me e estou encantada com tudo! A interface é bem melhor que a de outros sistemas que já utilizei, fácil de mexer, mais completa e o atendimento é impecável. Estou muito satisfeita e recomendo a todos!"',
    name: "Luisa Dias",
    role: "Founder Loja Criare",
  },
  {
    quote:
      '"A eficiência do Pagar.me facilita a vida de milhares de pessoas que realizam projetos incríveis no Catarse."',
    name: "Luis Otávio Ribeiro",
    role: "Co-founder Cartase",
  },
  {
    quote:
      '"Além de mais que triplicar as taxas de conversão em compras, toda a tecnologia permitiu de forma muito simples que pudéssemos escalar o nosso negócio sem nos preocupar com a plataforma de pagamento."',
    name: "Marcio Acorci",
    role: "Co-founder & CEO Wedy",
  },
  {
    quote:
      '"O Pagar.me tem sido uma parte crucial da nossa operação oferecendo um serviço excepcional com um dashboard incrível."',
    name: "Bruno Mozer",
    role: "Founder Click Sophia",
  },
];

export function TestimonialsSection() {
  const { ref, isVisible } = useAnimateOnScroll();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play carousel for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % Math.max(1, testimonials.length - 3),
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, testimonials.length - 4) : prev - 1,
    );
  };

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 gap-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance max-w-md">
            A opinião de quem usa e recomenda:
          </h2>
          <div className="text-right">
            <div className="flex items-baseline gap-1">
              <span className="text-5xl md:text-6xl font-bold text-foreground">
                9.5
              </span>
              <span className="text-xl text-muted-foreground">/10</span>
            </div>
            <span className="text-[#00A868] font-bold text-lg italic"></span>
          </div>
        </div>

        {/* Testimonials Grid - Desktop */}
        <div className="hidden md:block relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-[#F0F4F8] rounded-3xl p-6 flex flex-col transition-all duration-500 ${
                  isVisible
                    ? `animate-fade-in-up animation-delay-${(index + 1) * 200}`
                    : "opacity-0"
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <p className="text-foreground text-sm leading-relaxed flex-1 mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#D0D5DD] rounded-full flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-[#667085]"
                      fill="currentColor"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Desktop */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full w-10 h-10 border-[#D0D5DD] hover:bg-[#F0F4F8] transition-colors bg-transparent"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full w-10 h-10 border-[#D0D5DD] hover:bg-[#F0F4F8] transition-colors bg-transparent"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </Button>
          </div>
        </div>

        {/* Testimonials Carousel - Mobile */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <div className="bg-[#F0F4F8] rounded-3xl p-6 flex flex-col">
                    <p className="text-foreground text-sm leading-relaxed flex-1 mb-6">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#D0D5DD] rounded-full flex items-center justify-center">
                        <svg
                          viewBox="0 0 24 24"
                          className="w-6 h-6 text-[#667085]"
                          fill="currentColor"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setCurrentIndex(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length,
                )
              }
              className="rounded-full w-10 h-10 border-[#D0D5DD] hover:bg-[#F0F4F8] transition-colors bg-transparent"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </Button>

            {/* Indicator Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-orange-500 w-6"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % testimonials.length)
              }
              className="rounded-full w-10 h-10 border-[#D0D5DD] hover:bg-[#F0F4F8] transition-colors bg-transparent"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
