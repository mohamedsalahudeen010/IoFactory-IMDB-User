import React, { useContext, useEffect, useState } from 'react'
import "./NavBar.css"
import Collapse from 'react-bootstrap/Collapse';
import Dot from "@iconscout/react-unicons/icons/uil-bars"
import { useNavigate } from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar';
import { useDispatch } from 'react-redux';
import { fetchUserLogOut } from '../../redux/users/usersAction';
import { fetchMovies, fetchMoviesTopHollywood } from '../../redux/Movies/moviesAction';
import { IMDBContext } from '../../Context';

function NavBar() {
   const[open,setOpen]=useState(false)
   const[show,setShow]=useState(false)
   const[user,setUser]=useState("")
   const navigate=useNavigate()
   const dispatch=useDispatch();
   const{setmovieType,baseUrl}=useContext(IMDBContext)
   useEffect(()=>{
      setUser(localStorage.getItem("name"))
      console.log(user)
   },[])
   console.log()
   const logOut=()=>{
    localStorage.clear();
    setUser("")
    navigate("/")
   }
  return (
   
 <div className='nav-wrapper'>
        <div className='nav-left'>
            <div >
               <button onClick={()=>navigate("/")} className='btn nav-btn'>IMDB</button>
            </div>
            {user?<div>{user}</div>:""}
        </div>
        <div className='nav-centre'>
         <SearchBar/>
        </div>
        <div className='nav-right'>
                <div className='nav-list'>
                     <ul>
                        
                        <li onClick={()=>{dispatch(fetchMovies(baseUrl));setmovieType("normal");navigate("/movies")}}>
                            Movies
                        </li>
                        {user?<li onClick={()=>navigate("/wishlist")}>
                           WishList
                        </li>:""}
                      
                        {user?<li onClick={()=>logOut()}>
                           Logout
                        </li>:<li onClick={()=>navigate("/login")}>
                           Sign In
                        </li>} 
                        
                    
                     </ul>
                     
                </div>
         
            
                    
        </div>
        <div className='nav-check'>
          <input type="checkbox" id="check-land" name="" value="" style={{display:"none"}}></input>
          <label htmlFor='check-land' className='check-label'
          style={open?{transform:"rotate(90deg)",transition:"all 0.6s"}:
          {transform:"rotate(0deg)",transition:"all 0.6s"}}><Dot
          onClick={()=>setOpen(!open)} size={"2.5rem"}/></label>
        </div>

        <div className='land-dot-list'>
        <Collapse in={open}>
        <div id="example-collapse-text" className='view-nav-list'>
          <ul>
          
          <li><span onClick={()=>{setOpen(!open);setmovieType("normal");dispatch(fetchMovies(baseUrl));navigate("/movies")}}>Movies</span></li>
          

          {user?<li><span onClick={()=>{setOpen(!open);navigate("/wishlist")}}>WishList</span></li>:""}
           

            {user?<li><span onClick={()=>{setOpen(!open);logOut()}}>Logout</span></li>
           :<li><span onClick={()=>{setOpen(!open);navigate("/login")}}>Sign In</span></li>
          }
          
          
          
            
          </ul>
        </div>
      </Collapse>
      </div>
    </div>
  
   
  )
}

export default NavBar