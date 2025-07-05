//? truthy and falsy values

//! ❗ Falsy Values in JavaScript
// These behave like false when used in a condition:

// All of these are falsy:
//!  false
//!  0
//!  ""         // empty string
//!  undefined
//!  null
//!  NaN

//*  🔍 Examples:

if (0) {
  console.log("This won't run");
}

if ("") {
  console.log("This won't run either");
}

if (null) {
  console.log("Still won't run");
}


//? ✅ Truthy Values
// Everything else is truthy, such as:

// All of these are truthy:

 
     "hello"
     42
 //? []
     {}
     "0"
     "false"
     true

//*  🔍 Examples:

if ("hello") {
  console.log("✅ This will run");
}

if ([]) {
  console.log("✅ Empty array is truthy");
}

if ({}) {
  console.log("✅ Empty object is also truthy");
}

// 🧠 Use Case: Shortcut Conditions

let userName = "";

if (!userName) {
  console.log("⚠️ Please enter your name.");
}

// You can also use truthy/falsy for default values:

let input = "";
let name = input || "Guest"; // if input is falsy, use "Guest"
console.log(name); // Output: Guest


//* 📋 Summary Table
// Value	Falsy/Truthy
// false	❌ Falsy
// 0	❌ Falsy
// "" (empty)	❌ Falsy
// null	❌ Falsy
// undefined	❌ Falsy
// NaN	❌ Falsy
// "0"	✅ Truthy
// " "	✅ Truthy
// []	✅ Truthy
// {}	✅ Truthy

