var questionsArray = [
  {
      questionText: "Which one is not a Property to adjust positioning on html elements?",
      quizOptions: {
          A: "Float",
          B: "R-Index",
          C: "Position",
          D: "Clear"
      },
      questionAnswer: "B"
  },
  {
    questionText: "Which of the following methods are not acceptable to Specified Colors in Css?",
    quizOptions: {
        A: "Hexadecimal Colors ",
        B: "RGB/RGBA Colors",
        C: "Corsiar Colors",
        D: "using the Color keyword"
    },
    questionAnswer: "C"
  },
  {
    questionText: "Which Value belongs with the Position property?",
    quizOptions: {
        A: "Shock",
        B: "Pothole",
        C: "Introvert",
        D: "Static"
    },
    questionAnswer: "D"
  },
  {
    questionText: "What are the 3 Values for Text-align?",
    quizOptions: {
        A: "Left, Right, UP",
        B: "Up, Center, Down",
        C: "Hover, Middle, Under",
        D: "Left, Right, Center"
    },
    questionAnswer: "D"
  },
  {
    questionText: "Which tag would produce the biggest Headline in HTML?",
    quizOptions: {
        A: "//RIP JAVA!",
        B: "<h1>",
        C: "<h3>",
        D: "<p>"
    },
    questionAnswer: "B"
},];

var quizOptions ={
    totalScore: 0,
    questionIndex: 0,
    correctCount: 0,
};

var questionText = document.querySelector("#questions-text");
var questionsContiner = document.querySelector("#questions")


//we have a first question
//when the question is answered it will either be the correct answer, or not.
//when the answer is correct, the totalScore will go up by 10 and the correctCount go up by 1
//when the answer is correct, the totalScore will go down by 5 and the correctCount will stay the same
//whether the question is right or wrong, the questionIndex will go up by one
function gameOver() {
    questionsContiner.innerHTML = "";
    var gameOver
    alert(
        quizOptions.totalScore + "You are " + quizOptions.correctCount + " out of " + questionsArray.length); 

function generateQuestion(){
    if(quizOptions.questionIndex === questionsArray.length -1) {
        gameOver();
        return;
    }

    var question = questionsArray[quizOptions.questionIndex]
    questionText.textContent = question.question;
    for(i=0;i< question.anwers.length; i++){
        var questionAnswer = document.createElement("p")
        questionAnswer.textContent = question.anwers[i].answer;
        question.classList.add("green");
        questionAnswer.setAttribute("data-value", quastion.anwers[1].correct);
        questionsContiner.append(questionAnswer);
    }
}


generateQuestion();

function checkAnswer(answer) {
    console.log(answer === "true");
    if (answer) {
        quizOptions.totalScore = quizOptions.totalScore + 10;
        quizOptions.correctCount++;
    }else{
        quizOptions.totalScore = quizOptions.totalScore - 5;
    }
    console.log(quizOptions.totalScore);
    console.log(quizOptions.correctCount);
}

questionsContiner.addEventListener("click", function(event) {
    var correctAnswer = event.target.getAttribute("data-value");

    alert(correctAnswer + " " + quizOptions.totalScore);
    quizOptions.questionIndex++;
    questionsContiner.innerHTML = "";
    generateQuestion();
});
}