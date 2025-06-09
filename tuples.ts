// TypeScript Tuples
// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.

// Tuples are great because they allow each element in the array to be a known type of value.

// To define a tuple, specify the type of each element in the array:

// Example

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

console.log(ourTuple);

// As you can see we have a number, boolean and a string. But what happens if we try to set them in the wrong order:

// Example
// define our tuple
// let ourTuple2: [number, boolean, string];

// // initialize incorrectly throws an error
// ourTuple2 = [false, 'Coding God was mistaken', 5];

//  Type 'boolean' is not assignable to type 'number'.
//  Type 'string' is not assignable to type 'boolean'.
//  Type 'number' is not assignable to type 'string'.

// console.log(ourTuple2);

// Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.

///////////////////////////////////////////////////////////////////////////

// Readonly Tuple
// A good practice is to make your tuple readonly.

// Tuples only have strongly defined types for the initial values:

// define our tuple
let ourTupleB: [number, boolean, string];

// initialize correctly
ourTupleB = [5, false, 'Coding God was here'];

// We have no type safety in our tuple for indexes 3+
ourTupleB.push('Something new and wrong');

console.log(ourTupleB);

//You see the new valueTuples only have strongly defined types for the initial values:

//Example
// define our tuple
let ourTupleC: [number, boolean, string];

// initialize correctly
ourTupleC = [5, false, 'Coding God was here'];

// We have no type safety in our tuple for indexes 3+
ourTupleC.push('Something new and wrong');

// instead use our readonly tuple
const ourReadonlyTupleC: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];

// throws error as it is readonly.
// ourReadonlyTupleC.push('Coding God took a day off'); //Property 'push' does not exist on type 'readonly [number, boolean, string]'

//////////////////////////////////////////////////////////////////////////

// Named Tuples
// Named tuples allow us to provide context for our values at each index.

// Example
 const graph: [x: number, y: number] = [55.2, 41.3];

 // Named tuples provide more context for what our index values represent.

 ///////////////////////////////////////////////////////////////////////

//  Destructuring Tuples
// Since tuples are arrays we can also destructure them.

// Example

const graph2: [number, number] = [55.2, 41.3];
const [x2, y2] = graph2;
