"use strict";
// TypeScript Arrays
// TypeScript has a specific syntax for typing arrays.
// Read more about arrays in our JavaScript Array chapter.
// Example
const names = [];
names.push("Dylan"); // no error
//names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(names);
/////////////////////////////////////////////////////////////////////////
// Readonly
// The readonly keyword can prevent arrays from being changed.
// Example
const namesA = ["Dylan"];
//namesA.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works?
console.log(namesA);
/////////////////////////////////////////////////////////////////////////
// Type Inference
// TypeScript can infer the type of an array if it has values.
// Example
const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment 
//numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
console.log(numbers);
let head = numbers[0]; // no error
console.log(head);
// Exercise:
// Prevent the array from being changed:
const namesB = ["Dylan"];
