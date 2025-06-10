"use strict";
// TypeScript Functions
// TypeScript has a specific syntax for typing function parameters and return values.
///////////////////////////////////////////////////////////////////////
// Return Type
// The type of the value returned by the function can be explicitly defined.
// Example
// the `: number` here specifies that this function returns a number
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
//note : If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.
/////////////////////////////////////////////////////////////////////////
// Void Return Type
// The type void can be used to indicate a function doesn't return any value.
// Example
function printHello() {
    console.log('Hello!');
}
//////////////////////////////////////////////////////////////////////
// Parameters
// Function parameters are typed with a similar syntax as variable declarations.
// Example
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 5));
///////////////////////////////////////////////////////////////////////
// Optional Parameters
// By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
// Example
// the `?` operator here marks parameter `c` as optional
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(2, 5));
///////////////////////////////////////////////////////////////////////////
// Default Parameters
// For parameters with default values, the default value goes after the type annotation:
// Example
function pow(value, exponent = 10) {
    return value ** exponent;
}
console.log(pow(10));
//////////////////////////////////////////////////////////////////////////
// Named Parameters
// Typing named parameters follows the same pattern as typing normal parameters.
// Example
function divide({ dividend, divisor }) {
    return dividend / divisor;
}
console.log(divide({ dividend: 10, divisor: 2 }));
////////////////////////////////////////////////////////////////////////
// Rest Parameters
// Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
// Example
function addValue(a, b, ...rest) {
    return a + b + rest.reduce((p, c) => p + c, 0);
}
console.log(addValue(10, 10, 10, 10, 10));
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction = (value) => value * -1;
console.log(negateFunction(10));
/////////////////////////////////////////////////////////////////////////
// Exercise:
// Create a function that returns the string "Learning is Fun!", with the return type explicitly defined:
function myFunc2() {
    return "Learning is Fun!";
}
