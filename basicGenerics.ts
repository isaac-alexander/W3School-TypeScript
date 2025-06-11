// TypeScript Basic Generics
// Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

// Generics makes it easier to write reusable code.

// Functions
// Generics with functions help make more generalized methods which more accurately represent the types used and returned.

// Example

function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}

console.log(createPair<string, number>('hello', 42)); // ['hello', 42]

// TypeScript can also infer the type of the generic parameter from the function parameters.

//////////////////////////////////////////////////////////////////////////

// Classes
// Generics can be used to create generalized classes, like Map.

// Example

class NamedValue<T> {
    private _value: T | undefined;

    constructor(private name: string) { }

    public setValue(value: T) {
        this._value = value;
    }

    public getValue(): T | undefined {
        return this._value;
    }

    public toString(): string {
        return `${this.name}: ${this._value}`;
    }
}

const value1 = new NamedValue<number>('myNumber');

value1.setValue(10);

console.log(value1.toString()); // myNumber: 10

// TypeScript can also infer the type of the generic parameter if it's used in a constructor parameter.

////////////////////////////////////////////////////////////////////////

// Type Aliases

// Generics in type aliases allow creating types that are more reusable.

// Exampe

type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };

// This also works with interfaces with the following syntax: interface Wrapped<T> {

////////////////////////////////////////////////////////////////////////

// Default Value
// Generics can be assigned default values which apply if no other value is specified or inferred.

// Example
class NamedValue2<T = string> {
    private _value: T | undefined;

    constructor(private name: string) { }

    public setValue(value: T) {
        this._value = value;
    }

    public getValue(): T | undefined {
        return this._value;
    }

    public toString(): string {
        return `${this.name}: ${this._value}`;
    }
}

let value = new NamedValue2('myNumber');
value.setValue('myValue');
console.log(value.toString()); // myNumber: myValue

// Extends

// Constraints can be added to generics to limit what's allowed. The constraints make it possible to rely on a more specific type when using the generic type.

// Example

function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2];
}
// This can be combined with a default value.

//////////////////////////////////////////////////////////////////////

//  TypeScript Exercises
// Test Yourself With Exercises
// Exercise:
// Complete the Generic:


function createPair2<typeX, typeY>(x: typeX, y: typeY): [typeX, typeY] {
    return [x, y];
}
console.log(createPair2<string, number>('Meaning', 42));
