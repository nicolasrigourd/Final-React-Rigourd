

import React, { useEffect } from 'react';
import { useCart } from '../Contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Contenido del carrito:", cart);
  }, [cart]);

  const totalCarrito = cart.reduce(
    (total, product) => total + product.precio * product.cantidad,
    0
  );

  const handleFinalizarCompra = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((product) => (
              <div className="cart-item" key={product.id}>
                <img src={product.imagen} alt={product.nombre} />
                <div className="cart-item-info">
                  <p>Producto: {product.nombre}</p>
                  <p>Precio unitario: ${product.precio}</p>
                  <p>Cantidad: {product.cantidad}</p>
                  <p>Subtotal: ${product.precio * product.cantidad}</p>
                </div>
                <div className="cart-actions">
                  <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total a pagar: ${totalCarrito}</h3>
            <button className="btn-clear" onClick={clearCart}>
              VACIAR CARRITO
            </button>
            <button className="btn-finish" onClick={handleFinalizarCompra}>
              FINALIZAR COMPRA
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
