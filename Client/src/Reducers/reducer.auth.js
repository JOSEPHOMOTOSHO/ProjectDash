// import {combineReducers} from "redux"
import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    // SIGNUP_SUCCESS,
    // SIGNUP_FAILED,
    // AUTHENTICATION_SUCCESS,
    // AUTHENTICATION_FAILED,
    LOGOUT_USER
    } from "../Actions/action.types"

const initialState = {
    user: null,
    isLoggedIn: null,
    access:localStorage.getItem('access')
    }


export default function myReducer(state=initialState, action){
   const {type,payload} = action;
    switch(type){
        case LOGIN_SUCCESS:
            localStorage.setItem('access',payload.token);
            return{
                ...state,
                isLoggedIn:true,
                access: payload.token
            }
            case LOGIN_FAILED:
            case LOGOUT_USER:
                localStorage.removeItem('access');
                return{
                    ...state,
                    isLoggedIn:false,
                    user: null
                }

                default:
                     return state
    }
}