function solution(maps) {
  let count = 0;
  let start;

  let visited = maps.map((e) => {
    e = [...e];
    return e;
  });

  for (let i = 0; i < maps.length; i++) {
    if (maps[i].includes("S")) {
      start = [i, maps[i].indexOf("S")];
    }
  }

  const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  let queue = [];

  queue.push([start[0], start[1], false]);
  visited[start[0]][start[1]] = true;

  Outer: while (queue.length) {
    let cur = [...queue];
    queue = [];

    Inner: while (cur.length) {
      // 현재 좌표
      const cur_y = cur[0][0];
      const cur_x = cur[0][1];

      // 엔딩
      if (maps[cur_y][cur_x] === "E" && cur[0][2] === true) {
        count - 1;
        break Outer;
      }

      for (let i = 0; i < 4; i++) {
        // 이동 좌표
        const dy = cur_y + dirs[i][0];
        const dx = cur_x + dirs[i][1];

        if (maps[dy] && maps[dy][dx] && maps[dy][dx] !== "X") {
          // 레버
          if (maps[dy][dx] === "L" && visited[dy][dx] !== true) {
            queue = [[dy, dx, true]];
            visited = maps.map((e) => {
              e = [...e];
              return e;
            });
            visited[dy][dx] = true;

            break Inner;
          }

          // 방문처리
          if (visited[dy][dx] !== true) {
            queue.push([dy, dx, cur[0][2]]);
            visited[dy][dx] = true;
          }
        }
      }

      cur.shift();
    } // Inner out

    // 도달 불가
    if (!queue.length) {
      count = -1;
      break;
    }

    // 이동 횟수
    count++;
  } // Outer out

  return count;
}
