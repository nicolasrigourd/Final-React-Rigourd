
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Genera un ID "casero"
  const generateId = () => {
    // Concatena fecha en milisegundos + un número aleatorio
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };

  const addToCart = (product, cantidad) => {
    setCart((prevCart) => {
      // Si el producto no tiene un ID, genera uno
      const productId = product.id || generateId();

      const existingProduct = prevCart.find((item) => item.id === productId);

      if (existingProduct) {
        // Si existe en el carrito, suma la cantidad
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      } else {
        // Si no existe, agrega un nuevo objeto con ese ID
        return [...prevCart, { ...product, id: productId, cantidad }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};
