// Array
const myValue = [];
myValue[0] = 1;
myValue[1] = 2;
myValue[2] = 3;
// myValue = "String"
// myValue = myValue + "String";
console.log(myValue);

const myArray = new Array(5); // [,,,,,,]
myArray[0] = "1";
myArray[1] = "2";
myArray[2] = "3";
myArray[3] = "4";
myArray[4] = "5";
console.log(myArray);

// important built in method
myArray.push("6"); // add value to the last index
myArray.push("7");
myArray.unshift("0"); // add value to the first index
myArray.pop(); // remove value from the last index
myArray.shift(); // remove value from the first index
console.log(myArray);

const animals = ["ant", "bison", "camel", "duck", "elephant"];
for (let i = 0; i < animals.length; i++) {
  animals[i] = animals[i].toUpperCase();
  console.log(animals[i]);
}
// for in
for (let i in animals) {
  animals[i] = animals[i].toLowerCase();
  console.log(animals[i]);
}
console.log(animals);

// built in method for looping
animals.forEach((animal, i) => {
  console.log(animal, i);
  animals[i] = animal.toLowerCase();
});
console.log(animals);

// built in method for filtering
const filteredAnimals = animals.filter((animal) => {
  return animal.length > 4;
});
console.log(filteredAnimals);

// built in method for mapping
const mappedAnimals = animals.map((animal) => {
  return animal.toUpperCase();
});
console.log(mappedAnimals);

// example
const oddNumbers = [1, 3, 5, 7, 9];
console.log(oddNumbers.length);
oddNumbers[10] = 11;
console.log(oddNumbers.length);
console.log(oddNumbers);
console.log(oddNumbers[6]);
oddNumbers[6] = 13;
console.log(oddNumbers);

// function, wrapper
// with function, Write a code to check whether a string is a palindrome or not.
function isPalindrome(word = "") {
  let isPalindrom = false;
  const loop = word.length / 2;

  for (let i = 0; i < loop; i++) {
    if (word[i] !== word[word.length - i - 1]) {
      isPalindrom = false;
      break;
    }
    isPalindrom = true;
  }
  // console.log(`${word} is palindrome? ${isPalindrom}`);
  // return
  return isPalindrom;
}

// isPalindrome();
// isPalindrome("katak");
// isPalindrome("level");
// isPalindrome("kata");
// isPalindrome("katakata");
// console.log(isPalindrome("madam"));
const isTrue = isPalindrome("katak");
console.log(isTrue);

// function is a value
// Write a code to capitalize the first character of a string
const capitalizeString = function (str = "") {
  let toCapitalize = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " " && str[i] !== " ") {
      toCapitalize += str[i].toUpperCase();
    } else {
      toCapitalize += str[i];
    }
  }
  console.log(toCapitalize);
};

capitalizeString("hello world");

// arrow function
const arrowFunctionExample = (str = "") => {
  let toCapitalize = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " " && str[i] !== " ") {
      toCapitalize += str[i].toUpperCase();
    } else {
      toCapitalize += str[i];
    }
  }
  console.log(toCapitalize);
  return toCapitalize;
};
const resultOfArrowFunction = arrowFunctionExample();

// callback function
function callbackFunctionExample(str = "", callback = () => {}) {
  let toCapitalize = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " " && str[i] !== " ") {
      toCapitalize += str[i].toUpperCase();
    } else {
      toCapitalize += str[i];
    }
  }
  callback(toCapitalize);
}
callbackFunctionExample("hello world", (result) => {
  console.log(result);
});

// function that can create a triangle pattern
function createATriangle(height = 0) {
  let output = "";
  let trackedNumber = 0;
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
      trackedNumber++;
      output += `${trackedNumber < 10 ? "0" + trackedNumber : trackedNumber} `;
    }
    if (i < height) {
      output += "\n";
    }
  }
  return output;
}

const result = createATriangle(4);
console.log(result);

// Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
function fizzBuzz(number = 0) {
  let output = "";
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output += "FizzBuzz";
    } else if (i % 3 === 0) {
      output += "Fizz";
    } else if (i % 5 === 0) {
      output += "Buzz";
    } else {
      output += `${i}`;
    }

    if (i < number) {
      output += ",";
    }
  }
  return output;
}

const resultFizzBuzz = fizzBuzz(15);
console.log(resultFizzBuzz);

// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only\
function removeOddNumberFromAnArray(arr = []) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      output.push(arr[i]);
    }
  }

  // for (let i in arr) {
  //   if (arr[i] % 2 === 0) {
  //     output.push(arr[i]);
  //   }
  // }

  // arr.forEach((num) => {
  //   if (num % 2 === 0) {
  //     output.push(num);
  //   }
  // });

  return output;
}

const resultRemoveOddNumber = removeOddNumberFromAnArray([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
]);
console.log(resultRemoveOddNumber);

// Write a function to split a string and convert it into an array of words
// hello world
function splitStringIntoArray(str = []) {
  const output = [];
  let word = "";
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === " " || i === str.length) {
      output.push(word);
      word = "";
      continue;
    }
    word += str[i];
  }
  return output;
}

const resultSplitString = splitStringIntoArray("Hello World");
console.log(resultSplitString);
