const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((e) => parseInt(e));

const length = input[0];
const num = input[1] - 1;

const arr1 = Array.from({ length: length }, (e, i) => {
  return i + 1;
});

const arr2 = [];

let index = 0;

while (arr1.length) {
  index = index + num;

  if (index >= arr1.length) {
    index = index % arr1.length;
  }

  arr2.push(...arr1.splice(index, 1));
}

let str = "";

arr2.map((e, i) => {
  if (i === 0) {
    str = str + "<";
  }

  if (i === arr2.length - 1) {
    str = str + e + ">";
  } else {
    str = str + e + ", ";
  }
});

console.log(str.trim());
