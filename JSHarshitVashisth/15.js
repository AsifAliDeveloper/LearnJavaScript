//* ternary operator or conditional operator
//* 🔄 Refactored Explanation:
//? ✅ 1. Using if...else (standard way)

let age = 4;
let drink;

if (age >= 5) {
  drink = "coffee";
} else {
  drink = "Milk";
}
console.log(drink); // Output: Milk

//? ✅ 2. Using Ternary Operator (shorter version)

let myAge = 9;
let drinks = myAge >= 5 ? "coffee" : "milk";
console.log("drinks", drinks); // Output: coffee

//* 🧠 Syntax:

// condition ? valueIfTrue : valueIfFalse;

//* ⚠️ Small Fix in Your Code:
// You used age instead of myAge in this line:
// let drinks = age >= 5 ?  "milk" : "cofee";

// It should be:
// let drinks = myAge >= 5 ? "coffee" : "milk";
//  Also, spelling correction: "cofee" ➤ "coffee".

//*  🎯 When to Use the Ternary Operator?
// Use ternary when:
// You need a quick decision.
// Your condition is simple.
// It makes code shorter & cleaner.
// Avoid ternary when:
// You have multiple conditions or long logic — if...else is better for readability.