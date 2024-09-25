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


// Part 2; Thinking Methodically

/** 
 * When functions are built into objects, like Arrays, they are referred to as “methods” of those objects. Many methods, including Array methods, require “callback functions” to determine their behavior.
For the tasks below, use the following data to test your work:
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "48", name: "Barry", occupation: "Runner", age: "25" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
 { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
Use callback functions alongside Array methods to accomplish the following:
Sort the array by age.
Filter the array to remove entries with an age greater than 50.
Map the array to change the “occupation” key to “job” and increment every age by 1.
Use the reduce method to calculate the sum of the ages.
Then use the result to calculate the average age. 
 */


let userData = [
  { id: "42",
    name: "Bruce", 
    occupation: "Knight", 
    age: "41" },
  { id: "48", 
    name: "Barry", 
    occupation: "Runner", 
    age: "25" },
  { id: "57", 
    name: "Bob", 
    occupation: "Fry Cook", 
    age: "19" },
  { id: "63", 
    name: "Blaine", 
    occupation: "Quiz Master", 
    age: "58" },
  { id: "7", 
    name: "Bilbo", 
    occupation: "None", 
    age: "111" }
];
 // task A);
 // Sort array by age
userData.sort((a, b)=> a.age - b.age);
console.log(userData);


// task B):
// Filter the array to remove entries with an age greater than 50.

const under50 = userData.filter(o => o.age <= 50);
console.log(under50);

// task C):
// Map the array to change the “occupation” key to “job” and increment every age by 1.
const modifiedUserData = userData.map((user) => {
  const {occupation,  ...rest } = user; // excluding occupation
  return {
    ... rest, // keep all other properties
    job: occupation, // change occupation to job
    age: Number(user.age) + 1
  }
})
console.log(modifiedUserData);

// task D):
// Use the reduce method to calculate the sum of the ages.

const totalAge = userData.reduce((sum, user) => sum + Number(user.age), 0);

// Then use the result to calculate the average age.

const avgResult = totalAge / userData.length;

console.log(`average age of users: ${avgResult}`);


// Part 3 
/**
 * Part 3: Thinking Critically
It is important to remember that when working with objects in JavaScript, we can either pass those objects into functions by value or by reference. This important distinction changes the way that functions behave, and can have large impacts on the way a program executes.
For this section, develop functions that accomplish the following:
Take an object and increment its age field.
Take an object, make a copy, and increment the age field of the copy. Return the copy.
For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that stores a Date object with the current time.
Thought experiment: since the Date object is an object, what would happen if we modified it in the copy of the object created in the second function using setTime() or another method? How could we circumvent potentially undesired behavior?
 */

// Function to increment age directly in the object
function incrementAge(obj) {
  if (!obj.age) {
    obj.age = "0"; // Initialize age as a string if it doesn't exist
  }
  obj.age = (Number(obj.age) + 1).toString(); // Increment age and convert back to string
  obj.updated_at = new Date(); // Update the timestamp to current time
}

// Function to make a copy and increment the age
function incrementAgeInCopy(obj) {
  const copy = { ...obj }; // Shallow copy of the object
  if (!copy.age) {
    copy.age = "0"; // Initialize age as a string if it doesn't exist
  }
  copy.age = (Number(copy.age) + 1).toString(); // Increment age and convert back to string
  copy.updated_at = new Date(); // Create a new Date instance for the copy
  return copy;
}

// Testing the functions
console.log("Original user data:");
console.log(userData);

// Increment age directly for the first user
incrementAge(userData[0]);
console.log("After incrementing age for Bruce (original object):");
console.log(userData[0]);

// Create a copy and increment age for the second user
const modifiedUser = incrementAgeInCopy(userData[1]);
console.log("After incrementing age for Barry (copy):");
console.log(modifiedUser);

// Show original data again to verify it hasn't changed
console.log("User data after operations:");
console.log(userData);