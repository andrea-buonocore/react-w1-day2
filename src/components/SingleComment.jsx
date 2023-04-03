import ListGroup from 'react-bootstrap/ListGroup';

const SingleComment = (props) => {
    return (
            <ListGroup.Item className='my-2 border border-1 rounded p-1 shadow-sm'>
                <p className='m-0 fw-bold text-warning'>{props.comment.rate} STARS!</p>
                <p className='m-0 text-truncate'>{props.comment.comment}</p>
            </ListGroup.Item>
    )
}

export default SingleComment;