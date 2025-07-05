//  🔐 const in JavaScript
//  ✅ Your Code:

const PI = 3.15;
console.log(PI);       // Output: 3.15
console.log(PI * 2);   // Output: 6.3

//  📌 What const Means:
//   const is used to declare constants — values that cannot be reassigned after being set.

//  It's block scoped, just like let.

//  Useful for fixed values like PI, MAX_USERS, or configuration settings.

//  🧠 Key Rules of const:
//  Rule	Example
//  Must be initialized on declaration✅ 
    const x = 10;
//  ❌ const y; (Error)
//  ❌ Cannot be reassigned	x = 20; → ❌ Error
//  ✅ Can be used in expressions	
    console.log(x * 2);

//  ❗ Important Note (for objects/arrays):

    const user = { name: "Asif" };
    user.name = "Ali";  // ✅ Allowed: modifying contents is fine
    // user = {};          // ❌ Error: reassignment not allowed
// So const prevents reassignment, but not modification of the content if it's an object or array.

// ✅ Best Practice:
// Use const by default.

// Use let only when you need to reassign the value.