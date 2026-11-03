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
