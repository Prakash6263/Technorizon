// practice 
// function even() {
//     let a=[1,2,3,4,5,6,7,8,9,10]
// for(let i=1; i<=a.length; i++) {
//     if (i%2!==0 || i%a==0){
//         console.log(i)
//     }
// }
// }
// even()
// let arr= [1,2,4,3 ,4 ,5 ,6 ,7]
// console.log(arr.length-1c)
// ########################################
// arr.sort();
// console.log(arr)
// #################################3
// arr.push(8)
// console.log(arr)
// ##########################3
// arr.pop();
// console.log(arr)
// #######33###333##############3
// arr.shift();
// console.log(arr)
// arr.unshift("0");
// console.log(arr)
// arr.reverse();
// console.log(arr)
// let a=Array.isArray(arr)
// console.log(a)
// let arr2=[8, 9, 10, 11, 12, 13, 14]
// console.log(arr.concat(arr2))
// console.log(arr.index0f(4))

// let n=5
// let fact=1
// for (i=1;i<=n;i++){
//      fact=fact*i
// }
// console.log(fact)
// let value="madam"
// let a=value.toString().split("").reverse().join("");
// let b=value.toString()
// if (value===a){
//     console.log("yes")
// }
// else
// {
//     console.log("no")
//  Fatal error in , line 0
// # Fatal JavaScript invalid size error 169220804

// console.log(arr)
/*const arr=[]
for(p=2;p<=100;p++){
    for(i=2;i<p;i++){
        if(p%i==0){
            break;
        }
    }
    if(p==i){
        arr.push(p)
    }
}
console.log(arr)*/
/*function prime(arr){
    let arr1=[]
    for(i=2;i<arr.length;i++){
        for(j=2;j<arr[i];j++){
            if(arr[i]%j==0){
                break;
            }
        }
        if(arr[i]==j){
            arr1.push(arr[i])
        }
    }
    return arr1
}
let arr=[1,2,3,44,55,27,22,21,26,73,83]
console.log(prime(arr))*/
/*function addd(arr){
    let arr1=[]
    
    for(i=0;i<arr.length;i++){
        arr1.push(arr[i]+arr[i+1] || 0)
        i+=1
    }
    return arr1
}
const arr = [3, 6, 3, 87, 3, 23, 2, 2, 6, 8];
console.log(addd(arr))*/
/*let fibo=(num)=>{
let a=0
let b=1
let c=0
for(i=2;i<=num;i++){
    c=a+b
    a=b
    b=c
   }
   return num?b:a
}

let num=10
console.log(fibo(num))*/

/*let fibo=(num)=>{
    if(num<2){
        return num
    }
    return fibo(num-1)+fibo(num-2)
}
let num=10
console.log(fibo(num))
*/
/*
fnc(9)
/              \
fnc(8)         finc(7)
/     \             /       \
fnc(7)  fnc(6)     fnc(6)    fnc(5)
/     \
fnc(6)  fnc(5)
*/
function addTwoarr(a,b,n,m){
    let sum=[]
    let carry=0
    let s=0
    let i=n-1,j=m-1,k=n-1
    while(j>=0){
        s=a[i]+b[j]+carry
        sum[k]=(s%10)
        carry=Math.floor(s/10)
        i--
        j--
        k--
    }
    while(i>=0){
        s=a[i]+carry
        sum[k]=(s%10)
        carry=Math.floor(s/10)
        i--
        k--
    }
    let ans=0
    if(carry)
    ans=10
    for(i=0;i<a.length;i++){
        ans +=sum[i]
        ans *=10
    }
    return ans/10
}
function addtwo(a,b,n,m){
    if(n>=m)
        return addTwoarr(a,b,n,m)
    else
        return addTwoarr(b,a,m,n)
}
let a=[1,2,3]
let b=[2,1,4]
let n=a.length
let m=b.length
console.log(addTwoarr(a,b,n,m))