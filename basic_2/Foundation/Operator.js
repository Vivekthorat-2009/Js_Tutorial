//  1.arithmetic
let x=25
let y=20
console.log(x-y)            //subtr
console.log(x+y)            //add
console.log(x/y)            //div   
console.log(x%y)            //mod
console.log(x*y)            //mul


// 2. Comparision

let m1=234
let m2=100
let m3=0
console.log(m1>m2)
console.log(m1<m2)
console.log(m1!=m2)
console.log(m1===m3)     // also use ==
// for string 
{
let name="vivek"          //we use {....} to make variable local instead of global 
let name1="vivek"
let name2="vivekthorat"

console.log(name===name1)       //used to compare the diff string
console.log(name1>name2)


}

let name="vivek"                // avoid strike through
let name3="vivek"          
let name1="vivek"
let name2="vivekthorat"

console.log(name3===name1)       //used to compare the diff string
console.log(name1>name2)

// 3. logical op
let a =true             //1
let b=false             //0
console.log(a&&b)       // AND
console.log(a||b)       // OR
console.log( !a )       // inverse the input


// 4.ternary op [ Alternative of if else ]

 let age =19                                            
 const rr = age>=18?"adult" : "minor"  ;     // syntax = condition ? if true : else false
 console.log(rr)
 console.log(age<=6?"vacinate(polio) in few week":"no need")

// 5. Unary op [ + , - ,++ , --]
 let gt = -10
 console.log(gt++) 
 console.log(gt)
 console.log(+gt)
 console.log(gt)
 
 console.log(+"42");     // 42   (string to number)
console.log(+ " 7 ");    // 7    (cuts  whitespace)
console.log(+"hello");   // NaN  (do not  convert)
console.log(+"");        // 0   
    