# TriviaGame
week-5 JavaScript assignment 2

**[Click Here to Watch the demo](https://youtu.be/xhmmiRmxQ8Q)**.

* You'll create a trivia game that shows only one question until the player answers it or their time runs out.

* If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

* The scenario is similar for wrong answers and time-outs.

  * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
  * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

* On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).



PseudoCode

create variables or objects

object questions
    question
    possible answer array
    correct answer
    corresponding answer gif

correct answers
wrong answers
timeRemaining
answeredCorrect = false;





onload
    *game title 
    *start button
        on click calls startGame function

startGame function
    setinterval 30 secends per question
    for loop to cycle through question answer objects, 
    set on click to each list item in DOM
    this will loop through however many questions there are in the object
        for (var i = 0; i < questions.length; i++) {

        }
    inside for loop 
        var response = onclick questions[i]
        check if response is to questions item answer (questions[i].answer)
        stop timer
        

question function
    if correct, 
        clear dislay
        write correct, 
        show gif / play music
        correctpoints++
        move on to next question

    if wrong
        clear dislay
        write wrong, 
        show correct answer
        show gif 
        wrongpoints++
        move on to next question

     if run out of time
        clear dislay
        write out of time, 
        show correct answer
        show gif 
        unanswered++
        move on to next question

    if no more questions
        clear display
        show score
            correct
            wrong
            unanswered
        
        show reset button

reset button event
    clears score and clicks
    clears timer
    startGame