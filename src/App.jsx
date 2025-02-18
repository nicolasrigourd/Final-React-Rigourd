// src/App.jsx
/*
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer title="Listado de Productos" />} />
        <Route
          path="/categoria/:categoriaId"
          element={<ItemListContainer title="Productos de la categoría" />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
*/
/*
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import Footer from "./Components/Footer";
import { productosFire } from "./productosFire"; // Asegúrate de importar tus productos
import { uploadProducts } from "./fireBase"; // Asegúrate de importar la función de subida

function App() {
  // Usamos useEffect para llamar a la función de subida cuando la app se monte
  useEffect(() => {
    // Llama la función para subir productos
    uploadProducts(productosFire);
  }, []); // Solo ejecutará esta acción una vez, al iniciar la app

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer title="Listado de Productos" />} />
        <Route
          path="/categoria/:categoriaId"
          element={<ItemListContainer title="Productos de la categoría" />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
*/
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import Footer from "./Components/Footer";
import { productosFire } from "./productosFire"; // Productos locales
import { uploadProducts, getProducts } from "./fireBase"; // Importar las funciones de Firebase

function App() {
  useEffect(() => {
    const checkAndUploadProducts = async () => {
      const productosList = await getProducts(); // Verificar si hay productos en Firebase
      if (productosList.length === 0) {
        // Solo subimos los productos si la colección está vacía
        uploadProducts(productosFire); 
      }
    };

    checkAndUploadProducts();
  }, []); // Solo ejecutará esta acción una vez, al iniciar la app

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer title="Listado de Productos" />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer title="Productos de la categoría" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
