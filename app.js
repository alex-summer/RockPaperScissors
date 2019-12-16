const home = `
    <h2>Number of games?</h2>
    <form id="gameOptions">
        <select class="playerChoice" id="selectButton">
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="10">10</option>
        </select><br>
        <input class="playerChoice" id="playButton" type="submit" value="play">
    </form> `;

const play = `
    <div class="playerChoices">
        <button class="playerChoice">Rock</button>
        <button class="playerChoice">Paper</button>
        <button class="playerChoice">Scissors</button>
    </div>`;

let var displayNumber = 0;

function display(){
  document.getElementById("content").innerHTML = play
}


document.getElementById("playButton").addEventlistener('click', playGame);
