
$(document).ready(function () {

    // create variables or objects

    // object questions

    var triviaQuestions = [
        {
            question: "Which mountain range divides Spain and France?",            //     question
            choices: ["Andes", "Pyrenees", "Alps", "Sierra Nevada"],           //     possible answer array
            correct: "Pyrenees",              //     correct answer
            image: "/Pyrenees.png"                       //     corresponding answer gif
        },
        {
            question: "You are sailing the warm waters of the Atlantic, off the coast of West Africa and see glowing dolphins, what is most likely the cause?",
            choices: ["A Radioactive Spill", "Someone spiked your drink with PEYOTE", "Magic", "Phosphorescent Algae"],
            correct: "Phosphorescent Algae",
            image: "/plankton.jpg"
        },
        {
            question: "Which Ecuadorian city is also a city in Spain?",
            choices: ["Quito", "Cuenca", "Montanita", "Guayaquil"],
            correct: "Cuenca",
            image: "/cuenca.jpg"
        },
        {
            question: "On which sea is Croatia located?",
            choices: ["Aegean", "Adriatic", "Ionian", "Tyrrhanian"],
            correct: "Adriatic",
            image: "/adriatic.jpg"
        },
        {
            question: "Where in Italy is the Via dell'Amore located?",
            choices: ["Cinque Terre", "Amalfi Coast", "Venice", "Verona"],
            correct: "Cinque Terre",
            image: "/cinque-terre.jpg"
        },
        {
            question: "How do sailors commonly refer to the Bay of Biscay due to high volume of rough seas?",
            choices: ["Rocks a Lot Bay", "Capsize Bay", "Bay of Dismay", "Bay of Lost Souls"],
            correct: "Bay of Dismay",
            image: "/bay.jpg"
        },
        {
            question: "Which famous archaeological site sits atop a massive plateau and overlooks the Dead Sea?",
            choices: ["Cliff Palace", "Mount Masada", "Machu Picchu", "Petra"],
            correct: "Mount Masada",
            image: "/masada.jpg"
        },
        {
            question: "The Continental Divide Trail is approximately _____ miles long in Montana and Idaho.",
            choices: ["600", "1200", "800", "50"],
            correct: "800",
            image: "/divide.jpg"
        },
        {
            question: "Which National Park located in coastal Maine is also the name of my dog?",
            choices: ["Acadia", "Bass Harbor", "Baxter", "Carlsbad"],
            correct: "Acadia",
            image: "/bubs.jpg"
        },


    ];




    var timeRemaining = 5;
    var questionCounter = 0;
    var countDownId;
    var listItem = [];
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0;
    var startGame;


    function restartGame() {
        $(".reset-btn").hide();
        questionCounter = 0;
        countDownId;
        listItem = [];
        correctAnswers = 0;
        wrongAnswers = 0;
        unanswered = 0;
        $(".final-score").empty();
        $(".game-over").empty();
        $(".words").empty();
        $(".start-btn").show();
    }

    function startGame() {
        $(".reset-btn").hide();
        $(".start-btn")
            .text("Start Game").css("margin-top", "+" + 200 + "px")
            .click(function () { gameSetup(displayQuestion()); });
    }
    startGame();

    function run() {
        clearInterval(countDownId);
        $(".timer-count").html("<h3>" + "Time is running out in: " + timeRemaining + "</h3>");

        countDownId = setInterval(decrement, 1000);

    }

    function decrement() {

        timeRemaining--;
        $(".timer-count").html("<h3>" + "Time is running out in: " + timeRemaining + "</h3>");
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
        $(".win").empty();
        $(".loss").empty();
        $(".time-up").empty();
        $(".question-page").show();
        $(".question-text").text(triviaQuestions[questionCounter].question);
        listItem = triviaQuestions[questionCounter].choices;

        for (var i = 0; i < listItem.length; i++) {
            answerList = $(".answer-choice").append("<button class='answer [i]'>" + listItem[i] + "</button>");

        }

        run();

        $(".answer").on("click", function (event) {


            var selectedAnswer = $(this).text();


            if (selectedAnswer === triviaQuestions[questionCounter].correct) {

                stop();
                generateWin();
            } else {
                stop();
                generateLoss();

            }


        });

    }
    function displayImage() {
        $('<img/>')
            .attr('src', 'assets/images' + triviaQuestions[questionCounter - 1].image)
            .appendTo('#image-holder');
    }

    function generateWin() {
        correctAnswers++;
        $(".question-page").hide();
        $(".win").text("That is correct!");
        displayImage();
        setTimeout(wait, 3000);

    }

    function generateLoss() {
        wrongAnswers++;
        $(".question-page").hide();
        $(".loss").text("WRONG " + "The correct answer is: " + triviaQuestions[questionCounter - 1].correct);
        displayImage();
        setTimeout(wait, 3000);


    }

    function generateTimesUp() {

        unanswered++;
        $(".question-page").hide();
        $(".time-up").text("TIME is UP! " + "The correct answer is: " + triviaQuestions[questionCounter - 1].correct);
        displayImage();
        setTimeout(wait, 3000);


    }


    function wait() {


        if (questionCounter < triviaQuestions.length) {

            resetDisplay();

        } else {
            setTimeout(finalScreen, 3000);
        }



    };


    // create function to clear all and display
    function finalScreen() {

        $(".loss").empty();
        $(".win").empty();
        $(".time-up").empty();
        $("#image-holder").empty();
        $(".answer-choice").empty();
        $(".game-over").text("GAME OVER ");
        $(".words").text("How did you do?");
        $(".correct").text("Correct Answers: " + correctAnswers);
        $(".wrong").text("Wrong Answers: " + wrongAnswers);
        $(".unanswered").text("Unanswered Questions: " + unanswered);


        // $(".reset-btn")
        resetGame();

    }





    function resetDisplay() {
        $(".answer-choice").empty();
        $("answer-page").empty();
        $("#image-holder").empty();

        timeRemaining = 5;
        displayQuestion();
    }

    // //  reset button event
    //     clears score and clicks
    //     clears timer
    //     startGame
    // //    
    // This should restart game when button is clicked
    function resetGame() {
        $(".reset-btn").text("Play Again").css("margin-top", "+" + 100 + "px").show().on("click", function (event) {

            restartGame();
        });



    }





});