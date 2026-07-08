import { Instagram, MessageCircle } from "lucide-react";
import { STORE, whatsappLink } from "@/lib/config";
import { VerdantLogo } from "./VerdantLogo";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-secondary/40">
      <div className="container-verdant py-16 grid gap-10 md:grid-cols-3 items-start">
        <div className="flex items-center gap-3">
          <VerdantLogo className="h-10 w-10 text-verdant" />
          <div>
            <div className="font-serif text-2xl tracking-[0.3em] uppercase">Verdant</div>
            <div className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground mt-1">
              Boutique
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <p className="eyebrow">Atendimento</p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Feito à mão, um pedido por vez. Fale conosco pelo WhatsApp para tirar dúvidas,
            reservar peças e combinar entrega.
          </p>
        </div>

        <div className="space-y-3 md:text-right">
          <p className="eyebrow md:justify-end">Siga</p>
          <div className="flex md:justify-end gap-3">
            <a href={STORE.instagramUrl} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border px-4 py-2.5 text-xs tracking-[0.2em] uppercase hover:border-verdant hover:text-verdant transition-colors">
              <Instagram className="h-4 w-4" /> @{STORE.instagram}
            </a>
            <a href={whatsappLink("catálogo Verdant")} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 bg-verdant text-primary-foreground px-4 py-2.5 text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-verdant py-5 text-[10px] tracking-[0.3em] uppercase text-muted-foreground text-center">
          © {new Date().getFullYear()} Verdant Boutique · Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
