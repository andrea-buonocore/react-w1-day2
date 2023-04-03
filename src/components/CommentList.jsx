

import SingleComment from './SingleComment'
const CommentList = (props) => {
    return (
        props.reviews.map(comment => {
            return (
                <SingleComment comment = {comment}/>
            )
        })
    )
}

export default CommentList;