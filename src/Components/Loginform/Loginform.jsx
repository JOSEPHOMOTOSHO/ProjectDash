import React,{useState} from "react"
import Custominput from "../Custominput/Custominput";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import axios from "axios";

const Loginform = () => {
  const [signupstate, setsignupstate] = useState({
    Email:'',
    password:''
  })

  const handleEmailChange = (e)=>{
    setsignupstate({
      ...signupstate,
      Email:e.target.value
    })
  }

  const handlepasswordChange = (e)=>{
    setsignupstate({
      ...signupstate,//you use the spread syntax to copy the othe object properties and value here because the react useState overides the whole state.
      password:e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
  const signIn= {
    Email:signupstate.Email,
    password:signupstate.password,
  }
  console.log(signupstate.Email,signupstate.password)

  axios.post("http://localhost:4000/app/LoginSection", signIn)
  .then(response => console.log(response))
  .catch(err => {
    console.log("Wrong Credentials")
  })
  

  // if( registered.password !==  registered.confirmpassword){
  //   alert("please confirm your password")
  //   console.log("password no correct")
  // }else{
   
  // }
    setsignupstate({
  Email:'',
  password:''
  })
}
 
  return (
    <form onSubmit = {onSubmit}>
      <Custominput
        label="Email"
        type="email"
        name="Email"
        placeholder="Email"
        onChange = {handleEmailChange}
        value = {signupstate.Email}
      />
      <Custominput
        label="Password"
        type="Password"
        name="password"
        placeholder="Enter Password"
        text="Forgot password"
        onChange = {handlepasswordChange}
        value={signupstate.password}
      />
      <Checkbox text="Remember Me" />
      <Button type="Submit">Login</Button>
    </form>
  );
};

export default Loginform;
