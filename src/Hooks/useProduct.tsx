import { ProductContext } from "../Context/ProductContext";
import { useContext } from "react";

const useProduct = () => {
  const product = useContext(ProductContext);

  if (!product) {
    throw new Error("error loading product ");
  }
  return product;
};

export default useProduct;
