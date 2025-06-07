"use strict";
//What is TypeScript?
// TypeScript is a syntactic superset of JavaScript which adds static typing.
// This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.
// TypeScript being a "Syntactic Superset" means that it shares the same base syntax as JavaScript, but adds something to it.
// Why should I use TypeScript?
// JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.
// In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.
// TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.
// For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.
// TypeScript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code.
//////////////////////////////////////////////////////////////////////////
// TypeScript Compiler
// TypeScript is transpiled into JavaScript using a compiler.
// TypeScript being converted into JavaScript means it runs anywhere that JavaScript runs!
// Installing the Compiler
// TypeScript has an official compiler which can be installed through npm.
//////////////////////////////////////////////////////////////////////////
// TypeScript Simple Types
// TypeScript supports some simple types (primitives) you may know.
// There are three main primitives in JavaScript and TypeScript.
// boolean - true or false values
// number - whole numbers and floating point values
// string - text values like "TypeScript Rocks"
// There are also 2 less common primitives used in later versions of Javascript and TypeScript.
// bigint - whole numbers and floating point values, but allows larger negative and positive numbers than the number type.
// symbol are used to create a globally unique identifier.
// Type Assignment
// When creating a variable, there are two main ways TypeScript assigns a type:
// Explicit
// Implicit
// In both examples below firstName is of type string
// Explicit Type
// Explicit - writing out the type:
let firstName = "Dylan"; // type string
console.log(typeof firstName);
// Explicit type assignment are easier to read and more intentional.
// Implicit Type
// Implicit - TypeScript will "guess" the type, based on the assigned value:
let firstName1 = "Dylan";
console.log(typeof firstName1);
// Note: Having TypeScript "guess" the type of a value is called infer.
//////////////////////////////////////////////////////////////////////////
// Implicit assignment forces TypeScript to infer the value.
// Implicit type assignment are shorter, faster to type, and often used when developing and testing.
// Error In Type Assignment
// TypeScript will throw an error if data types do not match.
// Example
let firstName2 = "Dylan"; // type string
//firstName2 = 33; // attempts to re-assign the value to a different type shows error message  Type 'number' is not assignable to type 'string'.
console.log(firstName);
// Implicit type assignment would have made firstName less noticeable as a string, but both will throw an error:
// Example
let firstName3 = "Dylan"; // inferred to type string
//firstName3 = 33; // attempts to re-assign the value to a different type
console.log(firstName3);
// JavaScript will not throw an error for mismatched types.
// Unable to Infer
// TypeScript may not always properly infer what the type of a variable may be. In such cases, it will set the type to any which disables type checking.
// Example
// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing... 
const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json); //number
