// ItemList.jsx
import React, { useState, useEffect } from "react";
import { productosMock } from "../productos.mock"; 
import Item from "../Components/item"; 

function ItemList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    setProducts(productosMock);
    
     setTimeout(() => setProducts(productosMock), 2000);
  }, []);

  return (
    <div className="item-list-grid">
      {products.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default ItemList;
