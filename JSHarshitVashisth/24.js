//? break and continue 

//*  ✅ continue Statement

for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    continue; // Skip this iteration when i is 4
  }
  console.log(i);
}
console.log("Hello there");

//? 🟢 What it does:
// Prints numbers 1 to 10 except 4
// When i === 4, it skips that iteration
// Then continues with the next value

//* 🖨️ Output:
1
2
3
5
6
7
8
9
10
//  Hello there


//* ✅ break Statement

for (let j = 1; j <= 10; j++) {
  if (j === 4) {
    break; // Stop the loop completely when j is 4
  }
  console.log(j);
}
console.log("Hello there");

//? 🛑 What it does:
// Prints numbers starting from 1
// When j === 4, it exits the loop entirely

//*  🖨️ Output:
1
2
3
// Hello there

//?  🧠 Summary:
// Statement	Meaning	Behavior
// continue	Skip current iteration	Loop continues to next cycle
// break	Exit loop immediately	Loop ends completely

