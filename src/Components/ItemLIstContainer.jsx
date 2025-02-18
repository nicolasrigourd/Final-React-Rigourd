// src/Components/ItemListContainer.jsx
/*
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
      
      <h2 className="item-list-title-container">{title}</h2>
    
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
*/
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../fireBase'; // Asegúrate de importar la función correcta
import ItemList from './ItemList'; 


const ItemListContainer = ({ title }) => {
  const { categoriaId } = useParams(); 
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      const productosList = await getProducts(categoriaId); // Llamamos la función para obtener productos desde Firebase
      setProductos(productosList);
      setLoading(false);
    };

    fetchProductos();
  }, [categoriaId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-list-container">
      <h2 className="item-list-title-container">{title}</h2>
      <ItemList productos={productos} />
    
    </div>
  );
};

export default ItemListContainer;

