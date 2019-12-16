const play = `
  <div class="playerChoices">
        <button class="playerChoice">Rock</button>
        <button class="playerChoice">Paper</button>
        <button class="playerChoice">Scissors</button>
  </div>
`;

function playGame(){
  document.getElementById("content").innerHTML = play
}


document.getElementById("playButton").addEventlistener('click', playGame);
