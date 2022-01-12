import axios from "axios"
import { GET_COMMENTS } from "../types/Commenttype";




export const getComment = ()=>async(dispatch)=>{

    try {
        const res = await axios.get("/comment/comments");
        console.log(res)
        dispatch({type:GET_COMMENTS,payload:res.data})
    } catch (error) {
        console.log(error);
    }

}
export const addComment = (newComment, id)=>async(dispatch)=>{

    
    var token =localStorage.getItem("token")
    
    const config ={
        headers:{
            authorization:token,
        },
    };
    try {
        await axios.post( `/comment/${id}/addComment` ,newComment,config);
        dispatch(getComment())
    } catch (error) {
        console.log(error)
    }
}
export const deleteComment =(id)=>async(dispatch)=>{

    try {
        await axios.delete(`/comment/${id}`);
        dispatch(getComment);
    } catch (error) {
        console.log(error)
    }
}
export const updateComment =(id,updateComment)=>async(dispatch)=>{

    try {
        await axios.put(`/comment/${id}`,updateComment);
        dispatch(getComment);
    } catch (error) {
        console.log(error)
    }
}