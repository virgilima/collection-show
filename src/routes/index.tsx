import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Instagram } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { CATEGORIES, PRODUCTS, type Category } from "@/lib/products";
import { STORE, whatsappLink } from "@/lib/config";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verdant Boutique — Vitrine Virtual" },
      {
        name: "description",
        content:
          "Catálogo online da Verdant Boutique. Coleções de vestidos, blusas, alfaiataria e acessórios. Atendimento pelo WhatsApp.",
      },
      { property: "og:title", content: "Verdant Boutique — Vitrine Virtual" },
      {
        property: "og:description",
        content:
          "Descubra as coleções Verdant: peças elegantes com atendimento personalizado pelo WhatsApp.",
      },
    ],
  }),
  component: Vitrine,
});

function Vitrine() {
  const [active, setActive] = useState<Category | "todos">("todos");

  const filtered =
    active === "todos"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.categories.includes(active));

  return (
    <div id="top" className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="container-verdant pt-14 md:pt-20 pb-20">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 space-y-7">
            <p className="eyebrow">Coleção Atual · 2026</p>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.05]">
              Elegância <em className="text-verdant not-italic">que floresce</em> em cada detalhe.
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              Uma vitrine cuidadosamente selecionada das nossas coleções. Escolha sua peça favorita
              e converse diretamente com a gente pelo WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#catalogo"
                className="inline-flex items-center bg-foreground text-background px-6 py-3.5 text-xs tracking-[0.25em] uppercase hover:bg-verdant transition-colors">
                Ver Catálogo
              </a>
              <a href={whatsappLink("catálogo Verdant")} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 border border-foreground px-6 py-3.5 text-xs tracking-[0.25em] uppercase hover:bg-foreground hover:text-background transition-colors">
                <MessageCircle className="h-3.5 w-3.5" /> Falar no WhatsApp
              </a>
            </div>
          </div>

          <div className="md:col-span-7 relative">
            <div className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden">
              <img
                src={heroImg}
                alt="Editorial Verdant"
                width={1600}
                height={1200}
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-6 right-6 bg-background/95 px-6 py-4 max-w-[240px]">
                <p className="eyebrow mb-1">Lançamento</p>
                <p className="font-serif text-lg leading-tight">Coleção Primavera</p>
                <p className="text-xs text-muted-foreground mt-1">Peças limitadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Small brand strip */}
      <section className="border-y border-border/60 bg-verdant-soft/30">
        <div className="container-verdant py-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-2 text-[11px] tracking-[0.28em] uppercase text-muted-foreground">
          <span>Peças exclusivas</span>
          <span className="text-verdant">·</span>
          <span>Atendimento personalizado</span>
          <span className="text-verdant">·</span>
          <span>Entrega para todo o Brasil</span>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalogo" className="container-verdant pt-24 pb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-3">O Catálogo</p>
            <h2 className="font-serif text-4xl md:text-5xl">Nossas coleções</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Toque em qualquer peça para consultar disponibilidade, tamanho e cor pelo WhatsApp.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-border pb-6">
          {CATEGORIES.map((cat) => {
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-4 py-2 text-[11px] tracking-[0.22em] uppercase transition-all ${
                  isActive
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid gap-x-6 gap-y-14 grid-cols-2 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20 font-serif text-xl">
            Em breve, novas peças nesta categoria.
          </p>
        )}
      </section>

      {/* CTA */}
      <section className="container-verdant py-24">
        <div className="relative overflow-hidden bg-foreground text-background px-8 md:px-16 py-16 md:py-24">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="eyebrow" style={{ color: "var(--verdant-soft)" }}>
              Atendimento
            </p>
            <h3 className="font-serif text-4xl md:text-5xl leading-tight">
              Vamos escolher sua próxima peça juntas?
            </h3>
            <p className="text-sm md:text-base opacity-80 leading-relaxed">
              Envie uma mensagem e nossa consultora te ajuda a encontrar o look perfeito,
              tirar dúvidas de tamanho, cor e combinar entrega ou retirada.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <a href={whatsappLink("catálogo Verdant")} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 bg-background text-foreground px-7 py-4 text-xs tracking-[0.25em] uppercase hover:bg-verdant-soft transition-colors">
                <MessageCircle className="h-4 w-4" /> Chamar no WhatsApp
              </a>
              <a href={STORE.instagramUrl} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 border border-background/40 px-7 py-4 text-xs tracking-[0.25em] uppercase hover:bg-background/10 transition-colors">
                <Instagram className="h-4 w-4" /> @{STORE.instagram}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp */}
      <a
        href={whatsappLink("catálogo Verdant")}
        target="_blank"
        rel="noreferrer"
        aria-label="Fale no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-verdant text-primary-foreground shadow-lg hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
