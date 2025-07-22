/* eslint-disable react-refresh/only-export-components */

import { createContext, useEffect, useState } from "react";

import axios from "axios";

type ProductProviderProps = {
  children: React.ReactNode;
};

type UserContextTypes = {
  products: ProductProps[];
  loading: boolean;
  error: string | null;
};
export type ProductProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  rating: number;
  image: string;
};
export const ProductContext = createContext<UserContextTypes | null>(null);

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const mainProducts = async () => {
    const API_URL = import.meta.env.PROD
      ? "https://shoppin-cart-vercel-api.vercel.app/api/products"
      : "/api/products";
    try {
      const response = await axios.get(`${API_URL}`);
      setProducts(response.data);
      // console.log(response.data);
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Error Fetching Data Occurs"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    mainProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};
