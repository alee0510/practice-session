// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// assumsion: array unsorted
function arrToStatistic(arr = []) {
  // loop througth an input array (Bubble Sort)
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // swap
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // calculate average
  let total = 0;
  let average = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  average = Math.round(total / arr.length);

  return `Lowest: ${arr[0]}, Highest: ${
    arr[arr.length - 1]
  }, Average: ${average}`;
}

const statistic = arrToStatistic([50, 95, 60, 80, 70, 100, 90, 85]);
console.log(statistic);

// built-in method
// const inputArray = [50, 95, 60, 80, 70, 100, 90, 85]
// const sortedArray = inputArray.sort((a, b) => a - b);
// const lowest = sortedArray[0];
// const highest = sortedArray[sortedArray.length - 1];
// const total = sortedArray.reduce((acc, curr) => acc + curr, 0);
// const average = Math.round(total / sortedArray.length);

// console.log(`Lowest: ${lowest}, Highest: ${highest}, Average: ${average}`);

// Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
function stringConcat(arr = []) {
  let output = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      output += `and ${arr[i]}`;
      continue;
    }
    output += `${arr[i]}, `;
  }
  return output;
}

const resultString = stringConcat(["apple", "banana", "orange", "grape"]);
console.log(resultString);

// Write a function from a given array of numbers and return the second smallest number
function secondSmallest(arr = []) {
  let minIndex;
  for (let j = 0; j < 2; j++) {
    minIndex = j;
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
  }
  return arr[minIndex];
}

const resultSecondSmallest = secondSmallest([50, 95, 60, 80, 70, 100, 90, 85]);
console.log(resultSecondSmallest);

// Write a function to find duplicate values in an array
function findDuplicate(arr = []) {
  const output = [];
  let duplicate;

  // loop through an array
  for (let i = 0; i < arr.length - 1; i++) {
    duplicate = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (duplicate === arr[j]) {
        let alreadyExist = false;
        for (let k = 0; k < output.length; k++) {
          if (duplicate === output[k]) {
            alreadyExist = true;
            break;
          }
        }
        if (!alreadyExist) {
          output.push(duplicate);
        }
      }
    }
  }

  return output;
}

const resultDuplicate = findDuplicate([1, 2, 3, 2, 2, 4, 1, 5, 5, 5, 5, 6]);
console.log(resultDuplicate);

// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor.
function rockPaperScissor(player) {
  const computer = Math.floor(Math.random() * 3) + 1; // 1, 2, 3
  console.log(computer);
  let result;

  if (player === computer) {
    result = "Draw";
  } else if (
    (player === 1 && computer === 3) ||
    (player === 2 && computer === 1) ||
    (player === 3 && computer === 2)
  ) {
    result = "Win";
  } else {
    result = "Lose";
  }

  return result;
}

// 1 = rock
// 2 = paper
// 3 = scissor
const resultGame = rockPaperScissor(2);
console.log(resultGame);
