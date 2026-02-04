"use client";

import { useState, useEffect } from "react";
import { ChevronDown, HelpCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "";

  return (
    <header
      className={`sticky top-0 z-50 px-6 py-3 font-semibold animate-fade-in-up transition-all duration-300 ${"backdrop-blur-sm bg-gradient-to-b from-black/40 to-transparent shadow-2xl/20 text-white inset-shadow-sm inset-shadow-current/20"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 hover-scale">
            <Image
              src="/images/white-logo1.png"
              alt="CadêConsig - Sistema para correspondentes bancários"
              width={150}
              height={100}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {[
              { label: "Home", href: "/" },
              { label: "Produtos", href: "/produtos" },
              { label: "Ofertas", href: "/ofertas" },
              { label: "Sobre", href: "/sobre" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all after:duration-300 after:content-['']"
              >
                {item.label}
              </a>
            ))}
            <button
              className={`flex items-center gap-1 text-sm font-medium hover-color-orange group ${"text-white"}`}
            >
              Desenvolvedores
              <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
            </button>
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              className={`p-2 hover-color-orange hover-rotate-12 ${"text-white"}`}
            >
              <HelpCircle className="h-5 w-5" />
            </button>
            <a href="https://app.cadeconsig.com.br/entrar">
              <Button
                variant="outline"
                className={`rounded-full hover-scale transition-colors duration-300 ${"border-gray-300 text-white bg-transparent hover:bg-orange-600 hover:text-white"}`}
              >
                Entrar
              </Button>
            </a>
            <a href="https://app.cadeconsig.com.br/pre-cadastro">
              <Button
                className={`rounded-full border-gray-300 border hover-scale transition-colors duration-300 ${"bg- text-white hover:bg-orange-600"}`}
              >
                Seja Cade
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 transition-colors ${"text-white hover:text-orange-500"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`h-6 w-6 absolute transition-all duration-300 ${mobileMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
              />
              <X
                className={`h-6 w-6 absolute transition-all duration-300 ${mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              {[
                { label: "Home", href: "/" },
                { label: "Produtos", href: "/produtos" },
                { label: "Ofertas", href: "/ofertas" },
                { label: "Sobre", href: "/sobre" },
              ].map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                <a href="https://app.cadeconsig.com.br/entrar">
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-white/30 text-white bg-transparent hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Entrar
                  </Button>
                </a>
                <a href="https://app.cadeconsig.com.br/pre-cadastro">
                  <Button
                    className="w-full rounded-full bg-orange-500 text-white hover:bg-orange-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Solicitar acesso
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
