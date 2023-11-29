import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

function Product() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  console.log(products);

  const addProduct = (product) => {
    dispatch(add(product));
  };

  const card = products.map((product, index) => (
    <div key={index} className="col-md-3">
      <Card key={product.id} style={{ width: "18rem", textAlign: "center" }}>
        <Card.Img
          variant="top"
          src={product.image}
          style={{
            width: "150px",
            height: "200px",
            margin: "auto",
          }}
        />
        <Card.Body>
          <Card.Title> {product.title}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Button onClick={() => addProduct(product)} variant="primary">
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="row">{card}</div>
    </div>
  );
}

export default Product;
