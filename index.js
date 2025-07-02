// Write a code to check whether a string is a palindrome or not.
const word = "madam"; // madam, level, racecar
let isPalindrom = false;
const loop = word.length / 2;

for (let i = 0; i < loop; i++) {
  if (word[i] !== word[word.length - i - 1]) {
    isPalindrom = false;
    break;
  }
  isPalindrom = true;
}

console.log(`${word} is palindrom?`, isPalindrom);

// Write a code to format number as currency (IDR)
// Alternative 01
let currentCurrencyInString = String(123400);
let convertedCurrencyInIDR = "";

if (currentCurrencyInString.length < 3) {
  convertedCurrencyInIDR += currentCurrencyInString + ",00";
} else {
  while (currentCurrencyInString.length > 3) {
    convertedCurrencyInIDR =
      "." + currentCurrencyInString.slice(-3) + convertedCurrencyInIDR;
    currentCurrencyInString = currentCurrencyInString.slice(0, -3);
  }
}
console.log(`Rp. ${currentCurrencyInString}${convertedCurrencyInIDR},00`);

// Alternative 02
for (let i = 0; i < Math.ceil(currentCurrencyInString.length / 3); i++) {
  // add 3 digits from behind
  let digit = currentCurrencyInString.length - i * 3;
  if (digit <= 3) {
    convertedCurrencyInIDR = `Rp. ${currentCurrencyInString.slice(
      0,
      digit
    )}${convertedCurrencyInIDR},00`;
    break;
  }
  convertedCurrencyInIDR =
    "." +
    currentCurrencyInString.slice(digit - 3, digit) +
    convertedCurrencyInIDR;
}
console.log(convertedCurrencyInIDR);

// Write a code to capitalize the first character of a string
let myString = "hello  world";
let toCapitalize = myString[0].toUpperCase();
for (let i = 1; i < myString.length; i++) {
  if (myString[i - 1] === " " && myString[i] !== " ") {
    toCapitalize += myString[i].toUpperCase();
  } else {
    toCapitalize += myString[i];
  }
  //   toCapitalize += (myString[i - 1] === " " && myString[i] !== " ") ? myString[i].toUpperCase() : myString[i];
}
console.log(myString);

// Write a code to swap the case of each character from string
let intString = "The QuiCk BrOwN Fox";
let finalString = "";

for (let i = 0; i < intString.length; i++) {
  // check if string is Uppercase
  if (intString[i] === intString[i].toUpperCase()) {
    finalString += intString[i].toLowerCase();
  } else {
    finalString += intString[i].toUpperCase();
    //   finalString += (intString[i] === intString[i].toUpperCase()) ? intString[i].toLowerCase() : intString[i].toUpperCase();
  }
}
console.log(finalString);
