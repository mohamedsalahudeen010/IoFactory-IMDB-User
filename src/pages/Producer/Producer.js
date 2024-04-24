import React, { useContext, useEffect, useState } from 'react'
import "./Producer.css"
import PersonalCard from '../../Components/personalCard/PersonalCard'
import NavBar from '../../Components/NavBar/NavBar'
import Carousel from 'react-bootstrap/Carousel';
import { IMDBContext } from '../../Context';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchProducers } from '../../redux/Producers/producerAction';
function Producer() {

    const{pics,baseUrl}=useContext(IMDBContext)
    const[yes,setYes]=useState(true)
    const dispatch=useDispatch()
    const producer=useSelector((producer)=>producer.producer.producers)
    const navigate=useNavigate()
    const[user,setUser]=useState("")
    useEffect(()=>{
        setUser(localStorage.getItem("name"))    
        dispatch(fetchProducers(baseUrl)) 
      },[])
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
    <div className='heading'><h1>Producers</h1></div>
    {user?
    <div> <button className="add-btn" onClick={()=>navigate("/addProducer")}>
      Add Producer
    </button></div>:""}
    <div className='row'>
        {producer&&producer.map((person)=>(
             <div key={person._id} className='col'>
             <PersonalCard
              name={person.name}
              img={person.image}
              gender={person.gender}
              dob={person.dob}
              summary={person.bio}
              id={person._id}
              yes={yes}/>
              
         </div>
        ))}
    </div>
    </div>
  )
}

export default Producer