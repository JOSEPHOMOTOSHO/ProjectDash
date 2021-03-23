//auhthentication middleware

const jwt = require("jsonwebtoken")//get our jwtoken

module.exports = (request,response,next) => {
    try{
                        //header is just the sign in algorithm. go read more
        const token = request.header("x-auth-token");//sign in once with username and password and afterwards express returns an access token in header field called x-auth-token. for further sessions this token is exchanged,not username and password 
        jwt.verify(token, "longer-is-better");//the verify method needs to take a token and a secret and check if the signature(jwtoken) is correct
        next()
    }catch(error){
        response.status(401).json({
            message: "No token cannot authorize"
        })
    }
}