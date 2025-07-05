// 🔐 "use strict" in JavaScript
// "use strict" is a directive introduced in ECMAScript 5 (ES5) that tells the JavaScript engine to run code in strict mode.

// Forces JavaScript to use strict mode, helping catch errors and making code cleaner and more secure.

// Strict mode catches common coding mistakes and helps you write more secure and optimized code.

// ✅ How to Enable Strict Mode
// For a whole script:

"use strict";

// For a specific function only:

function myFunction() {
  "use strict";
  let y = 20;
  console.log(y);
}
// ❌ Without Strict Mode (No Error)

x = 10;   // No error (creates global variable implicitly)
console.log(x);

// ✅ With Strict Mode (Error)

// "use strict";

x = 10;   // ❌ ReferenceError: x is not defined
console.log(x);

// 🔍 What Does Strict Mode Do?
// Feature	Without Strict	With "use strict"
// Undeclared variables	✅ Allowed	❌ Error
// Duplicate function parameters	✅ Allowed	❌ Error
// Assigning to read-only properties	✅ Allowed	❌ Error
// this in global functions	window object	undefined
// Deletes non-deletable properties	✅ Allowed	❌ Error
// Reserved keywords as names	✅ Allowed	❌ Error

// 📌 Example

"use strict";

// 🟡 Why Use "use strict"?
// Avoid accidental global variables.

// Make your code easier to debug.

// Prepare your code for future ECMAScript versions.

// Safer and cleaner JavaScript.

// 📦 Introduction to Variables in JavaScript

// ✅ 1. What is a Variable?
// A variable is a container for storing data (values).

// 📌 2. Declaring a Variable
// ✅ Using var:

var name = "Asif";      // Declare
console.log(name);      // Use
name = "Asif Ali";      // Change
console.log(name);      // Output: Asif Ali
// var is function-scoped.

// Can be re-declared and re-assigned.

// ❌ Not recommended in modern JS.

// Example:

var a = 5;
console.log(a);

var a = 10;  // Re-declared without error
console.log(a);

// ✅ Using let:

let x = 10;
console.log(x);

x = 20;       // ✅ Allowed: value changed
console.log(x);

// let x = 30; ❌ Error: Cannot redeclare the variable in the same scope
//let is block-scoped.

// ✅ Can be updated.

// ❌ Cannot be re-declared in the same block.

// ✅ Recommended for variables that change.


// ✅ Using const:

const y = 50;
console.log(y);

y = 60;  //  ❌ Error: Cannot reassign a constant variable
// const y = 70;  ❌ Error: Cannot redeclare a constant
// const is block-scoped like let.

// ❌ Cannot be updated or re-declared.

// ✅ Best for values that should never change.


// 📋 Summary Table
// Keyword	Reassignable	Redeclarable	Scope	Use Case
// var	✅ Yes	✅ Yes	Function	❌ Avoid in modern JS
// let	✅ Yes	❌ No	Block	✅ Use when value may change
// const	❌ No	❌ No	Block	✅ Use when value should not change