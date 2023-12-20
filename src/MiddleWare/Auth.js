const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const authenticateToken=(req,res,next)=>{

const Token = req.headers['authorization']

if(!Token){
    res.status(401).send('token not found')
}else{
    jwt.verify(Token,'prakash',(err,user)=>{
        if(err){
            res.status(400).send({status : false , message:'invalid token'})
        }
        req.user=user
        next()
    })
}

}




module.exports = {authenticateToken}