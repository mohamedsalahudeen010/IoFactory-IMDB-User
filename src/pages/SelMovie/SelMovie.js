import React, { useContext, useEffect, useState } from 'react'
import { IMDBContext } from '../../Context'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies, fetchMoviesWithQuery } from '../../redux/Movies/moviesAction'
import { addWishList } from '../../redux/wishList/wishListAction'
import NavBar from '../../Components/NavBar/NavBar'
import { MovieCard } from '../../Components/Movie/MovieCard'
import IconButton from '@mui/material/IconButton';
import Carousel from 'react-bootstrap/Carousel';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import { useNavigate, useParams } from 'react-router-dom'
import PersonalCard from '../../Components/personalCard/PersonalCard'
import { Button, CardContent, Typography } from '@mui/material'
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function SelMovie() {
   
    const [wish, setWish] = useState(false)
    const{pics,baseUrl}=useContext(IMDBContext)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const {id}=useParams()    
    const movieList=useSelector((movies)=>movies.movies.movies)
    
    const wishList=useSelector((wish)=>wish.wishlist.movies)

    let actor=useSelector((actor)=>actor.actors.actors)
    let producer=useSelector((producer)=>producer.producer.producers)
    actor=actor.filter((ele)=>ele.name===id)
    producer=producer.filter((ele)=>ele.name===id)
    let data
    actor.length>0?data=actor[0]:data=producer[0]

   const handleWish=(id)=>{
    let wish=movieList.filter((movie,idx)=>(movie._id===id))

    let updatedWishList=wish
    
    dispatch(addWishList(baseUrl,updatedWishList))
   }
    
    return (
        <div className="movieListPage" style={{paddingTop:"2rem"}}>
            <NavBar></NavBar>
            <div className='carousel-land'>
           <Carousel >
           { pics.map((img,idx)=>(
           <Carousel.Item key={idx} >
           <img
           className="d-block"
            src={img}
            alt="First slide"
          style={{width:"100vw",height:"40vh"}}></img>
         </Carousel.Item>
      )) }
      <div>
      
      </div>
   
    </Carousel>
    </div>
    <div className='row' style={{display:"flex"}}>
    <div className="col"
    style={{flex:"2",marginLeft:"5rem"}}><PersonalCard name={data.name} img={data.image}
        /></div>
        <div className="col selMovie-card"
        style={{margin:"1rem",flex:"4"}}>
        <CardContent>
        <Typography variant="body2" style={{padding:"1rem",fontSize:"1rem",fontWeight:"bolder"}}>
            Name : {data.name}
      </Typography>
      <Typography variant="body2" style={{padding:"1rem",fontSize:"1rem",fontWeight:"bolder"}}>
            Date of Birth : {data.dob}
      </Typography>
      <Typography variant="body2" style={{padding:"1rem",fontSize:"1rem",fontWeight:"bolder"}}>
            Gender : {data.gender}
      </Typography>
      <Typography variant="body2" style={{padding:"1rem",fontSize:"1rem",fontWeight:"bolder"}}>
            Bio : {data.Bio}
      </Typography>
    </CardContent>
        </div>
        <div
        style={{paddingTop:"2rem"}}><Button
            startIcon={<KeyboardBackspaceIcon />}
            variant="contained"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </Button></div>
    </div>
    <div style={{paddingTop:"2rem"}}>
    <div className='heading'><h1>Movies</h1></div>
            <div className='movie-list'>
             
                {movieList && movieList.map((movie) => (
                    <div key={movie._id}>
                        <MovieCard
                            movie={movie}
                            id={movie._id}
                            wishList={
                                <IconButton 
                                sx={{marginLeft: "auto"}}
                                aria-label="wishlist"
                                 color={wish?"secondary":"primary"}
                                 onClick={()=>handleWish(movie._id)}>
                                   <PlaylistAddCheckCircleIcon/>
                                </IconButton>
                            } />
                    </div>
                ))}
            </div>
    </div>
       
        </div>
    );
}

export default SelMovie