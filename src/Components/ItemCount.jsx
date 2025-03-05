
import React from "react";

const ItemCount = ({ cantidad, stock, onIncrement, onDecrement }) => {
  // Probamos si las props cantidad y stock se pasan correctamente
  console.log("cantidad:", cantidad, "stock:", stock);

  return (
    <div className="item-count">
      <button onClick={onDecrement} disabled={cantidad === 1}>-</button>
      <span>{cantidad}</span>
      <button onClick={onIncrement} disabled={cantidad === stock}>+</button>
      <p>Stock disponible: {stock}</p>
    </div>
  );
};

export default ItemCount;
