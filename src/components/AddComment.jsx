import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class AddComment extends Component {

    state = {
        comment: {
            comment: "",
            rate: "",
            elementId: this.props.libro
        }
    }


    sendComment = async () => {
        try {
            let response = await fetch(
              'https://striveschool-api.herokuapp.com/api/comments',
              {
                method: 'POST',
                body: JSON.stringify(this.state.comment),
                headers: {
                  'Content-Type': 'application/json',
                  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzgxZmY4MWI0MjAwMTM5YjI4MjAiLCJpYXQiOjE2ODA1NDk1MTEsImV4cCI6MTY4MTc1OTExMX0.JpeHn01Ik-uveeVCbNwZonC5kFnfIJikxy856dc_m0k"
                },
              }
            )
            // response contiene l'oggetto di tipo Response che ci darà
            // informazione sull'esito della chiamata
            if (response.ok) {
              // codice 200/201, tutto a posto!
              alert('COMMENTO INVIATO CORRETTAMENTE!')
              // svuotiamo il form resettando l'oggetto state
              // al suo valore iniziale!
              this.setState({
                comment: {
                    comment: "",
                    rate: "",
                    elementId: this.props.libro.elementId
                },
              })
            } else {
              // errore nei dati inviati? server in crash?
              console.log('errore nella chiamata :(')
            }
          } catch (error) {
            console.log(error)
          }
    }

    render() {
        return (
            <Form className="p-2" onSubmit={
                (e) => {
                    e.preventDefault();
                    this.sendComment();
                }
            }>
                <Form.Group className="mb-3">
                    <Form.Label>Rate</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Enter rating"  
                        value={this.state.comment.rate}
                        onChange={e => this.setState({comment: {...this.state.comment, rate: e.target.value}})}
                    />

                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Comment</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Leave here your review" 
                        value={this.state.comment.comment}
                        onChange={e => this.setState({comment: {...this.state.comment, comment: e.target.value}})}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default AddComment;