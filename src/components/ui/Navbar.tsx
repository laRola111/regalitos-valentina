"use client";

import { useCatalog } from "@/hooks/useCatalog";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const { config, loading } = useCatalog();

  return (
    <nav className="w-full bg-white/70 backdrop-blur-md border-b border-[hsl(var(--primary)/0.2)] sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logovalentinasweb.png"
                alt="Logo Regalitos Valentina"
                width={48}
                height={48}
                className="rounded-full shadow-sm aspect-square hover:opacity-80 transition-opacity duration-300 object-contain"
              />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              href="/"
              className="border-transparent text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/catalogo"
              className="border-transparent text-[hsl(var(--foreground))] hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
            >
              Catálogo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
