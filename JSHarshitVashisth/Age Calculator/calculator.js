const inputbtn = document.querySelector(".age-dob-input");
const calculatebtn = document.querySelector(".calculate-btn");
const ageresult = document.querySelector(".age-result");

calculatebtn.addEventListener("click", () => {
  if(inputbtn.value === ""){
    alert("Please Enter Your Date of Birth");
  }else{
    console.log("inputbtn",inputbtn.value);
    const dob = new Date(inputbtn.value);
    console.log("dob",dob);
    const dob_year = dob.getFullYear();
    console.log("dob_Year", dob_year);
    // Current
    const now = new Date();
    console.log("now", now);
    const now_year = now.getFullYear();
    console.log("now_Year", now_year);
    const age = now_year - dob_year;
    console.log("my age is ", age ,"Years");

    ageresult.innerHTML = `Your age is ${age} years`; 
  }
});