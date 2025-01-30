let str = "CIVIC";
let bool = false;

function isPallindrom(str) {
  let j = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[j]) {
      bool = true;
    }
    j--;
  }
  if (bool) {
    console.log("Given Word is Pallindrom");
  } else {
    console.log("Given Word is Not Pallindrom");
  }
}

console.log(isPallindrom(str));
