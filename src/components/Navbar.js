import { Badge, Container, Nav, Navbar as NavbarBS } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CartState } from "../context/Context";

export function Navbar(){

    const {state: { cart } } =  CartState();

    return(
        <NavbarBS className="bg-white">
            <Container>
                <Nav className="me-auto align-items-center justify-content-space-between">
                <Nav.Link as={NavLink} to="/">
                    <img src='../media/muji-logo.png' alt="MUJI Logo" width={125} height={30} />
                </Nav.Link>
                <Nav.Link as={NavLink} to="/OnlineCatalog">Online Catalog</Nav.Link>
                <Nav.Link as={NavLink} to="/Store">Store Info</Nav.Link>
                <Nav.Link as={NavLink} to="/About">About MUJI</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to="/cart">
                        <button style={{background:"#7F0019", border:"none", padding:"5px"}}>
                            <FaShoppingCart color="white" fontSize="25px"/>
                            <Badge bg='none'>{cart.length}</Badge>
                        </button>
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarBS>
    );
}