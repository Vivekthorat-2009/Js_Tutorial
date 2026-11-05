// normal function Structure with Parameter

function greet (name){

    console.log("Hello "+name)
}
greet("vivek");

//---------------------------------------
// with default parameter
function car_ty(carty = "pertrol"){
    console.log("car model is petrol")
}
car_ty();
//-----------------------------------------
// with return statement 
function add( a ,b){
    return a+b
}
console.log(add(2,3))
//------------------------------------------
//anonymous Func

const greeting = function() {
  return "Hi there!";
};
console.log(greeting());
//------------------------------------------------
//Func expression refer readme file 
const addition = function(a, b) {
  return a + b;
};
console.log(addition(2, 8));
//----------------------------------------------------
//Arrow func
const square = n => n * n;
console.log(square(4));
//----------------------------------------------------
//IIFE function 
(function () {
    console.log("Hello world ");
})

();
//-----------------------------------------------------
//callback func
function num(n, callback) {
    return callback(n);
}

const double = (n) => n * 2;

console.log(num(5, double));
//-------------------------------------------------------
//constructor func
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user = new Person("Vivek", 17);
console.log(user.name);
console.log(user.age);
//--------------------------------------------------------
//generator func (Lazy load // pause in between )
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numbers();
console.log(gen.next().value); 
console.log(gen.next().value);
//---------------------------------------------------------
// Recusion 
function factorial(n) {
  if (n === 0) 
    return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));
//----------------------------------------------------------
//Nested func
function Uf(a) 
{
    function Innerf(b) 
    {
        return a + b;
    }
    
    return Innerf;
}

const add1 = Uf(10);        //outer 
console.log(add1(5));       // inner value
//-----------------------------------------------------------------
//functon expression

