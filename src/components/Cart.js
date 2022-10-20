import { useState, useEffect } from "react"
import { ListGroup, Button, Row, Col, Form, Image, Nav } from "react-bootstrap"
import { CartState } from "../context/Context"
import "../styles/catalog.css"
import { NavLink } from "react-router-dom";
// import { useStripe } from "@stripe/react-stripe-js";
// import { fetchFromAPI } from "../context/helpers";

export function Cart() {

    const {state: {cart}, dispatch} = CartState();
    const [total, setTotal] = useState();
    // const [email, setEmail] = useState("");
    // const stripe = useStripe();

    // const handleGuestCheckout = async (e) => {
    //     e.prevent.default();

        // const line_items = cart.map(item => {
        //     return {
        //         quantity: item.qty,
        //         price_data:{
        //             currency: 'usd',
        //             unit_amount: item.price * 100,
        //             product_data: {
        //                 name: item.name,
        //                 images: [item.image]
        //             }
        //         }
        //     }
        // });


    //     const response = await fetchFromAPI('create-checkout-session', {
    //         body: { line_items, customer_email:email},
    //     });

    //     const { sessionId } = response;
    //     const { error } = await stripe.redirectToCheckout({
    //         sessionId
    //     });

    //     if (error) {
    //         console.log(error)
    //     }

    // }

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
                    {/* <Form onSubmit={handleGuestCheckout}>
                        <div>
                            <input type='email' onChange={e => setEmail(e.target.value)} placeholder="Email" value={email} className="nomad-input"/>
                        </div> */}
                    <Nav.Link as={NavLink} to="/checkout">
                    <Button type="submit" variant="success" disabled={cart.length === 0}>
                    Proceed to Checkout
                    </Button>
                    </Nav.Link>
                    {/* </Form> */}
                </div>
            </div>

        </div>
    )
}