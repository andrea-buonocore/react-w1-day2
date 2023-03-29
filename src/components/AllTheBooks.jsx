import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

import fantasyBooks from '../data/fantasy.json'
import historyBooks from '../data/history.json'

const AllTheBooks = () => {



    return (
        <Container className='allTheBooksContainer'>

            <Accordion defaultActiveKey="0" className='my-3'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Film Fantasy</Accordion.Header>
                    <Accordion.Body>


                        <Row className='row-cols-2 row-cols-md-3 row-cols-lg-5 my-3'>

                            {
                                fantasyBooks.map(book => {
                                    return (

                                        <Col key={book.asin} className='my-3' >
                                            <Card  className="h-100">
                                                <Card.Img variant="top" src={book.img} className="cardImg" />
                                                <Card.Body className='d-flex align-items-center justify-content-center'>
                                                    <Card.Title>{book.title}</Card.Title>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <span className='fw-bold'>€ {book.price}</span>
                                                </Card.Footer>
                                            </Card>

                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey="0" className='my-3'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Film History</Accordion.Header>
                    <Accordion.Body>


                        <Row className='row-cols-1 row-cols-md-3 row-cols-lg-5 my-3'>

                            {
                                historyBooks.map(book => {
                                    return (

                                        <Col className='my-3'>
                                            <Card key={book.asin} className="h-100">
                                                <Card.Img variant="top" src={book.img} className="cardImg" />
                                                <Card.Body className='d-flex align-items-center justify-content-center'>
                                                    <Card.Title>{book.title}</Card.Title>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <span className='fw-bold'>€ {book.price}</span>
                                                </Card.Footer>
                                            </Card>

                                        </Col>
                                    )
                                })
                            }
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}

export default AllTheBooks;
