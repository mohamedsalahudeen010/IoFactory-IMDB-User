
import { useState, useEffect, useContext } from "react";
import IconButton from '@mui/material/IconButton';
import Carousel from 'react-bootstrap/Carousel';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';

import "./MoviesList.css"



import { useDispatch, useSelector } from "react-redux";


import { Box, CircularProgress, } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { MovieCardHollywood } from "../../../Components/Movie/MovieCardHollywood";
import { fetchMovies } from "../../../redux/Movies/moviesAction";
import { addWishList } from "../../../redux/wishList/wishListAction";
import { IMDBContext } from "../../../Context";
import NavBar from "../../../Components/NavBar/NavBar";

export function HollywoodMovieList() {
    const [progress, setProgress] =useState(0);
    const navigate=useNavigate()
    
    const [wish, setWish] = useState(false)
    const{pics,baseUrl,movieType,setmovieType,handleSuccess,handleFailure}=useContext(IMDBContext)
    const dispatch=useDispatch()
    const[user,setUser]=useState("")
   


    useEffect(()=>{
        dispatch(fetchMovies(baseUrl))  
        setUser(localStorage.getItem("name"))  
        setmovieType("normal") 
      },[])
    const movieList=useSelector((movies)=>movies.movies.movies)
    const isLoading=useSelector((movies)=>movies.movies.loading)
    const wishList=useSelector((wish)=>wish.wishlist.movies)

  

   const handleWish=(id)=>{
    let wish=movieType==="normal"?movieList.filter((movie,idx)=>(movie._id===id)):
    movieList.filter((movie,idx)=>(movie.id===id));   
    let updatedWishList=movieType==="normal"?wish:[{
      movieName:wish[0].title,
      poster:wish[0].image,
      rating:wish[0].rating,
      genre:wish[0].genre,
      summary:wish[0].description,
      year: wish[0].year
}];
    dispatch(addWishList(baseUrl,updatedWishList,handleSuccess,handleFailure))
   }
    
    return (
        <div className="movieListPage">
            <NavBar></NavBar>
            <div className='carousel-land'>
           <Carousel >
           { pics.map((img,idx)=>(
           <Carousel.Item key={idx}>
           <img
           className="d-block"
            src={img}
            alt="First slide"
          style={{width:"100vw",height:"40vh"}}></img>
         </Carousel.Item>
      )) }
   
    </Carousel>
    </div>
    <div className='heading'><h1>Movies</h1></div>
    {user?
    <div> <button className="add-btn" 
    onClick={()=>navigate("/addMovie")}>
      Add Movies
    </button></div>:""}
            {isLoading?<div style={{textAlign:"center",marginLeft:"50%",marginTop:"5%"}}>
                <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
            </div>:<div className='movie-list'>
                {movieList && movieList?movieList.map((movie,idx) => (
                    <div key={movieType==="top-hollywood"?idx:movie._id}>
                     
                       <MovieCardHollywood
                       movie={movie}
                            id={movie.id}
                            wishList={
                                <IconButton 
                                sx={{marginLeft: "auto"}}
                                aria-label="wishlist"
                                 color={wish?"secondary":"primary"}
                                 onClick={()=>handleWish(movie.id)}>
                                   <PlaylistAddCheckCircleIcon/>
                                </IconButton>
                            }/>

                      
                       
                    </div>
                )):<h1>No Movies</h1>}
            </div> }
        </div>
    );
}