var buttonDirections = ["up", "down", "left", "right", "buzz"]
var gamePattern = [];
var userPattern = [];
/*    Start document on click function below was taken from stackoverflow. See ReadMe Contributions section 
      for more information (https://stackoverflow.com/questions/9336700/target-only-the-first-click-in-jquery) */
var started = false
var level = 0;
var answer = false;

$(".start-button").click(function () {
    $(this).hide();
    started = true;
    userPattern = [];
    nextSequence();
});

function nextSequence(randomDirection) {
    userPattern = [];
    var randomDirection = buttonDirections[Math.floor(Math.random() * 5)];
    gamePattern.push(randomDirection);
    level++;
    $("#level-title").html("Level " + gamePattern.length);

    /*    Audio javascript contribution from stackoverflow. See ReadMe Contributions section 
       for more information (https://stackoverflow.com/questions/9419263/how-to-play-audio) */

    var audio = new Audio("assets/sounds/" + randomDirection + ".mp3")
    audio.play();


    var wrongDirection = buttonDirections[Math.floor(Math.random() * 5)];
    $("#" + wrongDirection).fadeOut(100).fadeIn(100);

    console.log(gamePattern);

}

$(".game-buttons").click(function () {
    var userDirection = $(this).attr("id");
    userPattern.push(userDirection);

    var clickAudio = new Audio("assets/sounds/" + userDirection + ".mp3")
    clickAudio.play();

    answerCheck();

});

function answerCheck() {
    let currentDirection = userPattern.length -1;

    if (userPattern[currentDirection] !== gamePattern[currentDirection]) {
        console.log("Wrong");
        level = 0;
        userPattern = [];
        gamePattern = [];
        return started = false;
    }

    if (userPattern.length === gamePattern.length) {
        console.log("Correct")
        nextSequence();
    }
}
