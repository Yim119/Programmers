function solution(r1, r2) {
  let points = 0;
  for (let x = 1; x <= r2; x++) {
    const y1 = Math.floor(Math.sqrt(r2 ** 2 - x ** 2));
    const y2 =
      x >= r1 ? 0 : Math.ceil(Math.sqrt(Math.abs(r1 ** 2 - x ** 2)));
    points += y1 - y2 + 1;
  }
  return points * 4;
}
