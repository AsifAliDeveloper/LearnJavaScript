//? 🔹 AND Operator (&&)

let firstName = "Asif";
let age = 19;

if (firstName[0] === "A" && age > 18) {
  console.log("Name starts with A and age is above 18");
} else {
  console.log("❌ Either condition is false");
}

//* ✅ Only runs if both conditions are true.
//! ❌ If even one is false, the whole condition fails.

//* Example:
"A" === "A" && 22 > 18  //* ✅ true && true → ✅ true


//? 🔹 OR Operator (||)

if (firstName[0] === "A" || age > 18) {
  console.log("✅ At least one condition is true");
} else {
  console.log("❌ Both conditions are false");
}

//* ✅ Runs if any one condition is true.
//! ❌ Only false if both are false.

//* Example
"A" === "A" || 22 > 18  //* ✅ true

//? 📋 Summary Table

// Expression	Result
// "Asif"[0] === "A" && 22 > 18	true
// "Bilal"[0] === "A" && 16 > 18	false
// "Bilal"[0] === "A" || 16 > 18	false
// "Asif"[0] === "A" || 16 > 18	true
