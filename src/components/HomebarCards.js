import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export function HomebarCards({ id, name, imgUrl, description }) {

    return(
        <Card className="h-100">
            {/* <Link to={`/${name}`}> */}
            <Link to={`/Filler`}>
            <span className="w-10 position-absolute text-white" style={{bottom: "8px", left: "16px"}}>
                <h6>{description}</h6>
            </span>
            <Card.Img
            variant="top"
            src={imgUrl}
            width="100px"
            height="150px"
            style={{objectFit: "cover"}}
            />
            </Link>
        </Card>
    );
}