//? Nested if else 

//*  ✅ Final Version with Comments

//? 🔁 Bonus: Make it random

let winningNumber = Math.floor(Math.random() * 50) + 1;
let userGuess = +prompt("Guess a number"); // "+" converts input string to a number

if (userGuess === winningNumber) {
  console.log("🎉 Your Guess is right!!!");
} else if (userGuess > winningNumber) {
  console.log("📈 Too High!!!");
} else {
  console.log("📉 Too Low!!!");
}

//* 💡 Key Concepts:
// +prompt(...): converts the prompt string to a number.
// if...else if...else: cleaner and avoids deep nesting.
// You can use Math.random() to make the winning number dynamic.
// This will generate a random number between 1 and 50 each time the script runs.