const miniMaxSum = (arr) => {
  let max = arr[0],
    min = arr[0],
    sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
    sum += arr[i];
  }

  const minSum = sum - max;
  const maxSum = sum - min;

  console.log(minSum, maxSum);
};

// breaking test
miniMaxSum([5, 5, 5, 5, 5]);
