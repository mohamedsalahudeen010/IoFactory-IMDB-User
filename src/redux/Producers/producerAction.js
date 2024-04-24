
export const fetchProducerRequest=()=>{
    return{
        type:"FETCH_PRODUCER_REQUEST"
    }
}

export const fetchProducerSuccess=(data)=>{
    return{
        type:"FETCH_PRODUCER_SUCCESS",
        payload:data
    }
}

export const fetchProducerFailure=(error)=>{
    return{
        type:"FETCH_PRODUCER_FAILURE",
        payload:error
    }
}
export const addProducer=(producer)=>{
    
    return{
        type:"ADD_TO_PRODUCER",
        payload:producer
    }
}
export const updateProducer=(producer)=>{
    
    return{
        type:"UPDATE_PRODUCER",
        payload:producer
    }
}


export const deleteOneProducer=(id)=>{

    return{
        type:"DELETE_ONE_PRODUCER",
        payload:id
    }
}

export const deleteAllProducer=()=>{
    return{
        type:"DELETE_ALL_PRODUCER",
        
    }
}


export const fetchProducers=(baseUrl)=>{
    
    return async (dispatch)=>{
        dispatch(fetchProducerRequest())
        try {
            const response=await fetch(`${baseUrl}/producer`,{
                method:"GET",
            })
            const data=await response.json()
            console.log(data)
            dispatch(fetchProducerSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchProducerFailure(error))
        }
    }
}




//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Add Producer >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
export const fetchAddProducer=(baseUrl,producer,handleSuccess,handleFailure)=>{
    return async (dispatch)=>{    
        try {
            const response=await fetch(`${baseUrl}/producer`,{
                method:"POST",
                body:JSON.stringify(producer),
                headers:{
                    "Content-Type":"application/json",
                    "x-auth-token":localStorage.getItem("admin-token")
                 }
            })
            const data=await response.json()
            console.log("POST",data)
            if(data.message==="Internal Server Error"){
                handleFailure("Create")
            }
            else if(data.message==="Producer  Already Exist"){
                handleFailure("Create")
            }
            else if(data.message==="Producer added Successfully"){
                handleSuccess("Create")
            }
          
        } catch (error) {
            console.log(error)
           
        }
    }
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Update Producer >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
export const fetchUpdateProducer=(baseUrl,producer,handleSuccess,handleFailure)=>{
   
    const id=producer._id
    return async (dispatch)=>{
        dispatch(updateProducer(producer))
        
        try {
            const response=await 
            fetch(`${baseUrl}/producer/${id}`,{
                method:"PUT",
                body:JSON.stringify(producer),
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
                fetchProducers(baseUrl)
            }
            else if(data.message==="Couldn'nt update your data"){
                handleFailure("Update")
                fetchProducers(baseUrl)
            }
            else if(data.message==="updated Successfully"){
                handleSuccess("Update")
                fetchProducers(baseUrl)
            }
        } catch (error) {
            console.log(error)
           
        }
    }
}


