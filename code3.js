//Your task is to write a function getUniqueNumbers() that takes an array of integers (representing different stamps in Max’s collection) and returns a new array with only the unique stamps.

function main() {
    var nums = readLine().split(" ").map(x => parseInt(x));
    console.log(getUniqueNumbers(nums));
}

function getUniqueNumbers(numbers) {

    const uniqueNumbers = [];
  numbers.forEach(number => {
    if (!uniqueNumbers.includes(number)) {
      uniqueNumbers.push(number);
    }
  });
  return uniqueNumbers;
}
