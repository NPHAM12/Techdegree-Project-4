/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * NGUYEN PHAM
 * Game.js */

class Game {
  constructor() {
    //missed: used to track the number of missed guesses by the player
    this.missed = 0;
    // phrases: property set to an array of five Phrase objects to use with the game
    // phrases added to the game only include letters and spaces
    this.phrases = [{
      phrase: "a bird in the hand is worth two in the bush",
      }, {
      phrase: "six of one half a dozen of the other",
      }, {
      phrase: "no good deed goes unpunished",
      }, {
      phrase: "all publicity is good publicity",
      }, {
      phrase: "failing to plan is planning to fail",
      }];

      // this.phrases = [{
      //   phrase: "bird",
      // }, {
      //   phrase: "six",
      // }, {
      //   phrase: "good",
      // }];

    /*  activePhrase: This is the Phrase object that’s currently in play. The initial value is null.
                    Within the startGame() method, this property will be set to the Phrase object returned
                                                              from a call to the getRandomPhrase() method.*/
    this.activePhrase = null;
  }

  /*getRandomPhrase(): method that randomly retrieves one phrase from the phrases array.*/
  getRandomPhrase() {
    let randPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    return randPhrase;
  }

  /*startGame(): method that hides the start screen overlay, sets the activePhrase property to a random phrase.*/
  startGame() {
    $('#overlay').hide(); //hide the start screen
    const newPhrase = new Phrase(this.getRandomPhrase().phrase); //create a selected phrase
    this.activePhrase = newPhrase; //store the selected phrase in activePhrase property
    newPhrase.addPhraseToDisplay(); // add the selected phrase to display
    let startAudio = new Audio('start.mp3');
    startAudio.play();
  }

  /*checkForWin(): this method checks to see if the player has revealed all of the letters in the active phrase.*/
  checkForWin() {
    let checkWin = false; // array of collection of letter class in elemnt 'li'
    if ($('li.letter').length === 0) { // $('li.show.letter'): array of objects which match to li has classes are show and letter
      checkWin = true;
    }
    return checkWin;
  }

  /*removeLife(): this method removes a life from the scoreboard, by replacing one of the liveHeart.png images with a lostHeart.png
          image (found in the images folder) and increments the missed property.
          If the player has five missed guesses (i.e they're out of lives), then end the game by calling the gameOver() method.*/
  removeLife() {
    const score = $('#scoreboard img[src$="liveHeart.png"]'); // get all scores
    const loseAudio = new Audio('lose.mp3'); //create variable audio.Its property is win.mp3
    score.first().attr('src', 'images/lostHeart.png'); // lost a point when missed
    score.length -= 1;
    if (score.length === 0) {
      console.log("LOSE!");
      loseAudio.play();
    }
    this.missed += 1;
    return this.missed;
  }

  /*gameOver(): this method displays the original start screen overlay, and depending on the outcome of the game,
        updates the overlay h1 element with a friendly win or loss message,
        and replaces the overlay’s start CSS class with either the win or lose CSS class.*/
  gameOver(cond) {
    const screen = document.getElementById('overlay');
    //if lose
    if (cond === false) {
      screen.style.display = "";
      screen.className = "lose";
      $('#game-over-message').text("Sorry, better luck next time!");
    }
    //if win
    if (cond === true) {
      screen.style.display = "";
      screen.className = "win";
      $('#game-over-message').text("Great job!");
    }
  }


  /*handleInteraction(): this method controls most of the game logic.
        Handles onscreen keyboard button clicks
        - Disable the selected letter’s onscreen keyboard button.
        - If the phrase does NOT include the guessed letter,
              add the "WRONG" CSS class to the selected letter's keyboard button and
              call the removeLife() method.
        - If the phrase includes the guessed letter, add the "CHOSEN" CSS class to the selected letter's keyboard button,
            call the showMatchedLetter() method on the phrase, and then
            call the checkForWin() method.
        - If the player has won the game, also call the gameOver() method.

  */
   handleInteraction(button) { //button is an object element of jquery Objects <button...>...</button>
     const selectedAnswer = button.innerText; // get content of selected button
     const winAudio = new Audio('win.mp3'); //create variable audio.Its property is win.mp3
     const loseAudio = new Audio('lose.mp3'); //create variable audio.Its property is lose.mp3
     // if wrong answer
     if (!this.activePhrase.checkLetter(selectedAnswer)){// if the cliked button is not matched with  any letter of the active phrase
       console.log("wrong");
       $(button).addClass('wrong'); //add wrong class from css to selected key
       // $(button).prop('disabled', true);
       $(button).attr('disabled', 'disabled');  // disabled the selected key
       this.removeLife(); // change liveHeart to lostHeart
       // Lose when all missed reach to 5 and checkForWin() is false
       if(!this.checkForWin() && this.missed === 5){
         this.gameOver(false);
         loseAudio.play();
       }
     }
     // if correct answer
     else{
       console.log("correct");
       this.activePhrase.showMatchedLetter(selectedAnswer);
       // $(button).prop('disabled', true);
       $(button).attr('disabled', '');
       $(button).addClass('chosen');
       // if win when all missed doesn't reach to 5 and checkForWin() is true
       if(this.checkForWin() && this.missed !== 5){
         this.gameOver(true);
         winAudio.play();
       }
     }
  }
}
