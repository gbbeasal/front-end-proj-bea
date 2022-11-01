import { HomebarCards } from "../components/HomebarCards";
import { HomeProductsCards } from "../components/HomeProductsCards";
import homebarCards from "../data/items.json";
import homeproductsCards from "../data/items2.json";
import { Row, Col } from "react-bootstrap";

export function Home() {
    return(
        <div>
            <div>
                <img src="https://www.muji.com/ph/main/octmain22pc.jpg" alt="" className="pc img-fluid mx-auto d-block" width='100%' height='60%' />
            </div>
            <br/>
            <div className="d-flex justify-content-around">
                <Row md={2} xs={1} lg={4} className="g-3">
                    {homebarCards.map(item => (
                        <Col key={item.id}>
                            <HomebarCards {...item}/>
                        </Col>
                    ))}
                </Row>
            </div>
            <br/><br/>
            <div>
                <h5>Shop for our Products</h5>
                <div className="d-flex justify-content-around">
                <Row md={4} xs={1} lg={6} className="g-3">
                    {homeproductsCards.map(item => (
                        <Col key={item.id}>
                            <HomeProductsCards {...item}/>
                        </Col>
                    ))}
                </Row>
            </div>
            </div>
            <br/><br/>
            <div>
                <span>
                    <h5>Store Info</h5>
                    <h6 className="text-muted text-end">
                        <a href="/Store" class="text-reset">More</a>
                    </h6>
                </span>
                <iframe width="100%" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=muji%20mall%20of%20asia&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="GMap"></iframe>
            </div>
        </div>
    );
}