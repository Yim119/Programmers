let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = input[1].split(" ");
const target = input[2];

let count = 0;

arr.map((e) => {
  if (e === target) {
    count++;
  }
  return null;
});

console.log(count);
