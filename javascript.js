let arr = [1,2,3,4,5,6,7,8,9,0];
let l=0;
let r=arr.length-1
let x=6
let found=false

while(l<=r){
    let mid=parseInt(((l+r)/2))

    if(arr[mid]===x){
        found=true
        break;
        
    }else if(arr[mid]>x){
         r= mid - 1
    }else {
        l= mid+1
    }

  
}

if(found){
    console.log( `${x} is present `)
 }else{
 console.log(`${x} is not  present `)

 }