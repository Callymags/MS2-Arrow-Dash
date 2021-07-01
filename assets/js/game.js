let buttonDirections = ["up", "down", "left", "right", "buzz"]
let gamePattern = [];
let userPattern = [];
/*    Start document on click function below was taken from stackoverflow. See ReadMe Contributions section 
      for more information (https://stackoverflow.com/questions/9336700/target-only-the-first-click-in-jquery) */
let started = false
let level = 0;
let answer = false;

$(".start-button").click(function () {
    $(this).hide();
    started = true;
    nextSequence();
});

function nextSequence(randomDirection) {
    userPattern = [];
    let randomDirection = buttonDirections[Math.floor(Math.random() * 5)];
    gamePattern.push(randomDirection);
    level++;
    $("#level-title").html("Level " + gamePattern.length);

    /*    Audio javascript contribution from stackoverflow. See ReadMe Contributions section 
       for more information (https://stackoverflow.com/questions/9419263/how-to-play-audio) */

    var audio = new Audio("assets/sounds/" + randomDirection + ".mp3")
    audio.play();


    let wrongDirection = buttonDirections[Math.floor(Math.random() * 5)];
    $("#" + wrongDirection).fadeOut(100).fadeIn(100);

    console.log(gamePattern);

}

$(".game-buttons").click(function () {
    if (started === true) {
        let userDirection = $(this).attr("id");
        userPattern.push(userDirection);

        let clickAudio = new Audio("assets/sounds/" + userDirection + ".mp3")
        clickAudio.play();

        answerCheck();

    } else {
        var userDirection = $(this).attr("id");

        var clickAudio = new Audio("assets/sounds/" + userDirection + ".mp3")
        clickAudio.play();
    }
   

});

function answerCheck() {
    let currentDirection = userPattern.length -1;

    if (userPattern[currentDirection] !== gamePattern[currentDirection]) {
        $("#level-title").html("Game Over");
        var audio = new Audio("assets/sounds/wrong.mp3")
        audio.play();

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
        }, 1000);
        
    }
}
