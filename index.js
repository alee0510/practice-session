// // find nth value of fibonancci
// // 0, 1, 1, 2, 3, 5, ..
// let nthFibonancci = 1; // 610
// let firstNumber = 0;
// let secondNumber = 1;
// let result = 1;
// for (let i = 1; i < nthFibonancci; i++) {
//   result = firstNumber + secondNumber;
//   console.log(`result ${i}-th: `, result);
//   firstNumber = secondNumber;
//   secondNumber = result;
// }

// while (nthFibonancci > 0) {
//   result = firstNumber + secondNumber;
//   console.log(`result ${nthFibonancci}-th: `, result);
//   firstNumber = secondNumber;
//   secondNumber = result;
//   nthFibonancci--;
// }

// console.log(result);

// let isNull = undefined ?? "is undefined";
// console.log(isNull)

// let trueValue = true
// if (trueValue) {
//     console.log("true")
// } else {
//     console.log("false")
// }

// let anotherTrueValue = 0 ? true : false;
// let anotherAnotherTrueValue = 1 && "true" || "false";
// console.log(anotherTrueValue)
// console.log(anotherAnotherTrueValue)

let result = 0 || 1
console.log(result)

