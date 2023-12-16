/*function modify(obj1,obj2){
    let output={}
    output["name"]=[]
    output["desc"]=[]

    for(let key in obj1){
        if(Object.hasOwnProperty(key)){
            if(key=="name") output["name"].push(obj1["name"])    
        }
        else if(key=="desc") output["desc"].push(obj1["desc"])
        else output[key]=obj1[key]
        
    }
    for(let key in obj2){
        if(Object.hasOwnProperty(key)){
            if(key=="name") output["name"].push(obj2["name"])
        }
        else if(key=="desc") output["desc"].push(obj2["desc"])
        else output[key]=obj2[key]
    }
    return output


}
let fruits={
    name:"apple",
    desc:"fruit",
    isBig:"false"
}
let animals={
    name:"animal",
    desc:"cat",
    issafe:"true"
}

let output={
    name:["apple,"animal"]
    desc:[fruit,cat]
    issafe:true
    isBig:false
}

console.log(modify(fruits,animals))
*/
/*function sort_by(a,b){
    if(a.libraryID<b.libraryID){
        return 1
    }
    if(a.libraryID>b.libraryID){
        return -1
    }
    return 0

 }
 function sortt(library,libraryID){
    let a=library.sort(sort_by)
    return a

 }
var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        libraryID: 1254
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];
 
console.log(sortt(library,"libraryID"))
*/

/*function objt(word1){
   var obj={}
   for (let i of word1) {
    if(obj[i] > 0) {
    obj[i]++;
    } else {
    obj[i] = 1;
   };
}
  
return obj

}

let word1=[1,2,3,3,3,4,4,4]

// let animals="animal"
    

console.log(objt(word1))*/
/*
function reverse(str){
    let s=str.split("")//[]
    let start=0
    let end=str.length-1

    while(start<end){
        [s[start],s[end]]=[s[end],s[start]]
        start++
        end--
    }
    return s.join("")
}

function reverseAll(arr){
    for(let i=0;i<arr.length;i++)  arr[i]=reverse(arr[i])
    return arr
}
let arr=["ok","gpgle"]

console.log(reverseAll(arr))
*/
/*
function hire(candidates,required_skills){
    let n=candidates.length
    let output=[]
      for(i=0;i<n;i++){
        for(j=0;j<candidates[i].skills.length;j++){
            if(candidates[i].skills[j]==required_skills[i]){
                 output.push(candidates[i])
            }
        }
      }
      return output
}

const candidates=[
    {
        name:'user1',
        skills:['reactjs','redux','nodejs','mongodb']
    },
    {
        name:'user2',
        skills:['reactjs','redux','nodejs']
    },
    {
        name:'user3',
        skills:['java','redis','kalkata']
    }
]
const required_skills=['reactjs','redux']
console.log(hire(candidates,required_skills))
*/