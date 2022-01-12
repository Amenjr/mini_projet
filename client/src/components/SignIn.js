import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useState } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {useDispatch} from'react-redux';
import { login } from '../Redux/actions/Authaction';
import { useNavigate } from 'react-router-dom';
import signin from './undraw_Welcome_re_h3d9.png'
 function SignIn() {
     const[email,setEmail]=useState("");
     const[password,setPassword]=useState("");
     const dispatch = useDispatch();
    const Navigate = useNavigate();
  return (
    <div style={{display:"flex",marginLeft:"5px"}}>
    <img src={signin} alt="logo" style={{height:"613px",width:"1150px"}}/>  
    <Box sx={{ '& > :not(style)': { m: 1 } }} style={{display:"flex",flexDirection:"column",width:"300px",height:"613px",boxShadow: "12px 12px 12px 12px rgba(56, 56, 56, 0.08)",padding:"30px",borderRadius:"10px"}}>
      <FormControl variant="standard"style={{marginTop:"200px",height:"80px"}}>
        <InputLabel htmlFor="input-with-icon-adornment" >
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
      <FormControl variant="standard">
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
      <Button variant="contained" style={{width:"200px",marginLeft:"50px",height:"60px",marginTop:"50px",borderRadius:"15px"}} onClick={(e)=>{e.preventDefault();dispatch(login({email,password},Navigate))}}>Sign In</Button>
    </Box>
    </div>
  );
}
export default SignIn;