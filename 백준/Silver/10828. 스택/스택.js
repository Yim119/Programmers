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
      arr.push(parseInt(temp[1].trim()));
      break;
    case item === "pop":
      const node = arr.length ? arr[arr.length - 1] : -1;
      if (arr.length) arr.pop();
      result.push(node);
      break;
    case item === "size":
      result.push(arr.length);
      break;
    case item === "empty":
      result.push(arr.length ? 0 : 1);
      break;
    case item === "top":
      const top = arr.length ? arr[arr.length - 1] : -1;
      result.push(top);
      break;
  }
});

console.log(result.join("\n"));
