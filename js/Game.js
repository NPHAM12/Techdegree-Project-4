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
  this.activePhrase= null;
}

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
