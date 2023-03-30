import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";


const SingleBook = (props) => {
    return (
        <Col className="my-3">
            <Card key={props.libro.asin} className="h-100">
                <Card.Img variant="top" src={props.libro.img} className="cardImg" />
                <Card.Body className='d-flex align-items-center justify-content-center'>
                    <Card.Title>{props.libro.title}</Card.Title>
                </Card.Body>
                <Card.Footer>
                    <span className='fw-bold'>€ {props.libro.price}</span>
                </Card.Footer>
            </Card>

        </Col>

    )
}

export default SingleBook;