//scope - lifetime variable
//let, const - block scope
// {}  - block
// var - function scope
{
  let y1 = 10;
  var y2 = 20;
}

// console.log(y1); //not defined
console.log(y2); // 20

// not defined(error) vs undefined(value)
//  let y1 = 10;
//let y1  - declaration
// y1 = 10 - assignment

//Can a block hold a var or will it leak outside?

// Lexical Scope and Hoisting
var price = 1000;

function getPrice() {
  console.log("The old price is:", price); // undefined
  var price1 = 500;
  console.log("The new price is:", price1); //500
}

getPrice();

//lexical scope - signature concept in js
// closure

// Hoisting

//Ex - 1
// console.log(a);
// var a = 50;
// console.log(a);

//JS compilation - Does compilation happens? Yes
// JIT - Just in Time compilation

// 2 phases
//1 - compilation Phase
// 2. Execution Phase

//compilation Phase
console.log(a); //Skip
var a = 50; // Js -> Do you know a? No | What is value? -> context - undefined
console.log(a); //Skip

// Execution Phase
console.log(a); // JS - > Do you know a? Yes | What is value? - undefined
var a = 50; // JS - > Do you know a? Yes | What is value? -> Note -> Context -> a - 50
console.log(a); // JS - > Do you know a? Yes | What is value? - 50

//Ex - 2
// console.log(a1);
// let a1 = 50;
// console.log(a1);

//compilation Phase
console.log(a1); //skip
let a1 = 50; // Js -> Do you know a1? No | What is value? -> context - dont initialize
console.log(a1); //skip

//Execution Phase
console.log(a1); // JS - > Do you know a1? Yes | What is value? - Error
let a2 = 50;
console.log(a1);
