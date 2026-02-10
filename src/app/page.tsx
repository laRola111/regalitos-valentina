"use client";

import { useState, useMemo } from "react";
import { useCatalog } from "@/hooks/useCatalog";
import Navbar from "@/components/ui/Navbar";
import ProductGrid from "@/components/product/ProductGrid";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const { config, categories, products, loading } = useCatalog();
  const [selectedCategory, setSelectedCategory] = useState<number | "all">(
    "all",
  );

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return products;
    return products.filter((p) => p.category_id === selectedCategory);
  }, [selectedCategory, products]);

  return (
    <div className="min-h-screen bg-[hsl(var(--background))]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section - Luxury Gradient & Gold Accents */}
        <section className="relative mb-16 overflow-hidden rounded-3xl bg-black text-white shadow-2xl">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[hsl(var(--primary))] rounded-full blur-[120px] opacity-30"></div>
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-[hsl(var(--accent))] rounded-full blur-[100px] opacity-10"></div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 py-20 px-6 sm:py-32 sm:px-12 text-center"
          >
            <span className="inline-block py-1 px-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs font-bold tracking-[0.2em] uppercase mb-8 text-[hsl(var(--primary))]">
              Exclusive Collection 2026
            </span>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight leading-tight font-[family-name:var(--font-serif)]">
              {config?.store_name || "Regalitos Valentina's"}
              <br />
              <span className="text-[hsl(var(--primary))] italic font-light">
                Luxury Shop
              </span>
            </h1>
            <p className="text-lg sm:text-xl font-light text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-[family-name:var(--font-secondary)]">
              Redefiniendo la elegancia con una selección curada de calzado,
              accesorios y alta costura.
            </p>

            <button className="bg-[hsl(var(--primary))] text-white px-10 py-4 rounded-sm font-bold hover:bg-[hsl(var(--primary))/0.9] transition-all shadow-[0_10px_30px_rgba(0,0,0,0.3)] transform hover:-translate-y-1 tracking-widest uppercase text-sm">
              Ver Catálogo
            </button>
          </motion.div>
        </section>

        {/* Category Filters */}
        <section
          id="products"
          className="mb-12 overflow-x-auto pb-6 scrollbar-hide"
        >
          <div className="flex justify-center flex-wrap gap-3 px-2">
            <FilterButton
              label="✦ Todo"
              isActive={selectedCategory === "all"}
              onClick={() => setSelectedCategory("all")}
            />
            {categories
              .filter((category) =>
                products.some((p) => p.category_id === category.id),
              )
              .map((category) => (
                <FilterButton
                  key={category.id}
                  label={category.name}
                  isActive={selectedCategory === category.id}
                  onClick={() => setSelectedCategory(category.id)}
                />
              ))}
          </div>
        </section>

        {/* Product Grid / Loading State */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10"
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white p-0 rounded-2xl border border-gray-100 flex flex-col h-[400px] overflow-hidden"
                >
                  <div className="bg-gray-200 w-full h-[70%] animate-pulse" />
                  <div className="p-4 space-y-3">
                    <div className="bg-gray-200 h-6 w-3/4 rounded animate-pulse" />
                    <div className="bg-gray-200 h-4 w-1/2 rounded animate-pulse" />
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pb-24"
            >
              <ProductGrid products={filteredProducts} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

// Sub-component for Filter Buttons
function FilterButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 transform
        ${
          isActive
            ? "bg-[hsl(var(--primary))] text-white shadow-xl shadow-[hsl(var(--primary))/0.3] scale-105"
            : "bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-900 border border-gray-100"
        }
      `}
    >
      {label}
    </button>
  );
}
