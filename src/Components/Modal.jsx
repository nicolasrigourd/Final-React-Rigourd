
import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../Contexts/CartContext.jsx"; 

const Modal = ({ isOpen, onClose, producto }) => {
  const { addToCart } = useCart(); // Usamos el hook del contexto
  const [cantidad, setCantidad] = useState(1);
  const [subtotal, setSubtotal] = useState(producto.precio);

  useEffect(() => {
    setSubtotal(cantidad * producto.precio);
  }, [cantidad, producto.precio]);

  const handleIncrement = () => {
    if (cantidad < producto.stock) {
      setCantidad(cantidad + 1);
    }
  };

  const handleDecrement = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

const handleAgregarAlCarrito = () => {
  addToCart(producto, cantidad); 
  onClose();
};

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>X</span>
        <h2>{producto.nombre}</h2>
        <img src={producto.imagen} alt={producto.nombre} className="modal-image" />
        <p>{producto.descripcion}</p>
        <p><strong>Precio: ${producto.precio}</strong></p>
        <div className="modal-item-count">
          <ItemCount
            cantidad={cantidad}
            stock={producto.stock}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <p><strong>Subtotal: ${subtotal}</strong></p>
        </div>
        <button className="add-to-cart-button" onClick={handleAgregarAlCarrito}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default Modal;
