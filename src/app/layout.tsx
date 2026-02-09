import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/ui/CartDrawer";

const fontMain = Montserrat({
  variable: "--font-main",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const fontSecondary = Inter({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Regalitos Valentina's | Luxury Shop",
  description: "Detalles que enamoran",
  icons: {
    icon: "/logovalentinasweb.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${fontMain.variable} ${fontSecondary.variable} antialiased bg-[hsl(var(--background))] text-[hsl(var(--foreground))]`}
      >
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
