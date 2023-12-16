// const UserModel=require('../Models/UserModel')
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({
    log: ['query'],
  });
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const Validation=require('../Validation/validate')


const registerUser = async function(req, res) {
  try {
    const requestBody = req.body;
    const { fname, lname, email, password, phone, isAdmin } = requestBody;

    if (!Validation.isvalidRequestBody(requestBody)) {
      return res.status(400).send({ status: false, msg: "Value in request body is required" });
    }

if(!Validation.isvalidRequestBody(requestBody)){
    res.status(400).send({status:false, msg:"value in requestbody is required"})
}

if(!Validation.isValid(fname)){
    res.status(400).send({status:false,msg:"fname is not valid"})
}
if(!Validation.isValid(lname)){
    res.status(400).send({status:false,msg:"lname is not valid"})
}
if(!Validation.isValid(email)){
    res.status(400).send({status:false,msg:"email is not valid"})
}
if(!Validation.isValid(password)){
    res.status(400).send({status:false,msg:"password is not valid"})
}
if(!Validation.isCheckPhone(phone)){
    res.status(400).send({status:false,msg:"phone is not valid"})
}

const isEmailalready= await prisma.user.findUnique({
    where:{
        email:email
    }
})





    const EncryptedPassword = await bcrypt.hash(password, 10);

    const userData = {
      fname,
      lname,
      email,
      password: EncryptedPassword,
      phone,
      isAdmin,
    };

    if(!isEmailalready){
        let savedUser = await prisma.user.create({
            data: userData,
          });  
          res.status(201).send({ msg: "User created successfully", data: savedUser });
        }else{
            res.status(400).send({ status:false, msg: "email already in DataBase"});
        }





  } catch (err) {
    console.error(err);
    res.status(500).send({ status: false, message: err.message });
  } finally {
    await prisma.$disconnect();
  }
};


// const registerUser= async function(req,res){
//     try{
//         const requestBody=req.body
//     const {fname, lname, email, password, phone,isAdmin}=requestBody

// if(!Validation.isvalidRequestBody(requestBody)){
//     res.status(400).send({status:false, msg:"value in requestbody is required"})
// }

// if(!Validation.isValid(fname)){
//     res.status(400).send({status:false,msg:"fname is not valid"})
// }
// if(!Validation.isValid(lname)){
//     res.status(400).send({status:false,msg:"lname is not valid"})
// }
// if(!Validation.isValid(email)){
//     res.status(400).send({status:false,msg:"email is not valid"})
// }
// if(!Validation.isValid(password)){
//     res.status(400).send({status:false,msg:"password is not valid"})
// }
// if(!Validation.isCheckPhone(phone)){
//     res.status(400).send({status:false,msg:"phone is not valid"})
// }

//     const EncrypPassword = await bcrypt.hash(password, 10)


//     const userData={fname, lname, email, password:EncrypPassword, phone,isAdmin}

//     let savedUsers = await prisma.user.create({
//         data: {
//           fname: userData.fname,
//           lname: userData.lname,
//           email: userData.email,
//           password: userData.password,
//           phone: userData.phone,
//           isAdmin: userData.isAdmin,
//         },
//       });
//           console.log(prisma.user);

//      if(savedUsers){
//          res.status(201).send({msg:"user created successfull", data:savedUsers})
//      }else{
//          res.status(400).send({msg:"user not created", data:savedUsers})
//      }
        
        
//     }catch(err) {
//             res.status(500).send({status:false,message:err.messsage})
//             console.log(err)
//     }finally {
//         // Don't forget to close the Prisma Client connection
//         await prisma.$disconnect();
//       }
// }


const login=async function(req,res){
      
    try{
        requestBody=req.body

        if(!Validation.isvalidRequestBody(requestBody)){
            res.status(400).send({status:false, msg:"value in requestbody is required"})
        }

       let email=requestBody.email
       let password=requestBody.password

    if(!Validation.isValid(email)){
        res.status(400).send({status:false,msg:"email is not valid"})
    }


    if (!(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email))) {
        res.status(400).send({ status: false, message: `Email should be a valid email address` })
    } 


    if(!Validation.isValid(password)){
        res.status(400).send({status:false,msg:"password is not valid"})
    }
    
    if (!(password.length >= 8 && password.length <= 15)) {
         res.status(400).send({ status: false, message: "Password should be Valid min 8 and max 15 " })
    }



    if(email && password){
        let User= await prisma.user.findUnique({
            where:{
            email:email
    }
})

        if(!User){
            res.status(400).send({status:false,msg:"email is not found "})
        }

        let decryptPassword=await bcrypt.compare(password,User.password)

        if(decryptPassword){
            const Token=jwt.sign({
                userId:User._id,

            },'Technorizen')
            res.status(200).send({status:true,msg:'success',data:{userId:User._id,token:Token}})
        }else{
            res.status(400).send({status:false,msg:'invalid password'})

        }
    }
    }catch(err){
        console.log(err.message)
        res.status(400).send({status:false,message:err.message})
    }finally {
        // Don't forget to close the Prisma Client connection
        await prisma.$disconnect();
      }
}

const getuser=(req,res)=>{
    res.send('yes')
}



module.exports={
registerUser,
login,

getuser
}
