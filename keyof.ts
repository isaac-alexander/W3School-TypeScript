// TypeScript Keyof

// keyof is a keyword in TypeScript which is used to extract the key type from an object type.

/////////////////////////////////////////////////////////////////////

// keyof with explicit keys
// When used on an object type with explicit keys, keyof creates a union type with those keys.

// Example

interface Person4 {
  name: string;
  age: number;
}

// `keyof Person4` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person4: Person4, property: keyof Person4) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}

let person4 = {
  name: "Max",
  age: 27
};

printPersonProperty(person4, "name"); // Printing person4 property name: "Max"s

////////////////////////////////////////////////////////////////////////

// keyof with index signatures
// keyof can also be used with index signatures to extract the index type.

type StringMap = { [key: string]: unknown };
// `keyof StringMap` resolves to `string` here
function createStringPair(property: keyof StringMap, value: string): StringMap {
  return { [property]: value };
}