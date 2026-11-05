// 1.if statement

let  age =20;
if(age>=18){
    console.log("your age is greater than 18")
}

//2. if else

let marks =90;
if(marks<=35){
    console.log("fail , Scored marks: "+marks)
}
else{
    console.log("Pass , scored marks  :"+marks)
}
//3.Nested if else
  
    const m1=10
if(m1>=70 && m1<=100){
    console.log("A+ Grade")
}
else if(m1>40&&m1<70){
    console.log("A Grade")
}
else if(m1<40){
    console.log("Fail")
}

// 4. switch case

let perc = 2 ;
switch(perc){
    case 0:
        console.log("A")
        break;
    case 1:
        console.log("b")
        break;
    case 2:
        console.log("c")
        break;



    default:
        console.log("Fail")
}
