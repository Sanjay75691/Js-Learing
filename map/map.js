let numbers = [5, 10, 15, 20];
let triple = numbers.map(function(number){
    return number*3;
}); console.log(triple);


// use of filter
let numbers = [11, 12, 13, 14, 15, 16];
let oddNumber = numbers.filter(function(number){
    return number % 2 !== 0;
}); console.log(oddNumber);


// greater than 20
let numbers = [5, 18, 25, 30, 12, 40];
let greater = numbers.filter(function(number){
    return number > 20;
});
console.log(greater);


// use find()
let numbers = [11, 15, 18, 20, 22];
let firstEven = numbers.find(function(number){
    return number % 2 === 0;
}); 
console.log(firstEven);


// all three
let numbers = [10, 15, 20, 25];
numbers.map(n => n * 2);
// [20, 30, 40, 50]

numbers.filter(n => n > 15);
// [20, 25]

numbers.find(n => n > 15);
// 20


// forEach()
let cities = ["Delhi", "Mumbai", "Chennai", "Kolkata"];
cities.forEach(function(city){
  console.log(city);
});


// reduce()
let numbers = [2, 3, 4, 5];
let product = numbers.reduce(function(total, number){
    return total*number;
}, 1);
console.log(product);
