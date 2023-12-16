const jwt=require('jsonwebtoken')
// const userModel=require('../Models/UserModel')
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const Auth=async function(req,res,next){
    try{
        let authHeader=req.headers['authorization']
        if(!authHeader){
            res.status(400).send({status:false,msg:'token is missing '})
        }else{
            let decodetoken=jwt.verify(authHeader,'Technorizen')
            if(decodetoken){
                req.user=decodetoken
                next()
            }
        }
    }catch(err){
        res.status(400).send({status:false,msg:err.msg})
    }
}



module.exports={
    Auth
}