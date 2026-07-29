let student = {
  name: "Sanjay",
  age: 25,
  city: "Meerut"
};
console.log(`hello, my name is ${student.name}.`);
console.log(`i am ${student.age} years old.`);
console.log(`i live in ${student.city}.`);


let data = {
 name: "Sanjay",
age: 25,
isStudent: true,
salary: null,
city: undefined
}; 
console.log(typeof data.name);
console.log(typeof data.age);
console.log(typeof data.isStudent);
console.log(typeof data.salary);
console.log(typeof data.city);


let age = 18;
if (age >= 18) {
    console.log("you are eligible for vote");
} else {
  console.log("you are not eligible for vote");
};



let num = -5;
if(num > 0) {
    console.log("positive");
} else if (num < 0) {
    console.log ("negative");
} else if (num === 0) {
    console.log("zero");
};


console.log(10 > 5);  // true
console.log(10 < 5);  // true
console.log(10 >= 10); // false
console.log(10 <= 9);  //false
console.log(10 == "10");  //true
console.log(10 === "10");  //false
console.log(10 != 5);  // true
console.log(10 !== "10");  // true


for(let i = 0; i < 11; i++){
console.log(i);
}


for(let i = 0; i < 21; i++) {
    if(i % 2 == 0) {
        console.log(i)
    }
};


let numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]);
console.log(numbers[numbers.length-1]);
console.log(numbers.length);
console.log(numbers);


let numbers = [10, 20, 30, 40, 50];
let sum = 0;
for(let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
};console.log(sum);