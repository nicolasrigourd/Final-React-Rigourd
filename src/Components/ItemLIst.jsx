// src/Components/ItemList.jsx
import React from "react";
import Item from "./Item"; 

const ItemList = ({ productos }) => {
  return (
    <div className="item-list-style-grid">
      {productos.length > 0 ? (
        productos.map((producto) => (
          <Item key={producto.id} producto={producto} />
        ))
      ) : (
        <p>No se encontraron productos en esta categoría.</p>
      )}
    </div>
  );
};

export default ItemList;
