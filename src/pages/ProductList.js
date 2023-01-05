import {useEffect} from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useProductsStore } from '../store';
import axios from 'axios';

const ProductList = () => {
  const products = useProductsStore((state)=> (state.products))
  console.log('products: ', products);

  const fetchedProducts = async () => {
    const res = await axios.get('https://api.escuelajs.co/api/v1/products')
    return res.data
  }

  console.log('FETCHED PRODUCTS: ', fetchedProducts());

  
  return (
    <div>
      <h1>Latest Products</h1>
      {products && (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product.id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ProductList;
