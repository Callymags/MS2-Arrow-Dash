let buttonDirections = ["up", "down", "left", "right", "buzz"]
let gamePattern = [];
let userPattern = [];
let started = false
let level = 0;
let answer = false;
// let score = gamePattern.length;
const nextSequenceDelay = 1000;
const assetsFolder = "assets/sounds/"
// var highScore = localStorage.getItem("highScore");

// function saveHighScore() {
//     if (highscore !== null) {
//         if (score > highscore) {
//             localStorage.setItem("highscore", score);
//         }
//     } else {
//         localStorage.setItem("highscore", score);
//     }

//     console.log(highScores);
// } 

$(".restart-button").hide();

$(".restart-button").click(function () {
    $(this).hide();
    started = true;
    level = 0;
    userPattern = [];
    gamePattern = [];
    nextSequence();
});

$(".start-button").click(function () {
    $(this).hide();
    started = true;
    level = 0;
    nextSequence();
});

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

/*
Grabs the input from the user and executes the logic associated with the game
*/
$(".game-buttons").click(function () {
    let userDirection = $(this).attr("id");
    let clickAudio = getAudio(userDirection)

    if (started === true) {
        // Add the button the user clicked on to the array
        userPattern.push(userDirection);
        clickAudio.play();
        answerCheck();
    } else {
        clickAudio.play();
    }
   

});

function answerCheck() {
    let currentDirection = userPattern.length -1;

    if (userPattern[currentDirection] !== gamePattern[currentDirection]) {
        $("#level-title").html("Game Over");
        getAudio("wrong").play();
        $("#score-div").html("You reached Level " + gamePattern.length);
        // saveHighScore(); 
        // Restart Button will appear on screen to begin game again
        $(".restart-button").show();
        started = false;
        return;  
          
    }
    if (userPattern.length === gamePattern.length) {
        setTimeout(function (){
            nextSequence();
        }, nextSequenceDelay);
        
    }
}
