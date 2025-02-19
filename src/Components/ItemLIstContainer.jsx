
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../fireBase'; 
import ItemList from './ItemList'; 


const ItemListContainer = ({ title }) => {
  const { categoriaId } = useParams(); 
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      const productosList = await getProducts(categoriaId); 
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

