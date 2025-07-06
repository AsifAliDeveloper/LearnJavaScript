//? intro to for loop

//*  ✅ Breakdown of the Code:

for (let i = 0; i <= 9; i++) {
  console.log(i);
}

// let i = 0: initialize the counter i starting from 0
// i <= 9: loop continues as long as i is less than or equal to 9
// i++: increment i by 1 each time the loop runs
// console.log(i): prints the current value of i

//*  🖨️ Output:

0
1
2
3
4
5
6
7
8
9

//? 🔄 Want Variations?
//* Reverse loop:

for (let i = 9; i >= 0; i--) {
  console.log(i);
}

//* Even numbers from 0 to 10:

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

//* Sum of numbers from 1 to N using for loop:

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Total:", sum); // Output: 55

