import { useState, useEffect } from "react";
// import { supabase } from "@/lib/supabase"; // Supabase disabled for presale
import {
  MOCK_CONFIG,
  MOCK_CATEGORIES,
  MOCK_PRODUCTS,
} from "@/constants/mockProducts";

export interface Config {
  id: number;
  store_name: string;
  whatsapp_number: string;
}

export interface Category {
  id: number;
  name: string;
  display_order: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category_id: number;
  in_stock: boolean;
}

type CatalogData = {
  config: Config | null;
  categories: Category[];
  products: Product[];
  loading: boolean;
  error: string | null;
};

export const useCatalog = () => {
  const [data, setData] = useState<CatalogData>({
    config: null,
    categories: [],
    products: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    setData({
      config: MOCK_CONFIG,
      categories: MOCK_CATEGORIES,
      products: MOCK_PRODUCTS,
      loading: false, // Immediate Load
      error: null,
    });
  }, []);

  return data;
};
