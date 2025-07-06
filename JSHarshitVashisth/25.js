//? ✅ do while loop Code:

let i = 11;

do {
  console.log(i);
  i++;
} while (i <= 9);

console.log("value of i", i);

//* 🧠 Explanation:
// The do...while loop executes the block first, then checks the condition.

// Even though i is already greater than 9, it still executes once.

//*  🖨️ Output:
// 11
// value of i 12

//* 🔄 Why?
// i = 11 → Loop runs once, prints 11, then i becomes 12
// After that, condition i <= 9 fails → loop stops
// Final value of i is logged: 12

// 🧪 Comparison to while loop:
// If you used a while loop instead:

let j = 11;
while(j <= 9) {
  console.log(j);
  j++;
}

// 👉 It would print nothing, because the condition fails before the loop body runs.

//? ✅ Summary:
// Loop Type	Condition Checked	Executes at least once?
//! while	Before	❌ No
//* do...while	After	✅ Yes