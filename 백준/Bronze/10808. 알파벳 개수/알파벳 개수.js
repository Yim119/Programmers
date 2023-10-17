const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString();

const arr = Array.from({ length: 26 }, (e, i) => {
  return 0;
});


for (i of input) {
  arr[i.charCodeAt() - 97] += 1;
}

const a = arr.join(" ");

console.log(a);