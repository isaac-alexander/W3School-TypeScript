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
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
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
    public constructor(private name: string) { }

    public getName(): string {
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
    private readonly name: string;

    public constructor(name: string) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}

const person3 = new Person3("Jane");

console.log(person3.getName());

//////////////////////////////////////////////////////////////////////////

// Inheritance: Implements
// Interfaces (covered here) can be used to define the type a class must follow through the implements keyword.

// Example

// interface Shape {
//     getArea: () => number;
// }

// class Rectangle implements Shape {
//     public constructor(protected readonly width: number, protected readonly height: number) { }

//     public getArea(): number {
//         return this.width * this.height;
//     }
// }

// const myRect = new Rectangle(10, 20);

// console.log(myRect.getArea());

//****** ERROR ON LINE 106 ******

// A class can implement multiple interfaces by listing each one after implements, separated by a comma like so: class Rectangle implements Shape, Colored {

//////////////////////////////////////////////////////////////////////////

// Inheritance: Extends
// Classes can extend each other through the extends keyword. A class can only extends one other class.

// Example

// interface Shape {
//   getArea: () => number;
// }
      
// class Rectangle implements Shape {
//   public constructor(protected readonly width: number, protected readonly height: number) {} 

//   public getArea(): number {
//     return this.width * this.height;
//   }
// }
      
// class Square extends Rectangle {
//   public constructor(width: number) {
//     super(width, width);
//   }
//   // getArea gets inherited from Rectangle
// }

// const mySq = new Square(20);

// console.log(mySq.getArea());

// ERROR ON LINE 134 All declarations of 'width' and 'height' must have identical modifiers.

//////////////////////////////////////////////////////////////////////

