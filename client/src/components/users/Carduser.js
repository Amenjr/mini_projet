import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../../Redux/actions/Usersaction';

function CardUser({user}) {
    const dispatch=useDispatch();
    const Navigate=useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }} style={{margin:"20px",boxShadow: "12px 12px 12px 12px rgba(56, 56, 56, 0.08)"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={user.pic}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>dispatch(deleteUser(user._id,Navigate))}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
export default CardUser;