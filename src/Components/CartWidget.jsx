import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Contexts/CartContext";

const CartWidget = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, product) => acc + (product.cantidad || 0), 0);

  console.log("Contenido del carrito:", cart); // Probando dep carrito

  return (
    <div className="cart-widget">
      <Link to="/cart">
        <button className="cart-button">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png"
            alt="Carrito"
            className="cart-icon"
          />
        
          <span className="cart-count">{totalItems > 0 ? totalItems : 0}</span>
        </button>
      </Link>
    </div>
  );
};

export default CartWidget;
