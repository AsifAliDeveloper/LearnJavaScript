// ✅ 1. JavaScript Primitive Data Types:

// "string"
// number        → 1, 2, 3, 45.6, etc.
// boolean       → true / false
// undefined     → variable declared but not assigned
// null          → intentionally empty
// bigint        → large integers
// symbol        → unique identifiers


// ✅ 2. typeof Operator:

let age = 22;
console.log(typeof age);         // number

let firstName = "Asif";
console.log(typeof firstName);  // string

let dob;
console.log(typeof dob);        // undefined ✅ (Fixed: you wrote `bod`)

let asifAli = null;
console.log(typeof asifAli);    // object ❗ (this is a JavaScript bug/quirk)


// ✅ 3. Converting Number → String:

age = age + " ";
console.log(typeof age);        // string (22 + " " => "22 ")

let dateOfBirth = 18;
dateOfBirth = String(dateOfBirth);
console.log(typeof dateOfBirth);  // string


// ✅ 4. Converting String → Number:

dateOfBirth = Number("18");
console.log(typeof dateOfBirth);  // number

// ⚠️ Bug in this line:

firstName = + " Asif Ali";
console.log(typeof firstName); 

// " Asif Ali " cannot be converted to a number, so the result is:

console.log(typeof firstName);  // number
console.log(firstName);         // NaN (Not a Number)


firstName = + "two";
console.log(typeof firstName);  // "number"
console.log(firstName);         // NaN (Not a Number)


// 📋 Summary Table
// Expression	Result Type	Value
// typeof 22	"number"	22
// typeof "Asif"	"string"	"Asif"
// typeof undefined	"undefined"	-
// typeof null	"object" ❗	-
// String(22)	"string"	"22"
// Number("18")	"number"	18
// Number("Asif Ali")	number	NaN
// Number("two")	"number"	NaN