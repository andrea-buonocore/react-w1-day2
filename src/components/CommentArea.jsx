
import ListGroup from 'react-bootstrap/ListGroup';
import CommentList from './CommentList';
import AddComment from "./AddComment";
import { useState, useEffect } from 'react';

const CommentArea = (props) => {

    const [reviews, setReviews] = useState([]);

    const showReviews = async () => {
        let BOOK_URL = 'https://striveschool-api.herokuapp.com/api/comments/';
        try {
            let response = await fetch(BOOK_URL + props.libro, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzgxZmY4MWI0MjAwMTM5YjI4MjAiLCJpYXQiOjE2ODA1NDk1MTEsImV4cCI6MTY4MTc1OTExMX0.JpeHn01Ik-uveeVCbNwZonC5kFnfIJikxy856dc_m0k"
                }
            });
            if (response.ok) {
                let comments = await response.json();
                console.log('comments', comments);
                setReviews(comments);
            }
            else {
                return new Error('Errore nella fetch. Errore n.', response.status);
            }

        }
        catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        console.log('sono useEffect / componentDidMount');
        showReviews();
    },[]); 
    
    
    return (
        <>
            <div className="border border-1 rounded shadow my-3 p-2">
                <p className="text-center fw-bold">REVIEWS:</p>
                <ListGroup>
                    <CommentList reviews={reviews} />
                </ListGroup>
            </div>
            <div className="border border-1 rounded shadow my-3">
                <AddComment libro={props.libro} />
            </div>
        </>
    )
}

export default CommentArea;