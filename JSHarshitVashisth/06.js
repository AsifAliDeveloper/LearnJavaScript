//   🔤 String Indexing in JavaScript
//   ✅ Your Code:


let firstName = "ASIFALI";

// Index positions:
//  A S I F A L I
//  0 1 2 3 4 5 6


// 1. Accessing Characters by Index

console.log(firstName[2]); // Output: "I"
// Indexing starts from 0

// firstName[2] → 3rd character = "I"

// 2. Getting String Length

console.log(firstName.length); // Output: 7
// .length gives the total number of characters in the string.

// 3. Accessing the Last Character

console.log(firstName[firstName.length - 1]); // Output: "I"
// Last index = length - 1 = 7 - 1 = 6


// console.log(firstName[firstName.length - 2]); // Output: "L"
// Second last character → index 5 = "L"

// 📋 Summary
// Expression	Output	Meaning
// firstName[0]	 A	First character
// firstName[2]	 I	3rd character
// firstName.length	7	Total number of characters
// firstName[firstName.length-1]	I	Last character
// firstName[firstName.length-2]	L	Second last character

// Would you like to learn how to loop through strings using for or for...of to access each character?