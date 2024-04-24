import {createStore} from "redux"

import { combineReducers } from "redux"
import { applyMiddleware } from "redux"
import logger from "redux-logger"
import {composeWithDevTools} from "@redux-devtools/extension"
import userReducer from "./users/usersReducer"
import {thunk} from "redux-thunk"
import moviesReducer from "./Movies/moviesReducer.js"
import wishListReducer from "./wishList/wishListReducer.js"
import actorReducer from "./Actors/actorReducer.js"
import producersReducer from "./Producers/producerReducer.js"
import searchMoviesReducer from "./Searched/searchReducer.js"


const reducer=combineReducers({
user:userReducer,
movies:moviesReducer,
wishlist:wishListReducer,
actors:actorReducer,
producer:producersReducer,
search:searchMoviesReducer
})

 const store = createStore(reducer,
   composeWithDevTools(applyMiddleware(thunk)) )

 export default store