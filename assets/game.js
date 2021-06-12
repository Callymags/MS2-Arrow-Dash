var buttonDirections = ["up", "down", "left", "right", "buzz"]
var gamePattern = [];

function nextSequence(randomDirection) {
   var randomDirection = buttonDirections[Math.floor(Math.random() * 5)];
   gamePattern.push(randomDirection);

   $("#" + randomDirection).fadeOut(100).fadeIn(100);

   var audio = new Audio("assets/sounds/" + randomDirection + ".mp3")
   audio.play();
}



