import React from 'react'
import { useSelector } from 'react-redux'
import Comment from './Comment'
function ListOfComment() {
    const comments = useSelector(state=>state.CommentReducer.comments)
    return (
        <div>
            <div style={{display:'flex',flexDirection:"column",justifyContent:"space-evenly"}}>
            {comments.map(comment=><Comment comment={comment} key={comment._id}/>)}
        </div>
        </div>
        
    )
}



export default ListOfComment
