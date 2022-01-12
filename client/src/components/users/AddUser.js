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
import { register } from '../../Redux/actions/Authaction'



function AddUser() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[pic,setPic]=useState("");
    const dispatch = useDispatch();
    
    
          
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }} style={{display:"flex",flexDirection:"column",width:"300px",marginLeft:"600px",marginTop:"200px",boxShadow: "12px 12px 12px 12px rgba(56, 56, 56, 0.08)",padding:"30px",borderRadius:"10px"}}>
    <FormControl variant="standard">
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
      <FormControl variant="standard">
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
      <FormControl variant="standard">
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
      <Button variant="contained" style={{width:"100px",marginLeft:"90px"}} onClick={(e)=>{e.preventDefault(); dispatch(register({name,email,password,pic}))}}>Add User</Button>
      </Box>
        
    )
}

export default AddUser
