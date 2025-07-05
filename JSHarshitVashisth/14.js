//* if else condition

//? ✅ 1. Age-Based Access Example

let myAge = 17;

if (myAge >= 18) {
  console.log("✅ User can play DDLC (18+)");
} else {
  console.log("🎮 User can play Mario (under 18)");
}

// 🧠 if...else runs one block when the condition is true, otherwise the else block.

//? ✅ 2. Even/Odd Check Example

let num = 14;

if (num % 2 === 0) {
  console.log("🟢 Number is even");
} else {
  console.log("🔵 Number is odd");
}

// 🧠 % (modulus) gives the remainder — if divisible by 2 (% 2 === 0), it's even.

// 💡 Bonus: Use prompt() for user input (Browser Only)

let userAge = +prompt("Enter your age:");

if (userAge >= 18) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}







//?  Game here
//* In if else 
console.log("Game Start here ");

let age = +prompt("Enter your age:");

if (age >= 18) {
  console.log("🎉 Welcome, Adult Player!");
  console.log("Choose a game from the Adult Menu:");
  console.log("1. DDLC (18+ Visual Novel)");
  console.log("2. GTA V");
  console.log("3. Cyberpunk 2077");
  
  let choice = +prompt("Enter game number (1-3):");
  if (choice === 1) {
    console.log("Launching DDLC...");
  } else if (choice === 2) {
    console.log("Launching GTA V...");
  } else if (choice === 3) {
    console.log("Launching Cyberpunk 2077...");
  } else {
    console.log("Invalid choice ❌");
  }

} else if (age >= 13 && age < 18) {
  console.log("👦 Welcome, Teen Player!");
  console.log("Choose a game from the Teen Menu:");
  console.log("1. Minecraft");
  console.log("2. Fortnite");
  console.log("3. Roblox");

  let choice = +prompt("Enter game number (1-3):");
  if (choice === 1) {
    console.log("Launching Minecraft...");
  } else if (choice === 2) {
    console.log("Launching Fortnite...");
  } else if (choice === 3) {
    console.log("Launching Roblox...");
  } else {
    console.log("Invalid choice ❌");
  }

} else {
  console.log("🧒 You're too young for most games.");
  console.log("You can play:");
  console.log("- ABC Mouse");
  console.log("- LEGO Games");
}
