//object using {} , key value pair
   let obj = {
    name: "Vivek",
    age: 17,
    
};
console.log(obj);
//-------------------------------
//using constructor
let ob = new Object();
ob.name= "thorat"
ob.age= 90,
console.log(ob);
//-------------------------------------------
//access element 
let emp = { name: "vivek", age: 17 };

// Using Dot Notation
console.log(emp.name)
// Using Bracket Notation
console.log(emp["age"]);
//-----------------------------------
//modify existing element
let stud = { name: "vievk", age: 2 };
console.log(stud);
stud.age = 23;
console.log(stud);
//-----------------------------------
//adding property & deleting property and checking existing properties
let o = { model: "B M W" };
o.color = "Red";
console.log(o);
delete o.color;
console.log(o);
console.log("color" in o);
console.log(o.hasOwnProperty("model"));
//---------------------------------------------------------
//iteration for obj
let Rcb=
{
    Name:"virat"
    ,Age:37
    ,Runs:20000
}
for(let i in Rcb){
    console.log(i,"=",Rcb[i])
}
//-----------------------------------------------------
//merging a object
let obj1 = { name: "vivek" , role:"ceo"};
let obj2 = { name : " thorat " ,age: 23,role:"manager"};    //

let obj3 = { ...obj1, ...obj2 };
console.log(obj3);
//------------------------------------------------------------
//used to find number of property present in object 
let obj7 = { name: "MSD", age: 44 };
console.log(Object.keys(obj7).length);
//-------------------------------------------------------------
//how to recognize   js object 
let obj18 = { name: "VIRAT KOHLI" };
console.log(typeof obj18 === "object" && obj18 !== null);
//------------------------------------------------------------------
//----------------------------------------------------------------------