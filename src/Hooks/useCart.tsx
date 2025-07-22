import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

const useCart = () => {
  const cart = useContext(CartContext);

  if (!cart) {
    throw new Error("Erro loading cart");
  }
  return cart;
};

export default useCart;
