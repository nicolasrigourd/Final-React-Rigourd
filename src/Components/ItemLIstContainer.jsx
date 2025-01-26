
// src/Components/ItemListContainer.jsx
import React from 'react';
import ItemList from './itemList'; // Asegúrate de que este archivo existe y está correctamente nombrado

const ItemListContainer = ({ title }) => {
  return (
    <div className="item-list-container">
      {/* Título del contenedor */}
      <h2 className="item-list-title-container">{title}</h2>
      {/* Renderizamos la lista de productos */}
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
