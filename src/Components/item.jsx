import React, { useState } from "react";
import Modal from "./Modal";

function Item({ producto }) {
  const { nombre, precio, imagen, descripcion } = producto;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVerDetalles = () => {
    setIsModalOpen(true); // Abre el modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Cierra el modal
  };

  return (
    <div className="item-card">
      <img src={imagen} alt={nombre} className="item-image" />
      <h3 className="item-title">{nombre}</h3>
      <p className="item-price">Precio: ${precio}</p>
      <button className="item-button" onClick={handleVerDetalles}>
        Ver Detalles
      </button>

      {/* Renderizamos el modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        producto={{ nombre, precio, descripcion, imagen }}
      />
    </div>
  );
}

export default Item;


