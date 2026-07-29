// regular + arrow both mehods 

function welcome() {
  console.log("welcome Sanjay");
}; welcome();

const welcomeArrow = () => {
  console.log("welcome Sanjay");
}; welcomeArrow();


function showAge(age) {
  console.log("My age is " + age);
} showAge(25);

const showAgeArrow = (age) => {
  console.log("My age is " + age);
}; showAgeArrow(25);


function multiply(a, b) {
  console.log(a * b);
} multiply(5, 6);

let multiplyArrow = (a, b) => {
  console.log(a * b);
}; multiplyArrow(5, 6)

let multiplyArrow = (a, b) => (a * b);
 console.log(multiplyArrow(5, 6));

// using return
function square(num) {
  return (num*num);
}; console.log(square(5));
  
let squareArrow = (num) => {
   return num*num;
}; console.log(squareArrow(5));

let squareArrow = (num) => (num*num);
console.log(squareArrow(5));

function add(a, b) {
  return a+b;
} console.log(add(10, 20));

let addArrow = (a, b) => (a + b);
console.log(addArrow(10, 20));

let addArrow = (a, b) => {
  return a+b;
}; console.log(addArrow(10, 20))


//return greater no.
function greater(a, b) {
 if(a > b) {
   return a;
 } else {
  return b;
 }
}; console.log(greater(10, 25));

let greaterArrow = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}; console.log(greaterArrow(10, 25));
