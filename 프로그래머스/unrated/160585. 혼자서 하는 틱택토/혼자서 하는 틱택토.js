function solution(board) {
  let countO = 0;
  let countX = 0;

  board = board.map((e) => {
    e = [...e];

    return e;
  });

  for (let i = 0; i < 3; i++) {
    board[i].map((e) => {
      if (e === "O") {
        countO++;
      }
      if (e === "X") {
        countX++;
      }
    });
  }

  let bingoO = false;
  let bingoX = false;

  for (let i = 0; i < 3; i++) {
    let countO = 0;
    let countX = 0;

    if (!board[i].includes(".") && !board[i].includes("O")) {
      bingoX = true;
    }
    if (!board[i].includes(".") && !board[i].includes("X")) {
      bingoO = true;
    }
    for (let j = 0; j < 3; j++) {
      if (board[j][i] === "O") {
        countO++;
      }
      if (board[j][i] === "X") {
        countX++;
      }
    }
    if (countO === 3) {
      bingoO = true;
    }
    if (countX === 3) {
      bingoX = true;
    }
  }

  let digonalO = 0;
  let digonalX = 0;

  for (let i = 0; i < 3; i++) {
    if (board[i][i] === "O") {
      digonalO++;
    }
    if (board[i][i] === "X") {
      digonalX++;
    }
    if (digonalO === 3) {
      bingoO = true;
    }
    if (digonalX === 3) {
      bingoX = true;
    }
  }

  digonalO = 0;
  digonalX = 0;

  for (let i = 0; i < 3; i++) {
    if (board[i][2 - i] === "O") {
      digonalO++;
    }
    if (board[i][2 - i] === "X") {
      digonalX++;
    }
    if (digonalO === 3) {
      bingoO = true;
    }
    if (digonalX === 3) {
      bingoX = true;
    }
  }

  if (countO < countX || countO > countX + 1) return 0;

  if (bingoO && bingoX) return 0;

  if (bingoO && countO === countX) return 0;

  if (bingoX && countO > countX) return 0;

  return 1;
}
