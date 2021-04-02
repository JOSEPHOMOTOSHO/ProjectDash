//use the import with braces when you are trying to import many files
import axios from "axios"
import {
LOGIN_SUCCESS,
LOGIN_FAILED,
SIGNUP_SUCCESS,
SIGNUP_FAILED,
AUTHENTICATION_SUCCESS,
AUTHENTICATION_FAILED,
// AUTHENTICATION_SUCCESS,
// AUTHENTICATION_FAILED,
// LOGOUT_USER
} from "./action.types"

 export const login = (Email, password) => async(dispatch) => {
        const config = {
            header:{
                "Content-Type":"application/json"
            }
        };
        const body = {
            Email,
            password
        };
        try{
            const res = await axios.post(
            `${process.env.REACT_APP_API_URL}app/LoginSection`,
            body,
            config
            );
            dispatch({
            type:LOGIN_SUCCESS,
            payload: res.data
            });
            console.log("User has logged in",res.data)
        }
        catch(err){
            dispatch({
                type:LOGIN_FAILED,
            })
            console.log("Login Failed",err)
        }
    }
  
export const signup = (fullName,Email,password) => async(dispatch) => {
    const config = {
        header:{
            "Content-Type":"application/json"
        }
    };
    const body = {
        fullName,
        Email,
        password
    };
    try{
        const res = await axios.post(
        `${process.env.REACT_APP_API_URL}app/SignupSection`,
        body,
        config
        );
        dispatch({
        type:SIGNUP_SUCCESS,
        payload: res.data
        });
        console.log("User has Signed Up")
    }
    catch(err){
        dispatch({
            type:SIGNUP_FAILED,
        })
        console.log("Sign Up  Failed",err)
    }

}

export const checkAuth = () => async(dispatch) => {
    if(localStorage.getItem("access")){
        const tokenCheck = {token:localStorage.getItem("access")}

        try{
            if(tokenCheck !== null){
                dispatch({
                    type:AUTHENTICATION_SUCCESS,
                    payload:tokenCheck
                })
            }
        }
        catch(err){
            dispatch({
                type:AUTHENTICATION_FAILED,
            })
        }
    }
    else{
        dispatch({
            type:AUTHENTICATION_FAILED,
        })
    }

}