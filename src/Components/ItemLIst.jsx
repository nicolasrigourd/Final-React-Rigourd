
import React from 'react';

const ItemList = ({ title }) => {
   
  return (
    <div className="item-list">
      {/* Título del contenedor */}
      <h2 className="item-list-title">{title}</h2>
         <p className='p'>No hay productos disponibles.</p>
    </div>
  );
};

export default ItemList;

