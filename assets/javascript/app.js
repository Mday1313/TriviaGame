
$(document).ready(function () {

    // create variables or objects

    // object questions

    var triviaQuestions = [
        {
            question: "Which mountain range divides Spain and France?",            //     question
            choices: ["Andes", "Pyrenees", "Alps", "Sierra Nevada"],           //     possible answer array
            correct: "Pyrenees",              //     correct answer
            image: "../images/Pyrenees.png"                       //     corresponding answer gif
        },
        {
            question: "You are sailing the warm waters of the Atlantic, off the coast of West Africa and see glowing dolphins, what is most likely the cause?",
            choices: ["a radioactive spill", "someone spiked your drink with Peyote", "magic", "phosphorescent algae"],
            correct: "phosphorescent algae",
            image: "stuff"
        },
        {
            question: "Which Ecuadorian city is also a city in Spain?",
            choices: ["Quito", "Cuenca", "Montanita", "Guayaquil"],
            correct: "Cuenca",
            image: "stuff"
        },
        {
            question: "On which sea is Croatia located?",
            choices: ["Aegean", "Adriatic", "Ionian", "Tyrrhanian"],
            correct: "Adriatic",
            image: "stuff"
        },
        {
            question: "Where in Italy is the Via dell'Amore located?",
            choices: ["Cinque Terre", "Amalfi Coast", "Venice", "Verona"],
            correct: "Cinque Terre",
            image: "stuff"
        },
        {
            question: "How do sailors commonly refer to the Bay of Biscay due to high volume of rough seas?",
            choices: ["Rocks a Lot Bay", "Capsize Bay", "Bay of Dismay", "Bay of Lost Souls"],
            correct: "Bay of Dismay",
            image: "stuff"
        },
        {
            question: "Which famous archaeological site sits atop a massive plateau and overlooks the Dead Sea?",
            choices: ["Cliff Palace", "Mount Masada", "Machu Picchu", "Petra"],
            correct: "Cuenca",
            image: "stuff"
        },

    ];


    var timeRemaining = 5;
    var questionCounter = 0;
    var countDownId;
    var listItem = [];
    var correctAnswers = 0; 
    var wrongAnswers = 0;
    var unanswered = 0;
    var pickedAnswer;
var answerList = [];

    $(".start-btn")
        .text("Start Game").css("margin-top", "+" + 200 + "px")
        .click(function () { gameSetup(displayQuestion()); });

    function run() {
        clearInterval(countDownId);
        $(".timer-count").html("<h3>" + "Will self destruct in " + timeRemaining + "</h3>");

        countDownId = setInterval(decrement, 1000);

    }

    function decrement() {

        timeRemaining--;
        $(".timer-count").html("<h3>" + "Will self destruct in " + timeRemaining + "</h3>");
        // $(".time-count").text( "Will self destruct in " + timeRemaining );

        if (timeRemaining === 0) {
            stop();
            generateTimesUp()
            

        }
    }

    function stop() {
        questionCounter++;
        clearInterval(countDownId);

        wait()
    }


    function gameSetup() {

        $(".start-btn").hide();
        $(".answer-page").hide();

    }
    function displayQuestion() {

        $(".question-page").show();
        $(".question-text").text(triviaQuestions[questionCounter].question);
        listItem = triviaQuestions[questionCounter].choices;

       for (var i = 0; i < listItem.length; i++) {
        answerList = $(".answer-choice").append("<button class='answer [i]'>" + listItem[i] + "</button>");
       console.log([i]);
    }
      
        run();
        
        $("button").on("click", function(event){
        
       
            var selectedAnswer = $(this).text();
             
             console.log(selectedAnswer);
            if (selectedAnswer === triviaQuestions[questionCounter].correct)  {
                
                stop();
                generateWin();
            } else {
                stop();
                generateLoss();

            }
                 
             
         });
    
    }

      
function generateWin() {
    correctAnswers++;
    $(".question-page").hide();
    setTimeout(wait, 3000); 
    console.log("correct " + correctAnswers);
}

function generateLoss() {
    wrongAnswers++;
    $(".question-page").hide();
    
    setTimeout(wait, 3000);
    console.log("wrong " + wrongAnswers);
    
}

function generateTimesUp() {
    unanswered++;
    $(".question-page").hide();
    
    setTimeout(wait, 3000);
    console.log("Unanswered " + unanswered);
}


function wait() {
    //ternary operator replacing if/else for generate more questions
    
   if (questionCounter < 7) {
    resetDisplay();
    
   } else {
    finalScreen()
   }
    
    
   
};
   function finalScreen() {
    $(".answer-choice").empty();
    $(".game-over").text("GAME OVER ");
    $(".words").text("How did you do?");
    $(".correct").text("Correct Answers: " + correctAnswers);
    $(".wrong").text("Wrong Answers: " + wrongAnswers);
    $(".unanswered").text("Unanswered Questions: " + unanswered);
   }

       

    // }

    function resetDisplay() {
        $(".answer-choice").empty();
        
        timeRemaining = 5;
        displayQuestion();
    }
    console.log(questionCounter);
    // function answerDisplay() {

    // }










});