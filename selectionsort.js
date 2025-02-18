let array = [2, 8, 5, 3, 9, 4, 1];

function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallestIndex]) {
        smallestIndex = j;
      }
    }
    if (smallestIndex !== i) {
      swap(array, i, smallestIndex);
    }

    console.log(array);
  }
  return array;
}

selectionSort(array);
