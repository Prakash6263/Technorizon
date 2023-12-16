//  assignment no 1
 let ages =[10,23,19,20]
 let adultAge=18
 let b=ages.find(checkAdult)
 console.log(b)
 function checkAdult(age) {
     return age >= 18;
 }

 