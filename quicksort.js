function quicksort(array) {
  if (array.length < 2) {
    return array;
  }
  let pivot = array[array.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return [...quicksort(left), pivot, ...quicksort(right)];
}

let array = [-2, 4, 5, 6, 1, 2];

console.log(quicksort(array));
