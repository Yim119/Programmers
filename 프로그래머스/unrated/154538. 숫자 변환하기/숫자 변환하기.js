function solution(x, y, n) {
  let queue = [];
  let count = 0;

  queue.push(y);
  const set = new Set();

  while (queue.length) {
    count++;
    let cur = queue;
    queue = [];

    if (cur.includes(x)) {
      return (count = 0);
    }

    while (cur.length) {
      const temp = cur.shift();
      if (!(temp % 3) && x <= temp / 3 && !set.has(temp / 3)) {
        queue.push(temp / 3);
        set.add(temp / 3);
      }
      if (!(temp % 2) && x <= temp / 2 && !set.has(temp / 2)) {
        queue.push(temp / 2);
        set.add(temp / 2);
      }
      if (x <= temp - n && !set.has(temp - n)) {
        queue.push(temp - n);
        set.add(temp - n);
      }
    }

    if (!queue.length) {
      return (count = -1);
    }

    if (queue.includes(x)) {
      break;
    }
  }

  return count;
}
