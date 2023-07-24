function solution(numbers) {
  const arr = numbers.map((e) => -1);

  for (let i = numbers.length - 1; i >= 0; i--) {
    for (let j = i + 1; j <= numbers.length - 1; j++) {
      if (numbers[i] < numbers[j]) {
        arr[i] = numbers[j];
        break;
      }
      if (numbers[i] < arr[j]) {
        arr[i] = arr[j];
        break;
      }
      if (numbers[i] >= numbers[j] && arr[j] === -1) {
        arr[i] = -1;
        break;
      }
    }
  }

  return arr;
}
