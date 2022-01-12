import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useState } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {useDispatch} from 'react-redux';
import { register } from '../Redux/actions/Authaction';
import { useNavigate } from 'react-router-dom';
import signup from './undraw_authentication_fsn5.png'
 function SignUp() {
     const[name,setName]=useState("");
     const[email,setEmail]=useState("");
     const[password,setPassword]=useState("");
     const[pic,setPic]=useState("");
     const dispatch = useDispatch();
     const Navigate = useNavigate();
  return (
    <div style={{display:"flex",marginLeft:"5px"}}>
    <img src={signup} alt="logo" style={{height:"613px",width:"1150px"}}/>  
    <Box sx={{ '& > :not(style)': { m: 1 } }} style={{display:"flex",flexDirection:"column",width:"300px",height:"613px",boxShadow: "12px 12px 12px 12px rgba(56, 56, 56, 0.08)",padding:"30px",borderRadius:"10px"}}>
    <FormControl variant="standard"style={{marginTop:"100px",height:"80px"}}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Enter your Name
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          onChange={(e)=>setName(e.target.value)}
          value={name}
        />
    </FormControl>
      <FormControl variant="standard" style={{height:"80px"}}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Enter your Email
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          onChange={(e)=>setEmail(e.target.value)}
          value={email}
        />
      </FormControl>
      <FormControl variant="standard" style={{height:"80px"}}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Enter your Password
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          type='password'
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
        />
      </FormControl>
      <FormControl variant="standard"style={{height:"80px"}}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Enter your Picture
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
          
          onChange={(e)=>setPic(e.target.value)}
          value={pic}
        />
    </FormControl>
      <Button variant="contained" style={{width:"200px",marginLeft:"50px",height:"60px",marginTop:"20px",borderRadius:"15px"}} onClick={(e)=>{e.preventDefault(); dispatch(register({name,email,password,pic},Navigate))}}>Sign Up</Button>
    </Box>
    </div>
  );
}
export default SignUp;