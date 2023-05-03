function solution(sequence, k) {
  let start = 0;
  let end = 0;
  let sum = sequence[0];
  let shortest = [0, sequence.length];

  while (end < sequence.length) {
    if (sum === k) {
      if (end - start < shortest[1] - shortest[0]) {
        shortest = [start, end];
      }
      sum -= sequence[start];
      start++;
    } else if (sum < k) {
      end++;
      sum += sequence[end];
    } else {
      sum -= sequence[start];
      start++;
    }
  }

  return shortest;
}
