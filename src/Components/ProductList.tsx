import useProduct from "../Hooks/useProduct";
import Product from "./Product";

const ProductList: React.FC = () => {
  const { products, loading, error } = useProduct();
  const productList = products.map((product) => {
    return <Product key={product.id} product={product} />;
  });
  return (
    <div className="">
      {loading && <h1>Loading</h1>}
      {error && <h1> ❌{error}</h1>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productList}
      </div>
    </div>
  );
};

export default ProductList;
