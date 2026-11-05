//----------------PRIMITIVE DATATYPE--------------
const root =8080;               //used for constant value
let User_Name = "vt";           //for variable
var Password="xyz@2121";        //avoid use of var because of scope problem
let x=22;                       //for integer
let marks=null;                 //null is empty
let age ;                       //undefined is not filled/declare yet
let runs =true;                 // boolean term /datatype

console.log(root);
console.log(User_Name);
console.log(Password);
console.log(x);
//used to print in table
console.table([root,User_Name,Password,x,marks,age,runs]);

//now find datatype 
console.log(typeof age);            //show undefined
console.log(typeof null)            //shows otuput as object
console.log(typeof "vivek thorat")




//---------NON-PRIMITIVE DT------------

// 1 . object== represent key value pair 
let car={
    name:"toyota",
    price:10000000
}

//2.Array: for order list

let arr=["hello","bye",]
console.log(arr)            //for full list display  

console.log(arr[1])       //for specific element

//3.function== reusable block of code

function frt(){
    console.log("hello")
}
 frt()

 //in deep in another file only learn for syntax