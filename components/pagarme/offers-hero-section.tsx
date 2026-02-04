"use client"

import { Button } from "@/components/ui/button"

export function OffersHeroSection() {
  return (
    <section className="bg-[#EEF4F8] pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <div className="flex-1 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance">
              As melhores condições para vender online
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Com soluções prontas e personalizadas, o Pagar.me tem as melhores ofertas para você vender com alta performance e segurança.
            </p>
            <Button 
              className="mt-8 bg-[#00A868] hover:bg-[#008B55] text-white rounded-full px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Conheça agora
            </Button>
          </div>

          {/* Right illustration */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-[500px]">
            {/* Background notepad */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-72 bg-gradient-to-b from-green-100 to-white rounded-lg shadow-lg animate-float">
              <div className="w-full h-full bg-[repeating-linear-gradient(transparent,transparent_19px,#e5e7eb_19px,#e5e7eb_20px)]" />
            </div>

            {/* Bar chart */}
            <div className="absolute top-1/4 right-1/4 flex items-end gap-2 animate-float-delayed">
              <div className="w-8 h-16 bg-gradient-to-t from-[#00A868] to-[#4CD98E] rounded-t-md" />
              <div className="w-8 h-24 bg-gradient-to-t from-[#00A868] to-[#4CD98E] rounded-t-md" />
              <div className="w-8 h-20 bg-gradient-to-t from-[#00A868] to-[#4CD98E] rounded-t-md" />
              <div className="w-8 h-32 bg-gradient-to-t from-[#00A868] to-[#4CD98E] rounded-t-md" />
            </div>

            {/* Phone */}
            <div className="absolute bottom-1/4 left-1/4 w-20 h-36 bg-gradient-to-b from-[#00A868] to-[#4CD98E] rounded-xl shadow-lg animate-float animation-delay-300">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-green-300 rounded-full" />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-6 h-6 border-2 border-green-300 rounded-full" />
            </div>

            {/* Dollar coin 1 */}
            <div className="absolute top-1/3 right-1/6 w-14 h-14 bg-gradient-to-br from-[#00A868] to-[#4CD98E] rounded-full flex items-center justify-center shadow-lg animate-float animation-delay-200">
              <span className="text-white font-bold text-xl">$</span>
            </div>

            {/* Dollar coin 2 */}
            <div className="absolute bottom-1/3 right-1/4 w-10 h-10 bg-gradient-to-br from-[#00A868] to-[#4CD98E] rounded-full flex items-center justify-center shadow-lg animate-float-delayed animation-delay-400">
              <span className="text-white font-bold">$</span>
            </div>

            {/* Shopping bag */}
            <div className="absolute top-1/6 right-1/3 w-16 h-20 bg-gradient-to-b from-[#00A868] to-[#4CD98E] rounded-b-lg shadow-lg animate-float animation-delay-500">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-4 border-2 border-green-400 rounded-t-full bg-transparent" />
            </div>

            {/* Sneaker */}
            <div className="absolute bottom-1/4 right-1/3 w-24 h-12 bg-gradient-to-r from-[#00A868] to-[#4CD98E] rounded-lg shadow-lg animate-float-delayed animation-delay-100">
              <div className="absolute top-1 right-2 w-4 h-4 bg-gray-800 rounded-full" />
            </div>

            {/* Credit card */}
            <div className="absolute top-1/2 left-1/6 w-20 h-12 bg-gradient-to-r from-[#00A868] to-[#4CD98E] rounded-lg shadow-lg animate-float animation-delay-600">
              <div className="absolute bottom-2 left-2 w-6 h-4 bg-yellow-400 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
