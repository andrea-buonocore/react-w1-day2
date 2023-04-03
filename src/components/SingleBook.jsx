import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Component } from "react";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
    state = {
        selected:false
    }
    render() {
        return (
            <Col className="my-3">
                <Card 
                    onClick={() => this.setState({ selected:!this.state.selected })}
                    style={{ border: this.state.selected ? '2px solid blue' : '1px solid' }}
                >
                    <Card.Img variant="top" src={this.props.libro.img} className="cardImg" />
                    <Card.Body className='d-flex align-items-center justify-content-center'>
                        <Card.Text className="text-truncate">{this.props.libro.title}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <span className='fw-bold text-muted'><small>€ {this.props.libro.price}</small></span>
                    </Card.Footer>
                </Card>
                {
                    this.state.selected && (<CommentArea libro = {this.props.libro.asin} />)
                }
            </Col>
    
        )
    } 
}

export default SingleBook;