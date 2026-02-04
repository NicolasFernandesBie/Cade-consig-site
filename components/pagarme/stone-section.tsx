"use client";

import { Button } from "@/components/ui/button";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function StoneSection() {
  const { ref, isVisible } = useAnimateOnScroll();

  return (
    <section
      ref={ref}
      className="py-20 px-4 md:px-8 lg:px-16 bg-[#2a5b8c] rounded-xl"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className={`space-y-6 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
          >
            <span className="text-orange-600 font-semibold text-sm tracking-wide uppercase">
              Stone para quem vende online
            </span>
            <h2 className="text-3xl md:text-2xl lg:text-3xl font-bold text-foreground text-balance text-white">
              Receba conteúdos, novidades do sistema e insights práticos sobre o
              mercado de Corban direto no seu e-mail.
            </h2>
            <p className=" leading-relaxed text-gray-300">
              Informação clara para quem quer vender com mais controle.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full max-w-md">
              <div className="flex-1 relative group">
                <input
                  type="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  className="w-full rounded-xl px-6 py-4 text-base text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 border-2 border-gray-200 group-hover:border-orange-400 transition-all duration-300 pr-14"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-700 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Image with floating icons */}
          <div
            className={`relative ${isVisible ? "animate-fade-in-right animation-delay-300" : "opacity-0"}`}
          >
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/images/newsletter_cadeconsig_2.png"
                alt="Newsletter"
                width={600}
                height={450}
                className="w-full h-full object-cover rounded-3xl"
              />

              {/* Floating icon - top right */}

              {/* Floating icon - bottom right */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
