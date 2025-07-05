// 🔤  template String :

let age = 22;
let name = "Asif Ali";

// Traditional way (not used here)
// let aboutMe = "My name is " + name + " and my age is " + age;

// Template literal (modern and clean)
let aboutMe = `My name is ${name} and my age is ${age}`;
console.log(aboutMe);  // Output: My name is Asif Ali and my age is 22


// ✅ Why Template Strings Are Great:

// No need to manually add spaces (+ " ").
// Easy to insert variables using ${}.
// Can span multiple lines too:

let message = `Hello ${name},
You are ${age} years old.`;
console.log(message);


// 🧠 Syntax:
// Backticks (`) instead of quotes:

`Text ${expression}`

