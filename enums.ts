// TypeScript Enums
// An enum is a special "class" that represents a group of constants (unchangeable variables).

// Enums come in two flavors string and numeric.

// Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value:

// Example

enum CardinalDirections {
    North,
    East,
    South,
    West
};

let currentDirection = CardinalDirections.North;

// North is the first value so it logs '0'
console.log(currentDirection);

// throws error when commented in as 'North' is not a valid enum
// currentDirection = 'North'; 
// Error: "North" is not assignable to type 'CardinalDirections'.

///////////////////////////////////////////////////////////////////////

// Numeric Enums - Initialized
// You can set the value of the first numeric enum and have it auto increment from that:

// Example

enum CardinalDirections {
    North_ = 1,
    East_,
    South_,
    West_
};

// logs 1 since we initialized the first value to something other than '0'
console.log(CardinalDirections.North_);

// logs 4 as it continued on from the initial '1' value
console.log(CardinalDirections.West_);

///////////////////////////////////////////////////////////////////////

// Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. Then the values will not incremented automatically:

// Example

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
};

// logs 404
console.log(StatusCodes.NotFound);

// logs 200
console.log(StatusCodes.Success);

/////////////////////////////////////////////////////////////////////

// String Enums
// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.

// Example

enum CardinalDirections {
    North2 = 'North',
    East2 = "East",
    South2 = "South",
    West2 = "West"
};

// logs "North"
console.log(CardinalDirections.North2);

// logs "West"
console.log(CardinalDirections.West2);

///////////////////////////////////////////////////////////////////////

// Exercise:
// Create an enum called myEnum, with 2 constants (myFirstConst, mySecondConst) with default values:

enum myEnum {
    myFirstConst,
    mySecondConst
};
