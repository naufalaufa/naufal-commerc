import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavBar() {
  const productLength = useSelector((state) => state.user);
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">redux toolkit</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
          <Nav>
            <Nav.Link to="/" as={Link}>
              Product
            </Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav.Link to="/cart" as={Link}>
                <span
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    padding: "5px",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                >
                  My Bag {productLength.length}
                </span>
              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
