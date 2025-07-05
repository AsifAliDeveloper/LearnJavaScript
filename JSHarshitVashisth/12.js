//? ✅ 1. Booleans and Comparison Operators

let num1 = 9;
let num2 = 7;

console.log(num1 >= num2); // true
console.log(num1 <= num2); // false

{/*   
  🧠 These return boolean values (true / false) based on comparisons:
  > greater than
  < less than
  >= greater than or equal to
  <= less than or equal to 
*/}


//? ✅ 2. Equality: == vs ===

let n1 = "7"; // string
let n2 = 7;   // number

console.log(n1 == n2);   //* true ✅ (loose equality → allows type conversion)
console.log(n1 === n2);  //! false ❌ (strict equality → type must also match)

{/*  🧠  
  == → checks only value, converts types if needed 
  === → checks both value AND type (recommended) 
*/}


//? ✅ 3. Inequality: != vs !==

let number1 = "8"; // string
let number2 = 5;   // number

console.log(number1 != number2);   //* true ✅ (value is different)
console.log(number1 !== number2);  //* true ✅ (different type or value)

{/*  🧠 
  != → not equal (value only)
  !== → not equal (value and type) 
*/}


{/* 📋 Summary Table
  Expression	Result	Reason
  "7" == 7	true	value is same, type converted
  "7" === 7	false	type is different
  "8" != 5	true	"8" ≠ 5
  "8" !== 5	true	value ≠ and type ≠ 
*/}

