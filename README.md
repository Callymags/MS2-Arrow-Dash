# Arrow Dash
![Mock Up Image]()
* You can view the GitHub repository [here.](https://github.com/Callymags/MS2-Arrow-Dash)
* You can view the live project [here.](https://callymags.github.io/)

## Table of Contents
* [Project Description](#project-description)
* [UX](#ux)
  * [Project Goals](#project-goals)
  * [User Stories](#user-stories)
  * [Wireframes](#wireframes)
* [Features](#features)
  * [Landing Page Features](#landing-page-features)
  * [Features Left to Implement](#features-left-to-implement)
* [Technologies Used](#technologies-used)
  * [Languages](#languages)
  * [Frameworks](#frameworks)
  * [Libraries](#libraries)
* [Testing](#testing)
  * [User Stories](#user-stories)
  * [Feature Functionality](#feature-functionality)
  * [Responsive Design Testing](#responsive-design-testing)
  * [Browser Compatibility](#browser-compatibility)
  * [Site Performance](#site-performance)
  * [Code Validation](#code-validation)
* [Bugs Encountered](#bugs-encountered)
* [Deployment](#deployment)
  * [GitHub Pages](#github-pages)
  * [Forking the GitHub Repository](#forking-the-github-repository)
  * [Making a Local Clone](#making-a-local-clone)
* [Contributions](#contributions)
  * [Code](#code)
  * [Media](#media)
* [Acknowledgements](#acknowledgements)

## Project Description
My second milestone project (Arrow Dash) focuses on developing my own version of the popular game Simon.

Simon is a memory game that requires the user to repeat a sequence let off by a device. The sequence features a series of 
tones and sounds that get longer each time the user succeeds in matching the sequence. 

Arrow Dash puts its own original spin on this game by trying to confuse the user as they are trying to complete the sequence. 

In this game, the user must follow the correct pattern through audio directions. The user has five options: Up, down, 
left, right, and buzz. 

While the user is given directions about the next sequence, a random button will also be pressed when the audio plays 
to try and confuse them. 

## UX: 
### Project Goals
The primary goal of this project is to create a basic game that users can enjoy. I want players to clearly 
understand how the game works but confuse the user’s thought pattern which will add to their enjoyment when playing the game. 

The secondary goal of this project is to strengthen my knowledge of JavaScript and jQuery. I am hoping that I
will encounter challenges during my development of the game that will allow me to understand the JavaScript language 
and the jQuery library more clearly. 

### User Stories 
The target audience for this game is broad. The original Simon game was released in 1978 and the parameters 
of the game are widely known by young and middle-aged adults as a result of the game’s success. 

The main target audience can be broken into two groups: regular players and other software developers 
interested in how the game was made. 

#### Regular Player
Landing Page - As a regular player, I want: 
1. A visually appealing landing page no matter what device I use. 
2. The ability to easily navigate through the landing page the first time I visit.
3. The game rules provided to be clear, organised, and easy to understand.
4. The ability to contact the developer to give them feedback through email

Game page – As a regular player, I want: 
1. A game that I can play no matter what device I use.
2. A game that is fun and easy to play.
3. A game that keeps track of what score I have while I am playing.

#### Software Developer
Landing Page - As a software developer, I want: 
1. A visually appealing landing page no matter what device I use. 
2. The ability to easily navigate through the landing page the first time I visit.
3. The game rules provided to be clear, organised, and easy to understand.
4. The ability to contact the developer to give them feedback through email. 
5. The ability to find the game developer on LinkedIn. 
6. A GitHub link on the landing page that allows me to view developer’s repository and code. 

Game page – As a software developer, I want: 
1. A game that I can play no matter what device I use.
2. A game that is fun and easy to play.
3. A game that keeps track of what score I have while I am playing.


#### Developer Goals 
My personal goals for this project are as follows: 

As a developer, I want to: 
1. Develop a deeper understanding of jQuery and JavaScript.
2. Create a professional looking project that I will be proud to put in my portfolio.

### Wireframes 
I used Balsamiq wireframes to visualise how the game would be structured on different devices. 

These wireframes were a useful reference when I began developing the basic structure for the home page and game page. 

They also allowed me to foresee that there may be some problems with the game on smaller screen sizes due to the structure 
I was looking to have on the game page.  


* [Landing Page](wireframes/ms2-landing-page.jpg)
* [Game Page](wireframes/ms2-game-page.jpg)
* [Contact](wireframes/ms2-contact-us-modal.jpg)



## Technologies Used
### Frameworks 
* [Audio Converter:](https://online-audio-converter.com/) Used to change audio files recorded on my phone to mp3 format.
* [AudioTrimmer:](https://audiotrimmer.com/) Used to shorten audio files I recorded from my phone.
* [Balsamiq:](https://balsamiq.com/) Used to draw up wireframes so that I could visualise the design of the game.
* [PDF2JPG:](https://pdf2jpg.net/) Used to convert exported wireframe PDFs to JPG images that can be viewed in ReadMe. 



## Bugs Encountered 
* **Difficulty validating JavaScript functions through console**

While writing the JavaScript code for my nextSequence function, I found it difficult to confirm if my code would work. 
I could not find an easy way to confirm this code through the console. 

Solution: I copied the JavaScript lines into the browser console and left out the nextSequence function title. 
This allowed me to have a definition for a variable within my nextSequence function and confirm that the variable was 
generating random directions.  

* **User clicking on buttons before staring game added inputs to userPattern array**

Before starting the game, I wanted users to be able to click the buttons and hear the noises that they make. However, 
the code I had written did not remove these button clicks from the `userPattern` array once the game had started. 
This resulted in the `userPattern` array being longer than the `gamePattern` array. You can view this code for the start game 
function below. 
```
$(".start-button").click(function () {
    $(this).hide();
    started = true;
    nextSequence();
});
```
You can view an image of the problem [here.](assets/images/bugs/user-pattern-before-game.jpg)

Solution: The easiest way to get around this was to clear my array when the start button was clicked. 
This allowed the userPattern array to be blank when the game starts. You can view the solution in the code segment below.
 ```
$(".start-button").click(function () {
    $(this).hide();
    started = true;
    userPattern = [];
    nextSequence();
});
```
You can also view an image of solution in the console [here.](assets/images/solutions/game-new-array.jpg)

* **Creating a function to compare `userPattern` and `gamePattern` variables**

Attempt 1: To produce the next sequence, the game needs to first check that the pattern inputted by the user is the same 
as the game pattern. I used the following code to do this comparison: 

```
function answerCheck() {
    if (userPattern === gamePattern) {
        nextSequence();
    } else {
        $("#level-title").html("Wrong Answer Loser");
}
```

However, when comparing these arrays, the comparison kept coming back as false and the 
nextSequence function would not be called as a result even though it seemed that the console was logging the same 
array results from both patterns. I have linked an image to show this. You can view the 
image [here.](assets/images/bugs/compare-array-bug.jpg)  

Attempt 2: I then tried a solution I found in the Code Institute Slack channel. I tried to adapt it to my 
own code which gave me the following code loop. 

```
function answerCheck() {
    if (userPattern.length === gamePattern.length) {
        for (let i = 0; i < userPattern.length; i++) {
            if (userPattern[i] === gamePattern[i]) {
                nextSequence();
            } else {
                console.log("Wrong sequence");
            }
        }
    } else {
        console.log("Wrong length");
    }
}
```
This loop would multiply my array by two and would still add another direction to the sequence 
even if I got the sequence wrong. You can view an image 
of the problem [here.](assets/images/bugs/compare-array-attempt-two.jpg)


Solution: The following code block was my solution to the problem. 

```
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
```
The first thing I needed to do was define a variable that would give me the last index of the `userPattern` 
array. The way I had to do this was by subtracting 1 from the `userPattern` length as an array’s index begins 
at 0. I have attached an image that explains my methodology [here.](assets/images/solutions/defining-current-direction.jpg)

Once I had defined the `currentDirection` variable correctly, I could compare the two arrays by their index and 
length. If both arrays had the same index and the same length, I could call the next sequence. You can view an 
image of me testing this function [here.](assets/images/solutions/answercheck-final-fix.jpg)







## Contributions 
### Code 
1. **Stack Overflow**

* The following thread was used to help play audio once a random direction 
was generated. [View here.]( https://stackoverflow.com/questions/9419263/how-to-play-audio)

* The following thread helped me start the game sequence once the user clicked on the screen 
for the first time. [View here.]( https://stackoverflow.com/questions/9336700/target-only-the-first-click-in-jquery) 



