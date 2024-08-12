"use strict";
const calcRatio = (arr) => {
  let positive = 0,
    negative = 0,
    zero = 0;

  const arrLength = arr.length;

  arr.forEach((element) => {
    if (element > 0) positive++;
    else if (element < 0) negative++;
    else zero++;
  });

  console.log(
    `${(positive / arrLength).toFixed(6)}\n${(negative / arrLength).toFixed(
      6
    )}\n${(zero / arrLength).toFixed(6)}`
  );
};

//test case
calcRatio([5, 9, 2, 60, 0, 0, 0, -8, -9, -5, -5, 5]);
