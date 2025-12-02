
console.error('Hello Everyone I am an error message! Fix me if you Dare!');
let input = document.querySelector("#name");

let display = document.querySelector(".display");

input.addEventListener("input", function () {
   const name = input.value;
   display.textContent = name;
});

function greet(greeting = 'Hello', name) {
 if(!name) {
    return greeting;
} else {
   return `${greeting} ${name}`;  }}

let age =2;
console.log (age + 3);

// make sure these match the HTML element names for the ID then class.
//let display = document.querySelector(".display"); //My code
// This code should be working
//let display = document.querySelector(".display"); //My code
// missing function? 
//console.log(7/2); //Float = 3.5
//console.log(simpleMath(2, 3));