import React, {useState} from "react"
import Custominput from "../Custominput/Custominput";
import Button from "../Button/Button";
import axios from "axios";

const Signupform = () => {

  const [signupstate, setsignupstate] = useState({
    fullName:'',
    Email:'',
    password:'',
    confirmpassword:''
  })

  
  const handleNameChange = (e)=>{
    setsignupstate({
      ...signupstate,
      fullName:e.target.value
    })
    
  }
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

  const handleconfirmpasswordChange = (e)=>{
    setsignupstate({
      ...signupstate,
      confirmpassword:e.target.value
    })
  }

  
    

  const onSubmit = (e) => {

      e.preventDefault()
    const registered = {
      fullName:signupstate.fullName,
      Email:signupstate.Email,
      password:signupstate.password,
      confirmpassword:signupstate.confirmpassword

    }
    console.log(signupstate.fullName,signupstate.Email,signupstate.password,signupstate.confirmpassword)

    if( registered.password !==  registered.confirmpassword){
      alert("please confirm your password")
      console.log("password no correct")
    }else{
      axios.post("http://localhost:4000/app/SignupSection", registered)
      .then(response => console.log(response.data))
    }
   

    setsignupstate({
    fullName:'',
    Email:'',
    password:'',
    confirmpassword:""
    })
  }

  return (
    <form onSubmit = {onSubmit}>
      <Custominput
        label="Enter Fullname"
        type="text"
        name="FullName"
        placeholder="Fullname"
        onChange={handleNameChange}
        value = {signupstate.fullName}
        
        
      />
      <Custominput
        label="Email"
        type="email"
        name="Email"
        placeholder="Enter Email"
        onChange={handleEmailChange}
        value = {signupstate.Email}
        
      />
      <Custominput
        label="Password"
        type="Password"
        name="password"
        placeholder="Enter Password"
        onChange={handlepasswordChange}
       value={signupstate.password}
      />
      <Custominput
        label="Confirm Password"
        type="Password"
        name="confirmpasswrd"
        placeholder="Confirm Password"
        onChange={handleconfirmpasswordChange}
        value = {signupstate.confirmpassword}
       
      >Error</Custominput>
      <Button type="Submit">Create An Account</Button>
    </form>
  );
};

export default Signupform;
