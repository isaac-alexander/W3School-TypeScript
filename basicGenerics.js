"use strict";
// TypeScript Basic Generics
// Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
// Generics makes it easier to write reusable code.
// Functions
// Generics with functions help make more generalized methods which more accurately represent the types used and returned.
// Example
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 42)); // ['hello', 42]
// TypeScript can also infer the type of the generic parameter from the function parameters.
//////////////////////////////////////////////////////////////////////////
// Classes
// Generics can be used to create generalized classes, like Map.
// Example
class NamedValue {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}: ${this._value}`;
    }
}
const value1 = new NamedValue('myNumber');
value1.setValue(10);
console.log(value1.toString()); // myNumber: 10
const wrappedValue = { value: 10 };
// This also works with interfaces with the following syntax: interface Wrapped<T> {
////////////////////////////////////////////////////////////////////////
// Default Value
// Generics can be assigned default values which apply if no other value is specified or inferred.
// Example
class NamedValue2 {
    constructor(name) {
        this.name = name;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
    toString() {
        return `${this.name}: ${this._value}`;
    }
}
let value = new NamedValue2('myNumber');
value.setValue('myValue');
console.log(value.toString()); // myNumber: myValue
// Extends
// Constraints can be added to generics to limit what's allowed. The constraints make it possible to rely on a more specific type when using the generic type.
// Example
function createLoggedPair(v1, v2) {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2];
}
// This can be combined with a default value.
//////////////////////////////////////////////////////////////////////
//  TypeScript Exercises
// Test Yourself With Exercises
// Exercise:
// Complete the Generic:
function createPair2(x, y) {
    return [x, y];
}
console.log(createPair2('Meaning', 42));
