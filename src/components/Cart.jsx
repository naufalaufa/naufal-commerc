import { useSelector } from "react-redux";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { deleted } from "../store/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const removeItem = (id) => {
    dispatch(deleted(id));
  };
  const viewProduct = useSelector((state) => state.user);
  const cartProduct = viewProduct.map((product, index) => (
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
          <Button onClick={() => removeItem(product.id)} variant="danger">
            Delete Product
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return <div className="row">{cartProduct}</div>;
}

export default Cart;
