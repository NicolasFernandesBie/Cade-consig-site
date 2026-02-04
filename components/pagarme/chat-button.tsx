"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function ChatButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://wa.me/553184713200 "
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        className="fixed bottom-6 right-6 w-14 h-14 bg-orange-500 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-pagar-green hover:scale-110 hover:shadow-xl transition-all duration-300 z-50 animate-scale-in animation-delay-500 group"
        aria-label="Abrir chat de suporte"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <MessageCircle
          className={`w-6 h-6 transition-transform duration-300 ${isHovered ? "scale-110 rotate-12" : ""}`}
        />

        {/* Pulse ring effect */}
        <span className="absolute inset-0 rounded-full bg-orange-600 animate-ping opacity-20"></span>

        {/* Tooltip */}
        <span
          className={`absolute right-full mr-3 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap transition-all duration-300 ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"}`}
        >
          Precisa de ajuda?
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></span>
        </span>
      </button>
    </a>
  );
}
