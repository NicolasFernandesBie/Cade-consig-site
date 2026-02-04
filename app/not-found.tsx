import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/pagarme/header";
import { Footer } from "@/components/pagarme/footer";
import { ChatButton } from "@/components/pagarme/chat-button";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[oklch(29.341%_0.07957_251.295)] to-[oklch(50%_0.1_251.295)] text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
              Erro 404
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Página não encontrada
            </h1>
            <p className="text-lg text-white/80 max-w-xl">
              A página que você tentou acessar não existe ou foi movida. Que tal
              voltar para o início e continuar navegando?
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                className="rounded-full bg-orange-500 hover:bg-orange-600"
              >
                <Link href="/">Voltar para a Home</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/40 text-white bg-transparent hover:bg-white/10"
              >
                <Link href="/produtos">Ver produtos</Link>
              </Button>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center">
              <Image
                src="/0202_1_.gif"
                alt="Ilustração de página não encontrada"
                width={520}
                height={520}
                className="rounded-full w-full h-auto object-contain"
                priority
                unoptimized
              />
            </div>
            <p className="mt-6 text-center text-sm text-white/70">
              Se precisar de ajuda, fale com a nossa equipe.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <ChatButton />
    </div>
  );
}
