

//other way to write string in quoto is follows
let text = "hello how are you \"vt\"  ";
let text1 = "hello how are you \\vt\\";
let text2 = "hello how are you \'vt '\ ";
console.log(text,text1,text2)

//using new constructor
let s =new String("abcdefgh")
console.log(s)
//----------------------------------------------------------
// template literal 
let s1 = 'gfg';
let s2 = `You are learning ${s1}`; 
console.log(s2);
let tv={
    tv_name:"Lg",
    tv_size:"43inch",
    tv_price:22200
}
console.log("tv name =",tv.tv_name,"size",tv.tv_size,"price",tv.tv_price);
//this above look complex so we use template literal
let outp =(`tv name is v ${tv.tv_name} size is ${tv.tv_size} and price is ${tv.tv_price}`)
console.log(outp)







//----------------------------------------------
let txt = "Hello how are  you 'vt' ";
console.log(txt.length)

let m1='vivek'
let m2='thorat'
let name= m1+m2
console.log(name);

let st = 'JavaScript Tutorial';
let stt = st.substring(0, 10);    // oth index to 9 index will print else delete 
console.log(stt);

let str = "vIvek Thorat"
let ucase_name=str.toUpperCase();
let lcase_name=str.toLowerCase();
console.log(ucase_name)
console.log(lcase_name);
//console.table([ucase_name,lcase_name]);

let str1 = 'vivek , thorat , good coder';
let i = str1.indexOf('thorat');
console.log(i);  //find index of element including white space


//let str1 = 'vivek , thorat , good coder';
let rt = str1.replace(/good coder/g ,'bad coder')   // replace string by /g tag
console.log(rt)

let tr =rt.trim();
console.log(tr);

let st1 = "Ajay"
let st2 = new String("Ajay");

console.log(st1 == st2);  // true (type coercion)
console.log(st1 === st2); // false (strict comparison)
console.log(st1.localeCompare(st2)); // 0 (means they are same equal

// Define a string variable 
let A = 'Geeks for Geeks';

// Use the slice() method to extract a substring
let b = A.slice(0, 5);  //.slice(start ,end )
let c = A.slice(6, 9);
let d = A.slice(10);    //.slice (start . no parameter so take till end automatically)
console.log(b);
console.log(c);
console.log(d);

