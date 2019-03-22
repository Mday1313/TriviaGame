
// function to wrap all functions
$(document).ready(function() {

// create variables or objects

// object questions

var triviaQuestions = [
    {
        question: "question 1",            //     question
        choices: ["a", "b", "c", "d"],           //     possible answer array
        correct: "answer",                 //     correct answer
        gif: "stuff"                       //     corresponding answer gif
    },
    {
        question: "question 2",
        choices: "a, b, c, d",
        correct: "answer",
        gif: "stuff"
    },
    {
        question: "question 3",
        choices: "a, b, c, d",
        correct: "answer",
        gif: "stuff"
    },
    {
        question: "question 4",
        choices: "a, b, c, d",
        correct: "answer",
        gif: "stuff"
    },
    {
        question: "question 5",
        choices: "a, b, c, d",
        correct: "answer",
        gif: "stuff"
    },
    {
        question: "question 6",
        choices: "a, b, c, d",
        correct: "answer",
        gif: "stuff"
    },

];


// check access to this object
console.log(triviaQuestions[0].gif);

// other variables
var correctCount = 0;
var wrongCount = 0;
var timeRemaining = 30;
var unansweredCount = 0;
var answeredCorrect = 0;
var answerList;


// onload
//     *game title 
//     *start button
//         on click calls startGame function

    $(".start-btn")
    .text("Start Game").css("margin-top", "+"+200+"px")
    .click(function () { gameSetup(); });
 
// button click above will run gameSetup function
// gameSetup function
function gameSetup() {
        
        $(".start-btn").hide();
        timeRemaining = 30;
        $(".timer-count").text("Time Remaining: " + timeRemaining);
        
        // For loop that cycles through questions
        $(".question-text").text(triviaQuestions[0].question);
    
        // NOT WORKING- want choices array to be displayed as an ordered list block
        // for each to make dry
        answerList = $(".answer-choice").append( '<li>' + triviaQuestions[0].choices[0] + '</li>', '<li>' + triviaQuestions[0].choices[1] + '</li>', '<li>' + triviaQuestions[0].choices[2] + '</li>', '<li>' + triviaQuestions[0].choices[3] + '</li>'   );
            
       

//     setinterval 30 secends per question
//     for loop to cycle through question answer objects, 
//     set on click to each list item in DOM
//     this will loop through however many questions there are in the object
//         for (var i = 0; i < questions.length; i++) {

}

// startGame function will start clock and store click response for answer
//         }
//     inside for loop 
//         var response = onclick questions[i]
//         check if response is to questions item answer (questions[i].answer)
//         stop timer
        

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