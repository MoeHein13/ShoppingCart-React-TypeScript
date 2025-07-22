import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ProductProvider } from "./Context/ProductContext.tsx";
import CartContextProvider from "./Context/CartContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProductProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductProvider>
  </StrictMode>
);
