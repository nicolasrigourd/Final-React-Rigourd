
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemLIstContainer.jsx"; 
import Checkout from "./Components/CheckOut.jsx";
import Footer from "./Components/Footer";
import { productosFire } from "./productosFire"; 
import { uploadProducts, getProducts } from "./fireBase";
import { CartProvider } from "./Contexts/CartContext.jsx";
import Cart from "./Components/Cart.jsx";

function App() {
  useEffect(() => {
    const checkAndUploadProducts = async () => {
      const productosList = await getProducts(); 
      if (productosList.length === 0) {
        uploadProducts(productosFire); 
      }
    };

    checkAndUploadProducts();
  }, []); 

  return (
    
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer title="Listado de Productos" />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer title="Productos de la categoría" />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
