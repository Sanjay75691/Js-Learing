// smallest value
let numbers = [20, 5, 90, 12, 3];

function findSmallest(numbers) {
    let smallest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }

    return smallest;
}

console.log(findSmallest(numbers));


// find sum of even no.

let numbers = [10, 15, 20, 25, 30];
function sumEven(numbers) {
    let sum = 0;
    for(let i = 0; i <= numbers.length-1; i++) {
        if (numbers[i] % 2 === 0) {
            sum = sum + numbers[i];
        }
    } return sum;
} console.log(sumEven(numbers));


// even counter
let numbers = [10, 15, 20, 25, 30];
function countEven(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++
        }
    } return count;
}console.log(countEven(numbers));


// count odd let numbers = [10, 15, 20, 25, 30, 35];
let numbers = [10, 15, 20, 25, 30, 35];
function countOdd(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            count++
        }
    } return count;
} console.log(countOdd(numbers));


// find largest number
let numbers = [45, 12, 78, 23, 90, 34];
function largest(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    } return largest
} console.log(largest(numbers));


// find smallest 
let numbers = [45, 12, 78, 23, 90, 34];
function smallest(numbers){
    let smallest = numbers[0];
    for(let i = 0; i < numbers.length; i++) {
        if (numbers[i] < smallest) {
           smallest = numbers[i]
        }
    } return smallest; 
} console.log (smallest(numbers));


// second largest no.
let numbers = [45, 12, 78, 23, 90, 34];
function secondLargest(numbers) {
    let largest = numbers[0];
    let second = numbers[0];
    for(let i = 0; i < numbers.length; i++) {
        if(largest < numbers[i]) {
            largest = numbers[i]
        }
    }
    for(let i = 0; i < numbers.length; i++) {
        if (numbers[i] > second && numbers[i] < largest) {
            second = numbers[i];
        }
    } return second;
} console.log(secondLargest(numbers));