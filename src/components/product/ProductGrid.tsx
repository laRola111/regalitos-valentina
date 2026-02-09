"use client";

import { useEffect } from "react";
import { Product } from "@/hooks/useCatalog";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  useEffect(() => {
    products.forEach((product) => {
      const img = new Image();
      img.src = product.image_url;
      img.onerror = () => {
        console.error(
          `[QA CHECK] Broken Image detected: Product ID ${product.id} - URL: ${product.image_url}`,
        );
      };
    });
  }, [products]);

  if (products.length === 0) {
    return (
      <div className="w-full py-12 text-center text-gray-400">
        <p>No hay productos disponibles en esta categoría.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
