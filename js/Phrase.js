class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }
  
  addPhraseToDisplay() {
    $('#phrase ul').append($('<h3>Add LI here<h3>')); //try to add a new element h3 inside the ul here
    $('div #phrase').append($('<p>Add P here/p>')); //try to add a new element p outside the ul here
  }
}
