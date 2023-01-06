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
//own scope + lexical scope = closure

//shadowing
var price = 1000; // Pant

function getPrice() {
  console.log("The old price is:", price); // undefined
  var price = 500; //MSD
  console.log("The new price is:", price); //500
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
// console.log(a1); //skip
// let a1 = 50; // Js -> Do you know a1? No | What is value? -> context - dont initialize
// console.log(a1); //skip

//Execution Phase
// console.log(a1); // JS - > Do you know a1? Yes | What is value? - Error
// let a2 = 50;
// console.log(a1);

//object destructuring

// const avenger = {
//   name: "Tony Stark",
//   house: "🏠",
//   networth: "💰💰💰💰",
//   power: "🤖",
//   phrase: "💖 you 2023",
// };

const {
  name,
  networth,
  power = "💿",
  skill = ["genius", "billionaire", "playboy", "philanthropist"],
} = {
  name: "Tony Stark",
  house: "🏠",
  networth: "💰💰💰💰",
  power: "🤖",
  phrase: "💖 you 2023",
};

console.log(networth, power, skill);
//💰💰💰💰
//🤖
//["genius", "billionaire", "playboy", "philanthropist"]

const avg = {
  name: "Tony Stark",
  house: "🏠",
  networth: "💰💰💰💰",
  power: "🤖",
  phrase: "💖 you 2023",
};

const avg1 = { ...avg, nation: "IN", power: "💿" };

// name: "Tony Stark",
// house: "🏠",
// networth: "💰💰💰💰",
// power: "💿",
// phrase: "💖 you 2023",
//nation: "IN",

console.log(avg1);

const avg2 = { nation: "IN", power: "💿", ...avg };
console.log(avg2);

//nation: "IN",
// name: "Tony Stark",
//   house: "🏠",
//   networth: "💰💰💰💰",
//   power: "🤖",
//   phrase: "💖 you 2023",

// object shorthand - key & value must be same

const age = 20;
const batch = "B42WD";
const mark = 90;

const student = {
  name: "santhosh",
  age,
  batch,
  score: mark,
};

console.log(student);

function printDetails(student) {
  const { name, score, batch } = student;
  return name + " has got " + score + " and he belongs to " + batch;
}

console.log(printDetails(student));

function printDetails1({ name, score, batch }) {
  // const { name, score, batch } = student;
  return name + " has got " + score + " and he belongs to " + batch;
}

console.log(printDetails1(student));

//Template literals = ``  ${} - interpolation

function printDetails2({ name, score, batch }) {
  // const { name, score, batch } = student;
  return `${name} has got ${score} and he belongs to ${batch}`;
}

console.log(printDetails2(student));

//Arrow function + Template literals + Destructuring

//named export
const printDetails3 = ({ name, score, batch }) =>
  `${name} has got ${score} and he belongs to ${batch}`;

console.log(printDetails3(student));

const double = (n) => n * 2;

export const Msg = "This is Awesome";

export { printDetails3, double };

export default printDetails3;

