const perf = require('execution-time')();

let lineIterations = 0;
let quadIterations = 0;

function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}





const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);





// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();        // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();

console.log([1, 2, 3, -2]);
function addToZero (num){
    if(num < 2){
        return true;
    } else {
        re

function findUniqueChars() {
    if(hasUniqueChars == moonday){
        return true;
    } else if (hasUniqueChars == moonday){
        return false;
    }
}


function hasSumToZero(numbers) {
    const visited = new Set();
  
    for (let i = 0; i < numbers.length; i++) {
      const currentNumber = numbers[i];
      
      if (visited.has(-currentNumber)) {
        return true;  // Found two numbers that sum to 0
      }
  
      visited.add(currentNumber);
    }
  
    return false;  // No two numbers sum to 0
  }
  


  console.log(hasSumToZero([]));                     // Output: false
  console.log(hasSumToZero([1]));                    // Output: false
  console.log(hasSumToZero([1, 2, 3]));              // Output: false
  console.log(hasSumToZero([1, 2, 3, -2]));          // Output: true
  console.log(hasSumToZero([-1, 2, 3, -2]));         // Output: true
  console.log(hasSumToZero([1, 2, -3, 4, -5]));      // Output: true
  console.log(hasSumToZero([1, 2, 3, 4, 5]));        // Output: false
  







console.log([hi, hell0])
function isPangram(sentence) {
    // Convert the sentence to lowercase for case-insensitive comparison
    sentence = sentence.toLowerCase();
  
    // Create a Set to store the unique letters in the sentence
    const letters = new Set();
  
    // Iterate through each character in the sentence
    for (let char of sentence) {
      // Check if the character is an alphabet letter
      if (/[a-z]/.test(char)) {
        // Add the lowercase letter to the Set
        letters.add(char);
      }
    }
  
    // Check if the Set of letters contains all 26 English alphabet letters
    return letters.size === 26;
  }

  
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));  // Output: true
console.log(isPangram("I like cats, but not mice"));                      // Output: false


console.log([hi, hello]); 

    function findLongestWord(words) {
        let longestLength = 0;
      
        for (let i = 0; i < words.length; i++) {
          if (words[i].length > longestLength) {
            longestLength = words[i].length;
          }
        }
      
        return longestLength;
      }
      

const wordList = ["apple", "banana", "orange", "watermelon"];
console.log(findLongestWord(wordList));  // Output: 10
        

console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
