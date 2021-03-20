const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const routesUrls = require("./routes.js")
const cors = require("cors")



dotenv.config();//calling our dotenv for use

//function to connect our mongoose to our server. We could paste our url from mongodb cluster into the connect method
//[cont] but our cluster username and password will be requested so the better way to do it is to use env.

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("database connected successfully"))//using
//[cont] using our env to give us access to the database without requiring password and username

app.use(express.json())//body parser for handling our incoming and outgoing requests. anything with app.use 
app.use(cors())
app.use("/app",routesUrls)//routes from routes.js i.e signup and signin will be appended to /app. example /app/signup and so on
app.listen(4000, () => {
    console.log("i am runnning on 3001");
});


