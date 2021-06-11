var buttonDirections = ["up", "down", "left", "right", "buzz"]
var gamePattern = [];

function nextSequence() {
   var randomDirection = buttonDirections[Math.floor(Math.random() * 5)];
   gamePattern.push(randomDirection);
}