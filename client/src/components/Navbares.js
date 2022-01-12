import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {   getCurrent, logout, register } from '../Redux/actions/Authaction';
import { gettache } from '../Redux/actions/Tacheaction';
import { getUser } from '../Redux/actions/Usersaction';
import {useEffect} from 'react'
function NavBar() {
    const dispatch = useDispatch();
    const Navigate=useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    
    const token =localStorage.getItem("token");
   
useEffect(() => {
  
dispatch( getCurrent())
}, [])

   const user = useSelector(state=> state.AuthReducer.user)
  return (
    <Box sx={{ flexGrow: 2 }}>
     
      <AppBar position="static" >
        
            {(token&& user.role==="user" ) ? <Toolbar>
        <Link to="/Profile">
        <Typography variant="h5" component="div" sx={{ flexGrow: 0.1 }} style={{marginRight:"20px"}} >
          Home 
        </Typography>
        </Link>
          <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{color:"white",fontFamily:"sans-serif",fontSize:"20px"}}
      >
        Task
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      <Link to="/Profile/addtache"> <MenuItem onClick={handleClose}>Add</MenuItem></Link>
       
      <Link to="/Profile/taches"> <MenuItem onClick={()=>dispatch(gettache())}>Show</MenuItem></Link>

        
      </Menu>
    </div>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
          </Typography>
          <Button color="inherit" onClick={()=>dispatch(logout(Navigate))}>Log Out</Button>
          </Toolbar>
          :
          (token && user.role==="admin")?
          <Toolbar>
        <Link to="/Profile">
        <Typography variant="h5" component="div" sx={{ flexGrow: 0.1 }} style={{marginRight:"20px"}} >
          Home {user.role}
        </Typography>
        </Link>
          <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{color:"white",fontFamily:"sans-serif",fontSize:"20px"}}
      >
        Task
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      <Link to="/Profile/addtache"> <MenuItem onClick={handleClose}>Add</MenuItem></Link>
       
      <Link to="/Profile/taches"> <MenuItem onClick={()=>dispatch(gettache())}>Show</MenuItem></Link>

        
      </Menu>
    </div>
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
    <Link to="/Profile/users"><Button style={{color:"white",fontFamily:"sans-serif",fontSize:"20px"}} onClick={()=>dispatch(getUser())}>User</Button></Link> 
    <Link to="/Profile/AddUser">  <Button style={{color:"white",fontFamily:"sans-serif",fontSize:"20px"}}onClick={()=>dispatch(register())}>Add User</Button></Link>
    </div>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
          </Typography>
          <Button color="inherit" onClick={()=>dispatch(logout(Navigate))}>Log Out</Button>
          </Toolbar>
          

          :
        <Toolbar>
       
        <Link to="/">
              <Button color="inherit">Home</Button>
          </Link>
        <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
          </Typography>
           <Link to="/signIn"><Button color="inherit">Sign In</Button></Link>
           <Link to="/signUp"> <Button color="inherit">Sign Up</Button></Link>
           </Toolbar>}
      </AppBar>
    </Box>
  );
}
export default NavBar;