"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";
import Image from "next/image";

export function SalesControlSection() {
  const { ref, isVisible } = useAnimateOnScroll<HTMLElement>(0.2);

  const features = [
    "Consulte valores e prazos de recebimento",
    "Visualize taxas e motivos de recusa",
    "Extraia relatórios personalizados",
    "Realize estornos e gerencie chargebacks",
    "Antecipe seus recebíveis",
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-[#F7F9FC] rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Dashboard Mockup */}
          <div
            className={`relative transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <Image
              src="/images/leads.png"
              alt="Empreendedora usando o dashboard Pagar.me"
              width={700}
              height={600}
              className="rounded-lg m-5 animate-float hover-shadow-lg"
            />
            {/* Main Dashboard Card */}
            {/* <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 relative z-10 hover:shadow-2xl transition-shadow duration-300"> */}
            {/* Header */}
            {/* <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-pagar-green/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-pagar-green">JM</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    JM Tecnologia e Games
                  </p>
                  <p className="text-xs text-gray-500">88.131.790/2299-86</p>
                </div>
              </div> */}

            {/* Sidebar + Content */}
            <div className="flex gap-6">
              {/* Sidebar */}
              {/* <div className="w-32 flex-shrink-0">
                  <nav className="space-y-2">
                    {[
                      "RESUMO",
                      "VENDAS",
                      "RECORRÊNCIA",
                      "RECEBEDORES",
                      "CLIENTES",
                      "MEIOS DE PAGAMENTO",
                    ].map((item, i) => (
                      <a
                        key={item}
                        href="#"
                        className={`block text-xs font-medium ${i === 0 ? "text-pagar-green" : "text-gray-600"} hover-color-green hover-translate-x`}
                      >
                        {item}
                      </a>
                    ))}
                  </nav>
                </div> */}

              {/* Dashboard Content */}
              <div className="flex-1 space-y-4">
                {/* Volume Chart */}
                {/* <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                    <p className="text-xs text-gray-600 mb-2">
                      Volume total transacionado
                    </p>
                    <svg viewBox="0 0 200 60" className="w-full h-16">
                      <path
                        d="M0 50 Q20 45 40 40 T80 35 T120 25 T160 30 T200 20"
                        fill="none"
                        stroke="#00A868"
                        strokeWidth="2"
                        className="animate-[draw_2s_ease-out_forwards]"
                        strokeDasharray="300"
                        strokeDashoffset="300"
                        style={{
                          animation: isVisible
                            ? "draw 2s ease-out forwards"
                            : "none",
                        }}
                      />
                      <circle
                        cx="160"
                        cy="30"
                        r="4"
                        fill="#00A868"
                        className={`transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                        style={{ transitionDelay: "1.5s" }}
                      />
                    </svg>
                  </div> */}

                <div className="grid grid-cols-2 gap-4">
                  {/* Ticket Médio */}
                  {/* <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-200">
                      <p className="text-[10px] text-gray-500 mb-1">
                        Ticket médio
                      </p>
                      <p className="text-lg font-bold text-gray-900">
                        R$ 143,50
                      </p>
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-1.5 bg-pagar-green rounded-full"></div>
                          <span className="text-[10px] text-gray-600">
                            Cartão
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-1.5 bg-pagar-green/60 rounded-full"></div>
                          <span className="text-[10px] text-gray-600">
                            Boleto
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-1.5 bg-pagar-green/30 rounded-full"></div>
                          <span className="text-[10px] text-gray-600">Pix</span>
                        </div>
                      </div>
                    </div> */}

                  {/* Quantidade de parcelas */}
                  {/* <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors duration-200">
                      <p className="text-[10px] text-gray-500 mb-1">
                        Quantidade de parcelas
                      </p>
                      <div className="flex items-end gap-1 h-16 mt-2">
                        {[60, 45, 80, 55, 70, 40, 50, 65].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-pagar-green rounded-t transition-all duration-500 hover:bg-pagar-green-dark"
                            style={{
                              height: isVisible ? `${h}%` : "0%",
                              transitionDelay: `${i * 100}ms`,
                            }}
                          ></div>
                        ))}
                      </div>
                    </div> */}
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>

          {/* Right - Content */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 leading-tight text-balance">
              Controle suas vendas em tempo real
            </h2>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              Acompanhe vendas, saldos e repasses com{" "}
              <strong>transparência e facilidade</strong>. Centralize sua gestão
              financeira e tome decisões mais estratégicas para seu negócio.
            </p>

            {/* Features List */}
            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li
                  key={feature}
                  className={`flex items-center gap-3 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-950 flex items-center justify-center group-hover:bg-pagar-green/20 transition-colors">
                    <Check className="w-3 h-3 text-orange-500" />
                  </div>
                  <span className="text-gray-700 hover:text-gray-900 transition-colors">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button className="mt-10 bg-orange-500 text-white rounded-full px-8 py-6 text-base font-semibold animate-pulse-glow btn-primary-hover">
              Cadastre-se já
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
