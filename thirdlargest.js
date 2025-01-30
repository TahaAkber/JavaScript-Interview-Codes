function thirdlargest(array) {
  let max = 0;
  let second = 0;
  let third = 0;
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  console.log(max, "max");

  for (let i = 0; i < array.length; i++) {
    if (second < array[i] && array[i] < max) {
      second = array[i];
    }
  }
  console.log(second, "second");

  for (let i = 0; i < array.length; i++) {
    if (third < array[i] && array[i] < second) {
      third = array[i];
    }
  }
  console.log(third, "third");
}

thirdlargest([5, 10, 15, 20, 30]);
