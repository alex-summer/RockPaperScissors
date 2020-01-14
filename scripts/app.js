var playerScore = 0;
var computerScore = 0;
var home = `
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

var play = `
	<div id="score">
		<h2>Score: ${playerScore}-${computerScore}</h2>
	</div>
  <div id="playerChoices">
  	<button class="playerChoice" value ="Rock">Rock</button>
  	<button class="playerChoice" value ="Paper">Paper</button>
  	<button class="playerChoice" value="Scissors">Scissors</button>
	</div> `;

let	newRound = 



//Dynamically updates the screen based on what buttons are hit.
class displaySetter {
	constructor() {
		this.displayScreen = home;
	}
	//Grabs value of displaySetter.displayScreen
	get displayScreen() {
		return this;
	}
	//runs setDisplay any time someone says displaysetter.displayScreen = 'xyz'
	set displayScreen(page) {
		this.setDisplay(page);
	}
	//Method for setting the display
	setDisplay(newDisplay) {
		if(newDisplay == "newRound"){
			document.getElementById("score").innerHTML = `<h2>Score: ${playerScore}-${computerScore}</h2>`;
		}
		else{
			document.getElementById("content").innerHTML = newDisplay;
		}
		
	}
}

//Contains most game logic
class game {
	constructor(gameCount) {
		playerScore = 0;
		computerScore = 0;
		this.gameCount = gameCount;
		displaySetter.displayScreen = play;
		const playerChoices = document.getElementById("playerChoices");
		playerChoices.addEventListener("click", this.playRound);
	}

	playRound() {
		const choices = ["Rock", "Paper", "Scissors"];
		var result;
		var computerChoice = choices[Math.floor(Math.random() * 3)];
		var playerChoice = event.target.value;
		if(playerChoice == computerChoice){
			result = "Tie";
		}
		else if (playerChoice == "Scissors"){
			if(computerChoice == "Paper"){
				result = "Win";
				playerScore++;
			}
			else if(computerChoice == "Rock"){
				result = "Loss"
				computerScore++;
			}
		}
		else if(playerChoice == "Paper"){
			if(computerChoice == "Rock"){
				result = "Win"
				playerScore++;
			}
			else if(computerChoice == "Scissors"){
				result = "Loss"
				computerScore++;
			}
		}
		else if(playerChoice == "Rock"){
			if(computerChoice == "Scissors"){
				result = "Win"
				playerScore++;
			}
			else if(computerChoice == "Paper"){
				result = "Loss"
				computerScore++;
			}
		}
		
		displaySetter.displayScreen = "newRound";
	}
}

displaySetter = new displaySetter();
document.getElementById("playButton").addEventListener('click', function () { game = new game(5); });
