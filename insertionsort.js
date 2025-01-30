array = [4, 2, 3, 4, 5, 1];

function insertionsort(array) {
  for (let i = 1; i < array.length; i++) {
    let smallestindex = array[i];
    let j = i - 1;
    while (j >= 0 && array[j - 1] > smallestindex) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = smallestindex;
  }
}
