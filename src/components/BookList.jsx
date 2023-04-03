import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";
import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";



class BookList extends Component {

    state = {
        search: "",
        filteredBooks: [],
    }



    findBooks = () => {

        this.setState({
            filteredBooks: this.props.horrorB.filter(book => {
    
                return book.title.toLowerCase().includes(this.state.search.toLowerCase())
    
            })

        })
        

        

    }

    render() {
        return (
            <Container>
                <h2 className="my-3">BookList + Single Book</h2>
                <Accordion className='my-3'>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Film Horror</Accordion.Header>
                        <Accordion.Body>
                            <Form
                                className="d-flex"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    console.log('funziona!');
                                    
                                    this.findBooks();
                                }}
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                    value={this.state.search}
                                    onChange={(e) => {
                                        this.setState({
                                            
                                            search: e.target.value
                                        })
                                    }
                                    }
                                />
                                <Button type="submit" variant="outline-success">Search</Button>
                            </Form>
                            <Row xs={1} md={3} lg={5}>
                                {
                                    this.state.filteredBooks.map(book => {
                                        return (
                                            <SingleBook key = {book.asin} libro={book} />
                                        )
                                    })
                                }
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        )
    }
}

export default BookList;