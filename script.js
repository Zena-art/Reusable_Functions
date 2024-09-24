//part 1 Thinking Functionally

 // task A):
 //Take an array of numbers and return the sum.
// Creating array
let arr = [4, 8, 7, 13, 12];

// Function to find the sum of the array using recursion
function sumArray(arr, index) {
    if (index === arr.length) {
        return 0; // if empty array 
    }
    return arr[index] + sumArray(arr, index + 1);
}

console.log("Sum is " + sumArray(arr, 0));


// task B):
// Take an array of numbers and return the average.


function calculateAvg(arr){
  let sum = arr.reduce((acc, curr) => acc + curr, 0); //Summing all the elements
  let average = sum / arr.length;
  return average;
}

let numbers = [10, 20, 30];
console.log(calculateAvg(numbers));

// task C):
// Take an array of strings and return the longest string.

const longestString = (arr)  => {
let max = arr[0].length; // finding the length of first element
arr.map(e => max = Math.max(max, e.length)); // assigning value of the max value from Math. expression to max variable
let res = arr.filter(e => e.length == max); // filtering to access the longest element and assigning it to res variable
return res;
}

const array = ['a','aaa', 'bbbbb'];

console.log(longestString(array));

