/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * NGUYEN PHAM
 * app.js */

$(document).ready(function() {
  $('.title').hide().show(2000);
  let game;
  $('#btn__reset').on('click', function() {
    reset();
    game = new Game();
    game.startGame();
    console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
  });

  // click a key on the screen keyboard
  $('button.key').on('click', function(e) {
    game.handleInteraction(e.target); // get Object element e.target (<button .....>...</button>) to be an argument in handleInteraction();
  });

  // keypress -> the pressing key should be letters
  $(document).on('keypress', function(e) {
  //Iterate in list of keys to find out a letter match with a letter of pressing on physical keyboard
    $('button.key').each((index, value) => {
      if (value.innerText === e.key) { //check the pressing key is matched with the value of an object element in the key
        return game.handleInteraction(value); // then make this Obejct element to be an argurment of handleInteraction() method
      }
    });
  });

  // change everything back to original -> remove all css classes, enanle selected buttons,
  // remove all element li in id=phrase, and change all lostHeart to liveHeart
  function reset() {
    $('button.key').removeClass('wrong');
    $('button.key').removeClass('chosen');
    $('button.key').prop('disabled', false);
    $('#phrase li').remove();
    $('#scoreboard img[src$="lostHeart.png"]').attr('src', 'images/liveHeart.png')
  }
});
