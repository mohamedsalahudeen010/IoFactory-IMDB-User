

const initialState={
    loading:true,
    users:[],
    error:""
}

const userReducer=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_USERS_REQUEST":return{
            loading:true,
             users:[],
             error:""
        }
        case "FETCH_USERS_SUCCESS":return{
            loading:false,
            users:action.payload,
            error:""
        }
        case "FETCH_USERS_FAILURE":return{
            loading:false,
            users:[],
            error:action.payload
        }
        case "FETCH_USERS_LOGOUT":return{
            loading:false,
            users:[],
            error:action.payload
        }
        default : return state
    }
}


export default userReducer
