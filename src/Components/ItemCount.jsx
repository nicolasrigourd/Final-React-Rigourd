import React from "react";

const ItemCount = ({ cantidad, stock, onIncrement, onDecrement }) => {
  return (
    <div className="item-count">
      <button onClick={onDecrement} disabled={cantidad <= 1}>-</button>
      <span>{cantidad}</span>
      <button onClick={onIncrement} disabled={cantidad >= stock}>+</button>
    </div>
  );
};

export default ItemCount;
