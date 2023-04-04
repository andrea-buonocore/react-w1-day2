import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import CommentArea from "./CommentArea";
import {useState} from "react";

const SingleBook = (props) => {

    const [selected, setSelected] = useState(false);
    
        return (
            <Col className="my-3">
                <Card 
                    onClick={() => setSelected(!selected)}
                    style={{ border: selected ? '2px solid blue' : '1px solid' }}
                >
                    <Card.Img variant="top" src={props.libro.img} className="cardImg" />
                    <Card.Body className='d-flex align-items-center justify-content-center'>
                        <Card.Text className="text-truncate">{props.libro.title}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <span className='fw-bold text-muted'><small>€ {props.libro.price}</small></span>
                    </Card.Footer>
                </Card>
                {
                    selected && (<CommentArea libro = {props.libro.asin} />)
                }
            </Col>
    
        )
}

export default SingleBook;