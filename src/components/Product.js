import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { id, title, price, description, images } = product;

  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${id}`}>
        <Card.Img variant="top" src={images[0]} />
      </Link>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>${price}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
