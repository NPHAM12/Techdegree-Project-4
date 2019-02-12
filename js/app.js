/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * NGUYEN PHAM
 * app.js */

/* After a game is completed, the gameboard needs to be reset so that clicking the "Start Game" button will successfully load a new game.
   Remove all li elements from the Phrase ul element.
   Enable all of the onscreen keyboard buttons and update each to use the key CSS class,
        and not use the chosen or wrong CSS classes.
   Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom
        of the gameboard to display the liveHeart.png image.*/
let game;
$('#btn__reset').on('click', function() {
  reset();
  game = new Game();
  game.startGame();
  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
  // console.log(game.activePhrase.phrase.length);
});

// click a key on keyboard
  $('button.key').on('click', function(e){
    game.handleInteraction(e.target);     // get Object element e.target (<button .....>...</button>) to be an argument in handleInteraction();
  });

// change everything back to original -> remove all css classes, enanle selected buttons,
                                    // remove all element li in id=phrase, and change all lostHeart to liveHeart
function reset(){
  $('button.key').removeClass('wrong');
  $('button.key').removeClass('chosen');
  $('button.key').prop('disabled', false);
  $('#phrase li').remove();
  $('#scoreboard img[src$="lostHeart.png"]').attr('src', 'images/liveHeart.png')
}
