// now i am going to give ex to closure how it work
let c=2
const outer=(a)=>{
    let b=5;
    const inner=()=>{
        let sum=a+b+c
        console.log(`that is result of closure ${sum}`)
    }
    return inner
}
let inner=outer(2)

inner()
// for example 
// 1.we will write outer function aand pass the parameter 2 amd argument is a
// 2. inside the outer function we will write variable name b and give the value is 5
// 3.then we write inner function inside the function we write sum name variable 
// 4.inside the inner function we add the both  variable thats sum is 15
//  so our inner function can access the outer function variable as well as all the global variable 
