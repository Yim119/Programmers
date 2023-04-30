function solution(n) {
  let count = 0;
  for (let i = 2; i <= n; i++) {
    const array = [];
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        array.push(j);
      }
    }
    if (array.length >= 3) {
      count++;
    }
  }
  return count;
}
