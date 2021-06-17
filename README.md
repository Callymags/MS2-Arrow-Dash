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
* [Challenges Encountered](#challenges-encountered)
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



## Challenges Encountered 
* **Difficulty validating JavaScript functions through console**

While writing the JavaScript code for my nextSequence function, I found it difficult to confirm if my code would work. 
I could not find an easy way to confirm this code through the console. 

Solution: I copied the JavaScript lines into the browser console and left out the nextSequence function title. 
This allowed me to have a definition for a variable within my nextSequence function and confirm that the variable was 
generating random directions.  

* **Difficulty starting game once user clicks screen**

I did not want my game to start straight away once the user clicked start on the landing page. I decided I would get the user to click the screen to start the game sequence once they are on the game page. 

However, when creating a click function to start the game, I could not specify that the sequence would only be called on the first click. This resulted with the game calling a direction every time I clicked the screen. 


Solution: I found a thread in Stack Overflow that helped me solve this problem. I have linked this thread in my contributions. 


## Contributions 
### Code 
1. **Stack Overflow**

* The following thread was used to help play audio once a random direction 
was generated. [View here.]( https://stackoverflow.com/questions/9419263/how-to-play-audio)

* The following thread helped me start the game sequence once the user clicked on the screen 
for the first time. [View here.]( https://stackoverflow.com/questions/9336700/target-only-the-first-click-in-jquery) 



