import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const SingleComment = (props) => {

    const deleteComment = async () => {
        try{
            console.log(props.comment.elementId);
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${props.comment._id}`, {
                method: 'DELETE',
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzgxZmY4MWI0MjAwMTM5YjI4MjAiLCJpYXQiOjE2ODA1NDk1MTEsImV4cCI6MTY4MTc1OTExMX0.JpeHn01Ik-uveeVCbNwZonC5kFnfIJikxy856dc_m0k"
                }
            })
            if(response.ok){
                alert("Comment deleted successfully!");
            }
            else{
                alert("Something went wrong!");
                return new Error(response.statusText);
            }
        }
        catch(err){
            console.log(err);
        }
    }


    return (
        <ListGroup.Item className='my-2 border border-1 rounded p-1 shadow-sm text-center'>
            <p className='m-0 fw-bold text-warning'>{props.comment.rate} STARS!</p>
            <p className='m-0 text-truncate'>{props.comment.comment}</p>
            <Button variant="danger" onClick={deleteComment} className='my-2'>
                Delete
            </Button>
        </ListGroup.Item>
    )
}

export default SingleComment;