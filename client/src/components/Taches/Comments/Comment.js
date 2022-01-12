
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { deleteComment, updateComment } from '../../../Redux/actions/Commentaction';
import { useState } from 'react';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
function Comment({comment}) {
   const dispatch = useDispatch();
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const [Comment,setComment]=useState(comment.Comment)
    return (
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <h4>{comment.Comment}</h4>
            <h4>{comment.date}</h4>
            <IconButton aria-label="delete" onClick={()=>dispatch(deleteComment(comment._id))} >
        <DeleteIcon />
            </IconButton>
            <div style={{marginTop:"10px"}}>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Edit Comment
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          <TextField id="standard-basic" label="comment" variant="standard" onChange={(e)=>setComment(e.target.value)} value={Comment} />
          <Button variant="contained" style={{width:"200px",marginLeft:"90px",marginTop:"20px"}} onClick={()=>dispatch(updateComment(comment._id,{Comment}))}>Edit comment</Button>
          </Typography>

        </Box>
      </Modal>
    </div>
        </div>
    )
}

export default Comment
