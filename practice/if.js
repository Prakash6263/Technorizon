// 5 days for if conditon it is my goals









// day 27 to 1/4/22
// let arr=[12,3,2,5,3,6,3,50,70]
// function sorting(arr){
//     let temp;
//     for(i=0;i<arr.length;i++){
//         for(j=0;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//     }
//     return arr
// }

// let c=sorting(arr)
// console.log(c)
// =========================================================================================================================for 
// let n=5
// let str="";
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i
//         ;j++){
//         str += " "
//     }
//     for(let k=0;k<2*i-1;k++){
//         str += "*"
//     }
//     str += "\n"
// }
//  console.log(str)
// ============================================================================================================================================

// let n = 5; // row or column count
// // defining an empty s
// let s = "";

// for(let i = 0; i < n; i++) { // external loop
//   for(let j = 0; j < n; j++) { // internal loop
//     if(i === 0 || i === n - 1) {
//     //   s += "*";
//     }
//       else {
//          if(j === 0 || j === n - 1) {
//            s += "*";
//          }
//        else {
//          s += " ";
//        }
//      }
//     }\
// //    newline after each row
//   s += "\n";
// }
// // printing the s
// console.log(s)

// let n=5
// let str=""
// for(i=n;i>0;i--){
//   for(k=0;k<i;k++){
//     str += "*"
//   }
//   for(j=0;j<n;j++){
//     str += " "
//   }
//   str += "\n"
// }
// console.log(str)

//  let n=6;
//  let str=""
// for(i=1;i<=n;i++){
//   for(j=1;j<=n-i;j++){
//     str += " "
//   }
//   for(k=0;k<2*i-1;k++){
//     if(i===1 || i===n){
//     str += "*"
//     }
//     else{
//       if(k==0 || k==2*i-2){
//         str += "*"
//       }
//       else{
//         str += " "
//       }
//     }
//   }
//   str += "\n"
// }
// console.log(str)
// let n=6
// let str =""
// for(i=1;i<=n;i++){
//   for(j=0;j<=n-i;j++){
//     str += " "
//     }
//     for(k=0;k<2*i-1;k++){
//       str += "*"
//     }
    
//   str += "\n"
// }
//  for(b=n;b>0;b--){
//    for(f=0;f<=n-b;f++){
//      str += " "
//      }
//      for(e=0;e<2*b-1;e++){
//        str += "*"
//      }
//      str += "\n"
//  }
//  console.log(str)

// function* getPairs(array, i) {
//   var i = 0;
//   while (i < array.length) {
//       if (i) yield [i, array[i]];
//       else yield* getPairs(array.slice(i), array[i]);
//       i++;
//   }
// }

// var array = [1, 1, 2];

// console.log([...getPairs(array)])
// Replace every element with its previous element

// Given an array A of integers, write a program to replace each element in the array by the previous element. Replace the first element by -1.

 

// Input:

//     4

//     1 2 3 4

    

//     where:

// First line represents the number of elements in the array.
// Second line represents the elements in the array.
 

// Output:

//     -1 1 2 3

 

// Explanation: Every element A[i] is replaced by A[i-1]. And the first element will be -1, as the first element doesn't have any previous element.

// let arr=[1,2,3,4]
// let arr1=[]
// for (i=0;i<arr.length;i++){
//     if(i==0){
//         arr1.push(-1)
//     }
//     else{
//         arr1.push(arr[i-1])
//     }
// }
// console.log(arr1)

 
// function reverses(str){
// // // siht si a ginrts

// let strrev=""
 
// const length=str.length-1
//  for(let i=length;i>=0;i--){
    
     
//      strrev=strrev+str[i]
     
//  }
//  return strrev
 
// }


// let str= "this is a s"
// console.log(reverses(str))


// let arr=[1,2,1,4,5,6]
// let n=arr.length
//  let count=0
//  let b=[]
//  let c
//  let a
// for(i=0;i<n-1;i++){
//     for(j=i;j<i;j++){
//         if(arr[j]%arr[i]==0){
//             //  console.log(arr[j])
//             b.push(arr[j])
//         }else {
//             arr[j]=0
//             b.push(arr[j])
//         }
//         //  console.log(arr[i])
//     }
//     //  console.log(b)
//     // console.log(arr[i])
// }
//   console.log(...b)
// console.log(count)

// let  arr=[5 ,4 ,4 ,5 ,1 ,3]
// let val=0
// let result=0
// for(i=0;i<=arr.length-1;i++){
//     for(j=i;j<=arr.length-1;j++){
//         // console.log(val=val+arr[j])
//         val=val+arr[j]+1
//         if(val%2!==0){
//             result++


//         }
//         // console.log(result)
//     }
//     // console.log(result)
// }
//  console.log(result)
// let arr=[1 ,2 ,3 ,4]
// let arr1=[]
// for (i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         arr[i]+1
//         arr1.push(arr[i]+1)
//     }
//     else{
//         arr1.push(arr[i])
//     }
//     // console.log(...a)
// }
// console.log(arr1)
//  let n=5
//  let str=""
//  for(i=1;i<=n;i++){
//       for(j=1;j<=n-i;j++){
        
//          str += " "
//      }
//      for(k=0;k<2*i-1;k++){
//         //   if(i==1 || i==n){
//             if(i==1){
//               str += "*" 
//           }
//           else{
//               if(k==0 || k==2*i-2){
//                  str += "*"
//               }
//               else{
//                   str += " "
//               }
//           }
        
//      }
//      str += "\n"
//  }
//   for(i=n-1;i>0;i--){
//       for(j=1;j<=n-i;j++){
//           str += " "
//       }
//      for(k=0;k<2*i-1;k++){
//         //  if(i==n || i==0){
//             if(i==0){
//               str += "*" 
//           }
//          else{
//              if(k==0 || k==2*i-2){
//                  str += "*"
//               }
//              else{
//                  str += " "
//               }
//           }
        
//       }

//       str += "\n"
//   }


//  console.log(str)



//   function sumarray(arr, n)
//       {
//           let i = 0, temp = 0;
//           let Sum = [];
//           for( i=0;i<n;i++)
//              Sum[i] = 0
//           for (i = 0; i < n; i++) {
//               Sum[i] = temp
//               temp += arr[i]
//           }
//           temp = 0;
//           for (i = n - 1; i >= 0; i--) {
//             //   console.log(Sum[i] += temp);
//               console.log(Sum[i])
//               temp += arr[i];
//           }
//         //    for (i = 0; i < n; i++)
//             //    console.log(Sum[i] + " ");
//       }
//       let arr = [ 3, 6, 4, 8, 9 ];
//       let n = arr.length;
//       sumarray(arr, n);


// // 27 24 26 22 21

//  let arr = [ 3, 6, 4, 8, 9 ]
//  let rev=[]
//  let temp=[]
// for(i=arr.length-1;i>=0;i--){
//     rev +=arr[i]
//     temp=rev 
// }
//  console.log(temp.length)
// 33333333333333333333333333333333333333333333333333333333333333333333#####################################

// let str="best of luck"
// let rev=str.split(" ").reverse().join()
// let temp=""
// for(i=rev.length-1;i>=0;i--){
//     temp += rev[i].replace("," , " ")
// }
// console.log(temp)

// 33333333333333333333333333333333333333333333333333################################################################

// var str = "my name is saurabh ";
//  var empStr='',finals='';
//  var chunk=[];
//  function reverse(str){
//  var i,j=0,n=str.length;
//      for(i=0;i<n;++i){
//          // for(j=0;j<n;){
        //   if(str[i]===' '){
            //   chunk[j]=empStr;
//                empStr = '';
//               j++;
//          }else{
//               empStr=empStr+str[i];
//          }
        
//      }
//      for(var z=chunk.length-1;z>=0;z--){
//          finals = finals +' '+ chunk[z];
//          // console.log(finals);
//      }
//      console.log(finals);
//           // return true;
//     }
//     reverse(str);
// ###############################################################
// let arr=[5,3,6,7,2,3,8]
// let temp
// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }
//     }
    
// }
// console.log(arr)
// #######################333333333333##################################################################################3
//    let str = "best of luck"
//    let blank=" "+str                                                                 
//    let arr=[]
//    let emptystr=""
//    let finals=""
//    let n=str.length+1
//    let j=0
//    let s=""
//    for(x=n-1;x>=0;x--){
//        s += blank[x]
//    }
//      for (i=0;i<n;i++){
//         if(s[i]===" "){
//             arr[j]=emptystr
//            emptystr=""
//             j++
//         }
//         else{
//             emptystr=emptystr+s[i]
//         }
//      }
//     for(z=arr.length-1;z>=0;z--){
//         finals=finals +" "+arr[z]
//     }
//     console.log(finals)
// let str="best of luck"
// let arr=str.split(" ").reverse().join()
// let temp=""
// for(i=arr.length-1;i>=0;i--){
//     temp += arr[i].replace("," , " ")
// }
// console.log(temp)
// #################################################################################################################################
// let str="nadan"
// let arr=""
// for (i=str.length-1;i>=0;i--){
//     arr += str[i]
// }
// if(str===arr){
//     console.log("yes")
// }
// else{
//     console.log("no")
// }

// let n=5
// let str = ""
// for(i=n;i>0;i++){
//     for(j=0;j<n-1;j++){
//         str += " "
//     }
//     for(k=0;k<2*(n-i)-1;k++){
//         str += "*"
        
//     }
//     str += "\n"
// }

// console.log(str)
   

/* let arr1=[1,2,3,4,5,6,7]
let arr2=[5,9,10,4,11,12]
let arr3=[13,5,15,16,17]
let a=[]
let b=[]
for(let i=0;i<arr1.length;i++){
      for(let j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                a.push(arr2[j])
                break;
            }
      }
      
}
for(k=0;k<arr3.length;k++){
    for(l=0;l<a.length;l++){
        if(a[l]==arr3[k]){
            b.push(arr3[k])
            break;
        }
    }
  }
console.log(...b)
*/
/*let arr=[1,5,3,4,7,8,6]
let count=[]
let add=0
let temp=-1
outer: for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]===arr[j]){
            // console.log(`found ${arr[i]} at index ${i} and ${j} and `)
            count.push(arr[i])
             break outer
        }
    } 
}
for(k=0;k<arr.length;k++){
    for(l=0;l<arr.length;l++){
        if(arr[k]==count[l]){
            add++
        }
    }
    
}

console.log(add)
*/

/*function ok(arr){
    const newarr=new Set()
    let sum=0
    for(i=0;i<arr.length;i++){
            sum += arr[i]
            if(sum===0  || newarr.has(sum))
                return true
                newarr.add(sum)
            
            
         }
         return false
}
let arr=[4,2,-3,1,6]  
console.log(ok(arr))*/

/*function rearrange(arr,n)

    {

        // The following few lines are similar to partition

        // process of QuickSort. The idea is to consider 0

        // as pivot and divide the array around it.

        let i = -1, temp = 0;

        for (let j = 0; j < n; j++)

        {

            if (arr[j] < 0)

            {

                i++;

                temp = arr[i];

                arr[i] = arr[j];

                arr[j] = temp;

            }

        }
 

        // Now all positive numbers are 

        // at end and negative numbers at

        // the beginning of array. 

        // Initialize indexes for starting point

        // of positive and negative numbers 

        // to be swapped

        let pos = i+1, neg = 0;
 

        // Increment the negative index 

        // by 2 and positive index by 1, i.e.,

        // swap every alternate negative number

        // with next positive number

        while (pos < n && neg < pos && arr[neg] < 0)

        {

            temp = arr[neg];

            arr[neg] = arr[pos];

            arr[pos] = temp;

            pos++;

            neg += 2;

        }

    }
 

    // A utility function to print an array

    function printarray(arr,n)

    {

        for (let i = 0; i < n; i++)

            console.log(arr[i] + "   ");

    }
 

   

     

        let arr = [-1, 2, -3, 4, 5, 6, -7, 8, 9];

        let n = arr.length;

        rearrange(arr,n);
        printarray(arr,n)
        */
    /*function max(arr,n){
        let max=Math.max(...arr)
        let sum=0
        for(i=0;i<n;i++){
            sum += arr[i]
        }
        if(sum<0){
        return max
        }
        return sum
    }
        
    
   let arr=[-1,-5,-3,-2,-5]
   let n=arr.length
   console.log(max(arr,n))
    */
   /*let a=[]
   function fact(arr,n){
    for(i=0;i<n;i++){
        temp *=arr[i]
        a.push(temp)
    }
    return Math.max(...a)

   }
   let arr=[-2,1,-3,4,-1,2,1,5,4]
   let n=arr.length
   let temp=1
   console.log(fact(arr,n))*/
   
  /*let arr=[1,9,3,10,4,20,2]

  let temp

  let a=arr.sort((b,c)=>{return b-c})

  let c=[]
  for(i=1;i<=arr.length;i++){
    for(j=0;j<=a.length;j++){
        if(i==a[j]){
            c.push(a[j])
        }
    }
   
  }
  console.log(...c) 
  /*function flatten(arr){
    const result=[]
    for(i=0;i<arr.length;i++) {
        
    
        if(array.isarray(arr[i])){
            result.push(...flatten(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result
  }
  let arr=[1,2,3,[4,5,[6,7],8,9]]
  console.log(flatten(arr))*/
  /*function traverse(arr){
       let temp=1
       let count=0
       let store=[1]
       for(i=0;i<arr.length-1;i++){
        for(j=i+1;j<=i+1;j++){
            if(arr[i]>arr[j]){
                store.push(temp)
            }else{
                count +=2
                store.push(count)
            }
        }
       }
       
         console.log(...store)
         return
        

       
  }
  let arr=[100,80,60,70,60,75,85]
 console.log( traverse(arr))*/

/*
 arr=[1,2,4,3,6]
 let x=10
 let a=0
 let temp=-1
 for(i=0;i<arr.length;i++){
    // a=arr[i]
    for(j=i;j<arr.length;j++){
        
````````````        if(a===x){
            console.log(1)
            break
        }else{
            console.log(temp)
        }
        a +=arr[j]
        
        
    }
 }
//   console.log(a)

*/
/*function mispos(arr){
let neg=[]
let pos=[]
for(i=0;i<arr.length;i++){
    if(arr[i]>0){
        pos.push(arr[i])
    }else{
        neg.push(arr[i])
    }
}
let n=pos.length

for(j=0;j<n;j++){
    if(pos[j]!==j+1)
        return(j+1)
    
}
return n+1
}
let arr=[0,-10,1,2,3,4,5,-20].sort((a,b)=>{
    return a-b
})
console.log(mispos(arr))*/
/*
function subset(arr1,arr2,n){
    let arr3=[]
    let m=0
    
    for(i=0;i<arr1.length;i++){
        for(j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                arr3.push(arr1[i])
                m +=1
            }
            
        }
    }
    if(m==n){
        return "arr2[] is a subset of arr1[]"
    }else{
        return "arr2[] is not a subset of arr1[]"
    }
    
    
}
arr1=[11,1,13,21,3,7]
arr2=[11,3,7,1]
n=arr2.length

console.log(subset(arr1,arr2,n))
*/

/*function waveform(arr){
    arr.sort((a,b)=>{return a-b})
    
    let temp=[]
    for(i=0;i<arr.length;i+=2){
        
             if(arr[i]<arr[i+1]){

                 temp = arr[i];

                arr[i] = arr[i+1];

                 arr[i+1] = temp;
                

             }
             

        }
        
 
 
 return arr
 
}
let arr=[2,4,7,8,9,10]

console.log(waveform(arr))
*/
/*function find(str,sub){
    let a=""
    for(i=0;i<str.length;i++){
       a=str[i].indexOf(sub)
       console.log(str[i])
    }
      return a
}


let str=["Code Zinger University"]
let sub=["Zinger"]

 console.log(find(str,sub))*/
/*function balance(arr,n){
    let a=0
    let c=[]
    let b=0
    
    for(i=0;i<n;i++){
        if(n==1 && arr[i]>0 ){
            return 0
        }
        
        a +=arr[i]
        c.push(a)
    }
    let k=c.length
    for(j=k;j<arr.length;j++){
        b +=arr[j]
    }
    if(a===b){
        return 1
    }
    
    return 0
}

 let arr=[1,1]
 let n=arr.length
 
 for(h=0;h<arr.length;h++){
     if(n%2==0){
        n=arr.length/2
     }else{
        n=parseInt(arr.length/2)+1

     }
 }
 
  
 console.log(balance(arr,n))*/
/*function rev(arr,n){
    let arr1=[]
    for(i=n-1;i>=0;i--){
        arr1.push(arr[i])
    }
    return arr1
}

 let arr=[-10]
 let n=arr.length
 
 var res=rev(arr,n)
 console.log(...res)*/
/* function palidrome(str,n){
       let a=""
       for(i=n-1;i>=0;i--){
           a += str[i]
       }
       if(a===str){
        return 1
       }else{
        return 0
       }
   

 }
 let str="level"
 let n=str.length
 var res=palidrome(str,n)
 console.log(res)
 */
//  1 3 3 5
/*function even(arr,n){
    temp=[]
    for(i=0;i<n;i++){
        if(arr[i]%2==0){
            temp.push(arr[i]+1)
        }else{
        temp.push(arr[i] ) 
        }    
        }
        return temp
    }
    

let arr=[1,2,3,4]
let n=arr.length
console.log(n)
console.log(even(arr,n))
*/
/*function minc(arr,n,d){
    let count=0
    
    for(i=0;i<n-1;i++){
        if(arr[i]==arr[i+1]){
            count--
        }
       if(arr[i+1]-arr[i]!==d){
        count ++
       }
    }
    return count
    
}
    
let arr=[1,2,3,4,6]
let n=arr.length
let d=2
console.log(minc(arr,n,d))
*/
/*function countOddSum(ar, n)
{
    let result = 0;
 
    // Find sum of all subarrays
    // and increment result if
    // sum is odd
    for(let i = 0; i <= n - 1; i++)
    {
        let val = 0;
        for(let j = i; j <= n - 1; j++)
        {
            val = val + ar[j];
             
            if (val % 2 != 0)
                result++;
        }
    }
    return (result);
}
 
// Driver code
let ar = [ 5, 4, 4, 5, 1, 3 ];
let n = ar.length;
console.log("The Number of Subarrays" +
               " with odd sum is ");
 console.log(countOddSum(ar, n));
 
*/
/*
function maxindex(arr,n){
    let count=1
    for(i=0;i<n;i++){
        if(n==2 && arr[0]<arr[i+1]){
            return count 
        }else{
            if(arr[0]<arr[i]){
                return i+count
            }

        }     
    }
    return -1
}
let arr=[1,10]
let n=arr.length

console.log(maxindex(arr,n))
*/
/*
function isVowel(ch)
    {
        return (ch == 'a' || ch == 'e' ||
                ch == 'i' || ch == 'o' ||
                ch == 'u');
    }
    
       
    // Method to calculate difficulty
    function calcDiff(str)
    {
        
        let vow = 0, cons = 0;
        let hard = 0,easy = 0;
        let consec_conso = 0;
       
        // Start traversing the s
        for (let i = 0; i < str.length; i++)
        {
               
            // Check if current character
            // is vowel or consonant
            if (str[i] != ' ' &&
                isVowel(str[i].toLowerCase()))
            {
                // Increment if vowel
                vow++;
               
            }
       
            // Increment counter for consonant
            // also maintain a separate counter for
            // counting consecutive consonants
            else if (str[i]!= ' ')
            {
                cons++;
                consec_conso++;
            }
       
            // If we get 4 consecutive consonants
            // then it is a hard word
            if (consec_conso == 4)
            {
                hard++;
       
                // Move to the next word
                while (i < str.length && str[i]!= ' ')
                    i++;
       
                // Reset all counts
                cons = 0;
                vow = 0;
                consec_conso = 0;
            }
       
            else if ( i < str.length &&
                    (str[i] == ' ' || i == str.length-1))
            {
                   
                // Increment hard, if no. of
                // consonants are higher than no.
                // of vowels, otherwise increment
                // vow
                if(cons > vow)
                    hard++;
                else
                   easy++;
       
                // Reset all counts
                cons = 0;
                vow = 0;
                consec_conso = 0;
            }
        }
       
        // Return difficulty of sentence
        return 5 * hard + 3 *easy;
    }
     
    let str = "Difficulty of sentence";
    // let str2 = "We are geeks";
    console.log(calcDiff(str));
    // console.log(calcDiff(str2));
    */
  /* function misschar(str){
    
    let a=[]
    str=str.toLowerCase()
    let str1="abcdefghijklmnopqrstuvwxyj"
    for(i=0;i<str1.length;i++){
        if(str.indexOf(str1[i])==-1){
            a +=str1[i]
            
         }
       
    }
    return a
   }
let str="The quick brown fox jumps"
console.log(misschar(str))*/
/*function isVowel(c) {
    return (c == 'a' || c == 'A' || c == 'e'
            || c == 'E' || c == 'i' || c == 'I'
            || c == 'o' || c == 'O' || c == 'u'
            || c == 'U');
}

// Function to reverse order of vowels
/*function reverseVowel(str1) {
    let j = 0;
    // Storing the vowels separately
    let str = str1.split('');
    let vowel = "";
    for (let i = 0; i < str.length; i++) {
        if (isVowel(str[i])) {
           j++;
            vowel += str[i];
            
        }
    }

    // Placing the vowels in the reverse
    // order in the s
    for (let i = 0; i < str.length; i++) {
        if (isVowel(str[i])) {
            str[i] = vowel[--j];
            
        }
    }

     return str.join("");
}
 
let str = "hello world";
  console.log(reverseVowel(str));



*/
/*
function getFrequency(s) {
    var freq = {};
    for (var i=0; i<s.length;i++) {
        delete s.charAt(0)
        var character = s.charAt(i);
        
        if (freq[character]) {
           freq[character]++;
          
        } else {
           freq[character] = 1;
           
        }     
    }
    freq[character] +="\n"
    
    let res=freq.toString()
    let b=res.replace(/\,/g," ")
    
    return b
    
};
let string="hello world"
let s=string.replace(" ","").split("").reverse().sort().join("")

let result=getFrequency(s)
console.log(result)
*/
/*function ele(s){
    
    let a = ''
    a = s.split('.');
    
    let ans = ''
     s='';
    for(let i = a.length-1;i>=0; i--){
        s = s+a[i];
        if(i!==0){
            s=s+"."
        }
        
    }
   
     return s;

}

let s="i.like.this.program.very.much"
console.log(ele(s))*/
/*function sum(nums, target) {
    for(let i = 0; i <= nums.length; i++){
         if(nums[i]+nums[i+1]==target){
            return [i,i+1]
         }
            
    }
};
let nums =[3,2,3]
let target=6
console.log(sum(nums,target))
*/




/*
const arr=[
    {
        name:"prakash",
        age:20
    },
    {
        name:"dependra",
        age:22
    },
    {
        name:"ruby",
        age:21
    }
]

arr.sort((a,b)=>{
    if(a.name>b.name){
        return 1
    }else{
        return -1
    }
})

console.log(arr)



*/
/*function pairs(arr){
    let a=[]
   for(i=0;i<arr.length;i++){
      if(a.indexOf(arr[i])==-1){
            a.push(arr[i])
      }
   }
   let b=a.length
   return b*b
}
let arr=[12 ,3 ,67 ,3 ,445]
console.log(pairs(arr))
*/
/*function rep(arr){
    let b=[]
     
    for(i=arr.length-1;i>0;i--)
        arr[i]=arr[i-1]
    arr[0]=-1
    for(i=0;i<arr.length;i++){
           b.push(arr[i])
    }
    return b
    

}
let arr=[1,2,3,4]
console.log(rep(arr))*/
/*const candidates = [
    {
            name: 'user1',
            skills: ['reactjs', 'redux', 'nodejs', 'mongodb']
    },
    {
            name: 'user2',
            skills: ['reactjs', 'redux', 'nodejs']
    },
    {
            name: 'user3',
            skills: ['java', 'redis', 'kafka']
    }
]
const required_skills = ['reactjs', 'redux'] /* find which user have same skill as requried skills and maximum skills"*/

/*function bal(arr){
    let n=arr.length
   

    for(i=0;i<arr.length;i++){
         if(n<=2 || arr[0]<0){
            arr[i]!==arr[i+1]
            return 0
         }
    }
    return 1

}
let arr=[2147483647 ,2147483645 ,2147483646 ,2147483646]
console.log(bal(arr))*/

/*function rev(str){
    let s=str.split(".")
     str=""
    for(i=s.length-1;i>=0;i--){
        str +=s[i]
        if(i!==0){
            str +="."
        }
    }
    return str

}
let str="pqr.mno"
console.log(rev(str))*/


// A message containing letters from A-Z is being encoded to numbers using the following mapping:

//  'A' -> 1
//  'B' -> 2
//  ...
//  'Z' -> 26
/*function conse(arr){
    let n=arr.length
    let count=0
    let hard=0
    if(n>=6){
        for(i=3;i<n;i++){
            if(arr[i]==arr[i+1]){
                count++
                }else{
                    hard++
                }
            }
        }
        if(count==1 && hard==2){
            return false
        }
    return true  
}


*/
/*

function incres(a,b){
    if(a.name<b.name){
        return -1
    }
    if(a.name>b.name){
        return 1
    }
    if(a.name==b.name){
        if(a.value<b.value){
            return -1
        }else{
            return 1
        }

    }
    return 0
}


function arrayUnique(arr, uniqueKey) {
    arr.sort(incres)
    const flagList = []
    let b= arr.filter((item)=> {
      if (flagList.indexOf(item[uniqueKey]) === -1) {
        flagList.push(item[uniqueKey])
        return flagList
      }
    })
    return b
  }
let array1 = [
    { name: "a", value: 123 },
    { name: "b", value: 666 },
  ];
  let array2 = [
    { name: "c", value: 444 },
    { name: "d", value: 999 },
    { name: "b", value: 111 },
  ];
  let arr=array1.concat(array2)
  // result: [
  //   { name: ""a"", value: 123 },
  //   { name: ""b"", value: 111 },
  //   { name: ""c"", value: 444 },
  //   { name: ""d"", value: 999 },
  // ];"

console.log(arrayUnique(arr,'name'))*/
/*
function ind(arr,ok){
   
    // const index = arr.map((arr )=> arr.name).indexOf(ok);
//    return index
let count=0
   for(i=0;i<arr.length;i++){
      if(arr[i].age==ok){
         return i
      }
   }
}

let arr=[
    {
        name:"prakash",
        age:22
    },
    {
        name:"dependra",
        age:23
    },
    {
        name:"ruby",
        age:25
    }
]
let age=22
console.log(ind(arr,age))*/
/*
function uniqueKey(arr){
    let arr1=[]
    for(i=0;i<arr.length;i++){
         arr1.push(arr[i].name) 
    }
    return 
}
let arr=[
    {
        name:"prakash",
        age:22
    },
    {
        name:"dependra",
        age:23
    },
    {
        name:"ruby",
        age:25
    }
]

console.log(uniqueKey(arr))*/
/*
const fruits={
    name:'apple',
    desc:'fruits',
    isBig:false
};
const animals={
    desc:'animal',
    name:'cat',
    isSafe:true
}
console.log(comb(fruits,animals))*/
/*function _keys(obj) 
 {
     if (!isObject(obj)) return [];
     if (Object.keys) return Object.keys(obj);
    // var keys = [];
    // for (var key in obj) if (_.has(obj)) keys.push(obj);
    // return keys;
  }
  function isObject(obj) 
{
    var type = typeof obj;
    return type === 'function' || type === 'object' 
  }
  */
 /*
 function object(obj){
    arr=[]
    rv={}
    for(i=0;i<obj.length;i++){
        arr.push(Object.values(obj[i]))
    }
    for(i=0;arr.length;i++){
        if (arr[i] !== undefined) rv[i] = arr[i];
          i++
    }
    return rv;
    
 }
 var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
    // Sample Output: name,sclass,rollno

 let res=object(library)
 console.log(res)


*/
/*function sortN(names,heights){
    let obj={}
    let result=[]
    for(i=0;i<names.length;i++){
        obj[heights[i]]=names[i]
    }
    let sortArr=Object.keys(obj).sort((a,b)=>b-a)
    for(j=0;j<sortArr.length;j++){
        result.push(obj[sortArr[j]])
    }
    return result
}
let names = ["Mary","John","Emma"]
let heights = [180,165,170]
console.log(sortN(names,heights))*/
/*
Input:
N = 4, K = 2
Arr = [100, 200, 300, 400]
Output:
700
 */

     /*function maximumSumSubarray(K, Arr, N) {
        let i=0,j=0;
        let sum=0,maxsum=0;
        while(j<N){
            sum=sum+Arr[j]
            if(j-i+1<K){
                j++;
            }
            else if(j-i+1==K){
                maxsum=Math.max(sum,maxsum)
                sum=sum-Arr[i]
                i++
                j++
            }
        }
        return maxsum;
      }
      */
     /*
     function compare(o1, o2){
        for(var p in o1){
            if(o1.hasOwnProperty(p)){
                if(o1[p] !== o2[p]){
                    return false;
                }
            }
        }
        for(var p in o2){
            if(o2.hasOwnProperty(p)){
                if(o1[p] !== o2[p]){
                    return false;
                }
            }
        }
        return true;
    };
    function Solu(k,arr) {
        
        let i=0;
        let j=0;
        let obj={}
        let temp={}
        var count=0
        for(let i of k){
            obj[i]=(obj[i]||0)+1
        }
       
        while(j<arr.length){
            temp[arr[j]]=(temp[arr[j]]||0)+1
            if(j-i+1<k.length){
                j++
            }else if(j-i+1==k.length){
                if(compare(temp,obj)){
                    count++
                }
                temp[arr[i]]--
                if(temp[arr[i]]<=0){
                    delete temp[arr[i]]
                }
                i++
                j++
            }
        }
        return count
    }
*/
/*function substr(nums1,nums2){
    let stack=[]
    
   for(i=0;i<nums1.length;i++){
    let max=-1
    let val=nums2.indexOf(nums1[i])
         for(j=val;j<nums2.length;j++){
            if(nums1[i]<nums2[j]){
                max=nums2[j]
                break
            }
         }
          stack.push(max)
   }
 
    return stack
}
let nums1 = [4,1,2]
let nums2 = [1,3,4,2]

console.log(substr(nums1,nums2))*/
/*function maxnum(arr){
    let arr1=[]
    let stack=[]
    arr1=arr
    for(i=0;i<arr.length;i++){
        let max=1
        let val=arr1.indexOf(arr[i])
        for(j=val;j>=0;j--){
            if(arr[i]>arr1[j]){
                max++
            }
        }
        
        stack.push(max)
        max=1
  
    }
    return stack
}
let arr=[6,2,5,4,5,1,6]
console.log(maxnum(arr))*/
/*var largestRectangleArea = function(heights) {
    let max=0
    for(let i=0;i<heights.length;i++){
        let base = heights[i]
        let width = 1
        for(let j=i+1;j<heights.length;j++){
            if(heights[j] < base){
                break;
            }
            width++
        }
        
        for(let j=i-1;j>=0;j--){
            if(heights[j] < base){
                break;
            }
            width++
        }
        let area = heights[i]*width
       
        max = Math.max(max,area)
    }
    return max
};
let heights=[6,2,5,4,5,1,6]
console.log(largestRectangleArea(heights))*/
/*var topKFrequent = function(words, k) {
    let map={}
    let arr=[]
    for(let i of words){
        if(map[i]>0){
            map[i]++
        }else{
           map[i]=1
        }
       
    }
    let sortbykey=Object.keys(map).sort()
    let sortbyvalue=Object.values(sortbykey).sort((a,b)=>map[b]-map[a])
    for(i=0;i<k;i++){
        arr.push(sortbyvalue[i])
    }
    return arr
};
let words =["the","day","is","sunny","the","the","the","sunny","is","is"] 
let k = 4
console.log(topKFrequent(words,k))
/*var map = {};
    var arr = [];
    for (var i=0; i < words.length ; i++) {
        if(!(words[i] in map)) {
            map[words[i]] =1;
        } else {
            map[words[i]]++;
        }
    }
    let sortedkeys = Object.keys(map).sort();
    let sortedkeysbyvalue = Object.values(sortedkeys).sort((a,b)=>map[b]-map[a]);
    for(var i=0 ; i< k ; i++) {
        arr.push(sortedkeysbyvalue[i]);
    }
 
    return arr;*/

    /*function dup(arr){
        
         let obj={}
         for(let i of arr){
            if(obj[i]){
                obj[i]++
            }else{
                obj[i]=1
            }
         }
         return obj.value(arr[i])===3
    }
    let arr="abcdeee"
    console.log(dup(arr))
*/
/*var singleNumber = function(nums) {
    let obj={}
    for(i of nums){
        if(obj[i]){
            obj[i]++
        }else{
            obj[i]=1
        }
    }
   for(let val in obj){
    if(obj[val]===1){
        return val
    }
   }

};
var nums=[0,0,1,1,1,2,2,3,3,4]
console.log(singleNumber(nums))*/
/*let n=5
let str=""
for(i=n;i>0;--i){
    for(j=0;j<=n-i;j++){
        str +=" "
    }
     for(k=0;k<2*i-1;k++){
        str +="*"
     }
    str +="\n"
}
console.log(str)

function isPrime(num) {
    // 1 is not a prime number
    if (num <= 1) {
      return false;
    }
    
    // Check for divisibility from 2 up to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    
    // If the loop completes without finding a factor, the number is prime
    return true;
  }
  
  function getPrimes(limit) {
    let primes = [];
    for (let i = 2; i <= limit; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    return primes;
  }

console.log(getPrimes(50))

*/
// var isAnagram = function(s, t) {
//     s=s.split("").sort().join()
//     t=t.split("").sort().join()
//     if(s.includes(t)){
//         return true 
//     }
//     return false 
// };
// let s="anagram"
// let t="nagaram"
// console.log(isAnagram(s,t))
// var wordPattern = function(pattern, s) {  
//     s = s.split(" ") 
//     let obj = {}
    
//     // loop over each character in pattern and update obj accordingly
//     for (let i of pattern) {
//         if (obj[i]) {
//             obj[i]++
//         } else {
//             obj[i] = 1
//         }
//     }
    
//     // loop over each word in s and update obj accordingly
//     for (let j of s) {
//         if (obj[j]) {
//             obj[j]++
//         } else {
//             obj[j] = 1
//         }
//     }
    
//     // loop over each key in obj and check if its value matches its count
//     for (let key in obj) {
//         const val=obj[key]
//         if (obj[key] !== obj[val]) {
//             return false
//         }
//     }
    
//     return true
// };

// let pattern = "abba" 
// let s = "dog cat cat dog"
// console.log(wordPattern(pattern,s))
function primenumber(n){
    let arr=[]
   if(n>1){
    for(i=0;i<=n;i++){
        if(i%2!==0 && i%3!==0){
            arr.push(i)
        }
    }
   }
   
   for(i=0;i<arr.length;i++){
    if(arr.includes(n)){
        return true 
    }
   }
   return false 
}


let n=22

console.log(primenumber(n))











































