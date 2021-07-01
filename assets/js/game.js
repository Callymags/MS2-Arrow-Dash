let buttonDirections = ["up", "down", "left", "right", "buzz"]
let gamePattern = [];
let userPattern = [];
/*    Start document on click function below was taken from stackoverflow. See ReadMe Contributions section 
      for more information (https://stackoverflow.com/questions/9336700/target-only-the-first-click-in-jquery) */
let started = false
let level = 0;
let answer = false;
const nextSequenceDelay = 1000;
const assetsFolder = "assets/sounds/"

$(".start-button").click(function () {
    $(this).hide();
    started = true;
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
    $("#level-title").html("Level " + gamePattern.length);

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
        // Restart Button will appear on screen to begin game again
        $(".start-button").show().html("Restart Game");
        level = 0;
        userPattern = [];
        gamePattern = [];
        started = false;
        return;
    }
    if (userPattern.length === gamePattern.length) {
        setTimeout(function (){
            nextSequence();
        }, nextSequenceDelay);
        
    }
}
