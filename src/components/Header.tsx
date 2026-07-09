import { Instagram } from "lucide-react";
import { STORE } from "@/lib/config";
import { VerdantLogo } from "./VerdantLogo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-verdant flex items-center justify-between py-5">
        <a href={STORE.instagramUrl} target="_blank" rel="noreferrer"
          className="hidden md:flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-verdant transition-colors">
          <Instagram className="h-4 w-4" />
          @{STORE.instagram}
        </a>

        <a href="#top" className="flex items-center gap-3 mx-auto md:absolute md:left-1/2 md:-translate-x-1/2">
          <VerdantLogo className="h-9 w-9 text-verdant" />
          <div className="leading-none">
            <div className="font-serif text-2xl tracking-[0.3em] uppercase">Lotus</div>
            <div className="mt-1 text-[9px] tracking-[0.4em] uppercase text-muted-foreground text-center">
              Boutique
            </div>
          </div>
        </a>
      </div>
    </header>
  );
}
