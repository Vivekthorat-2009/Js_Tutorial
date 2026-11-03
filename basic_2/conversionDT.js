let id =101;
let idd="vivek"
let num =210;

console.log(typeof num)
console.log(num)

let num1 =Number(idd)
console.log(typeof num1)    //number
console.log(num1)           //o/p : not a number(nan)



let str =String(id)        
console.log(typeof str)     // o/p- String
console.log(str)            // o/p=101(int convert to string)

let run = 1;                    //for boolean true 
let runinboolean =Boolean(run);
console.log(runinboolean)

let run1 = 0;
let runinboolean1 =Boolean(run1);
console.log(runinboolean1)




// important 
let string1 ="123cbd"
let strs=Number(string1)
console.log(strs)           // value present is nan
console.log( typeof strs)   //type number 