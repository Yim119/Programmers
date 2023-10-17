const nums = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

const result = String(nums[0] * nums[1] * nums[2]);

for (let i = 0; i <= 9; i++) {
  let count = 0;
  for (let j = 0; j < result.length; j++) {
    if (result[j] == i) {
      count++;
    }
  }
  console.log(count);
}
