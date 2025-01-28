// src/Components/NavBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../assets/cart.svg";
import CartWidget from './CartWidget';

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span>MiTienda</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/categoria/1">Smart Tvs</Link></li>
        <li><Link to="/categoria/2">Consolas</Link></li>
        <li><Link to="/categoria/3">Camaras Digitales</Link></li>
        <li><Link to="/categoria/4">Smartphones</Link></li>
        <li><Link to="/categoria/5">Notebooks</Link></li>
      </ul>

      <div className="cart-widget">
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
