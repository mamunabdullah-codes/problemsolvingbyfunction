for (let count = 0; count <= 10; count++) {
  console.log(count);
}

// Writing our first function

function forLoop(countStart, countEnd) {
  for (let count = countStart; count <= countEnd; count++) {
    console.log(count);
  }
}

// forLoop(20, 30);
forLoop(20, 30);

// Write a function that prints you name

function userNameGenerator(
  firstName = "enter first name",
  lastName = "last Name",
  age = 20
) {
  console.log(`User Name is ${firstName} ${lastName} and his age is ${age}`);
}

// userNameGenerator("Sujon", "WP");
// userNameGenerator("Jamal", "Hossain");
userNameGenerator("Shakib", "Al Hasan", 40);

function randomDice() {
  let randomNumber = Math.random();
  console.log("Roll a dice : ", Math.floor(randomNumber * 6) + 1);
}

randomDice();
randomDice();
randomDice();
randomDice();
randomDice();
randomDice();
randomDice();
randomDice();
randomDice();

// condition

// Practice problem solving using only function

// 1. find the maximum between two numbers (num1 and num2)
function maxNumber(num1, num2) {
  if (num1 < num2) {
    console.log("Max between two numbers is ", num2);
  } else {
    console.log("Max between two numbers is ", num1);
  }
}
maxNumber(3, 6);

// 2. find a maximum between three numbers
function maxThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log("Max between three numbers is ", num1);
  } else if (num2 > num3) {
    console.log("Max between three numbers is ", num2);
  } else {
    console.log("Max between three numbers is ", num3);
  }
}

maxThree(505, 56, 96);

// 3. Check whether a number is negative, positive or zero.

function checkNumber(number) {
  if (number === 0) {
    console.log("Ans-3: The Number is: Zero");
  } else if (number > 0) {
    console.log("Ans-3: The Number is: Positive");
  } else {
    console.log("Ans-3: The Number is: Negative");
  }
}

checkNumber(-100);

// 4. Check whether a number is divisible by 10 or not.

function divisibility(divisibleNumber) {
  if (divisibleNumber % 10 === 0) {
    console.log("The Number is Divisible by 10");
  } else {
    console.log("The Number is not Divisible by 10");
  }
}

divisibility(25);

// 5. Check whether a number is even or odd.
function checkEvenOdd(givenNumber) {
  if (givenNumber % 2 === 0) {
    console.log("The Number is Even");
  } else {
    console.log("The Number is Odd");
  }
}

checkEvenOdd(26);

// 6. check whether a character is in the alphabet or not.

let word = "Pineapple".toLowerCase();
let searchAlphabet = "L";
let lowerSearchAlphabet = searchAlphabet.toLowerCase();

console.log(word.indexOf(searchAlphabet.toLowerCase()));

function checkLetter(lowerSearchAlphabet) {
  if (word.indexOf(lowerSearchAlphabet) !== -1) {
    console.log("The searched Alphabet : ", searchAlphabet, "is found");
  } else {
    console.log("The searched Alphabet : ", searchAlphabet, "is not found");
  }
}

checkLetter(lowerSearchAlphabet);

// 7. check whether the temperature is hot, cold or normal.

function weather(temperature) {
  if (temperature >= 40) {
    console.log("The Weather is extreme hot");
  } else if (temperature >= 30) {
    console.log("The Weather is somehow hot");
  } else if (temperature <= 25) {
    console.log("The Weather is cold");
  } else {
    console.log("The Weather is normal");
  }
}
weather(30);

// 8. find the total marks, average of 3 subjects and average grade.

// If Percentage >= 90% then print “Grade A”
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

let mathMarks = 30;
let englishMark = 45;
let physicsMark = 40;

function total(mathMarks, englishMark, physicsMark) {
  let totalMarks = mathMarks + englishMark + physicsMark;
  console.log("Total marks: ", totalMarks);
}
total(30, 45, 40);

function average(mathMarks, englishMark, physicsMark) {
  let totalMarks = mathMarks + englishMark + physicsMark;
  let averageMarks = Math.round(totalMarks / 3);
  console.log("Average Marks: ", averageMarks);
}

average(70, 80, 90);

// Grading
function grading(mathMarks, englishMark, physicsMark) {
  let totalMarks = mathMarks + englishMark + physicsMark;
  let averageMarks = Math.round(totalMarks / 3);
  if (averageMarks >= 80) {
    console.log("The Grade is : A+");
  } else if (averageMarks >= 70) {
    console.log("The Grade is : A");
  } else if (averageMarks >= 60) {
    console.log("The Grade is : A-");
  } else if (averageMarks >= 50) {
    console.log("The Grade is : B");
  } else if (averageMarks >= 40) {
    console.log("The Grade is : C");
  } else if (averageMarks >= 33) {
    console.log("The Grade is : D");
  } else if (averageMarks < 33) {
    console.log("The Grade is : F");
  }
}

grading(75, 80, 90);

// 9.	Find the random number between 1 to 10
function random() {
  let randomNumber = Math.random();
  console.log("Random Number is : ", Math.floor(randomNumber * 10) + 1); //
}
random();

// 10. for loop where it prints out the even number only between number 10 to 50.

function evenLoop(countStart, countEnd) {
  for (let count = countStart; count <= countEnd; count++) {
    if (count % 2 === 0) {
      console.log("Even Number: ", count);
    }
  }
}
evenLoop(10, 50);

// 11. Using string.indexOf search for a word if it is present in a sentence variable or not.

function findWord(searchFor = "A") {
  let sentence = "A Quick Brown Fox Jumped Over The Lazy Dog".toLowerCase();
  let searchWord = searchFor;
  let lowerSearchWord = searchWord.toLowerCase();
  if (sentence.indexOf(lowerSearchWord) !== -1) {
    console.log("The searched word : ", searchWord, "is found");
  } else {
    console.log("The searched word : ", searchWord, "is not found");
  }
}

findWord("LaZy");

// 12. Using string.includes method search for a word if it is present in a sentence variable or not.

function searchByIncludes(searchFor) {
  let sentence = "A Quick Brown Fox Jumped Over The Lazy Dog".toLowerCase();
  let searchWord = searchFor;
  let lowerSearchWord = searchFor.toLowerCase();
  if (sentence.includes(lowerSearchWord)) {
    console.log("The searched word", searchWord, "is found");
  } else {
    console.log("Ans 12: The searched word", searchWord, "is not found");
  }
}

searchByIncludes("lazy");

// 13. Slice a sentence of 50 words and show only the first 40 index of the sentence using string.slice method and …. At the console.log

function slice(sliceFrom, sliceTo) {
  let theSentence =
    "In a delicious pizza, the slice method allows you to choose precisely how big or small a piece you want, just like JavaScript's slice method lets you extract specific portions of an array, ensuring you get exactly what you need.";

  let sliceSentence = theSentence.slice(sliceFrom, sliceTo);
  console.log("The sliced part  is:", sliceSentence);
}

slice(0, 70);
