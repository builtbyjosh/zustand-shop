import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const {id} = useParams()
  console.log('id: ', id)
  return <div>ProductPage</div>;
};

export default ProductPage;
