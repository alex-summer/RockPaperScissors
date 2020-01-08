class game {
    
  constructor(gameCount){
    this.gameCount = gameCount;
    displaySetter.displayScreen = play;
    const playerChoices = Array.from(document.querySelectorAll('.playerChoice'));
    playerChoices.forEach(playerChoice => playerChoice.addEventListener('click', this.playRound()));
  }

  computerChoice(){
    choices = ["Rock", "Paper", "Scissors"]
    computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
  }

  playerChoice(selection){
    var choice = selection.toString();
		return choice;
  }

  playRound(e){
		var playerChoice = this.playerChoice(e);
		console.log(playerChoice);
  }
}
