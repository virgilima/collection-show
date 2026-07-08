// Configurações da loja — edite aqui para personalizar
export const STORE = {
  name: "Verdant",
  tagline: "Elegância que floresce",
  instagram: "verdant.loja",
  instagramUrl: "https://instagram.com/verdant.loja",
  // ⚠️ Substitua pelo número real da loja (formato internacional, apenas dígitos)
  whatsapp: "5511999999999",
};

export function whatsappLink(productName: string, price?: string) {
  const msg = `Olá! Tenho interesse na peça "${productName}"${price ? ` (${price})` : ""} do catálogo Verdant. Poderia me passar mais informações?`;
  return `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(msg)}`;
}
