//? for loop example 

//* ✅ Corrected Version:
// To sum all numbers from 1 to 100, you should add i, not just 1.

let total = 0;
let num = 100;

for (let i = 1; i <= num; i++) {
  total = total + i;
}

console.log(total); // Output: 5050
// 🧠 Bonus Tip: Use Formula for Optimization

let num1 = 100;
let totals = (num1 * (num1 + 1)) / 2;
console.log(totals); // 5050