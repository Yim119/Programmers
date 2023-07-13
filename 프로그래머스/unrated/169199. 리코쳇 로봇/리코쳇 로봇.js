function solution(board) {
  let start;
  let goal;

  for (let i = 0; i < board.length; i++) {
    if (board[i].includes("R")) {
      start = [i, board[i].indexOf("R")];
    }

    if (board[i].includes("G")) {
      goal = [i, board[i].indexOf("G")];
    }

    if (start && goal) {
      break;
    }
  }

  const visited = board.map((e, i) => {
    e = [...e];

    return e;
  });

  let count = 0;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let quene = [];
  quene.push(start);

  Outter: while (true) {
    count++;
    let toVisit = [];
    while (quene.length !== 0) {
      for (let i = 0; i < 4; i++) {
        let qx = quene[0][1];
        let qy = quene[0][0];
        const dx = dirs[i][1];
        const dy = dirs[i][0];

        while (
          board[qy + dy] &&
          board[qy + dy][qx + dx] &&
          board[qy + dy][qx + dx] !== "D"
        ) {
          qy += dy;
          qx += dx;
        }
        if (qx !== quene[0][1] || qy !== quene[0][0]) {
          if (board[qy][qx] === "G") {
            break Outter;
          }
          if (visited[qy][qx] !== true) {
            toVisit.push([qy, qx]);
            visited[qy][qx] = true;
          }
        }
      }
      quene.shift();
    }
    if (toVisit.length == 0) {
      return (count = -1);
    }
    quene = toVisit;
  }

  return count;
}
