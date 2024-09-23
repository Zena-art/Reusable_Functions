//part 1


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


// part 2 


function calculateAvg(arr){
  let sum = arr.reduce((acc, curr) => acc + curr, 0); //Summing all the elements
  let average = sum / arr.length;
  return average;
}

let numbers = [10, 20, 30];
console.log(calculateAvg(numbers));