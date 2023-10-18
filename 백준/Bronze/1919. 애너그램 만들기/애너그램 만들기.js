const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input[0] = input[0].trim();

let str1 = input[0];
let str2 = input[1];

let tick = 0;

for (i of str1) {
  if (str2.includes(i)) {
    tick++;
    str2 = str2.replace(i, "");
  }
}

console.log(input[0].length + input[1].length - tick * 2);
