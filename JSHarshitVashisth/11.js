//?  ✅ undefined

let firstName; // Variable declared, but not assigned
console.log(typeof firstName); // "undefined"

firstName = "Asif Ali";
console.log(typeof firstName, firstName); // "string", "Asif Ali"

//! ❌ const firstName; // ❗ Error: Const must be initialized

// 🧠 Note: undefined means "no value assigned yet" — happens by default with let or var.


//? ✅ null

let myVariable = null;
console.log(typeof myVariable, myVariable); //! "object" ❗, null

myVariable = "Asif Ali";
console.log(typeof myVariable, myVariable); // "string", "Asif Ali"

console.log(typeof null); //! "object" ❗ (JavaScript bug)

//  🧠 Note:
// null means "empty on purpose".
// The fact that typeof null returns "object" is a well-known bug in JavaScript.


//? ✅ BigInt

let myNumber = BigInt(1278347458863478973485);
let sameMyNumber = 123n; // 'n' is shorthand for BigInt literal

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(myNumber);                // 1278347458863478973485n
console.log(sameMyNumber);            // 123n
console.log(myNumber + sameMyNumber); // BigInt sum

// 🧠 BigInt Use Case:

// Use BigInt when numbers exceed Number.MAX_SAFE_INTEGER.
// Regular numbers (number type) cannot safely store large integers beyond that limit.

//! ❗ Mixing BigInt with number?

let big = 10n;
let num = 5;

// console.log(big + num); //! ❌ TypeError: Cannot mix BigInt and number


//? ✅ Must convert number to BigInt:

console.log(big + BigInt(num)); //* ✅ 15n

// 📋 Summary Table
// Type	Example	typeof result
// undefined	let x;	"undefined"
//! null	let y = null;	"object" ❗
// BigInt	let big = 123456789123456789n;	"bigint"