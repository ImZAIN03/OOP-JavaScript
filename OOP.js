// JavaScript OOP concepts
// ---------------------------------------------------------------
// Logging a Type:
console.log(typeof "")
// ---------------------------------------------------------------
// Classes and Constructor
class Person {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }
   
}
let person1 = new Person("Zain",20);
console.log(person1);
console.log(person1.name);
console.log(person1.age);
//---------------------------------------------------------------
// Classes with Method inside function
class Person {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }
    getName = () => {
        return this.name;           //method inside function
    }
    getAge = () => {
        return this.age;           //method inside function
    }
}
let person1 = new Person("Zain",20);
let person2 = new Person("Zee",30);
console.log(person1.getName());   //calling method for Name
console.log(person2.getName());   //calling method for Name
console.log(person1.getAge());   //calling method for Age
//----------------------------------------------------------------
// Multiple Classes
class Person {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }
    getName = () => {
        return this.name;           
    }
    getAge = () => {
        return this.age;           
    }
}

class House {
    constructor(address, price, residents) {
        this.address = address;
        this.price = price;
        this.residents = residents;
    }
    getAddress = () => {
        return this.address
    }
    getPrice = () => {
        return this.price
    }
    getResidents = () => {
        return this.residents
    }
    addResident = (resident) => {
        this.residents.push(resident)
    }
}
let Zain = new Person("Zain", "20");
let Zee = new Person("Zee", "21");

let house = new House("Main Street",280000, [Zain, Zee]);
console.log(house.getResidents())

let Zed = new Person("Zed", 20)
house.addResident(Zed)
console.log(house.getResidents())
//-----------------------------------------------------------
// Abstraction: hiding implementation details, only showing 
//              and showing only functionality
//Abstraction is a concept of hiding the internal details of an object

//Abstraction
class Person {
    constructor (name,age) {
        this.name = name;
        this.age = age;
        this.job = ""
    }
    getName = () => {
        return this.name;           
    }
    getAge = () => {
        return this.age;           
    }
    setJob = (job) => {
        this.job= job
    }
}

class House {
    constructor(address, price, residents) {
        this.address = address;
        this.price = price;
        this.residents = residents;
    }
    getAddress = () => {
        return this.address
    }
    getPrice = () => {
        return this.price
    }
    getResidents = () => {
        return this.residents
    }
    addResident = (resident) => {
        this.residents.push(resident)
    }
}

let Zain = new Person("Zain", 20)
let house = new House("ZeeHouse", 2030, [])
house.addResident(Zain) 
Zain.setJob("Developer")
console.log(house.getResidents());
//-----------------------------------------------------------
// Encapsulation: wrapping up of data and functions into a single 
//                unit

//Encapsulation
class Person {
    constructor (name,age) {
        this.name = name;
        this.age = age;
        this.job = ""
    }
    getName = () => {
        return this.name;           
    }
    getAge = () => {
        return this.age;           
    }
    setJob = (job) => {
        this.job= job
    }
}

class House {
    constructor(address, price, residents) {
        this.address = address;
        this.price = price;
        this.residents = residents;
    }
    getAddress = () => {
        return this.address
    }
    getPrice = () => {
        return this.price
    }
    getResidents = () => {
        return this.residents
    }
    addResident = (resident) => {
        this.residents.push(resident)
    }
}
console.log(Person);
//--------------------------------------------------------------
//Inheritance: Parent-Child Relationship
//Inheritance: one class inherits the attributes 
//             and methods of another class

//Inheritance:
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.job = ""; 
    }
    getName = () => {
        return this.name;
    }
    getAge = () => {
        return this.age;
    }
}
// Programmer class extends the Person class
class Programmer extends Person {
    constructor(name, age, company, salary, language) {
        super(name, age); // Call the constructor of the parent class (Person)
        this.company = company;
        this.salary = salary;
        this.language = language;
    }
    sayHi = () => {
        console.log(`Hello, I am a programmer! My name is ${this.getName()} and I work for ${this.company}`);
    }
}

let programmer = new Programmer("ZAIN", 19, "Google", 100000, "JavaScript");
programmer.sayHi();
//--------------------------------------------------------------------------

//Polymorphism: one name, many forms
//Polymorphism: class or function used in different places 
//              with the same name.

//Polymorphism:
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.job = ""; 
    }
    getName = () => {
        return this.name;
    }
    getAge = () => {
        return this.age;
    }
}

class Programmer extends Person {
    constructor(name, age, company, salary, language) {
        super(name, age); // Call the constructor of the parent class (Person)
        this.company = company;
        this.salary = salary;
        this.language = language;
    }
    sayHi = () => {
        console.log(`Hello, I am a programmer! My name is ${this.getName()} and I work for ${this.company}`
        );
    }
}

class Designer extends Person {
    constructor(name, age, salary) {
        super(name, age); // Call the constructor of the parent class (Person)
        this.salary = salary;
    }
    sayHi = () => {
        console.log(`Hello, I am a Designer! My name is ${this.getName()}`
        );
    }
}

let programmer = new Programmer("ZAIN", 20, "Google", 100000, "JavaScript");
programmer.sayHi();
let designer = new Designer("ZAIN", 20, 100000);
designer.sayHi();
//------------------------------------------------------------------------------



