
import React, { useState } from "react";
import { useCart } from "../Contexts/CartContext";
import { createOrder } from "../fireBase"; 
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  
  const [buyer, setBuyer] = useState({
    nombre: "",
    telefono: "",
    metodoPago: "efectivo",
  });

  // Guardar Id orden
  const [orderId, setOrderId] = useState(null);

  const totalCarrito = cart.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  // target imputs
  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  // No se envia por err
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const newOrder = {
      buyer: {
        nombre: buyer.nombre,
        telefono: buyer.telefono,
        metodoPago: buyer.metodoPago,
      },
      items: cart.map((item) => ({
        id: item.id,
        nombre: item.nombre,
        precio: item.precio,
        cantidad: item.cantidad,
      })),
      date: new Date().toISOString(),
      total: totalCarrito,
    };

    try {
     
      const generatedId = await createOrder(newOrder);

      // Guarda el ID devuelto por Firestore
      setOrderId(generatedId);
      clearCart();
    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
  };

  // Msje checkout
  if (orderId) {
    return (
      <div className="checkout-confirmation">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
        <button onClick={() => navigate("/")}>Volver al inicio</button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-items">
        {cart.map((p) => (
          <div key={p.id}>
            {p.nombre} x {p.cantidad} = ${p.precio * p.cantidad}
          </div>
        ))}
        <div className="checkout-total">
          Total a pagar: ${totalCarrito}
        </div>
      </div>

      
      <form className="checkout-form" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={buyer.nombre}
          onChange={handleChange}
          required
        />

        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={buyer.telefono}
          onChange={handleChange}
          required
        />

        <label htmlFor="metodoPago">Método de Pago:</label>
        <select
          id="metodoPago"
          name="metodoPago"
          value={buyer.metodoPago}
          onChange={handleChange}
        >
          <option value="efectivo">Efectivo</option>
          <option value="tarjeta">Tarjeta</option>
        </select>

        <button type="submit">Confirmar Compra</button>
      </form>
    </div>
  );
};

export default Checkout;
