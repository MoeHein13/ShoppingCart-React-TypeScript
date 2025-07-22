import Header from "./Components/Header";
import ProductList from "./Components/ProductList";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="min-h-screen p-6 bg-gray-100">
        <h1 className="font-bold text-3xl mb-6">Shopping Cart UI Project</h1>

        <ProductList />
      </div>
    </div>
  );
};

export default App;
