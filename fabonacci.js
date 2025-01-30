let number = 5;

function fibonacci(number) {
  let result;
  let number1 = 0;
  let number2 = 1;
  if (number === 1) {
    return number1;
  } else if (number === 2) {
    return number2;
  } else {
    for (let i = 3; i <= number; i++) {
      result = number1 + number2;
      number1 = number2;
      number2 = result;
    }
    return number2;
  }
}
console.log(fibonacci(8));
