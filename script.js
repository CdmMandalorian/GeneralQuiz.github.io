var questionsArray = [
    {
        question: "Which one is not a Property to adjust positioning on html elements?",
        
        answers: [
            
            {
                
                id: 1,
                
                answer: "Float",
                
                correct: false,
           
            },
           
            {
                
                id: 2,
                
                answer: "P-Index",
                
                correct: true,
            
            },
            
            {
               
                id: 3,
                
                answer: "Clear",
                
                correct: false,
            
            },
            
            {
               
                id: 4,
                
                answer: "Display",
                
                correct: false,
           
            },
       
        ],
    
    },
    
    {
       
        question: "How do you select a single element regardless of their ID or Class",
       
        answers: [
            
            {
                
                id: 1,
                
                answer: "querySelect",
                
                correct: false,
          
            },
           
            {
                
                id: 2,
               
                answer: "querySelectorAll",
                
                correct: false,
          
            },
           
            {
                
                id: 3,
               
                answer: "querySelector",
               
                correct: true,
           
            },
           
            {
                
                id: 4,
               
                answer: "addSelectorbtn",
                
                correct: false,
           
            },
       
        ],
   
    },
   
    {
        
        question: "Which Value belongs with the Position Property?",
        
        answers: [
            
            {
                
                id: 1,
                
                answer: "Static",
               
                correct: true,
           
            },
            
            {
                
                id: 2,
                
                answer: "Shock",
                
                correct: false,
            
            },
            
            {
                
                id: 3,
                
                answer: "Introvert",
                
                correct: false,
            
            },
            
            {
               
                id: 4,
                
                answer: "Retrovert",
                
                correct: false,
           
            },
        
        ],
   
    },
    
    {
        
        question: "What does DOM stand for?",
        
        answers: [
           
            {
               
                id: 1,
                
                answer: "Document Object Model",
                
                correct: true,
           
            },
            
            {
                
                id: 2,
                
                answer: "Development Overall Maximuss",
                
                correct: false,
            
            },
           
            {
               
                id: 3,
                
                answer: "Deep Occultic Music ",
                
                correct: false,
            
            },
            
            {
                
                id: 4,
                
                answer: "Direct Order Media",
               
                correct: false,
            
            },
        
        ],
    
    },
    
    {
        
        question: "With wich array method, can you remove the last element",
       
        answers: [
            
            {
               
                id: 1,
                
                answer: "Snack",
                
                correct: false,
           
            },
           
            {
                
                id: 2,
                
                answer: "Snap",
               
                correct: false,
           
            },
           
            {
               
                id: 3,
               
                answer: "Crackle",
                
                correct: false,
           
            },
            
            {
               
                id: 4,
                
                answer: "Pop",
                
                correct: true,
            
            },
        
        ],
    
    },

],    

var quizOptions = {
   
    totalScore: 0,
    
    questionIndex: 0,
   
    correctCount: 0,

};

var questionTextOutput = document.querySelector("#question-text");

var questionsContainer = document.querySelector("#questions");

function gameOver() {

    questionsContainer.innerHTML = "";

    var gameOver

    alert(

        quizOptions.totalScore + "You are " + quizOptions.correctCount + " out of " + questionsArray.length)};

    function generateQuestion() {
        
        if (quizOptions.questionIndex === questionsArray.length - 1) {
            
            gameOver();
            
            return;
        
        }
        
        var question = questionsArray[quizOptions.questionIndex]
        
        console.log(question);
        
        questionTextOutput.textContent = question.question;
        
        for (i = 0; i < question.answers.length; i++) {
            
            var questionAnswer = document.createElement("p")
            
            questionAnswer.textContent = question.answers[i].answer;
            
            questionAnswer.classList.add("green");
            
            questionAnswer.setAttribute("data-value", quastion.answers[1].correct);
            
            questionsContainer.append(questionAnswer);
        
        }
    
    }

    generateQuestion();

    function checkAnswer(answer) {

        console.log(answer);
        
        if (4 === "4") {
    
        console.log("What?");

        }
    
        if (answer === "true") {
    
            quizOptions.totalScore = quizOptions.totalScore + 10;
    
            quizOptions.correctCount++;
    
        } else {
    
            quizOptions.totalScore = quizOptions.totalScore - 5;
    
        }
    
        console.log(quizOptions.totalScore);
    
        console.log(quizOptions.correctCount);
    
    }

    questionsContainer.addEventListener("click", function (event) {
    
        var correctAnswer = event.target.getAttribute("data-value");
    
        checkAnswer(correctAnswer);
    
        alert(correctAnswer);
    
        quizOptions.questionIndex++;
    
        questionsContainer.innerHTML = "";
    
        generateQuestion();
    
    });