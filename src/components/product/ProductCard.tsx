"use client";

import { Product } from "@/hooks/useCatalog";
import { motion } from "framer-motion";
import { ShoppingBag, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  // Logic for Premium Badges - Updated for Luxury Brands
  const isPremium =
    /Dior|Tom Ford|Medusa|Fendi|Louis Vuitton|Burberry|Hermes|Dolce|Gabbana|Versace|Rolex|Omega/i.test(
      product.name,
    );

  const handleBuyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (product.price === 0) return;
    const phoneNumber = "16824452794"; // Maryte's Number
    // Luxury Format Message
    const message = `¡Hola Maryte! 👋 Estoy interesado en adquirir el artículo de lujo: "${product.name}". Precio listado: $${product.price.toFixed(2)} USD. ¿Podemos gestionar el envío?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100"
    >
      {/* Image Container - Aspect Ratio Square */}
      <div className="relative aspect-square w-full overflow-hidden bg-[hsl(var(--secondary))]">
        <Image
          src={product.image_url || "/placeholder.png"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          priority={index < 6}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />

        {/* Floating Category Badge (Glassmorphism) */}
        {isPremium && (
          <div className="absolute top-3 left-3 bg-[hsl(var(--primary))/0.9] backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm z-10 tracking-widest uppercase">
            Luxury Selection
          </div>
        )}

        {/* New Collection Badge for Calzado (1) & Cinturones (2) */}
        {(product.category_id === 1 || product.category_id === 2) && (
          <div className="absolute bottom-3 right-3 bg-black text-white px-3 py-1 rounded-sm text-[10px] font-bold shadow-md z-10 tracking-widest uppercase border border-white/20">
            Nueva Colección
          </div>
        )}

        {/* Limited Edition Badge */}
        {/Flora|Riviera|Jumbo/i.test(product.name) && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-white px-3 py-1 rounded-sm text-[10px] font-bold shadow-md z-10 tracking-widest uppercase border border-white/20">
            Edición Limitada
          </div>
        )}

        {/* Exclusive Badge for Hermès & Fendi */}
        {/Hermès|Fendi/i.test(product.name) && (
          <div className="absolute top-3 right-3 bg-amber-400 text-black px-3 py-0.5 rounded-sm text-[10px] font-extrabold shadow-lg z-20 tracking-widest uppercase border border-yellow-200">
            ★ EXCLUSIVE
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow relative">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-[hsl(var(--foreground))] mb-2 line-clamp-2 tracking-tight font-serif">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500 font-medium tracking-wide mt-1 line-clamp-2 font-[family-name:var(--font-secondary)]">
            {product.description}
          </p>
        </div>

        <div className="mt-5 flex items-end justify-between border-t border-gray-50 pt-4">
          {product.price === 0 ? (
            <span className="text-sm font-bold text-gray-400 uppercase tracking-wide">
              Próximamente
            </span>
          ) : (
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">
                Precio Exclusive
              </span>
              <span className="text-2xl font-serif font-bold text-[hsl(var(--primary))]">
                ${product.price.toFixed(2)}
              </span>
            </div>
          )}

          {/* Action Button */}
          {product.price === 0 ? (
            <button
              disabled
              className="bg-gray-100 text-gray-400 px-4 py-2 rounded-xl shadow-none cursor-not-allowed flex items-center justify-center gap-2 font-bold text-sm"
            >
              <span>Espera</span>
            </button>
          ) : (
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleBuyClick}
              className="bg-[hsl(var(--foreground))] hover:bg-[hsl(var(--foreground))/0.8] text-white px-5 py-2.5 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 group/btn font-medium text-sm tracking-wide"
            >
              <span>Adquirir</span>
              <ShoppingBag className="w-4 h-4" />
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
