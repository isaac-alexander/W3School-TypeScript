"use strict";
// TypeScript Special Types
// TypeScript has special types that may not refer to any specific type of data.
// Type: any
// any is a type that disables type checking and effectively allows all types to be used.
// The example below does not use any and will throw an error:
// Example without any
let u = true;
//u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
//u.runANonExistentMethod(); // Error: Property 'runANonExistentMethod' does not exist on type 'boolean'.
//console.log(Math.round(u)); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.
// Setting any to the special type any disables type checking:
// Example with any
let v = true;
v = "string"; // no error as it can be "any" type
// v.runANonExistentMethod(); 
// no type error in the editor, but will still throw an error if commented in
console.log(Math.round(v)); // no error as it can be "any" type
// any can be a useful way to get past errors since it disables type checking, but TypeScript will not be able provide type safety, and tools which rely on type data, such as auto completion, will not work. Remember, it should be avoided at "any" cost...
///////////////////////////////////////////////////////////////////////////
// Type: unknown
// unknown is a similar, but safer alternative to any.
// TypeScript will prevent unknown types from being used, as shown in the below example:
let w = 1;
w = "string"; // no error
w = {
    runANonExistentMethod: () => {
        console.log("I think therefore I am");
    }
};
// How can we avoid the error for the code commented out below when we don't know the type? 
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'. 
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting
// Compare the example above to the previous example, with any.
// unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.
// Casting is when we use the "as" keyword to say property or variable is of the casted type.
/////////////////////////////////////////////////////////////////////////
// Type: never
// never effectively throws an error whenever it is defined.
//let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.
// never is rarely used, especially by itself, its primary use is in advanced generics.
///////////////////////////////////////////////////////////////////////
// Type: undefined & null
// undefined and null are types that refer to the JavaScript primitives undefined and null respectively.
let y = undefined;
console.log(typeof y);
let z = null;
console.log(typeof z);
// Exercise:
// Create an empty "myVar" variable, and disable type checking:
let myVar;
