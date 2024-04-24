import React, { useContext, useEffect, useState } from 'react'
import "./Actor.css"
import PersonalCard from '../../Components/personalCard/PersonalCard'
import NavBar from '../../Components/NavBar/NavBar'
import { IMDBContext } from '../../Context'
import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from 'react-redux'
import { fetchActors } from '../../redux/Actors/actorAction'
import { useNavigate } from 'react-router-dom'
function Actor() {
    const dispatch=useDispatch()
    const{pics,baseUrl}=useContext(IMDBContext)
    const navigate=useNavigate()
    const[yes,setYes]=useState(false)

    const[user,setUser]=useState("")
    useEffect(()=>{
        setUser(localStorage.getItem("name"))     
        dispatch(fetchActors(baseUrl))
      },[])
    const actors=useSelector((actors)=>actors.actors.actors)

   
  return (
    <div className='actor-page'>
        <NavBar/>
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
    </Carousel>
    </div>
    <div className='heading'><h1>Actors</h1></div>
    {user?
    <div> <button className="add-btn" onClick={()=>navigate("/addActor")}>
      Add Actor
    </button></div>:""}
    <div className='row actors'>
        {actors&&actors.map((person)=>(
             <div key={person._id} className='col'>
             <PersonalCard
             name={person.name}
             img={person.image}
             gender={person.gender}
             dob={person.dob}
             summary={person.bio}
             id={person._id}
             yes={yes}
             />
         </div>
        ))}
    </div>
    </div>
  )
}

export default Actor