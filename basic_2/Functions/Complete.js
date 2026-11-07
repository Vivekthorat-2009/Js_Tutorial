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
//callback wait till given time 
setTimeout
(
  function()
  {
    console.log("This message appears after 3 seconds!");
  } , 3000
);
//another option to use callback is follows
let arr=["vivek","thorat"]
arr.forEach(function toprint(i){   // value of array is put in i 
console.log(i)
});
//-------------------------------------------------------
// for each 
let ar = [1,2,3,4,5,5]
ar.forEach(
  (i) => { console.log(i) }
);
//-------------------------------------------------------------------
//MAP()-used to create new array in operation 
let nums=[101,102,103]
let newArray =nums.map((c)=>{
  return c;
}
);
console.log(newArray);
//------------------------------------------------------------------------------
//filter methods
let Llist =[1,2,3,4,5,6,7,8,9,10]
let evennum=Llist.filter(
    (val)=>{
      return val%2==0
    })
console.table(evennum);




//---------------------------------------------------------------
//Function Overloading 
function vt(args1,args2){   //these args are the local variable in {...} 
  console.log(args1+args2)
};
function vt(args3,args4,args5){
  console.log(args3+args4+args5)
};
 vt(2,4)
 vt(5,7,5)
 //-----------------------------------------------------------------------------
 // arrow operator
 const sum =(a,b)=>{
  return a+b
 }
 console.log(sum) //this is print whole function
 console.log(sum(3,5))  // this print addition 

 
  //basic one problem 
 let cons=0;
 function vow(str){
  let i;
  for(const char of str){
    if(char=='a'||char=='A'||char=='e'||char=='i'||char=='o'||char=='E'||char=='I'||char=='O'){
     cons++

    }
   
  }
 }
vow("vivek")
console.log("number of vowel are follows "+cons)