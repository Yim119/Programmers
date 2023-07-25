function solution(weights) {
  let cnt = 0;

  const obj = {};

  weights.forEach((e) => {
    obj[e] = (obj[e] || 0) + 1;
  });

  const keys = Object.keys(obj);

  const arr = keys.map((e) => {
    return [parseInt(e), obj[e]];
  });

  for (let i = 0; i < arr.length; i++) {
    cnt += Duplication(arr[i][1]);

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][0] * 2 == arr[j][0]) {
        cnt += arr[i][1] * arr[j][1];

        continue;
      }
      if (arr[i][0] * 3 == arr[j][0] * 2) {
        cnt += arr[i][1] * arr[j][1];

        continue;
      }
      if (arr[i][0] * 4 == arr[j][0] * 3) {
        cnt += arr[i][1] * arr[j][1];

        continue;
      }
    }
  }
  return cnt;
}

function Duplication(n) {
  let temp = 0;
  for (let i = 1; i < n; i++) {
    temp += i;
  }

  return n == 1 ? 0 : temp;
}
