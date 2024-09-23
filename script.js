// Creating array
let arr = [4, 8, 7, 13, 12];

// Function to find the sum of the array using recursion
function sumArray(arr, index) {
    if (index === arr.length) {
        return 0;
    }
    return arr[index] + sumArray(arr, index + 1);
}

console.log("Sum is " + sumArray(arr, 0));