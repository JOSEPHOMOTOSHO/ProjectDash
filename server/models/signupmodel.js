const mongoose = require("mongoose")
const uniqueValidator = require('mongoose-unique-validator')
//i believe the below signupTemplate helps us to create a new schema
//within the obj in the schema method you write how the signup details will be

const signupTemplate= new mongoose.Schema({
    fullName: {
        type:String,
        required: true
    },
    Email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    confirmpassword:{
        type:String,
        required: true
    },
    Date:{
        type:Date,
        default:Date.now
    }
})
signupTemplate.plugin(uniqueValidator,{Message:"Email already exists"})
module.exports = mongoose.model("mytable",signupTemplate);//exporting our mongoose schema with a table and our model