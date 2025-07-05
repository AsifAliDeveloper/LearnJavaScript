//? ✅ Different Ways to Declare Strings in JavaScript

console.log("Welcome Here");   //* ✅ Double quotes
console.log('Hello World!!');  //* ✅ Single quotes
console.log(`Hello Asif`);     //* ✅ Backticks (template literals)

// All of the above are valid in JavaScript and work similarly when used for plain strings.

// 🧠 When to Use Each:
// Syntax	Example	When to Use
//  "double"	"Hello"	Most common, especially in JSON
// 'single'	'Hi'	Good if the string contains double quotes
//  `backticks`	`Hello ${name}`	Use when you need template literals, multi-line strings, or interpolation

// ⚠️ alert():
// Blocking: Stops execution until dismissed.

//? ✅ Use: Simple pop-ups for user attention/testing.

// ⚠️ document.write() and document.writeln():
// Dangerous if used after page load – can overwrite the whole document.

//? ✅ Use only for demo or learning, not in production.

// 🔥 Bonus: Template Literal with Variable

let user = "Asif";
console.log(`Welcome ${user}`);  // Output: Welcome Asif