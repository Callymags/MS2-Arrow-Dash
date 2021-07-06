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
  * [Future Features Left to Implement](#future-features)
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


## Features 
### Landing Page Features
* Navbar: The navbar on the landing page displays the game logo and nothing else. I decided to keep the navbar on the landing page to keep with the same style and layout as the game page.
* Background colour: The sections of the landing page (navbar, container, and footer) switch between a shade of blue and grey making them more identifiable. 
* Font: I decided to go with the font Encode Sans SC which puts all letters in capitals. I did this because the game logo is all capitals and there is not a lot of written content on the site.
* External links: There are two links in the footer which open in a separate tab. These links will lead the user to my GitHub and LinkedIn page.
* Title bar favicon: The title bar displays the Arrow Dash logo in favicon format instead of the default favicon.
* Landing Page Options: There are three options on the landing page: Game, Rules, and Contact Us. The user will be led to a different page once clicking on the game option. The other two options are modals and will keep the user on the same page. 
* Rules Modal: The Rules modal gives the user the basic rules of the game. They can read this also on the game page.
* Contact Us Modal: The user’s message from the Contact Us modal will be sent to my email. The user will receive a pop up after clicking the ‘Send Message’ option that will notify them if the message was sent successfully or not. You can view these modals below. 
1. Message sent successfully modal. View [here.](assets/images/documentation/message-sent-success-modal.jpg)
2. Message failed to send modal. View [here.](assets/images/documentation/message-failed-modal.jpg)


### Game Page Features
* Navbar: The navbar on the game page displays the game logo, the game Rules modal link and the Contact Us modal link. The navbar background is the same colour as the logo.
* Navbar: The navbar has a responsive toggle hamburger for smaller devices which will keep the navbar from looking cluttered.
* Background colour: There are three sections of the game page: the navbar, the game-container, and the footer. The game-container and the footer have the same grey colour while the navbar has a light-blue colour. 
* Font: The font on the game page is the same as the landing page. 
* Game container: The user will be able to press the buttons and hear the sounds associated with each button before starting the game. Once the user wants to begin, they can press the start button and the first sequence will begin.  
* Audio direction vs Button Click direction: After investigating into which element I should use as the correct sequence (Audio/Button Click), I decided to go with the voice sequence as this would mean the user would have to use their audio on their device. Otherwise, the user could just turn the volume down and follow the button clicks which would take away from the game experience. 
* Level Change: Once the user begins the game, the level number at the top of the page will change as they progress. If the user gets further than their previous score, they will see their new high score under the game buttons as a reference of what they are trying to beat. 
* Restart Game: If the user inputs an incorrect sequence, the user will hear a distinct noise and see the title changing to Game over. They will also see a reference underneath the game buttons where the high score was which will give them a reference as to what level they have reached. Once the user hits the restart button, the game sequence will refresh, and the level number will begin again. 
* Rules Modal: It was important to also place an option to review the rules on the game page just in case the user is a bit confused as to how the game works. This way, the user will not have to revert to the landing page to read the rules. 
* Contact Us Modal: The users can also access the Contact Us modal from the game page.
* External links: There are two links in the footer which open in a separate tab. These links will lead the user to my GitHub and LinkedIn page.
* Title bar favicon: The title bar displays the Arrow Dash logo in favicon format instead of the default favicon.

### Future Features
* Save High Score to more advanced storage: High score only saved to local storage. If the player revisits the page at another time, or on another browser, this high score will be forgotten. 
* Game Leader board: Another feature would be to add a leader board where users could insert their name and save their score for their friends to try and beat them. 
* Different difficulties for the game: The user could pick which difficulty they wanted before starting the game. I could then add different elements to make the game harder. E.g a timer

## Technologies Used
### Languages 
* [HTML](https://en.wikipedia.org/wiki/HTML5) 
* [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) 
* [JavaScript](https://www.javascript.com/) 

### Frameworks 
* [jQuery:](https://jquery.com/) Used to simplify the JavaScript code and manipulate the DOM to provide the correct functionality.
* [Bootstrap 5.01:](https://getbootstrap.com/) Used to style the index and game page and help with the website’s responsiveness. 
* [Google Developer Tools:](https://developer.chrome.com/docs/devtools/) Used to test responsive elements of page and to fix bugs.
* [Git:](https://git-scm.com/) Useful to control and document page versions through git commits and git pushes.
* [Github:](https://github.com/) Used to store project code and to deploy the website.
* [Audio Converter:](https://online-audio-converter.com/) Used to change audio files recorded on my phone to mp3 format.
* [AudioTrimmer:](https://audiotrimmer.com/) Used to shorten audio files I recorded from my phone.
* [Balsamiq:](https://balsamiq.com/) Used to draw up wireframes so that I could visualise the design of the game.
* [PDF2JPG:](https://pdf2jpg.net/) Used to convert exported wireframe PDFs to JPG images that can be viewed in ReadMe. 
* [Canva:]( https://www.canva.com/) Used to create a simple logo for the game. 
* [Windows Paint 3D:](https://www.microsoft.com/en-us/p/paint-3d/9nblggh5fv99?activetab=pivot:overviewtab) Used to create a transparent PNG of the logo created on Canva.  
* [Color Hunt:](https://colorhunt.co/) Used to find a suitable background colours for styling.  
* [Favicon.io:](https://favicon.io/favicon-converter/)Used to convert the arrow dash logo to favicon format.   

### Libraries
* [Google fonts:](https://fonts.google.com/) Used to find appropriate fonts for content of both the index and game page.
* [Font Awesome:](https://fontawesome.com/icons?d=gallery&p=2) Provided the icons for the game buttons and the social media links in the footer. 


## Bugs Encountered 
* **Difficulty validating JavaScript functions through console**

While writing the JavaScript code for my nextSequence function, I found it difficult to confirm if my code would work. 
I could not find an easy way to confirm this code through the console. 

Solution: I copied the JavaScript lines into the browser console and left out the nextSequence function title. 
This allowed me to have a definition for a variable within my nextSequence function and confirm that the variable was 
generating random directions.  

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

* **`answerCheck` function called if user clicked buttons before starting game**

Problem: Before starting the game, I wanted users to be able to click the game buttons and hear the noises that they 
make. However, the code I had written resulted in the browser showing the ‘Game Over’ title and the ‘Restart game’ 
button if the user clicked these game buttons before starting the game.

The reason this happened was because my code pushed the button click to the `userPattern` array and this would then be 
marked as wrong because I did not specify that these button clicks should not be compared to the `gamePattern` array 
before the game had started. You can see the error in my original code below.

```
$(".game-buttons").click(function () {
        var userDirection = $(this).attr("id");
        userPattern.push(userDirection);

        var clickAudio = new Audio("assets/sounds/" + userDirection + ".mp3")
        clickAudio.play();

        answerCheck();
}
```
You can also view an image of the problem in the following images: 
1.	Browser before clicking game button. [View Image.](assets/images/bugs/browser-before-pressing-game-button.jpg)
2.	Browser after clicking game button. [View Image.](assets/images/bugs/button-press-before-game-start.jpg)

Solution: To correct this, I needed to add an if/else statement to my function which would allow the user to 
click the buttons before starting the game without these clicks being pushed to the `userPattern` array and 
without the `answerCheck` function comparing them to the `gamePattern` array. You can view this if/else statement below. 

```
$(".game-buttons").click(function () {
    if (started === true) {
        var userDirection = $(this).attr("id");
        userPattern.push(userDirection);

        var clickAudio = new Audio("assets/sounds/" + userDirection + ".mp3")
        clickAudio.play();

        answerCheck();

    } else {
        var userDirection = $(this).attr("id");

        var clickAudio = new Audio("assets/sounds/" + userDirection + ".mp3")
        clickAudio.play();
    }
}
```

* **Whitespace below footer**

Problem: When styling the index and game page, I had a problem pushing the footer down to the bottom of the 
screen. You can see the problem [here.](assets/images/bugs/whitespace-beneath-footer.jpg) 

Solution: I found the solution to this problem on a Stack Overflow thread. The solution allowed for a responsive 
footer with no fixed height that was pushed to the end of the screen on all devices except the iPad and iPad Pro. 
This was done using the flex display feature in CSS. You can view the link to the 
thread [here.](https://stackoverflow.com/questions/643879/css-to-make-html-page-footer-stay-at-bottom-of-the-page-with-a-minimum-height-b)

I have also linked this thread in the contributions section of this ReadMe. 

* **White space to the right of html and body**

Problem: There was white space to the right of the game page. Through further investigation, I found that the 
body was not extending the full width of the screen to fill this space. You can view an image of the 
problem [here.](assets/images/bugs/whitespace-right-of-body.jpg)

Solution: To fix this, I added the css style `overflow-x: hidden` to the html, and the body of the page. You can 
view the full code section below. 

```
html,
body
{
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
}
```
* **Containers in the main section of landing page and game page not vertically aligned**

Problem: The elements in the main section of both pages would stick to the top of the screen just under the navbar. 
This meant that there was a lot of space above the footer. You can view an image of the problem by clicking the links below. 

1.	[Landing Page.](assets/images/bugs/landing-page-vertical-alignment-problem.jpg)
2.  [Game Page.](assets/images/bugs/game-page-vertical-alignment-problem.jpg)

Solution: I found a thread on the W3 Schools page that addressed the problem. This thread has been mentioned in the 
contributions section of this document. You can view the code snippet that fixed the problem on the game page below. 
I also used the same code for the landing page. 
```
.game-container {
    min-height: 90vh;
    position: relative;
}

.vertical-center {
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}
```  

* **Game buttons not centrally aligned in screens under 320px**

Problem: The central row of my game page contained 3 columns with a game button in each one. There was a problem with how three of these buttons aligned when displaying them on narrow screen sizes under 320px. You can view an image of the problem [here.](assets/images/bugs/game-buttons-alignment-bug.jpg)

Solution: To align these buttons on narrower screens, I added a media query that removed the padding on these game buttons when the screen width was lower than 320px. I used the following media query to achieve this. 

```
@media screen and (max-width: 320px) {
    .game-buttons {
        padding-left: 0;
        padding-right: 0;
    }
}  

```
You can also view an image of the solution [here.](assets/images/solutions/game-buttons-alignment-solution.jpg)












## Contributions 
### Code 
1. **Stack Overflow**

* The following thread was used to help play audio once a random direction 
was generated. [View here.]( https://stackoverflow.com/questions/9419263/how-to-play-audio)

* The following thread helped me start the game sequence once the user clicked on the screen 
for the first time. [View here.]( https://stackoverflow.com/questions/9336700/target-only-the-first-click-in-jquery) 

* The following thread allowed me to push the footer down to the bottom of the screen on all devices besides 
the iPad & iPad Pro. [View here]( https://stackoverflow.com/questions/643879/css-to-make-html-page-footer-stay-at-bottom-of-the-page-with-a-minimum-height-b) 

2. **W3 Schools**

* The following thread helped me to vertically align my containers on both the landing page and the 
game page. [View here.]( https://www.w3schools.com/howto/howto_css_center-vertical.asp) 

3. **YouTube**

* The following thread helped me to store a player’s high score to local storage and display this on the game page. [View here.]( https://www.youtube.com/watch?v=DFhmNLKwwGw&t=202s)  



