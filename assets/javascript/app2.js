
$(document).ready(function () {

    // create variables or objects

    // object questions

    var triviaQuestions = [
        {
            question: "question 1",            //     question
            choices: ["a. words words", "b", "c", "d"],           //     possible answer array
            correct: "answer",                 //     correct answer
            image: "../images/black-sand.jpeg"                       //     corresponding answer gif
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


    var timeRemaining = 5;
    var questionCounter = 0;
    var countDownId;
    var listItem;







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


        }
    }

    function stop() {

        clearInterval(countDownId);

        questionCounter++;
        displayImage();
     console.log(questionCounter);

    }

   


    function gameSetup() {

        $(".start-btn").hide();
        $(".answer-page").hide();
       
    }
    function displayQuestion() {
        $(".question-text").text(triviaQuestions[questionCounter].question);
        listItem = triviaQuestions[questionCounter].choices;


        answerList = $(".answer-choice").append('<li>' + listItem[0] + '</li>',
            '<li>' + listItem[1] + '</li>',
            '<li>' + listItem[2] + '</li>',
            '<li>' + listItem[3] + '</li>');

       
    run();

    }
 
    function displayImage() {
        
        $(".question-page").hide();
        //  $("#image-holder").html("<img src='" + triviaQuestions[questionCounter].image + "' width='400px'>");
      displayQuestion();
      }
    // function answerDisplay() {
        
    // }










});