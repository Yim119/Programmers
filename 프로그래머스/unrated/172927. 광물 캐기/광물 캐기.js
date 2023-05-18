// 채굴
function mineMinerals(picks, sortedMinerals) {
  let dia = picks[0];
  let iron = picks[1];
  let stone = picks[2];
  let fatigue = 0;

  // dia
  while (dia > 0 && sortedMinerals.length) {
    sortedMinerals[0].map((minerals) => {
      fatigue += 1;
    });
    dia -= 1;
    sortedMinerals.shift();
  }

  // iron
  while (iron > 0 && sortedMinerals.length) {
    sortedMinerals[0].map((minerals) => {
      if (minerals === 25) {
        fatigue += 5;
      } else {
        fatigue += 1;
      }
    });
    iron -= 1;
    sortedMinerals.shift();
  }

  // stone
  while (stone > 0 && sortedMinerals.length) {
    sortedMinerals[0].map((minerals) => {
      if (minerals === 25) {
        fatigue += 25;
      } else if (minerals === 5) {
        fatigue += 5;
      } else {
        fatigue += 1;
      }
    });
    stone -= 1;
    sortedMinerals.shift();
  }

  return fatigue;
}

// 광물 정렬
function sortMinerals(picks, minerals = []) {
  let sortedMinerals = [];

  while (minerals.length > 0) {
    let arr = [];

    const length = Math.min(5, minerals.length);

    for (let i = 0; i < length; i++) {
      if (minerals[i] === "diamond") {
        arr.push(25);
      } else if (minerals[i] === "iron") {
        arr.push(5);
      } else {
        arr.push(1);
      }

      if (i === length - 1) {
        sortedMinerals.push(arr);
        minerals.splice(0, i + 1);
        break;
      }
    }
  }

  const endPoint = sortedMinerals.length - (picks[0] + picks[1] + picks[2]);

  if (endPoint < sortedMinerals.length) {
    for (let i = 0; i < endPoint; i++) {
      sortedMinerals.pop();
    }
  }

  sortedMinerals.sort((a, b) => {
    let sumA = a.reduce((acc, cur) => acc + cur, 0);
    let sumB = b.reduce((acc, cur) => acc + cur, 0);
    if (sumA >= sumB) {
      return -1;
    } else {
      return 1;
    }
  });

  return sortedMinerals;
}

// 결과값 출력
function solution(picks, minerals) {
  const answer = mineMinerals(picks, sortMinerals(picks, minerals));

  return answer;
}
