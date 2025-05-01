//There are three main types to declaire a function

function addNum (a,b){
    console.log('a  +  b  = ', a+b)
    return a+b

    console.log('hello world'); // -> After return nothing execute

}
const result  = addNum(5,6)  // -> Here we have to retrun a functïon value to hold that function in a object
console.log(result)



2.  // the second method is

const user = {
    name : "hitesh",  
    age : "18",
    ocuupation : "developer"
}

const addnum = function (object){
    console.log(`The User Name :  ${object.name}`)
    console.log(`The User age :  ${object.age}`)
}
addnum(user)

const addnum = (num1, num2) => (num1+ num2)
console.log(addnum(10,20)) 


(function (num1) {
    console.log('the number is : ', num1)
})(50);

( (num1, num2) => {
    console.log('addition of two numbers is : ', num1 + num2);
})(10,20)


function user (val1, val2, ...left) {
     return val1, val2, left
}
console.log(user(10,20,30,40,50))