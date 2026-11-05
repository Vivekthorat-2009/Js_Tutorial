

//other way to write string in quoto is follows
let text = "hello how are you \"vt\"  ";
let text1 = "hello how are you \\vt\\";
let text2 = "hello how are you \'vt '\ ";
console.log(text,text1,text2)

//using new constructor
let s =new String("abcdefgh")
console.log(s)

let s1 = 'gfg';
let s2 = `You are learning ${s1}`; // use for dynamic creation

console.log(s2);

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
