//use the import with braces when you are trying to import many files
import axios from "axios"
import {
LOGIN_SUCCESS,
LOGIN_FAILED,
// SIGNUP_SUCCESS,
// SIGNUP_FAILED,
// AUTHENTICATION_SUCCESS,
// AUTHENTICATION_FAILED,
// LOGOUT_USER
} from "./action.types"

 export const login = (email, password) => async(dispatch) => {
        const config = {
            header:{
                "Content-Type":"application/json"
            }
        };
        const body = {email,password};
        try{
            const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/app/LoginSection`,
            body,
            config
            );
            dispatch({
            type:LOGIN_SUCCESS,
            payload: res.data
            });
            console.log("User has logged in")
        }
        catch(err){
            dispatch({
                type:LOGIN_FAILED,
            })
            console.log("Login Failed",err)
        }
    }
  