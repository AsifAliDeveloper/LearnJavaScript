//  While loop example

//* ✅ Breakdown:
//? 🔁 Option 1: Using while loop (commented out)

let num = 10;
let total = 0;
let i = 0;
while (i <= num) {
  total = total + i;
  i++;
}
console.log(total); // 55

// This loops from 0 to 10 and adds each number to total.
// Final output: 55

//* 📌 Tip: You had total = total + 1; — that would give you 11.
// You should use total = total + i; ✅

//* 🧠 Option 2: Using math formula (your working code):

let totals = (num * (num + 1)) / 2;
console.log(totals); // 55