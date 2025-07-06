//? into to arrays
// reference type 
// how to create arrays
// array is a ordered collection of items


//* ✅ What You Did:
// 🥝 Declared arrays (ordered collections):

let fruit = ["Apple", "mango", "banana"];
let numbers = [1, 2, 3, 4, 5, 6, 7];
let mixed = [1, 2, 3, 4, "Asif", "Ali", "Asim", "Usman", "fruits", "vegetables"];

// Arrays can hold any type of data, even mixed types (strings, numbers, etc.)
// They are indexed from 0
// Arrays are reference types

//*  🔍 Checking Data & Accessing Elements:

console.log(typeof mixed);     // "object" — arrays are a type of object
console.log(fruit[0]);         // "Apple"
console.log(fruit[1]);         // "mango"
console.log(fruit[2]);         // "banana"
console.log(fruit.length);     // 3
console.log(fruit.length - 1); // 2 → last index

//* 🛠️ Modifying Elements:

let fruits = ["Apple", "Mango", "orange", "Banana"];
fruits[1] = "Grapes";          // Replaces "Mango" with "Grapes"
console.log(fruits);           // ["Apple", "Grapes", "orange", "Banana"]

// 🧪 Check if Variable is an Array:

console.log(Array.isArray(fruits));  // true ✅

//* 🧠 Recap Summary:
// Feature	Example
// Create array	let arr = [1, 2, 3]
// Indexing starts at 0	arr[0] → 1
// Modify element	arr[1] = 10
// Check if array	Array.isArray(arr) → true
// Get last index	arr.length - 1
// Mixed types allowed	[1, "hello", true]
// Type of array	"object" (not "array")
