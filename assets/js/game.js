let buttonDirections = ["up", "down", "left", "right", "buzz"] 
let gamePattern = [];
let userPattern = [];
let started = false;
let level = 0;
const nextSequenceDelay = 1000;
const assetsFolder = "assets/sounds/";
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

$(document).ready(function() {
    $("#score-div p").html("High Score: " + highScores);

    $(".start-button").click(function() {
        $(this).hide();
        started = true;
        $("#score-div p").html("High Score: " + highScores);
        level = 0;
        userPattern = [];
        gamePattern = [];
        nextSequence();
    });

    /*
    Grabs the input from the user and executes the logic associated with the game
    */
    $(".game-buttons").click(function() {
        let userDirection = $(this).attr("id");
        $(this).fadeOut(100).fadeIn(100);
        let clickAudio = getAudio(userDirection);

        if (started === true) {
            // Add the button the user clicked on to the array
            userPattern.push(userDirection);
            clickAudio.play();
            answerCheck();
        } else {
            clickAudio.play();
        }
    });
});

/* Code for saving score to local storage was accomplished through watching the following YouTube tutorial. 
Link: https://www.youtube.com/watch?v=DFhmNLKwwGw&t=202s */ 
function saveHighScore() {
    let score = gamePattern.length;
    highScores.push(score);
    highScores.sort(function(a, b){return b-a});
    highScores.splice(1);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    console.log(highScores);
}

function getRandomButton() {
    return buttonDirections[Math.floor(Math.random() * buttonDirections.length)] + "-btn";
}

function getAudio(soundDirection) {
    // soundDirection e.g. "up"
    return new Audio(assetsFolder + soundDirection + ".mp3");
}

function nextSequence() {
    userPattern = [];
    level++;
    $("#level-title").html("Level " + (gamePattern.length + 1));

    // Generate the random direction that the user must follow
    let randomDirection = getRandomButton();
    gamePattern.push(randomDirection);

    /*    Audio javascript contribution from stackoverflow. See ReadMe Contributions section 
       for more information (https://stackoverflow.com/questions/9419263/how-to-play-audio) */

    getAudio(randomDirection).play();

    $("#" + getRandomButton()).fadeOut(100).fadeIn(100);

    console.log(gamePattern);

}

function answerCheck() {
    let currentDirection = userPattern.length -1;

    if (userPattern[currentDirection] !== gamePattern[currentDirection]) {
        $("#level-title").html("Game Over");
        getAudio("wrong").play();
        $("#score-div p").html("You reached Level " + gamePattern.length);

        // Compare score of game to current High Score stored in local storage
        saveHighScore();

        // Restart Button will appear on screen to begin game again
        $(".start-button").show().html("Restart Game");
        started = false;
        return;  
          
    }
    if (userPattern.length === gamePattern.length) {
        setTimeout(function (){
            nextSequence();
        }, nextSequenceDelay);
        
    }
}
