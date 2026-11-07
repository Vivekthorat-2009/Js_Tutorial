// 1 for loop (contain two type for of /for in )
//i) comman loop
let i ;
for(i=0;i<101;i++){
 console.log("jai siya ram");

}
//ii) FOR OF LOOP
//USED TO ITERATE ARRAY AND STRING 
let tv="Sony "
for(let i of tv){   //  here i is nothing but iterator 
    console.log(i)
}
//iii)FOR IN LOOP
//USED TO ITERATE OBJECTS / ARRAY
let employee={
    //key   :value pair
    emp_name:"vivek",
    emp_age:17,
    emp_sal:0
}
for(let i in employee){   //so here wee can say that i is nothing but the key 
    console.log("key =",i,"value=",employee[i])           // print only key 
}




// 2 while loop
let j=0;
while(j<5) {
    console.log("radha radha");
    j++;
} 


// 3. do while loop
let jk=0;
do{
    console.log("ram ram")
    jk++
}while(jk<5)
