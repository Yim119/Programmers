const start = (plans) => {
  let plansA = plans.map((i) => {
    const [hourStr, minuteStr] = i[1].split(":");
    const hour = parseInt(hourStr);
    const minute = parseInt(minuteStr);
    const time = hour * 60 + minute;
    return [i[0], time, parseInt(i[2])];
  });
  return plansA.sort((a, b) => a[1] - b[1]);
};

const end = (arr) => {
  let pause = [];
  let complete = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      complete.push(arr[i][0]);
      break;
    }
    let first = arr[i];
    let next = arr[i + 1];
    let gap = next[1] - first[1];
    let remain = gap - first[2];

    if (gap === first[2]) {
      complete.push(first[0]);
    } else if (gap < first[2]) {
      pause.push([first[0], first[2] - gap]);
    } else {
      complete.push(first[0]);

      while (pause.length && remain) {
        let latest = pause.pop();

        if (remain >= latest[1]) {
          complete.push(latest[0]);
          remain -= latest[1];
        } else {
          latest[1] -= remain;
          pause.push(latest);
          remain = 0;
        }
      }
    }
  }
  while (pause.length) {
    complete.push(pause.pop()[0]);
  }

  return complete;
};

function solution(plans) {
  return end(start(plans));
}
