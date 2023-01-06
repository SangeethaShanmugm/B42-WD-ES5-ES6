import { double, Msg } from "./fun.js"; //named import
import printDetails3 from "./fun.js";

const age = 20;
const batch = "B42WD";
const mark = 90;

const student = {
  name: "santhosh",
  age,
  batch,
  score: mark,
};
console.log(printDetails3(student));
console.log(double(10));
console.log(Msg);
//2 ways
// 1. names - Import & export - preferred
// 2. default - Import & export -  old
