
import React, { useState } from 'react';
import "../assets/cart.svg"
import CartWidget from './CartWidget';

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0); 

  // Función para aumentar el número de artículos en el carrito (para prueba)
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span>MiTienda</span>
      </div>
      <ul className="nav-links">
        <li><a href="/productos">Smart Tvs</a></li>
        <li><a href="/ofertas">Consolas</a></li>
        <li><a href="/contacto">Camaras Digitales</a></li>
        <li><a href="/perfil">Smartphones</a></li>
        <li><a href="/perfil">Notebooks</a></li>
      </ul>

      {/* Widget del carrito */}
      <div className="cart-widget">
        <CartWidget></CartWidget>
      </div>
    </nav>
  );
};

export default Navbar;
