// TypeScript Casting
// There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.

// Casting is the process of overriding a type.

// Casting with as
// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.

// Example

let x: unknown = 'hello';

console.log((x as string).length); // 5

// Casting doesn't actually change the type of the data within the variable, for example the following code will not work as expected since the variable y is still holds a number.

//let y: unknown = 4;
//console.log((y as string).length); // prints undefined since numbers don't have a length

// TypeScript will still attempt to typecheck casts to prevent casts that don't seem correct, for example the following will throw a type error since TypeScript knows casting a string to a number doesn't makes sense without converting the data:

//console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.

// The Force casting section below covers how to override this.

// Casting with <>
// Using <> works the same as casting with as.

// Example

let a: unknown = 'hello';

console.log((<string>a).length); // 5

///////////////////////////////////////////////////////////////////////

// Force casting
// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.

// Example

let b = 'hello';

// console.log(((b as unknown) as number).length); // x is not actually a number so this will return undefined



// Exercise:
// Cast the "unknown" variable myVar as a string, using the as keyword:

let myVar2: unknown = "Hello world!";
console.log((myVar2 as string).length);