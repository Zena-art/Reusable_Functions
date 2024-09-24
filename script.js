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


// task D):

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

const strGreaterThanNum = (arr)  => {
  let num;
  let sortedArr = []; // to store strings
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i]=== 'number'){
      num =  arr.splice(i, 1); // extracting the number from an array
     i--; // adjusting 'i'  since the array length changes
    }
  }

  //filter strings that are greater than num in length
  sortedArr = arr.filter(str => str.length > num);
  return sortedArr;

}

const newArr = ['javaScript', 'React', 4, 'MongoDB', 'CSS', 'HTML'];
const result = strGreaterThanNum(newArr);
console.log(result);

// task E):
// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

function printNumbers(n){
  if(n < 1){
    return;
  }
  printNumbers(n - 1);
  console.log(n);
}
printNumbers(9);