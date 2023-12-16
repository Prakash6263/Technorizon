// 123132132133123123
// 1 is 4 times
// 2 is 3 times
//  let arr=[1,2,3,1,3,2,1,3,2,1,3,3,1,2,3,1,2,3]
//  let b=[...new Set(arr)]
//  let n=b.length
//  let temp=[]
//  let a=[]
//  let c=[]

//      for(let j=0;j<arr.length;j++){
//          if(b[0]==arr[j]){
//              temp += arr[j]  

//          }else if(b[1]==arr[j]){
//              a +=arr[j]
//          }else{
//              c += arr[j]
//          }
//      } 
//   console.log(`1 is ${temp.length} times`)
//   console.log(`2 is ${a.length} times`)
//   console.log(`3 is ${c.length} times`)
 



// 54321
// 5432
// 543
// 54
// 5
// let arr=[5,4,3,2,1]
// let n=arr.length
// let a =[]
// for(i=0;i<n;i++){
//     for(j=0;j<n-i;j++){
//         a += arr[j]
//     }
//     a += "\n"
// }
// console.log(a)
    
// let arr=[6,8,0,1,3]
// let n=arr.length
// arr.push(0)
// let peak=-1
// let a=[]
// for(let i=0;i<n+1;i++){
//     for(j=i+1;j<=i+1;j++){
//         if(arr[i]<arr[j]){
//             a.push(arr[j])
//             break
//         }
//          else if(arr[i]>arr[j]){
//              a.push(peak)
//          }
//     }
   
// }
// console.log(a)
 /*function cyclic(arr,n){
     let temp=[]
     for(i=0;i<3;i++){
         temp=arr[n-1]
         arr[n-1]=arr[n-3]
         arr[n-3]=temp

     }
     return arr
 }
 let arr=[1,2,3,4,5]
 let n=arr.length
 console.log(cyclic(arr,n))*/


 /*Write a recursive function to compute the count of vowels and consonants in a string 
function isVowel(c){
    return (
        c=='a'|| c=='e' || c=='o' ||
        c=='u' || c=='i'
    )
}
function check(str){
    str=str.split('')
    let vowel=0
    let consto=0
    for(i=0;i<str.length;i++){
        if(isVowel(str[i])){
            vowel++
        }else{
            consto++
        }
    }
    return `vowels is ${vowel} and consonants is ${consto} in this string`
}

let str="agami"
console.log(check(str))*/

/* 2)Write a function to check if a given number is a prime number*/
//  function isprime(arr){
   
   /* function isPrime(arr1,n){
        
    for(i=0;i<=arr1.length-1;i++){
       if(arr1[arr1.length-1]!=n){
        return "it is not a prime number"
       }
    }
    return "it is a prime number"
}
let arr1=[]
    let n=21
    for(i=2;i<=n;i++){
        for(j=2;j<i;j++){
            if(i%j==0){
                break
            }
        }   
        if(i==j){
            arr1.push(i)
        } 
    }

 console.log(isPrime(arr1,n))
 
*/
// var vowelStrings = function(word, left, right) {
//     let result=0
//     let vowels=["i","o","e","a","u"]
//     for(let i=left;i<=right;i++)
//     {
//         if(
//             vowels.includes(word[i][0]) &&
//          vowels.includes(word[i][word[i].length-1])
//          )
//          {
//             result++
//         }
//     }
//     return result
// };
// var word=["are","amy","u"]
// var left=0
// var right=2
// console.log(vowelStrings(word,left,right))





function prime(n){
    if (n <= 1) {
        return false;
    }
     for(let i=2;i*i<=n;i++){
        if(n%i===0){
           return false
        }
}
        return true
    
}
let num=15

for(let i=2;i<=num;i++){
    if(prime(i)){
        console.log(i)

    }
}
