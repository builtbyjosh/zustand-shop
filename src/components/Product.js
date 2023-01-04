import { Button, Card } from 'react-bootstrap';

const Product = ({ product }) => {
  const { id, title, price, description, images } = product;

  return (
    <Card style={{ width: '18rem' }} id={id}>
      <Card.Img variant="top" src={images[0]} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>${price}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
