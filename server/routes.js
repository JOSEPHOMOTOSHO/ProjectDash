
const express = require("express");
const jwt = require('jsonwebtoken');//web tokken
const router = express.Router();
const signupTemplatecopy = require("./models/signupmodel");//importing our schema
const bcrypt = require("bcrypt")//this guy is need for encrypting our password


//signin guy
router.post("/LoginSection",(request,response,next)=> {
    let getUser;
    signupTemplatecopy.findOne({//findOne is a method provided by mongoose to find a "document" based on a condition. in this case the condition is the email
        Email:request.body.Email
    }).then(user => {//user here is the document returned. this document will contain a whole other details apart from email
        if(!user){
            return response.status(401).json({
                message:"Authentication failed"
            })
        }
        getUser = user;
        return bcrypt.compare(request.body.password,user.password)// Load hash from your password DB and compare with the password typed during the login post request

    }).then(res => {
        if(!res){
            return response.status(401).json({
                message:"Authentication jailed"
            })
        }
        let jwToken = jwt.sign({
            Email: getUser.Email,
            UserId:getUser._id
        },"longer-secret-is-better",{
            expiry:"1h"
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
    const secureconfirmpassword = await bcrypt.hash(request.body.confirmpassword, salt)

    const signedUpuser = new signupTemplatecopy({ //create a new schema and fill in the details of the schema with the user info
        fullName: request.body.fullName,
        Email: request.body.Email,
        password: securepassword,
        confirmpassword: secureconfirmpassword 
    })

    signedUpuser.save()           //when we save the information check for errors or success and do the needful
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})


module.exports = router;