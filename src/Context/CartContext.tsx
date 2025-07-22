import React, { createContext, useEffect, useState } from "react";
import type { ProductProps } from "./ProductContext";
type CartProviderProps = {
  children: React.ReactNode;
};
/* eslint-disable react-refresh/only-export-components */
type CartItem = ProductProps & { qty: number };

type CartContextTypes = {
  cart: CartItem[];
  addToCart: (product: ProductProps) => void;
  removeCart: (id: number) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextTypes | null>(null);

const CartContextProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem("cart");

    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: ProductProps) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
