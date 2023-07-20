function solution(book_time) {
  let sche = book_time.map((e) => {
    const temp = [];
    for (i of e) {
      const [hour, minute] = i.split(":");
      temp.push(Number(hour) * 60 + Number(minute));
    }
    return temp;
  });

  sche.sort((a, b) => {
    if (a[1] == b[1]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  let rsv = [];

  while (sche.length) {
    const cur = [];
    const left = [];

    cur.unshift(sche.shift());

    for (i of sche) {
      const checkOut = cur[0][1];

      if (checkOut + 10 <= i[0]) {
        cur.unshift(i);
      } else {
        left.push(i);
      }
    }
    sche = left;
    rsv.push(cur);
  }

  return rsv.length;
}
