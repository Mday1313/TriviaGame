
// function to wrap all functions
$(document).ready(function () {

    // create variables or objects

    // object questions

    var triviaQuestions = [
        {
            question: "question 1",            //     question
            choices: ["a. words words", "b", "c", "d"],           //     possible answer array
            correct: "answer",                 //     correct answer
            gif: "stuff"                       //     corresponding answer gif
        },
        {
            question: "question 2",
            choices: "a blah blah, b, c, d",
            correct: "answer",
            gif: "stuff"
        },
        // {
        //     question: "question 3",
        //     choices: "a, b, c, d",
        //     correct: "answer",
        //     gif: "stuff"
        // },
        // {
        //     question: "question 4",
        //     choices: "a, b, c, d",
        //     correct: "answer",
        //     gif: "stuff"
        // },
        // {
        //     question: "question 5",
        //     choices: "a, b, c, d",
        //     correct: "answer",
        //     gif: "stuff"
        // },
        // {
        //     question: "question 6",
        //     choices: "a, b, c, d",
        //     correct: "answer",
        //     gif: "stuff"
        // },

    ];


    // check access to this object


    // other variables
    var correctCount = 0;
    var wrongCount = 0;
    var timeRemaining = 30;
    var questionCounter = 0; 
    var unansweredCount = 0;
    var answeredCorrect = 0;
    var answerList;
    var listItem;
    var countDownId;
    var answerPicked;
 var userGuess = [];
    // onload
    //     *game title 
    //     *start button
    //         on click calls startGame function

    $(".start-btn")
        .text("Start Game").css("margin-top", "+" + 200 + "px")
        .click(function () { gameSetup(); });

    // button click above will run gameSetup function
    // gameSetup function
    for (var i = 0; i < triviaQuestions.length; i++) {
        return triviaQuestions[i];
    }
    function run() {
        clearInterval(countDownId);
        
        countDownId = setInterval(decrement, 1000);

    }
    function decrement() {

        timeRemaining--;
        $(".timer-count").html("<h3>" + "Will self destruct in " + timeRemaining + "</h3>");
        // $(".time-count").text( "Will self destruct in " + timeRemaining );

        if (timeRemaining === 0) {

            stop();


        }
    }

    function stop() {
        
     clearInterval(countDownId);
     questionCounter++;
     console.log(questionCounter);
     
    }


    function gameSetup() {

        $(".start-btn").hide();
        // timeRemaining = 30;
        // $(".timer-count").text("Time Remaining: " + timeRemaining);

        // For loop that cycles through questions
        $(".question-text").text(triviaQuestions[i].question);

        //want choices array to be displayed as an ordered list block
        // for each to make dry or plug in i from for loop

        // MAKE DRY
        answerList = $(".answer-choice").append('<li>' + triviaQuestions[i].choices[0] + '</li>', '<li>' + triviaQuestions[i].choices[1] + '</li>', '<li>' + triviaQuestions[i].choices[2] + '</li>', '<li>' + triviaQuestions[i].choices[3] + '</li>');

        // answerPicked =  $("li")for.on("click", function() {
        //     console.log(answerPicked);
        //  });
      
        run();
        

    }

    $("li").on("click", function () {
        var click = triviaQuestions[i].choice.indexOf("li");
    });
    console.log(userGuess);









    //     setinterval 30 secends per question
    //     for loop to cycle through question answer objects, 
    //     set on click to each list item in DOM
    //     this will loop through however many questions there are in the object
    //         for (var i = 0; i < questions.length; i++) {



    // startGame function will start clock and store click response for answer
    //         }
    //     inside for loop 
    //         var response = onclick questions[i]
    //         check if response is to questions item answer (questions[i].answer)
    //         stop timer

    // anwser shown for 6 seconds 
    // display win, loss or unanswered statement
    // display image


    // question function
    //     if correct, 
    //         clear dislay
    //         write correct, 
    //         show gif / play music
    //         correctpoints++
    //         move on to next question

    //     if wrong
    //         clear dislay
    //         write wrong, 
    //         show correct answer
    //         show gif 
    //         wrongpoints++
    //         move on to next question

    //      if run out of time
    //         clear dislay
    //         write out of time, 
    //         show correct answer
    //         show gif 
    //         unanswered++
    //         move on to next question

    //     if no more questions
    //         clear display
    //         show score
    //             correct
    //             wrong
    //             unanswered

    //         show reset button

    // reset button event
    //     clears score and clicks
    //     clears timer
    //     startGame


});