const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const temp = String(input[0] * input[1] * input[2]);

const arr = Array.from({ length: 10 }, (e, i) => {
  return 0;
});

for (i of temp) {
  arr[i] += 1;
}

for (i of arr) {
  console.log(i);
}
