const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

const length = input.shift();

const arr = [];
const result = [];

for (let i = 0; i < length; i++) {
  switch (input[i]) {
    case "pop":
      result.push(arr.pop() || -1);
      break;

    case "size":
      result.push(arr.length);
      break;

    case "empty":
      result.push(arr[0] ? 0 : 1);
      break;

    case "top":
      result.push(arr[arr.length - 1] || -1);
      break;

    default:
      arr.push(input[i].split(" ")[1]);
      break;
  }
}

console.log(result.join("\n"));
