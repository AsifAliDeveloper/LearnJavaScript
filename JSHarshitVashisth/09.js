// ✅ 1. String Concatenation

let string1 = "Asif";
let string2 = "Ali";

// Method 1: Using `+` operator
// let newString = string1 + " " + string2;

// Method 2: Using template literals 
let newString = `${string1} ${string2}`;
console.log(newString);  // Output: "Asif Ali"

// 🧠 Template literals (${}) make code cleaner and easier to read.


// ✅ 2. Number Addition

let num1 = 7;
let num2 = 10;
let newNum = num1 + num2;
console.log(newNum);  // Output: 17

// You could also log it like this:
console.log(`${num1} + ${num2} = ${newNum}`);  // "7 + 10 = 17"


// ✅ 3. String to Number Conversion Before Addition

let n1 = "7";
let n2 = "80";

// Without conversion: "780" (string concatenation)
// let Num = n1 + n2;

// With `+` before each: number conversion
let Num = +n1 + +n2;
console.log(Num);             // Output: 87
console.log(typeof Num);      // Output: "number"
// 🧠 Using + before a string (like +n1) is a shortcut for Number(n1).


// 📋 Summary Table
// Operation	Output	Explanation
// "Asif" + "Ali"	"AsifAli"	String concatenation
// "Asif" + " " + "Ali"	"Asif Ali"	Adds space between words
// `${a} ${b}`	"Asif Ali"	Template literal, cleaner syntax
// "7" + "80"	"780"	Concatenates two strings
// + "7" + + "80"	87	Converts both to numbers, adds


// ✅ parseInt()

// Parses a string and returns an integer (whole number).

// Stops reading when it hits a non-digit character.

console.log(parseInt("42"));        // 42
console.log(parseInt("42.85"));     // 42   → decimal part is ignored
console.log(parseInt("42px"));      // 42   → stops at 'p'
console.log(parseInt("px42"));      // NaN  → doesn't start with a number


// ✅ parseFloat()

// Parses a string and returns a floating-point number (includes decimals).

// Also stops at invalid characters, but keeps decimal points.

console.log(parseFloat("42.85"));   // 42.85
console.log(parseFloat("42.85px")); // 42.85
console.log(parseFloat("px42.85")); // NaN

// 📋 Summary Table
// Expression	Result	Type
// parseInt("50")	50	number
// parseInt("50.99")	50	number
// parseFloat("50.99")	50.99	number
// parseInt("50px")	50	number
// parseInt("px50")	NaN	number


// ✅ Bonus: Number() vs parseInt()

Number("42.85")      // 42.85
parseInt("42.85")    // 42
// So:

// ✅ Use Number() if you want strict number conversion.

// ✅ Use parseInt() or parseFloat() if you're extracting numbers from mixed strings (like "150px" or "12.5kg").