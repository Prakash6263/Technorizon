let string="prakash"
let reg=/[aouie]/gi
let chr=string.match(reg)
console.log(chr.length)
console.log(chr.join(" "))
// let string="helloworld"
// let later="l"
// let c=0
//  strlen=string.length-1
// // console.log(strlen)
// for (i=0;i<strlen;i++){
//     if (string[i]==later){
//         c++;
//     }
// }
// console.log(c)

// console.log(n)
// function great(arr,n){
//     let arr1=arr[0]
//     arr[0]=-1
//     // console.log("1",arr1)
//     for(let i=1;i<n;i++){
//         // console.log("2",i)
//         if(arr1>arr[i]){
//             arr[i]=arr1
//              console.log("3",arr[i])
//         }
//         else if(arr1<=arr[i]){
//             let temp=arr[i]
//             // console.log("4",temp)
//             arr[i]=arr1
//             // console.log("5",arr[i])
//             arr1=temp
//             // console.log("6",arr1)
//         }
//     }
//     console.log(...arr)
// }
// let arr=[4,5,2,1,7,6]
// let n=arr.length
// great(arr,n)
