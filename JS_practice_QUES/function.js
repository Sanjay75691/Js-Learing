// // node JS_practice_QUES/function.js

// // call a greets function
// function greets() {
//     console.log("welcome to javascript");
// }
// greets();

// // call a function with parameter
// function greetUser(name) {
//   console.log("Good Morning " +  name);
// }
// greetUser("Sanjay");

// // Write a function named square that takes one number as a parameter and prints its square
// function number(square) {
//     console.log(square*square);
// }
// number(5);

// // use return to add two numbers
// function add(a, b) {
// return (a + b);
// }
// console.log(add(10, 30));

// Create a function named isEven that takes one number as a parameter
function isEven(number) {
 if (number % 2 == 0) {
    return "Even";
} else {
    return "Odd";
} 
}
console.log(isEven(9));