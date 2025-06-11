"use strict";
// TypeScript Keyof
// `keyof Person4` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person4, property) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person4 = {
    name: "Max",
    age: 27
};
printPersonProperty(person4, "name"); // Printing person4 property name: "Max"s
// `keyof StringMap` resolves to `string` here
function createStringPair(property, value) {
    return { [property]: value };
}
