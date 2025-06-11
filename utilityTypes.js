"use strict";
// TypeScript Utility Types
// TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.
let pointPart = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
console.log(pointPart);
let myVehicle = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};
console.log(myVehicle);
/////////////////////////////////////////////////////////////////////////
// Record
// Record is a shortcut to defining an object type with a specific key type and value type.
// Example
const nameAgeMap2 = {
    'Alice': 21,
    'Bob': 25
};
console.log(nameAgeMap2);
const bob = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
};
console.log(bob);
const sam = {
    name: 'Sam'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
console.log(sam);
const value2 = true;
// a string cannot be used here since Exclude removed it from the type.
console.log(typeof value2);
const point = {
    x: 10,
    y: 20
};
const point2 = {
    x: 10,
    y: 20
};
const person1 = {
    name: "Dylan",
    age: 35,
};
let kindPerson = {};
