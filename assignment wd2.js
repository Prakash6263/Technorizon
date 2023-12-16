 //Q2 map Solutions 
//  const practiceData = [[14,21,23,64], [33,46,51,65]] 
// const incrementedArray = practiceData.map((outerArray) =>
//     outerArray.map(innerElement => innerElement + 1)
// );
// console.log(incrementedArray);

// //filter
// // Statement 2
// const evenArray = practiceData.map((outerArray) =>
//     outerArray.filter(innerElement => innerElement % 2 === 0)
// );
// console.log(evenArray);


// ********************

// //map Q3. 
// const array = [23 , 45,467, 789, 34, 989, 56]

// const answer =   array.map((element, index) => index % 2 === 0 ? element * 10 : element * 2);
// console.log(answer)

// ******************
// //forEach Q4. 

 const carBrands = ["honda", "toyota", "maruti","tata"]
  const carModel = ["city", "innova", "alto", "nano"]
 
 const carObject = {}


 carBrands.forEach((brand, index) => {
     carObject[brand] = carModel[index];
 });

//  console.log(carObject);

// *********************
// // Q5. Flattner 
 const arr = [[1, 2, 3], [4, 5], [6]];

// // result =  [1, 2, 3, 4, 5, 6]

  flate = arr.reduce((acc, curr) => {
      [...acc, ...curr]
     return acc.concat(curr)
//   console.log(acc)
 })
  console.log(flate)


// ******************
// //Q6. 
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

// //Solution: 
// const capitals = countries.map(item => item.toUpperCase())

// console.log(capitals)
// [6:18 PM, 2/14/2022] Vip: let arr1 = [1,45,67,8,9] function find(numberFind,arr) { for(i = 0; i< arr.length;i++){ if(arr[i] == numberFind) { return false; } } } function findIndex(numberFind,arr) { for(i = 0; i< arr.length;i++){ if(arr[i] == numberFind) { return i } } } console.log(findIndex(8, arr1))
