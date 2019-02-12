/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * NGUYEN PHAM
 * Phrase.js */

class Phrase {
  /*phrase: this is the actual phrase the Phrase object is representing.
        This property should be set to the phrase parameter, but converted to all lower case.*/
  constructor(phrase) {
    this.phrase = phrase;
  }
  /* addPhraseToDisplay(): method which adds the phrase to the gameboard display when the game start*/
  addPhraseToDisplay() {
    for (let i in this.phrase) {
      const newLi = $('<li></li>'); //create a new li element for each character in string
      if (this.phrase[i] === " ") { // if a character is space
        newLi.addClass(`hide space`);
      } else { // if a character is anything but not space
        newLi.addClass(`hide letter ${this.phrase[i]}`);
      }
      newLi.text(this.phrase[i]);
      $('#phrase ul').append(newLi); // add the child (li) to the parent (ul)
    }
  }

  /* checkLetter(char): method which checks if a letter is in the phrase then return true.*/
  checkLetter(char) {
    for (let i in this.phrase) {
      if (this.phrase[i] === char) { //if char === one of char in the phrase -> exit and return true
        return true;
      }
    }
    return false; // else -> return false
  }

  /* showMatchedLetter(char): method which reveals the letter(s) on the board that matches the player's selection*/
  showMatchedLetter(char) {
    const arrLi = document.querySelectorAll('#phrase li');
    const correctAudio = new Audio('correct.mp3'); //create variable audio.Its property is correct.mp3
    arrLi.forEach(li => { // Iteration in array LI
      if (li.textContent === char) {//if text content of an index is matched to selected char
        li.classList.remove('hide', 'letter', char);  //remove old class attributes
        li.classList.add('show', 'bounce', char); //add new class attributes
        correctAudio.play(); //play audio
      }
    });
  }
}
