
const express = require("express");
const jwt = require('jsonwebtoken');//web tokken
const authorization = require("../middleware/Authorization")
const router = express.Router();
const signupTemplatecopy = require("../models/signupmodel");//importing our schema
const bcrypt = require("bcrypt")//this guy is need for encrypting our password


//signin guy
router.post("/LoginSection",(request,response,next)=> {
    let getUser;
    signupTemplatecopy.findOne({//findOne is a method provided by mongoose to find a "document" based on a condition. in this case the condition is the email
        Email:request.body.Email.toLowerCase()
    }).then(user => {//user here is the document returned. this document will contain a whole other details apart from email
        if(!user){
            return response.status(404).json({
                message:"Cant find User"
            })
        }
        getUser = user;
        return bcrypt.compare(request.body.password,user.password)// Load hash from your password DB and compare with the password typed during the login post request
        //Anything returned here will be the data for the next "Then".
    }).then(res => {// true or false will be the "res"
        console.log(res)
        if(!res){
            return response.status(400).json({
                message:"wrong credentials"
               
            })
        }
        let jwToken = jwt.sign({//
            Email: getUser.Email,
            UserId:getUser._id
        },"longer-secret-is-better",{
            expiresIn:"1h"
        })
        response.status(200).json({
            token:jwToken,
            expiresIn:3600,
            msg:getUser
        })
        .catch(error => {
            return response.status(401).json({
                message:error
            })
        })
    })


})
//signup guy
router.post("/SignupSection",async(request,response) => {
    const salt = await bcrypt.genSalt(10);
    const securepassword = await bcrypt.hash(request.body.password, salt)
  
//check mail
signupTemplatecopy.findOne({//findOne is a method provided by mongoose to find a "document" based on a condition. in this case the condition is the email
        Email:request.body.Email.toLowerCase()
    }).then(user => {//user here is the document returned. this document will contain a whole other details apart from email
        if(user){
            console.log("user already exist")
            return response.status(404).json({
                message:"User Already exists"
            })
            
            
        }else{
            const signedUpuser = new signupTemplatecopy({ //create a new schema and fill in the details of the schema with the user info
                fullName: request.body.fullName,
                Email: request.body.Email.toLowerCase(),
                password: securepassword,

            })
        signedUpuser.save()           //when we save the information check for errors or success and do the needful
        .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })

        }

    })
    

})
//testing auth middleware
router.get("/all-user",authorization,(request,response) => {
    signupTemplatecopy.find((err,res)=>{
        if(err){
            return next(err)
        }
        response.status(200).json(res)
    })
})


module.exports = router;