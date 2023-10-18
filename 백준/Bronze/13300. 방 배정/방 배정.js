const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const condition = input.shift();

const n = condition.split(" ")[0];
const k = condition.split(" ")[1];

let arr = input.map((e) => {
  return e.split(" ");
});

arr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  else return a[1] - b[1];
});

let tick = 0;

while (arr.length > 1) {
  for (let i = 0; i < k; i++) {
    const node = arr.shift();

    if (node[0] !== arr[0][0] || node[1] !== arr[0][1]) break;
  }

  tick++;
}

tick++;

console.log(tick);
