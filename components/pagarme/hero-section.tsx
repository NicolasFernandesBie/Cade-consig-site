"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[oklch(29.341%_0.07957_251.295)] to-[oklch(50%_0.1_251.295)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight text-balance opacity-0-initial animate-fade-in-up">
              O sistema que organiza, controla e escala o seu Corban.
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-gray-300 max-w-lg opacity-0-initial animate-fade-in-up animation-delay-200">
              Controle vendas, comissões, repasses e resultados em tempo real,
              sem planilhas, sem confusão e sem perder dinheiro no processo.
            </p>
            <Button className="mt-8 bg-orange-500 text-white rounded-xl border border-orange-500 px-8 py-6 text-base font-semibold opacity-0-initial animate-fade-in-up animation-delay-400 btn-primary-hover cursor-pointer">
              Quero profissionalizar meu Corban
            </Button>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative opacity-0-initial animate-fade-in-right animation-delay-300">
            {/* Main Image with Woman */}
            <div className="relative z-10">
              <Image
                src="/images/print-sistema-old.png"
                alt="Empreendedora usando o dashboard Pagar.me"
                width={600}
                height={500}
                className="rounded-lg m-5 animate-float hover:shadow-lg"
              />

              {/* Floating Dashboard Card */}
              <div className="absolute top-10 left-2 md:top-40 md:left-auto md:right-auto bg-white rounded-xl shadow-2xl shadow-[#2b5a8c] p-3 md:p-4 w-40 md:w-48 z-20 animate-float hover:shadow-3xl transition-shadow duration-150">
                <div className="flex items-center gap-2 mb-2 md:mb-3 pb-2 border-b border-gray-100">
                  <div className="w-6 md:w-8 h-6 md:h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                    <span className="text-[10px] md:text-xs font-bold text-[#2b5a8c]">
                      M
                    </span>
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs font-semibold text-gray-900">
                      Arthur
                    </p>
                    <p className="text-[8px] md:text-[10px] text-gray-500">
                      08.058.183/0001-08
                    </p>
                  </div>
                </div>
                <nav className="space-y-1 md:space-y-1.5">
                  {[
                    "RESUMO",
                    "VENDAS",
                    "RECORRÊNCIA",
                    "RECEBEDORES",
                    "CLIENTES",
                    "MEIOS DE PAGAMENTO",
                    "WEBHOOKS",
                    "EQUIPE",
                    "CONFIGURAÇÕES",
                  ].map((item, i) => (
                    <a
                      key={item}
                      href="#"
                      className={`block text-[8px] md:text-[10px] font-medium ${i === 0 ? "text-orange-500" : "text-gray-600"} hover-color-orange hover-translate-x`}
                    >
                      {item}
                    </a>
                  ))}
                  <div className="pt-1.5 md:pt-2 border-t border-gray-100 mt-1.5 md:mt-2">
                    {["SHOP", "HUB"].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="flex items-center justify-between text-[8px] md:text-[10px] font-medium text-gray-600 hover-color-orange py-0.5 md:py-1"
                      >
                        {item}
                        <svg
                          className="w-2 md:w-2.5 h-2 md:h-2.5"
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M2 10L10 2M10 2H4M10 2V8" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </nav>
              </div>

              {/* Floating Payment Stats Card */}
              {/* <div className="absolute bottom-4 right-0 bg-white rounded-xl shadow-2xl p-4 w-56 z-20 animate-float-delayed hover:shadow-3xl transition-shadow duration-300">
                <p className="text-xs font-semibold text-gray-700 mb-3">
                  Formas de pagamentos mais utilizadas
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between group">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-pagar-green group-hover:scale-150 transition-transform duration-200"></div>
                      <span className="text-[10px] text-gray-600">
                        Cartão de Crédito
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-gray-900">
                      70,33%
                    </span>
                  </div>
                  <div className="flex items-center justify-between group">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-pagar-green/60 group-hover:scale-150 transition-transform duration-200"></div>
                      <span className="text-[10px] text-gray-600">Pix</span>
                    </div>
                    <span className="text-[10px] font-semibold text-gray-900">
                      20,33%
                    </span>
                  </div>
                  <div className="flex items-center justify-between group">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gray-800 group-hover:scale-150 transition-transform duration-200"></div>
                      <span className="text-[10px] text-gray-600">Outros</span>
                    </div>
                    <span className="text-[10px] font-semibold text-gray-900">
                      9,34%
                    </span>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Floating Green Elements */}
            <div className="absolute top-4 right-8 w-20 h-24 bgorange-400 rounded-lg shadow-lg z-0 opacity-80 animate-float"></div>
            <div className="absolute top-1/3 right-0 w-16 h-20 bg-orange-800 rounded-lg shadow-lg z-0 opacity-80 flex items-center justify-center animate-float-delayed">
              <div className="flex gap-0.5">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-8 bg-white/40 rounded-full"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
