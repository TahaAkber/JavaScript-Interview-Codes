function isprime(number) {
  let flag = 0;
  if (number <= 1) {
    return;
  }
  for (i = 2; i < number; i++) {
    if (number % i == 0) {
      flag++;
    }
  }

  if (flag == 1) {
    console.log("Number is Not prime", number);
  } else {
    console.log("Number is prime", number);
  }
}
isprime(11);
