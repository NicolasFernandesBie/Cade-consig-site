"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { useAnimateOnScroll } from "@/hooks/use-animate-on-scroll";

const navigation = {
  navegacao: [
    { name: "Home", href: "/" },
    { name: "Produtos", href: "/produtos" },
    { name: "Ofertas", href: "/ofertas" },
    { name: "Sobre", href: "/sobre" },
  ],
  solucoes: [
    { name: "Consulta IN100", href: "/produtos" },
    { name: "Automação de atendimento", href: "/produtos" },
    { name: "Gestão de vendas", href: "/produtos" },
    { name: "Recorrência e contratos", href: "/produtos" },
  ],
  plataforma: [
    { name: "Área do cliente", href: "https://app.cadeconsig.com.br/entrar" },
    {
      name: "Solicitar acesso",
      href: "https://app.cadeconsig.com.br/pre-cadastro",
    },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/people/Davi-Kalel-Cade/pfbid02FV6hnBCa7fCNvwMRJjfLpLv34fbHvkxhhbKEHpVrUEJGn41yyk543mY8mAoihzzAl/?sk=photos_by&checkpoint_src=any",
  },

  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/cadeconsig/",
  },

  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@TutoriaisCad%C3%AAConsig",
  },
];

export function Footer() {
  const { ref, isVisible } = useAnimateOnScroll();
  const currentYear = new Date().getFullYear();

  return (
    <footer ref={ref} className="bg-[#0F172A] text-white">
      <div
        className={`max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="max-w-xl">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-2xl font-bold text-white">CadêConsig</span>
              <span className="text-xs text-white/70 bg-white/10 px-2 py-1 rounded-full">
                Correspondentes bancários
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/70">
              Plataforma de automação e gestão para crédito consignado. Mais
              produtividade, menos retrabalho e operações seguras do início ao
              fim.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="https://app.cadeconsig.com.br/entrar"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2 text-sm font-semibold text-white/90 transition-colors hover:border-white hover:text-white"
              >
                Entrar
              </Link>
              <Link
                href="https://app.cadeconsig.com.br/pre-cadastro"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Solicitar acesso
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Navegacao */}
          <div>
            <h3 className="text-xs font-semibold text-[#667085] uppercase tracking-wider mb-4">
              Navegacao
            </h3>
            <ul className="space-y-3">
              {navigation.navegacao.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solucoes */}
          <div>
            <h3 className="text-xs font-semibold text-[#667085] uppercase tracking-wider mb-4">
              Solucoes
            </h3>
            <ul className="space-y-3">
              {navigation.solucoes.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Plataforma */}
          <div>
            <h3 className="text-xs font-semibold text-[#667085] uppercase tracking-wider mb-4">
              Plataforma
            </h3>
            <ul className="space-y-3">
              {navigation.plataforma.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-8 border-t border-[#2C3036]">
          <p className="text-xs text-white/60 mb-4 md:mb-0">
            CadêConsig © {currentYear}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/60">
            Construído para operações de crédito consignado com segurança e
            performance.
          </p>
        </div>
      </div>
    </footer>
  );
}
