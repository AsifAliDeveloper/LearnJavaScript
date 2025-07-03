// 🔑 let Keyword in JavaScript

// ✅ Example:

let x = 10;      // Declare and assign
console.log(x);  // Output: 10

x = 15;          // Re-assign is allowed
console.log(x);  // Output: 15

// 🟩 Key Features of let

// 1. ✅ Block Scoped
// A let variable exists only inside the block { } where it's defined.

{
  let a = 5;
  console.log(a); // ✅ 5
}
// console.log(a);   // ❌ ReferenceError: a is not defined


// 2. ✅ Can be Updated

let age = 25;
age = 26; // ✅ allowed


// 3. ❌ Cannot be Re-declared in Same Scope

// let age = 30;
// let age = 40; ❌ SyntaxError: Identifier 'age' has already been declared


// 🔁 Comparison: var vs let
// Feature	var	let
// Scope	Function-scoped	Block-scoped
// Can be re-declared	✅ Yes	❌ No (in same scope)
// Hoisting	✅ Yes (initialized as undefined)	✅ Yes (but not initialized)
// Best Practice	❌ Avoid using var	✅ Use let (or const)

// 📦 Example of Scope:

function testVarLet() {
  if (true) {
    var a = 1;
    let b = 2;
  }

  console.log(a); // ✅ 1
  // console.log(b); // ❌ ReferenceError
}
testVarLet();
