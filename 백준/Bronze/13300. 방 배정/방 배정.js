const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const condition = input.shift();

const k = condition.split(" ")[1];

let arr = input.map((e) => {
  return e.trim().split(" ");
});

arr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let tick = 0;

while (arr.length) {
  const stack = [];

  stack.push(arr.shift());

  if (arr.length === 0) {
    tick++;
    break;
  }

  for (let i = 0; i < k - 1; i++) {
    if (arr.length !== 0) stack.unshift(arr.shift());

    if (stack[0][0] !== stack[1][0] || stack[0][1] !== stack[1][1]) {
      arr.unshift(stack.shift());
      break;
    }
  }

  tick++;
}

console.log(tick);