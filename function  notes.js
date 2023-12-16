// return funtion=one funtion return to another funtion is called funtion is a first class citizen
function a() {
    return function b() {
        console.log("if we are assign a funtion in a variable then no need to declare anything only call variable in outsude the blockj")

    }
}
a()()
// in a javascript we can assign the funtion to a variable .that why funtion is a first class function 
let thankyou=function() {
    console.log(" if we are assign a funtion in a variable then no need to declare anything only call variable in outsude the blockj")
}
thankyou()
// it is very important the use of () with variable other wise code is not run
// ###########################################################################33
let youtube={
    Name:"prakash mishra",
    qualif:function() {
        console.log("is a good boy")
    }
}
 youtube.qualif()
 



