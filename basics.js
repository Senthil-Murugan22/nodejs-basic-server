// Printing output
console.log("Hello Senthil!");

// Variables
const name = "Senthil";
let age = 25;

console.log(name);
console.log(age);

// Function
function greet(name) {
  return "Hello " + name;
}
console.log(greet("Senthil"));

// Addition function
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(9, 31));

// Simple condition
const a = 7, b = 8;
if (a < b) {
  console.log("b is big");
} else {
  console.log("a is small");
}

setTimeout(() => {
  console.log("Hello after 2 sec");
}, 2000);

console.log("Start");