// Creating an Array

let fruits = ["Apple", "Banana", "Orange", "Mango", "Strawberry"];

console.log(fruits)

// Accessing array elements
console.log(fruits[3]);
console.log(fruits[4]);

// Modifying array elements
fruits[3] = "Grapes";
console.log(fruits);

let numbers = [1, 2 ,3, 4, 5];
console.log(numbers);
// indexOf() - gets index of a certain element
console.log(numbers.indexOf(5));

// includes() - checks if the element is in the array
console.log(numbers.includes(5));
console.log(numbers.includes(0));

// join() - joins the elements
console.log(numbers.join("/"));

// slice() - extract a portion of the array but does not modify the original array
// start - index where it starts slicing
// end - index where it ends slicing (WARNING: element corresponding to index not included)
let slicedArray = numbers.slice(0, 2);
console.log("Sliced Array:", slicedArray);

// splice(start, # of elements) - like slice but modifies the original array and removes the sliced element
let removedElements = numbers.splice(0,4);
console.log("RemovedArray:", removedElements);
console.log("Updated array: " + numbers);