import { MessageCircle } from "lucide-react";
import type { Product } from "@/lib/products";
import { whatsappLink } from "@/lib/config";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col">
      <a
        href={whatsappLink(product.name, product.price)}
        target="_blank"
        rel="noreferrer"
        className="relative block overflow-hidden bg-secondary aspect-[3/4]"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={900}
          height={1200}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />

        {product.tag && (
          <span className={`absolute top-4 left-4 text-[10px] tracking-[0.25em] uppercase px-2.5 py-1 ${
            product.tag === "promo"
              ? "bg-foreground text-background"
              : "bg-background/90 text-verdant"
          }`}>
            {product.tag === "promo" ? "Promo" : "Novo"}
          </span>
        )}

        <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex items-center justify-center gap-2 bg-foreground/95 text-background py-3 text-xs tracking-[0.25em] uppercase">
            <MessageCircle className="h-3.5 w-3.5" />
            Consultar
          </div>
        </div>
      </a>

      <div className="mt-4 space-y-1">
        <h3 className="font-serif text-lg leading-tight">{product.name}</h3>
        <p className="text-xs tracking-wide text-muted-foreground">{product.detail}</p>
        <div className="flex items-baseline gap-2 pt-1">
          <span className="text-sm font-medium">{product.price}</span>
          {product.oldPrice && (
            <span className="text-xs text-muted-foreground line-through">{product.oldPrice}</span>
          )}
        </div>
      </div>
    </article>
  );
}
