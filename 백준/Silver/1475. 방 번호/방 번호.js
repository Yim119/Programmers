const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim();

const arr = Array.from({ length: 10 }, (e, i) => {
  return 0;
});

for (i of input) {
  arr[i]++;
}

let temp = Math.ceil((arr[6] + arr[9]) / 2);

arr[6] = temp;
arr[9] = temp;

let max = Math.max(...arr);

console.log(max);
