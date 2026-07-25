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