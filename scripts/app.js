var playerScore = 0;
var computerScore = 0;
home = `
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

play = `
  <h2>Score: ${playerScore}-${computerScore}</h2>
  <h2>Opponent Chose: Rock!</h2>
  <div class="playerChoices">
  <button class="playerChoice" value ="Rock">Rock</button>
  <button class="playerChoice" value ="Paper">Paper</button>
  <button class="playerChoice" value="Scissors">Scissors</button>
  </div> `;


//Dynamically updates the screen based on what buttons are hit.
class displaySetter {
	constructor() {
		const startPage = home;
		this.displayScreen = startPage;
	}

	get displayScreen() {
		return this.value
	}
	set displayScreen(page) {
		this.newPage = page;
		this.setDisplay(this.newPage);
	}

	setDisplay(newDisplay) {
		document.getElementById("content").innerHTML = newDisplay;
	}
}

//Contains most game logic
class game {
	constructor(gameCount) {
		this.gameCount = gameCount;
		displaySetter.displayScreen = play;
		const playerChoices = Array.from(document.querySelectorAll('.playerChoice'));
		playerChoices.forEach(playerChoice => playerChoice.addEventListener('click', this.playRound(e)));
	}

	computerChoice() {
		choices = ["Rock", "Paper", "Scissors"]
		computerChoice = choices[Math.floor(Math.random() * 3)];
		return computerChoice;
	}

	set playerChoice(selection) {
		this.choice = selection;
		return this.choice;
	}

	playRound(e) {
		var playerChoice = this.playerChoice = e;
		console.log(playerChoice);
	}
}

displaySetter = new displaySetter();
document.getElementById("playButton").addEventListener('click', function () { game = new game(5); });
