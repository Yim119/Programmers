function solution(targets) {
  targets.sort((a, b) => {
    if (a[1] == b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  let count = 0;

  while (targets.length > 0) {
    let shooting = targets[0][1];

    for (i = 0; i < targets.length; i++) {
      if (targets[i][0] >= shooting) break;
    }

    targets.splice(0, i);
    count++;
  }

  return count;
}
