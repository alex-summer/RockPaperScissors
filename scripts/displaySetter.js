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
	<h2>Score: ${}-${}</h2>
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

  setdisplay() {
    document.getElementById("content").innerHTML = displayScreen(value);
  }	
}
