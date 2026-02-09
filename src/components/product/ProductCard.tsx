"use client";

import { Product } from "@/hooks/useCatalog";
import { motion } from "framer-motion";
import { ShoppingBag, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const isPremium = /Dior|Tom Ford|Medusa|Fendi|Louis Vuitton|Burberry/i.test(
    product.name,
  );

  const handleBuyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const phoneNumber = "573001234567";
    const message = `Hola Valentina, me interesa el producto: ${product.name} (Ref: Imagen ${product.id - 1}). El precio es $${product.price.toFixed(2)} USD. ¿Está disponible?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100"
    >
      {/* Image Container - Aspect Ratio Square */}
      <div className="relative aspect-square w-full overflow-hidden bg-[hsl(var(--secondary))]">
        <img
          src={product.image_url || "/placeholder.png"}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {/* Floating Category Badge (Glassmorphism) */}
        <div className="absolute top-3 left-3 bg-white/30 backdrop-blur-md border border-white/20 text-[hsl(var(--foreground))] px-3 py-1 rounded-full text-xs font-bold shadow-sm z-10">
          Regalo Perfecto 🎁
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow relative">
        <div className="flex-grow">
          {isPremium && (
            <span className="inline-block bg-[hsl(var(--primary))] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm mb-1 tracking-wider uppercase shadow-sm">
              PREMIUM
            </span>
          )}
          <h3 className="text-lg font-black text-[hsl(var(--foreground))] mb-1 line-clamp-2 tracking-tight font-[family-name:var(--font-main)]">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500 font-medium tracking-wide mt-1 line-clamp-2 font-[family-name:var(--font-secondary)]">
            {product.description}
          </p>
        </div>

        <div className="mt-4 flex items-end justify-between">
          {product.price === 0 ? (
            <span className="text-sm font-bold text-[hsl(var(--primary))] uppercase tracking-wide">
              Consultar disponibilidad
            </span>
          ) : (
            <div className="flex flex-col">
              {isPremium && (
                <span className="text-xs text-gray-400 font-medium line-through decoration-red-400">
                  ${(product.price * 1.5).toFixed(2)}
                </span>
              )}
              <span className="text-xl font-semibold text-[hsl(var(--primary))] font-[family-name:var(--font-main)]">
                ${product.price.toFixed(2)}
              </span>
            </div>
          )}

          {/* Action Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleBuyClick}
            className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))/0.9] text-white px-4 py-2 rounded-xl shadow-lg shadow-[hsl(var(--accent))/0.3] transition-colors flex items-center justify-center gap-2 group/btn font-bold text-sm"
          >
            <span>Comprar</span>
            <ShoppingBag className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
