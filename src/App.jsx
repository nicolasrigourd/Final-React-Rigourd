// src/App.jsx
import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer title="Listado de Productos" />
      <Footer />
    </>
  );
}

export default App;
