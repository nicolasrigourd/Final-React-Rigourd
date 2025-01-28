// src/App.jsx
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
