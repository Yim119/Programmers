const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const length = input[0];
const target = input[2];

let arr = input[1]
  .trim()
  .split(" ")
  .map((e) => {
    return parseInt(e);
  })
  .sort((a, b) => {
    return a - b;
  });

let count = 0;
let point = length - 1;

for (let i = 0; i < length; i++) {
  for (let j = point; j > i; j--) {
    if (arr[i] + arr[j] == target) {
      point = j;
      count++;
      break;
    }
  }
}

console.log(count);
