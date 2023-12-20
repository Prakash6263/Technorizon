const express = require('express');
const { register,Login } = require('../Controller/UserController');
const {authenticateToken} = require('../MiddleWare/Auth')

const router = express.Router();

router.post('/register', register);

router.post('/login', Login)

router.get('/test',authenticateToken,(req,res)=>{
    res.send('yes')
})

module.exports = router;
