//? ✅ JavaScript Variable Naming Rules


//! ❌ 1. Cannot start with a number

// let 1name = "Asif Ali";  //! ❌ Invalid – SyntaxError
let name1 = "Asif Ali";   //* ✅ Valid


//? ✅ 2. Can include letters, digits, underscores _, and dollar signs $

let first_name = "Asif";   //* ✅ Valid
let _firstname = "Ali";    //* ✅ Valid

let first$name = "Asif";    //* ✅ Valid
let $firstname = "Alo";    //* ✅ Valid


//! ❌ 3. Cannot contain spaces

// let first name = "Ali";  //! ❌ Invalid – SyntaxError
let firstname = "Ali";   //* ✅ Valid


//! ❌ 4. Cannot use JavaScript reserved keywords

// let let = 10;     //! ❌ Invalid
// let function = 5; //! ❌ Invalid

// 🟡 Naming Conventions (Best Practices)
//* ✅ Use camelCase for variable and function names

let firstName = "Asif";  //* ✅ Good practice


//? ✅ Start with lowercase for variables and functions

let userAge = 25;        //* ✅ Correct

//? ✅ Use meaningful names

let a = 1;          //! ❌ Not meaningful
let studentAge = 1; //* ✅ Better
