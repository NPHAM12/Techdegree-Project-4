class Game {
  constructor(){
  this.missed = 0;
  // this.phrases = this.createPhrases();
  this.phrases=
  [{
    phrase: "1",
    }, {
    phrase: "1 2",
    }, {
    phrase: "1 2 3",
    }];

  // [{
  //   phrase: "a bird in the hand is worth two in the bush",
  //   }, {
  //   phrase: "six of one half a dozen of the other",
  //   }, {
  //   phrase: "no good deed goes unpunished",
  //   }, {
  //   phrase: "all publicity is good publicity",
  //   }, {
  //   phrase: "failing to plan is planning to fail",
  //   }];
  this.activePhrase= null;
}

/*getRandomPhrase(): this method randomly retrieves one of the phrases stored in the phrases array and returns it.
 */
 getRandomPhrase() {
  let randPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
  return randPhrase;
}

   startGame() {
    const newPhrase = new Phrase(this.getRandomPhrase().phrase); //create a selected phrase
    this.activePhrase = newPhrase; //store the selected phrase in activePhrase property
    newPhrase.addPhraseToDisplay(); // add the selected phrase to display
    $('#overlay').hide();//hide the start screen
  }
}
