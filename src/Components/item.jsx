// Item.jsx
import React from "react";

function Item({ producto }) {
  const { nombre, precio, imagen } = producto;

  const handleVerDetalles = () => {
    console.log("Ver detalles de:", nombre);
  };

  return (
    <div className="item-card">
      <img src={imagen} alt={nombre} className="item-image" />
      <h3 className="item-title">{nombre}</h3>
      <p className="item-price">Precio: ${precio}</p>
      <button className="item-button" onClick={handleVerDetalles}>
        Ver Detalles
      </button>
    </div>
  );
}

export default Item;
