class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }
  
  addPhraseToDisplay() {
    console.log(`Length ${this.phrase.length}`);
    $('#phrase ul').append($('<h3>Add LI here<h3>')); 
    $('div #phrase').append($('<p>Add P here/p>')); 
  }
}
