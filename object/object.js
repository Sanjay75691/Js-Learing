let book = {
    title: "Javascript",
    author: "john",
    price: 499
};
console.log(book.title);


let student = {
    name: "sanjay",
    age: 25,
    city: "chandausi"
};
console.log(student.name);
console.log(student.city);


// write a program to add or update
let mobile = {
    brand: "samsung",
    model: "S24",
    price: 75000
};
mobile.price = 70000;
mobile.color = "black";

console.log(mobile);


// print key values use loop
let car = {
    brand: "BMW",
    model: "X5",
    color: "Black"
};  for (let key in car) {
    console.log(key, ":", car[key]);
}


let calculator = {
    add: function () {
        console.log(10 + 20);
    }
}; calculator.add();



let calculator = {
    add: function() {
        console.log(10 + 20);
    } ,
    multiply: function() {
        console.log(5 * 6);
    }
}; calculator.add();
   calculator.multiply();


   // resuable method 
   let calculator = {
    add: function(a, b) {
        return a + b;
    },

    multiply: function(a, b) {
        return a * b;
    }
};

console.log(calculator.add(10, 20));      // 30
console.log(calculator.multiply(5, 6));   // 30
console.log(calculator.add(100, 50));     // 150
console.log(calculator.multiply(8, 7));   // 56


let car = {
    brand: "BMW",
    model: "X5",

    details: function () {
        // Print:
        console.log("the brand is " + this.brand + "and model is " + this.model);
    }
};

car.details();


// deconstruct
let employee = {
    name: "Rahul",
    salary: 50000,
    department: "IT"
};

let { name, salary, department } = employee;

console.log(name);
console.log(salary);
console.log(department);


let mobile = {
    brand: "Samsung",
    model: "S24",
    price: 70000
};
let { brand, model, price} = mobile;
console.log(brand);
console.log(model);
console.log(price);


// spread operator
let fruits = ["Apple", "Banana"];
let newFruits = [...fruits, "mango", "orange"];
console.log(newFruits);


// update student data using spread
let student = {
    name: "sanjay",
    age: 23,
};
let updateStudent = {
    ...student,
    city: "chandausi",
    age: 25
}; console.log(updateStudent);