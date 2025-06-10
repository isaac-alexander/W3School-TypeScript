"use strict";
// TypeScript Classes
// TypeScript adds types and visibility modifiers to JavaScript classes.
// Members: Types
// The members of a class (properties & methods) are typed using type annotations, similar to variables.
// Example
// class Person {
//   name: string; //ERROR*************
// }
// const person = new Person();
// person.name = "Jane";
// console.log(person);
//////////////////////////////////////////////////////////////////////
// Members: Visibility
// Class members also be given special modifiers which affect visibility.
// There are three main visibility modifiers in TypeScript.
// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
// Example
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person = new Person("Jane");
console.log(person.getName()); // person.name isn't accessible from outside the class since it's private
// The this keyword in a class usually refers to the instance of the class.
///////////////////////////////////////////////////////////////////////
// Parameter Properties
// TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.
// Example
class Person2 {
    // name is a private member variable
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person2 = new Person2("Jane");
console.log(person2.getName());
/////////////////////////////////////////////////////////////////////////
// Readonly
// Similar to arrays, the readonly keyword can prevent class members from being changed.
// Example
class Person3 {
    constructor(name) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const person3 = new Person3("Jane");
console.log(person3.getName());
class Rectangle {
    // using protected for these members allows access from classes that extend from this class, such as Square
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    toString() {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}
class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }
    // this toString replaces the toString from Rectangle
    toString() {
        return `Square[width=${this.width}]`;
    }
}
const mySq = new Square(20);
console.log(mySq.toString());
