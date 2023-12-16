 const places = ['delhi', 'gurgaon', 'jaipur', 'pune']  
 const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']
//  IMPORTANT: solve all problems using using destructuring and rest 
// ============================================================================= // 
//1. // remove first element from places array and print the remaining array
 //result = ['gurgaon', 'jaipur', 'pune']
//  const[a,b,c,d]=places;
//  const[e,f,g,h]=morePlaces;
  // console.log(b,c,d)

  // ============================================================================= // 
  //2. // insert that element at the start of the morePlaces array and print the new array 
  // result = ['delhi', 'kochi', 'hyderabad', 'Shimla', 'Srinagar'] 
  // console.log(a,e,f,g,g,h)
  // ============================================================================= // 
  // 3. // take out last three element from the morePlacesArray and take out first three elements from the places array
   // and print the combined array
  //  console.log(f,g,h,a,b,c) 
  //  result = ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',] 
  // 4. // destructure and store pincode into a variable named myPincode //
    let myData = {
       name: "Rahul", 
       age: 20,
      gender: "male", 
      address: { 
        pinCode: 123455, 
        city:"delhi"
       }, 
       likes:["music", "movies"] 
      }
      // myData.address.mypincode=myData.address.pinCode
      // delete myData.address.pinCode
      // console.log(myData)  
// 5.  destructure and store second like into a vaiable named myLike
// myData.mylikes = myData.likes
// delete myData.likes
// console.log(myData)
let{address:{pinCode:mypinCode},}= myData
console.log(myData)

   
