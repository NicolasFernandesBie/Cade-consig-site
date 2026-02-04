"use client";

import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import Image from "next/image";

export function PartnersSection() {
  const { ref, isVisible } = useAnimateOnScroll<HTMLElement>(0.2);

  const partners = [
    { name: "Alipay+", delay: 0 },
    { name: "Casa&Video", delay: 100 },
    { name: "Leroy Merlin", delay: 200 },
    { name: "Polishop", delay: 300 },
    { name: "Usaflex", delay: 400 },
  ];

  return (
    <section
      ref={ref}
      className="py-16 lg:py-24 bg-transparent border-t-4 border-orange-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center text-balance max-w-3xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          O parceiro ideal para todos os tamanhos e modelos de negócio.
        </h2>

        {/* Partner Logos */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {/* C6 Bank */}
          <div
            className={`hover:scale-110 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionDelay: "100ms" }}
          >
            <Image
              src="/images/c6Logo.png"
              alt="C6 Bank"
              width={60}
              height={30}
              className="object-contain"
            />
          </div>

          {/* Itaú */}
          <div
            className={`hover:scale-110 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionDelay: "200ms" }}
          >
            <Image
              src="/images/itaulogo.png"
              alt="Itaú"
              width={60}
              height={30}
              className="object-contain"
            />
          </div>

          {/* Creditiva */}
          <div
            className={`hover:scale-110 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <Image
              src="/images/LogoCreditivaBranco.png"
              alt="Creditiva"
              width={140}
              height={60}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
