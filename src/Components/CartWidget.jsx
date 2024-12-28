
import React, { useState } from 'react';


const CartWidget = () => {
  const [cartCount, setCartCount] = useState(0); 

  // Función para agregar productos al carrito (simulada)
  const addToCart = () => {
    setCartCount(cartCount + 1); // Incrementa el contador del carrito
  };

  return (
    <div className="cart-widget">
      <button className="cart-button" onClick={addToCart}> {/*Lo uso solo para probar el span*/}
        <img 
          src="https://img.icons8.com/ios-filled/50/000000/shopping-cart.png" 
          alt="Carrito"
          className="cart-icon"
        />
        
        {cartCount >= 0 && <span className="cart-count">{cartCount}</span>}
      </button>
    </div>
  );
};

export default CartWidget;
