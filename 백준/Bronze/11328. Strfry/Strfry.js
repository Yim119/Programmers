let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const arr = [];

input.map((e) => {
  arr.push(e.trim().split(" "));
});

arr.map((e) => {
  let check = "Impossible";
  let temp;

  for (i of e[0]) {
    if (e[1].includes(i)) e[1] = e[1].replace(i, "");

    if (!e[1].length) {
      temp = i;
      break;
    }
  }

  if (temp === e[0][e[0].length - 1]) {
    check = "Possible";
  }

  console.log(check);
});
