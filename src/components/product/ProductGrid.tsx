"use client";
import { Product } from "@/hooks/useCatalog";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="w-full py-12 text-center text-gray-400">
        <p>No hay productos disponibles en esta categoría.</p>
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      layout
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
    >
      {products.map((product, index) => (
        <motion.div key={product.id} variants={item} layout>
          <ProductCard product={product} index={index} />
        </motion.div>
      ))}
    </motion.div>
  );
}
