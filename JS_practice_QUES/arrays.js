// creating am array
let array = [7, 76, 45, 98, 23]
console.log(array[0]);
console.log(array[4]);
console.log(array);

for (let i = 0; i < array.length; i++) {
  console.log(array);
}     //node JS_practice_QUES/arrays.js

let fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits[0]);
console.log(fruits[3]);

let colors = ["Red", "Green", "Blue", "Yellow", "Black"];
console.log(colors.length);

// printing last element
console.log(colors[colors.length-1]);

let colors = ["Red", "Green", "Blue", "Yellow"];
 // change green to purple
 colors[1] = "purple";
 console.log(colors);

//  changing last element to white
 colors[colors.length-1] = "white";
console.log(colors);

  //Print every element using a for loop.
 let numbers = [10, 20, 30, 40, 50];
 for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
 }

// 🟢 Question 25: Find the Sum of All Array Elements
let numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
}
console.log(sum);

// find largest number
 let numbers = [25, 10, 80, 45, 60]
 let largest = numbers[0];
 for (let i = 0; i < numbers.length; i++) {
     if(numbers[i] > largest){
        largest = numbers[i]
     }
 }
 console.log(largest);