/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * NGUYEN PHAM
 * app.js */

let game;
//start the game
$('#btn__reset').on('click', function() {
  reset();
  game = new Game();
  game.startGame();
  console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);
});

// action click a key on the screen keyboard
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
