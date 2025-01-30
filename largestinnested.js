let array = [
  [2, 3, 4],
  [5, 2, 4, 1],
  [6, 78, 4],
  [1, 24, 51, 16],
  [2, 10, 100, 5, 2],
];
let max = 0;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < i; j++) {
    if (max < array[i][j]) {
      max = array[i][j];
    }
  }
}

console.log(max);
