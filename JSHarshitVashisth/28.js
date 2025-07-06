//? 🧠 Primitive vs Reference Data Types in JavaScript

//? ✅ Primitive Types (copied by value):

// Includes:
String, Number, Boolean, null, undefined, Symbol, BigInt

let num1 = 6;
let num2 = num1;

console.log("value of num1: ", num1); // 6
console.log("value of num2: ", num2); // 6

num1++;

console.log("After increment in num1");
console.log("value of num1: ", num1); // 7
console.log("value of num2: ", num2); //* 6 ✅ (unchanged)

//* 🔍 Why?
// num2 gets a copy of the value of num1, so they are stored separately in memory.


//?  🔁 Reference Types (copied by reference):

//  Includes:
Object, Array, Function

const Array1 = ["item1", "item2", "item3"];
const Array2 = Array1;

console.log("value of Array1: ", Array1); // ["item1", "item2", "item3"]
console.log("value of Array2: ", Array2); // ["item1", "item2", "item3"]

Array1.push("item4");

console.log("After pushing element to Array1");
console.log("value of Array1: ", Array1); // ["item1", "item2", "item3", "item4"]
console.log("value of Array2: ", Array2); //* ["item1", "item2", "item3", "item4"] ✅ (changed)


//* 🔍 Why?
// Array2 doesn't get a new array — it gets a reference to the same array in memory. So changes to Array1 affect Array2.

//* 🧪 Summary Table:
// Feature	Primitive	Reference
// Stored in	Stack	Heap
// Copied by	Value	Reference
// Independent copy?	✅ Yes	❌ No
// Examples	Number, String, Boolean	Object, Array, Func
