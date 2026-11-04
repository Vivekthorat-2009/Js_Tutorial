    // declaring a array 

    let array = [23,20,23,23]

 console.table(array)       //in table form
  console.log(array)        // to display full list
  console.log(array[0])     // to display specific element

  // declaring by constructor
  //---------------------------------------------------------------------
    let arr = new Array(10, 20, 30);
    console.log(arr);

    // removing element from array using func()
    // 1.pop()=remove element of last index
    // 2.shift()=remove element of first index
    // 3.splice()=remove element from specific position
    
    //------example ---
    console.log("\n\n")
     let arr1 = new Array(10, 20, 30,40,50,60,70);
    console.log("Original Array :"+arr);
    
    console.log(" Element to delete "+arr1.pop()) 
    console.log("After deletion "+arr1)       

    console.log(" Element to delete "+arr1.shift())
    console.log("After deletion "+arr1)

    console.log("deleted element"+arr1.splice(1,3))
      console.log("After deletion "+arr1)

//--------------------------------------------------------------------------
    // # To find length of Array
    // let arr1 = new Array(10, 20, 30,40,50,60,70);
     console.log(arr1.length)
     arr1.length=1            // can increase and delete size of array
     console.log(arr1.length)

//-----------------------------------------------------------------------------

// array using for-each see it more in later 
 arr1.length=8;
arr1[5]=35;

arr1.forEach(function myfunc(x) {
    console.log(x);
});
//---------------------------------------------------------------

// JSON.stringify()
//let arr1 = new Array(10, 20, 30,40,50,60,70);

let jsonformat = JSON.stringify(arr1);
console.log(jsonformat);

//----------------------------------------------

// Array of object 
// A simple array of student objects
const students = [
  { id: 1, name: "Abc", grade: "A" },
  { id: 2, name: "xyc", grade: "B" },
  { id: 3, name: "rx10", grade: "c" }

];
students.push({id:4, name:"vivek" ,grade:"D"});

for( let  i = 0;i<students.length;i++){
console.log(students[i].id)
console.log(students[i].name)
console.log(students[i].grade)

}
//use for or this method
//console.log(students)
console.log(students.sort());

//-----------------------------------------------------------

//how to find which type of variable is it 
console.log(typeof array) // array is a object 

//-----------------------------------------------------------------------------
// some popular method of array
//

let name1=["vivek","Kailas","Thorat"]
console.log(name1.join("-"))     // gives - sign in between
//console.log(name1.join("/"))
console.log(name1)
name1.push("hii")
console.log(name1)
name1.pop();
console.log(name1)

let cart = [10, 20, 30];
console.log(arr.shift()); 
console.log(arr);

let Aarr = [20, 30];
arr.unshift(10);
console.log(arr);

let a = [1, 2], b = [3, 4];
console.log(b.concat(a));   // joins two array

let arr23 = [10, 20, 30, 40];
console.log(arr23.slice(0, 4));   //slice(start  index , stop on index) 

let arrw = [10, 20, 30];
arrw.splice(1, 0, 25); // splice(index to target , deleted element 0 , 1,..etc(not index), element value to insert)
console.log(arrw);

let txt = [1, [2, [3, 4]]];     // nested array
console.log(txt.flat(1));       // remove  first layer 
console.log(txt.flat(2));       // remove 2 layer of nested array

let ar = [1, 2, 3];
console.log(ar.flatMap(x => [x, x * 2]));   

let arr1212 = [10, 20, 30];
console.log(arr1212.includes(20));

let AA1= [10, 20, 30, 40];
console.log(AA1.find(x =>x> 20));   // first x =0 th index & second x = 1th index

// checks 10: Is 10 > 20 No 
// checks 20: Is 20 > 20 No 
// checks 30: Is 30 > 20 Yes

let vt = [10, 20, 30, 40];
console.log(vt.findIndex(x => x > 20));   // use to find index of element value


vt.fill(0, 1, 3);  //.fil(value ,start , end)
console.log(vt);

let vtt = [10, 20, 30, 40];

let vivek = vtt.reverse();
console.log(vivek)
   

delete vivek[2]
console.log(vivek)

