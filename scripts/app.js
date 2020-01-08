require('game.js');
require('displaySetter.js')

displaySetter = new displaySetter();
document.getElementById("playButton").addEventListener('click', function(){game = new game(5);});
