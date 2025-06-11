"use strict";
// TypeScript Null & Undefined
// TypeScript has a powerful system to deal with null or undefined values.
// By default null and undefined handling is disabled, and can be enabled by setting strictNullChecks to true.
// The rest of this page applies for when strictNullChecks is enabled.
// Types
// null and undefined are primitive types and can be used like other types, such as string.
// Example
let value3 = null;
console.log(typeof value3);
value3 = 'hello';
console.log(typeof value3);
value3 = undefined;
console.log(typeof value3);
function printYardSize(house) {
    var _a;
    const yardSize = (_a = house.yard) === null || _a === void 0 ? void 0 : _a.sqft;
    if (yardSize === undefined) {
        console.log('No yard');
    }
    else {
        console.log(`Yard is ${yardSize} sqft`);
    }
}
let home = {
    sqft: 500
};
printYardSize(home); // Prints 'No yard'
/////////////////////////////////////////////////////////////////////////
// Nullish Coalescence
// Nullish Coalescence is another JavaScript feature that also works well with TypeScript's null handling. It allows writing expressions that have a fallback specifically when dealing with null or undefined. This is useful when other falsy values can occur in the expression but are still valid. It can be used with the ?? operator in an expression, similar to using the && operator.
// Example
function printMileage(mileage) {
    console.log(`Mileage: ${mileage !== null && mileage !== void 0 ? mileage : 'Not Available'}`);
}
printMileage(null); // Prints 'Mileage: Not Available'
printMileage(0); // Prints 'Mileage: 0'
/////////////////////////////////////////////////////////////////////////
// Null Assertion
// TypeScript's inference system isn't perfect, there are times when it makes sense to ignore a value's possibility of being null or undefined. An easy way to do this is to use casting, but TypeScript also provides the ! operator as a convenient shortcut.
// Example
function getValue() {
    return 'hello';
}
let value_A = getValue();
console.log('value length: ' + value_A.length);
//Just like casting, this can be unsafe and should be used with care.
/////////////////////////////////////////////////////////////////////////
// Array bounds handling
// Even with strictNullChecks enabled, by default TypeScript will assume array access will never return undefined (unless undefined is part of the array type).
// The config noUncheckedIndexedAccess can be used to change this behavior.
// Example
let array = [1, 2, 3];
let value_B = array[0]; // with `noUncheckedIndexedAccess` this has the type `number | undefined`
