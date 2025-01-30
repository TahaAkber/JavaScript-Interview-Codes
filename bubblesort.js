let array = [4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let number = false;
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        number = true;
      }
    }
    if (number) {
      console.log("Sorted array: " + array);
    }
  }
}

bubbleSort(array);
