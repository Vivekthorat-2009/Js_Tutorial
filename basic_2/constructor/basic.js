    // Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.rp = function() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    };
}

//Creating Instances with a Constructor
const p1 = new Person("vivek", 0);
const p2 = new Person("thorat", 17);

p1.rp();
p2.rp();
//-------------------------------------------------------------
//This keyword=refers to new created object , variable
//as used in above example
//---------------------------------------------------------------
// add method to constructor func
function Car(brand, model) {
    this.brand = brand;
    this.model = model;

    this.getDetails = function () {
        return `${this.brand} ${this.model}`;
    };
}

const car1 = new Car("Toyota", "Camry");

console.log(car1.getDetails()); 