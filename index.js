var readlineSync = require('readline-sync');
console.log(" ");
console.log("       CRICKET QUIZ")
console.log(" ");
console.log(" ");
var userName = readlineSync.question("What is your Name?   ")
console.log(" ");
console.log(" ");
console.log("Welcome " + userName);
console.log(" ");
console.log("Let's Check Your CRICKET Knowledge");
console.log(" ");
console.log(" ");
console.log("---------------------------------------")
console.log("Rules Of This Quiz ");
console.log("You can Only Answer in 'y' & 'n' for Yes and No");
console.log("---------------------------------------")




console.log(" ");
console.log(" ");

var score = 0;


function quiz(question, answer) {
  var userAnswer = readlineSync.keyInYN(question)

  if (userAnswer === answer) {
    console.log(" ");
    console.log("Correct Answer")
    score = score + 2;

    console.log(" ");

  } else {
    console.log("Wrong Answer")

  }
  // console.log(answer);
  // console.log(userAnswer);
  console.log("Your score: " + score);
  console.log("---------------------------------------")
  console.log(" ")


}

var questionOne = {
  question: "Q1) Is India ever win T20 world cup",
  answer: true

}
var questionTwo = {
  question: "Q2) Is India win against Pakistan in T20 World Cup 2021",
  answer: false

}
var questionThree = {
  question: "Q3) Is India win against Pakistan in T20 World Cup 2022",
  answer: true

}

var questionFour = {
  question: "Q4) Is test match played for 6 day",
  answer: false

}

var questionFive = {
  question: "Q5) Is SuryaKumarYadav ever acheived T20 Ranking 1",
  answer: true

}
var questionSix = {
  question: "Q6) Is Sachin known as God Of Cricket",
  answer: true

}

var questionSeven = {
  question: "Q7) Is India win against England in T20 World Cup 2022",
  answer: false

}

var questionEight = {
  question: "Q8) Is MS Dhoni played WC2022 ?",
  answer: false

}

var questionNine = {
  question: "Q9) Is ViralKohli scored most run in  2022 World Cup?",
  answer: true

}

var questionTen = {
  question: "Q10) Is India played better than Pakistan in this WorldCup 2022",
  answer: true

}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer)
}


console.log("Your Total Score is " + score);
console.log(" ")



if (score < 3) {
  console.log("Your Cricket Knowledge is bad ")
} else if (score < 9) {
  console.log("Your knowledge is slightly more than those who dont know about Cricket")
} else if (score < 15) {
  console.log("Your Knowledge in Cricket is good but you need to little bit more focus ")
} else {
  console.log("Your Need to be expert because your knowledge in cricket is excellent")
}




