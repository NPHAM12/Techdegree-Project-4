class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }
  
    addPhraseToDisplay() {
    for (let i in this.phrase) {
      const newLi = $('<li><li>'); //create a new li element for each character in string
      if (this.phrase[i] === " ") {
        console.log("space");
        newLi.addClass(`hide space`);
      } else {
        console.log("letter");
        newLi.addClass(`hide letter`);
      }
      newLi.text(this.phrase[i]);
      console.log("Add li: " );
      $('#phrase ul').append(newLi); // add the child (li) to the parent (ul)
    }
  }
}
