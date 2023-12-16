// this code by using constructur
// executor function
const prom=new Promise((resolve,reject)=>{
    setTimeout(()=>{
         let rollno=[1,2,3,4]
          resolve(rollno)
        reject("some mistake in your code")
    },2000)
})
prom.then((rollno)=>{
    console.log(rollno)
}).catch((err)=>{
    console.log(err)
})