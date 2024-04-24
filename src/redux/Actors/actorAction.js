
export const fetchActorsRequest=()=>{
    return{
        type:"FETCH_ACTOR_REQUEST"
    }
}

export const fetchActorsSuccess=(data)=>{
    return{
        type:"FETCH_ACTOR_SUCCESS",
        payload:data
    }
}

export const fetchActorsFailure=(error)=>{
    return{
        type:"FETCH_ACTOR_FAILURE",
        payload:error
    }
}
 
 export const addActor=(actor)=>{
    
     return{
         type:"ADD_ACTOR",
         payload:actor
     }
 }
 export const updateActor=(data)=>{
    
    return{
        type:"UPDATE_ACTOR",
        payload:data
    }
}
 
 export const deleteOneActor=(actor)=>{
 
     return{
         type:"DELETE_ONE_ACTOR",
         payload:actor
     }
 }
 
 export const deleteAllActor=()=>{
     return{
         type:"DELETE_ALL_ACTOR",
         
     }
 }
 
export const fetchActors=(baseUrl)=>{
    return async (dispatch)=>{
        dispatch(fetchActorsRequest())
        try {
            const response=await fetch(`${baseUrl}/actor`,{
                method:"GET",
            })
            const data=await response.json()
            console.log(data)
            dispatch(fetchActorsSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchActorsFailure(error))
        }
    }
}



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Add Actor >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
export const fetchAddActor=(baseUrl,actor,handleSuccess,handleFailure)=>{
    return async (dispatch)=>{
        dispatch(addActor(actor))     
        try {
            const response=await fetch(`${baseUrl}/actor`,{
                method:"POST",
                body:JSON.stringify(actor),
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token")
                 }
            })
            const data=await response.json()
            console.log("POST",data)
            if(data.message==="Internal Server Error"){
                handleFailure("Create")
            }
            else if(data.message==="Actor Already Exist"){
                handleFailure("Create")
            }
            else if(data.message==="Actor data added Successfully"){
                handleSuccess("Create")
            }

        } catch (error) {
            console.log(error)
           
        }
    }
}


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Update Actor >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
export const fetchUpdateActor=(baseUrl,actor,handleSuccess,handleFailure)=>{
   
    const id=actor._id
    return async (dispatch)=>{
        try {
            const response=await 
            fetch(`${baseUrl}/actor/${id}`,{
                method:"PUT",
                body:JSON.stringify(actor),
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("token")
                 }
            })
            const data=await response.json()
            console.log("PUT",data)
            localStorage.setItem("cartItems",JSON.stringify(data.cart))
            if(data.message==="Internal Server Error"){
                handleFailure("Update")
                fetchActors(baseUrl)
            }
            else if(data.message==="Couldn'nt update your content"){
                handleFailure("Update")
                fetchActors(baseUrl)
            }
            else if(data.message==="updated Successfully"){
                handleSuccess("Update")
                fetchActors(baseUrl)
            }
           
        } catch (error) {
            console.log(error)
           
        }
    }
}


