const express=require('express')
const dotenv = require("dotenv")
const bodyparser=require('body-parser')
const route=require('./Routes/route')
const app=express()


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
dotenv.config();

// const mongoose= require('mongoose')

// mongoose.connect('mongodb+srv://prakash12:prakash12@cluster0.4qxv0.mongodb.net/Technorizen?authSource=admin&replicaSet=atlas-13sjqg-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true')
// .then(()=>console.log('mongodb is runnning and  connected'))
// .catch(err => console.log(err))

app.use('/',route)


app.listen(process.env.Port || 3000, function(){
    console.log("port is running" + (process.env.Port || 3000))
})