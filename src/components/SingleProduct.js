import { Card, Button } from "react-bootstrap";
import { CartState } from "../context/Context";
import "../styles/catalog.css"

export function SingleProduct({prod}){

    const {
        state: { cart },
        dispatch,
    } = CartState()

    //console.log(cart)

    return(
        <div className="products mx-auto">
            <Card>
                <Card.Img variant="top" src={prod.image} alt={prod.name}/>
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Subtitle style={{ paddingBottom: 10 }}>
                        <span>₱ {prod.price.split(".")[0]}</span>
                    </Card.Subtitle>
                    {/* if prod (p) is inside the cart, then we will render remove from cart only and not add to cart */}
                    {cart.some((p) => p.id === prod.id) ? (
                    <Button
                    variant="danger"
                    onClick={() =>
                        dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                        })
                    }
                    >
                    Remove from Cart
                    </Button>
                    ) : (
                    <Button
                    onClick={() =>
                        dispatch({
                        type: "ADD_TO_CART",
                        payload: prod,
                        })
                    }
                    disabled={!prod.inStock}
                    >
                    {!prod.inStock ? "Out of Stock" : "Add to Cart"}
                    </Button>
                    )}
                </Card.Body>
            </Card>
        </div>
    )
}