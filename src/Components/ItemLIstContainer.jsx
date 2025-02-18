// src/Components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { productosMock } from '../productos.mock'; 
import ItemList from './ItemList'; 
import AuxComponent from './AuxComponent';

const ItemListContainer = ({ title }) => {
  const { categoriaId } = useParams(); 
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosFiltrados = productosMock.filter(
      (producto) => !categoriaId || producto.categoria === parseInt(categoriaId)
    );
    setProductos(productosFiltrados);
  }, [categoriaId]);
<AuxComponent/>
  return (
    
    <div className="item-list-container">
      {/* Título del contenedor */}
      <h2 className="item-list-title-container">{title}</h2>
      {/* Renderizamos la lista de productos */}
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
