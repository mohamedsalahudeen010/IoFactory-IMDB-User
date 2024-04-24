

const initialState={
    loading:true,
    searchedMovies:[],
    error:""
}

const searchMoviesReducer=(state=initialState,action)=>{
    switch(action.type){
        case "FETCH_MOVIES_REQUEST_SEARCH":return{
            loading:true,
            searchedMovies:[],
             error:""
        }
        case "FETCH_MOVIES_SUCCESS_SEARCH":return{
            loading:false,
            searchedMovies:action.payload,
            error:""
        }
        case "FETCH_MOVIES_FAILURE_SEARCH":return{
            loading:false,
            searchedMovies:[],
            error:action.payload
        }
        default : return state
    }
}


export default searchMoviesReducer
