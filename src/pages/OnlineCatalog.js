import { SingleProduct } from "../components/SingleProduct";
import { CartState } from "../context/Context";
import "../styles/catalog.css"
import { Button, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function OnlineCatalog() {

    const {
        state: { products }
    } = CartState();
    
    //console.log(products);

    return(
        <div className="ContainerCatalog">
            <h1 className="text-center">MUJI Everyday</h1>
            <div className="lucky">
                <h5>Can't Decide?</h5>
                <Nav.Link as={NavLink} to="/lucky">
                <Button variant="light">Select me!</Button>
                </Nav.Link>
            </div>
            <div className="Catalog">
                <div className="productContainer">
                    {
                        products.map((prod) => {
                        return <SingleProduct prod={prod} key={prod.id}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}