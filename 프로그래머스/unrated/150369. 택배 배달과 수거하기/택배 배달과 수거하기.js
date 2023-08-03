function solution(cap, n, deliveries, pickups) {
  let dis = 0;

  while (deliveries.length || pickups.length) {
    while (deliveries.length && !deliveries[deliveries.length - 1]) {
      deliveries.pop();
    }

    while (pickups.length && !pickups[pickups.length - 1]) {
      pickups.pop();
    }

    let [dTemp, pTemp] = [0, 0];

    dis += Math.max(deliveries.length, pickups.length) * 2;

    while (dTemp <= cap) {
      const del = deliveries.pop();
      dTemp += del;
    }

    if (dTemp - cap > 0) deliveries.push(dTemp - cap);

    while (pTemp <= cap) {
      const pick = pickups.pop();
      pTemp += pick;
    }

    if (pTemp - cap > 0) pickups.push(pTemp - cap);
  }

  return dis;
}