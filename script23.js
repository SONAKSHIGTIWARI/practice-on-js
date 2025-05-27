const person = {
    name: "Sonakshi Tiwari",
    age: 30,
    job: "Developer",
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(person.greet()); 

const company = {
    name: "Tech Corp",
    location: "Maharastra",
    employees: {
        manager: { name: "Sonakshi", age: 35 },
        developer: { name: "Kalpna", age: 28 }
    }
};

console.log(company.employees.manager.name); 

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

const car1 = new Car("Toyota", "Corolla", 2022);
console.log(car1.brand); 

class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    speak() {
        return `${this.name} makes a sound`;
    }
}

const dog = new Animal("Buddy", "Dog");
console.log(dog.speak()); 

const user = {
    username: "cool_user",
    email: "user@example.com",
    login() {
        console.log(`${this.username} has logged in`);
    }
};

user.login(); 




