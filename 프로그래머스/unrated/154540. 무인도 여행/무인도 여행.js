function solution(maps) {
  const arr = [];

  const vis = maps.map((e) => {
    e = [...e];

    e = e.map((i) => {
      if (i !== "X") return false;
      else return "X";
    });

    return e;
  });

  vis.map((e, y) => {
    e.map((i, x) => {
      if (!i) {
        arr.push(Island(maps, [y, x], vis));
      }
    });
  });

  arr.sort((a, b) => a - b);

  return arr.length ? arr : [-1];
}

function Island(maps = [], start = [], vis = []) {
  let day = 0;

  dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let queue = [];
  queue.push([start[0], start[1]]);
  vis[queue[0][0]][queue[0][1]] = true;

  while (queue.length) {
    const cur_y = queue[0][0];
    const cur_x = queue[0][1];

    day += Number(maps[cur_y][cur_x]);

    for (let i = 0; i < 4; i++) {
      const dy = cur_y + dirs[i][0];
      const dx = cur_x + dirs[i][1];

      if (
        maps[dy] &&
        maps[dy][dx] &&
        maps[dy][dx] !== "X" &&
        vis[dy][dx] !== true
      ) {
        vis[dy][dx] = true;
        queue.push([dy, dx]);
      }
    }
    queue.shift();
  }

  return day;
}
