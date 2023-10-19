const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const arr = [];
const result = [];

input.forEach((e) => {
  const item = e.trim();
  switch (true) {
    case item.includes("push"):
      const temp = item.split(" ");
      temp[0] === "push_front" ? arr.unshift(temp[1]) : arr.push(temp[1]);
      break;
    case item.includes("pop"):
      const node = item === "pop_front" ? arr.shift() : arr.pop();
      result.push(node || -1);
      break;
    case item === "size":
      result.push(arr.length);
      break;
    case item === "empty":
      result.push(arr.length ? 0 : 1);
      break;
    case item === "back":
      const top = arr.length ? arr[arr.length - 1] : -1;
      result.push(top);
      break;
    case item === "front":
      result.push(arr[0] || -1);
      break;
  }
});

console.log(result.join("\n"));
