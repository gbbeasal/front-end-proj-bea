import { useState, useEffect } from "react"
import { ListGroup, Button, Row, Col, Form, Image, Nav } from "react-bootstrap"
import { CartState } from "../context/Context"
import "../styles/catalog.css"
import { NavLink } from "react-router-dom";

export function Cart() {

    const {state: {cart}, dispatch} = CartState();
    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(
          cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
      }, [cart]);

      //console.log(cart)

    return(
        <div className="Catalog">
            <div className="productContainer">
                <ListGroup>
                    {
                        cart.map(prod => (
                            <ListGroup.Item key={prod.id}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={prod.image} alt={prod.name} fluid rounded />
                                    </Col>
                                    <Col md={2} xs={1} lg={4}>
                                        <span>{prod.name} </span>
                                    </Col>
                                    <Col>{prod.price}</Col>
                                    <Col md={2}>
                                        <Form.Control as="select" value={prod.qty} onChange={(e) => dispatch({
                                            type: "CHANGE_CART_QTY",
                                            payload: {
                                                id: prod.id,
                                                qty: e.target.value,
                                            },
                                        })
                                    }>
                                        {[...Array(prod.inStock).keys()].map((x) => (
                                            <option key={x + 1}>{x + 1}</option>
                                            ))}
                                        </Form.Control>
                                    </Col>
                                    <Col>
                                    <Button
                                        variant="danger"
                                        onClick={() =>
                                            dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: prod,
                                            })
                                        }
                                        >
                                        X
                                    </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
                <div className="subtotal">
                    <span className="title">Subtotal ({cart.length} items)</span>
                    <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₱ {total}</span>
                    <Nav.Link as={NavLink} to="/checkout">
                    <Button type="submit" variant="success" disabled={cart.length === 0}>
                    Proceed to Checkout
                    </Button>
                    </Nav.Link>
                </div>
            </div>

        </div>
    )
}