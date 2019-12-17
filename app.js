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
<h2>Score: 1-1</h2>
<h2>Opponent Chose: Rock!</h2>
<div class="playerChoices">
    <button class="playerChoice" value ="Rock">Rock</button>
    <button class="playerChoice" value ="Paper">Paper</button>
    <button class="playerChoice" value="Scissors">Scissors</button>
</div> `;

//Dynamically updates the screen based on what buttons are hit.
class displaySetter {
    constructor()
    {
        this.value = home;
        this.setDisplay();
    }

    get displayScreen() {
        return this.value
    }
	set displayScreen(value){
        this.value = value;
        this.setDisplay();
    }

    setDisplay() {
        document.getElementById("content").innerHTML = this.value;
    }	
}

//Will contain most game logic

class game {
    
    constructor(gameCount){
        this.gameCount = gameCount;
        displaySetter.displayScreen = play;
        const playerChoices = Array.from(document.querySelectorAll('.playerChoice'));
        playerChoices.forEach(playerChoice => playerChoice.addEventListener('click', playRound()));
    }

    computerChoice(){
        choices = ["Rock", "Paper", "Scissors"]
        computerChoice = choices[Math.floor(Math.random() * 3)];
        return computerChoice;
    }

    playerChoice(){
        
    }

    playRound(){

    }
}

displaySetter = new displaySetter();
game = new game(5);
document.getElementById("playButton").addEventListener('click', function(){game.startGame()});
