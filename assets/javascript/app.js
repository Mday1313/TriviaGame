
$(document).ready(function () {

    // create variables or objects

    // object questions, answers and image for each

    var triviaQuestions = [
        {
            question: "Which mountain range divides Spain and France?",   //     question
            choices: ["Andes", "Pyrenees", "Alps", "Sierra Nevada"],  //  possible answer array
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



    // countdown clock
    var timeRemaining = 20;
    // var to keep track of which question we are on
    var questionCounter = 0;

    var countDownId;
    var listItem = [];
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0;
    var startGame;

    // function connected to reset button click, to clear and reset numbers for next game
    function restartGame() {
        $(".reset-btn").hide();
        questionCounter = 0;
        countDownId;
        listItem = [];

        // clears score
        correctAnswers = 0;
        wrongAnswers = 0;
        unanswered = 0;
        $(".final-score").empty();
        $(".game-over").empty();
        $(".words").empty();
        $(".start-btn").show();
    }

    // first function run, to establish button to start game
    // create button
    // add click function
    function startGame() {
        $(".reset-btn").hide();
        $(".start-btn")
            .text("Start Game").css("margin-top", "+" + 200 + "px")
            .click(function () { gameSetup(displayQuestion()); });
    }
    // call first function
    startGame();


    // function to set time interval to 20 seconds
    function run() {
        clearInterval(countDownId);
        $(".timer-count").html("<h3>" + "Time is running out in: " + timeRemaining + "</h3>");
        // count down by 1 second (1000 miliseconds)
        countDownId = setInterval(decrement, 1000);

    }
    // function to reduce time by 1 for every 1000 miliseconds
    // write time to page

    function decrement() {

        timeRemaining--;
        $(".timer-count").html("<h3>" + "Time is running out in: " + timeRemaining + "</h3>");

        // set conditional to stop when timer equals 0
        if (timeRemaining === 0) {
            stop();
            generateTimesUp()
        }
    }
    // function to increase question number and clear interval
    function stop() {
        questionCounter++;
        clearInterval(countDownId);

        wait()
    }

    // hide start button when clicked
    function gameSetup() {

        $(".start-btn").hide();
        $(".answer-page").hide();

    }
    // 
    function displayQuestion() {
        $(".win").empty();
        $(".loss").empty();
        $(".time-up").empty();
        $(".question-page").show();

        // to display answer array
        $(".question-text").text(triviaQuestions[questionCounter].question);
        listItem = triviaQuestions[questionCounter].choices;

        // Loop through answers and create buttons for each
        for (var i = 0; i < listItem.length; i++) {
            answerList = $(".answer-choice").append("<button class='answer [i]'>" + listItem[i] + "</button>");

        }
        // call for timer to begin
        run();
        // Add click event to each button, 
        $(".answer").on("click", function (event) {

            // Store answer in click
            var selectedAnswer = $(this).text();

            // compare click answer to correct answer
            // conditional for if correct, a win or if incorrect, a loss
            if (selectedAnswer === triviaQuestions[questionCounter].correct) {

                stop();
                generateWin();

            } else {
                stop();
                generateLoss();

            }

        });

    }


    // attach image to answer screen, use questioncounter - 1
    function displayImage() {
        $('<img/>')
            .attr('src', 'assets/images' + triviaQuestions[questionCounter - 1].image)
            .appendTo('#image-holder');
    }

    // function to create answer page for a win,
    // increase correct counter by 1
    // anounce right call image function
    // set delay
    function generateWin() {
        correctAnswers++;
        $(".question-page").hide();
        $(".win").text("That is correct!");
        displayImage();
        setTimeout(wait, 3000);

    }

    // function to create answer page for a loss,
    // increase incorrect counter by 1
    // anounce right call image function
    // set delay
    function generateLoss() {
        wrongAnswers++;
        $(".question-page").hide();
        $(".loss").text("WRONG " + "The correct answer is: " + triviaQuestions[questionCounter - 1].correct);
        displayImage();
        setTimeout(wait, 3000);


    }

    // function to declare what is done if no answer found in alotted time
    // same as correct with different wording
    function generateTimesUp() {

        unanswered++;
        $(".question-page").hide();
        $(".time-up").text("TIME is UP! " + "The correct answer is: " + triviaQuestions[questionCounter - 1].correct);
        displayImage();
        setTimeout(wait, 3000);


    }

    // if no more questions
    // clear display
    // show score
    //     correct
    //     wrong
    //     unanswered

    function wait() {


        if (questionCounter < triviaQuestions.length) {

            resetDisplay();

        } else {
            setTimeout(finalScreen, 3000);
        }



    };


    // create function to clear all displays
    // shows scores
    function finalScreen() {

        $(".loss").empty();
        $(".win").empty();
        $(".time-up").empty();
        $("#image-holder").empty();
        $(".answer-choice").empty();
        $(".final-score").show();
        $(".game-over").text("GAME OVER ");
        $(".words").text("How did you do?");
        $(".correct").text("Correct Answers: " + correctAnswers);
        $(".wrong").text("Wrong Answers: " + wrongAnswers);
        $(".unanswered").text("Unanswered Questions: " + unanswered);


        // $(".reset-btn")
        resetGame();

    }



// clear display
// reset timer
// run through questions again

    function resetDisplay() {
        $(".answer-choice").empty();
        $("answer-page").empty();
        $("#image-holder").empty();

        timeRemaining = 20;
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