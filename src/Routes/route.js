const express=require('express')
const router=express.Router()

const userController=require("../Controller/UserController")
const Auth=require('../Middleware/Auth')


router.post('/user',userController.registerUser)

router.post('/login',userController.login)

module.exports=router