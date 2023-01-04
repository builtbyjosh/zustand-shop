import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../productsData';

const ProductList = () => {
  console.log('products: ', products);
  return (
    <div>
      <h1>Latest Products</h1>
      {products && (
        <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      )}
      
    </div>
  );
};

export default ProductList;
