import React, { useState,useContext, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, IconButton } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchMoviesWithQuery } from '../../redux/Movies/moviesAction';
import { IMDBContext } from '../../Context'
import "./card.css"

function PersonalCard({name,img,role,summary,dob,gender,id,yes}) {
  const [show, setShow] = useState(false);
  
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const{baseUrl}=useContext(IMDBContext)
  const[user,setUser]=useState("")
  useEffect(()=>{
    setUser(localStorage.getItem("name"))
  },[])
  return (
    <div>
        <Card sx={{ maxWidth: 250 }}
        className='card' id="card">
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={img}
          alt={name}
          style={{borderRadius:"5%"}}
          value={name}
          onClick={(e)=>{dispatch(fetchMoviesWithQuery(baseUrl,name));
            navigate(`/selMovie/${name}`)}}
        />
        <CardContent height="200">
          <Typography gutterBottom variant="p" component="div"
          style={{fontWeight:"bolder",color:"black"}}>
            {name}
          </Typography>
          <Typography gutterBottom variant="p" component="div"
          style={{fontWeight:"bolder",color:"black"}}>
            {role}
          </Typography>
          {dob?<Typography gutterBottom variant="p" component="div"
          style={{fontWeight:"bolder",color:"black"}}>
            Data of Birth :{ dob}
          </Typography>:""}
          {gender?<Typography gutterBottom variant="p" component="div"
          style={{fontWeight:"bolder",color:"black"}}>
            Gender : { gender}
          </Typography>:""}
          {summary?<IconButton color="primary" onClick={() => setShow(!show)} 
                    aria-label="toggle summary">
                        {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>:""}
          
          {show ? <p className='movie-summary'>{summary}</p> : null}
        </CardContent>
        {
          user?<CardActions style={{display:"flex"}}>
          {yes?<div style={{flex:"1"}}><button type="" className='btn-update'
              onClick={()=>navigate(`/updateProducer/${id}`)}>Update</button></div>:
              <div style={{flex:"1"}}><button type="" className='btn-update'
              onClick={()=>navigate(`/updateActor/${id}`)}>Update</button></div>} 
                 </CardActions>:""
        }
        
      </CardActionArea>
    </Card>
    </div>
  )
}

export default PersonalCard