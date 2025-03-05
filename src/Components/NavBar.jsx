
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { useCart } from '../Contexts/CartContext'; 

const Navbar = () => {
  
  const { cart } = useCart(); 
  const cartCount = cart.reduce((total, item) => total + item.cantidad, 0);

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
        <CartWidget cartCount={cartCount} />
      </div>
    </nav>
  );
};

export default Navbar;
