"use strict";
// TypeScript Enums
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric.
// Numeric Enums - Default
// By default, enums will initialize the first value to 0 and add 1 to each additional value:
// Example
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
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
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North_"] = 1] = "North_";
    CardinalDirections[CardinalDirections["East_"] = 2] = "East_";
    CardinalDirections[CardinalDirections["South_"] = 3] = "South_";
    CardinalDirections[CardinalDirections["West_"] = 4] = "West_";
})(CardinalDirections || (CardinalDirections = {}));
;
// logs 1 since we initialized the first value to something other than '0'
console.log(CardinalDirections.North_);
// logs 4 as it continued on from the initial '1' value
console.log(CardinalDirections.West_);
///////////////////////////////////////////////////////////////////////
// Numeric Enums - Fully Initialized
// You can assign unique number values for each enum value. Then the values will not incremented automatically:
// Example
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
;
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
/////////////////////////////////////////////////////////////////////
// String Enums
// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
// Example
(function (CardinalDirections) {
    CardinalDirections["North2"] = "North";
    CardinalDirections["East2"] = "East";
    CardinalDirections["South2"] = "South";
    CardinalDirections["West2"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
// logs "North"
console.log(CardinalDirections.North2);
// logs "West"
console.log(CardinalDirections.West2);
///////////////////////////////////////////////////////////////////////
// Exercise:
// Create an enum called myEnum, with 2 constants (myFirstConst, mySecondConst) with default values:
var myEnum;
(function (myEnum) {
    myEnum[myEnum["myFirstConst"] = 0] = "myFirstConst";
    myEnum[myEnum["mySecondConst"] = 1] = "mySecondConst";
})(myEnum || (myEnum = {}));
;
