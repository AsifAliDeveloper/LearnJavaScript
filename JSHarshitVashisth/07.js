// ✅ 1. .trim()

let firstName = "   Asif Ali     ";
console.log(firstName.length);           // Output: 16
let newString = firstName.trim();
console.log(newString.length);           // Output: 8

// Purpose: Removes whitespace from both ends of a string.

// ⚠️ It does not change the original string—it's immutable and returns a new string.


// ✅ 2. .toUpperCase() & .toLowerCase()

let myName = "Asif Ali";
let upString =  myName.toUpperCase();
console.log(upString);                   // Output: "ASIF ALI"

let lowString = myName.toLowerCase();
console.log(lowString);                 // Output: "asif ali"

// .toUpperCase() → converts all letters to uppercase.

// .toLowerCase() → converts all letters to lowercase.

// Like .trim(), both return new strings.


// ✅ 3. .slice(start, end)

let myString = myName.slice(4);
console.log(myString);                   // Output: " Ali"

// .slice(start, end) → extracts a portion of the string.

// start is inclusive, end is exclusive.

// If end is omitted, it extracts till the end of the string.

// Examples:

myName.slice(0, 4);   // "Asif"
myName.slice(1, 4);   // "sif"
myName.slice(4);      // " Ali"


// 🔁 Summary Table
// Method	Description	Example	Output
// .trim()	Removes extra spaces (start & end)	" Asif ".trim()	"Asif"
// .toUpperCase()	Converts to uppercase	"Asif".toUpperCase()	"ASIF"
// .toLowerCase()	Converts to lowercase	"Asif".toLowerCase()	"asif"
// .slice(a, b)	Extracts part of string (a to b-1)	"Asif Ali".slice(0,4)	"Asif"


// ✅ 4. .replace()

// Replaces part of a string with something else.

let text = "Hello JavaScript!";
let replaced = text.replace("JavaScript", "World");
console.log(replaced); // Output: "Hello World!"

// Only replaces the first match.

// ✅ Case-sensitive.

// Bonus – For all matches, use regex with g flag:

let str = "apple apple";
console.log(str.replace(/apple/g, "banana")); // banana banana


// ✅ 5. .includes()

// Checks if a substring exists inside a string.

let sentence = "I love JavaScript";
console.log(sentence.includes("Java"));   // true
console.log(sentence.includes("Python")); // false

// Returns true or false

// ✅ Case-sensitive


// ✅ 6. .indexOf()

// Returns the first index of a substring. If not found, returns -1.

let name = "Asif Ali";
console.log(name.indexOf("A"));   // 0
console.log(name.indexOf("Ali")); // 5
console.log(name.indexOf("Z"));   // -1

// Use it to find where a word starts in a string.


// ✅ 7. .split()

// Splits a string into an array based on a delimiter.

let data = "Asif,Ali,Developer";
let parts = data.split(",");
console.log(parts); // ["Asif", "Ali", "Developer"]

// .split("") → splits into each character

"ASIF".split("") // ["A", "S", "I", "F"]


// 🔁 Summary Table
// Method	Description	Example	Output
// .replace()	Replace part of string	"Hi JS".replace("JS", "HTML")	"Hi HTML"
// .includes()	Check if string contains a value	"Hello".includes("lo")	true
// .indexOf()	Find index of a substring	"Ali".indexOf("i")	2
// .split()	Split string into array	"a,b,c".split(",")	["a", "b", "c"]