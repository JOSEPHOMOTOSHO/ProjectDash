import {combineReducers} from "redux" //Reducers only get used from a root. in this case thats the combinereducer
//it combines all our reducers that we exported from reducer.auth.js. we named the exporrted function authReducer


import authReducer from "./reducer.auth"

export default combineReducers({
   authReducer
   })