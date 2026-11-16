class Car{
 
constructor(brand,model){
this.brand=brand;
this.model=model;
}
display(){
    console.log("brand=",brand,"model=",model)
}

};
const cAR1 = new Car("maruti", "swift");
console.log(cAR1);
