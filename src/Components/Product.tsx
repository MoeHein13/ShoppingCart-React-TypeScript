import type { ProductProps } from "../Context/ProductContext";
import useCart from "../Hooks/useCart";

type ProductCompoProp = {
  product: ProductProps;
};

const Product = ({ product }: ProductCompoProp) => {
  const { addToCart } = useCart();
  return (
    <div className="bg-white rounded-lg shawdow p-4 flex flex-col gap-2">
      <div className="text-center text-xl font-semibold">{product.name}</div>
      <img
        src={product.image}
        alt={product.name}
        className="h-40 object-cover rounded mb-4"
      />
      <p className="text-gray-500 text-sm mb-2">{product.description}</p>

      <div className="flex justify-between px-3">
        <p className="text-semibold text-lg">$ {product.price.toFixed(2)}</p>
        <p>rating : {product.rating}</p>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white cursor-pointer "
      >
        Add to cart
      </button>
    </div>
  );
};

export default Product;
