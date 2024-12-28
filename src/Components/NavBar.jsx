
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
        <li><a href="/productos">Productos</a></li>
        <li><a href="/ofertas">Ofertas</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <li><a href="/perfil">Perfil</a></li>
      </ul>

      {/* Widget del carrito */}
      <div className="cart-widget">
        <CartWidget></CartWidget>
      </div>
    </nav>
  );
};

export default Navbar;
