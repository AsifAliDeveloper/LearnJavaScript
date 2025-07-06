//? Array push pop
const fruits = ["Apple","Mango", "orange","Banana"];
console.log(fruits);

//? Array shift unshift
const vegitable = ["potato","tomato","salad","gobhi"];
console.log(vegitable);


//* 🟢 push() – Add to End

fruits.push("Grapes");
fruits.push("Pine-Apple");
console.log(fruits);
// ✅ Adds "Grapes" and "Pine-Apple" at the end of the fruits array.


//! 🔴 pop() – Remove from End

let poppedFruit = fruits.pop();
console.log(poppedFruit);

// ✅ Removes the last item ("Pine-Apple") and stores it in poppedFruit.

// 🔄 Output Example (fruits):

["Apple", "Mango", "orange", "Banana", "Grapes"]
// popped fruits Pine-Apple


//* 🟢 unshift() – Add to Start

vegitable.unshift("onion");
console.log(vegitable);

// ✅ Adds "onion" at the start of the vegitable array.


//! 🔴 shift() – Remove from Start

let poppedVegitable = vegitable.shift();
console.log(poppedVegitable);

// ✅ Removes the first item ("onion") and stores it in poppedVegitable.


// 🔄 Output Example (vegitable):

// ["potato", "tomato", "salad", "gobhi"]
// poppedVegitable onion


//* 🧠 Summary Table:
// Method	Action	Position	Modifies original array?
// push()	Add item	End	✅ Yes
// pop()	Remove & return item	End	✅ Yes
// unshift()	Add item	Start	✅ Yes
// shift()	Remove & return item	Start	✅ Yes