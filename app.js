const playerChoiceElement = document.getElementById("playerChoice");
const computerChoiceElement = document.getElementById("computerChoice");

//const resultElement = document.getElementById("result");

let userScore = 0;
let pcScore = 0;
const userScore_class = document.getElementById('userScore')
const pcScore_class = document.getElementById('pcScore')
const result_class = document.getElementById('result')

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", startGame));

function startGame(event) {

  const button = event.currentTarget;
  const playerChoice = button.dataset.choice;

  const computerChoice = getComputerChoice();

  // Calcular ganador
  //const playerWins = isPlayerWinner(playerChoice, computerChoice);
  const winner = setWinner(playerChoice, computerChoice);

  // Mostrar resultado
  playerChoiceElement.setAttribute("src", `imgs/${playerChoice}.png`);
  computerChoiceElement.setAttribute("src", `imgs/${computerChoice}.png`);

  // const result = playerWins ? "GANASTE" : "PERDISTE";

  //   if (playerWins === true) {
  //     result.textContent = "GANASTE";
  //   } else if (!playerWins) {
  //     result.textContent = "PERDISTE";
  //   } else if (playerWins === "draw") {
  //     result.textContent = "EMPATASTE";
  //   }

  //resultElement.textContent = winner;
}

const possibleChoices = ["piedra", "papel", "tijeras"];

function getComputerChoice() {
  // Obtener un valor aleatorio
  const computerChoice = Math.floor(Math.random() * 3);
  // Retornar elección
  return possibleChoices[computerChoice];
}

// Antes: isPlayerWinner
function setWinner(playerChoice, computerChoice) {

  console.log("playerChoice", playerChoice);
  console.log("computerChoice", computerChoice);

  if (userScore === 3) {
    alert('Llegaste a la puntuacion máxima, GANASTE! 😀');
    document.location.reload();
    return true;

  } else {
    if (pcScore === 3) {
      alert('La pc llegó a la puntacion máxima, PERDISTE ☹️')
      document.location.reload();
      return true;
    }
  }

  if (
    (playerChoice === "piedra" && computerChoice === "tijeras") ||
    (playerChoice === "papel" && computerChoice === "piedra") ||
    (playerChoice === "tijeras" && computerChoice === "papel")
  ) {
    userScore++
    result_class.innerHTML = "Ganaste, " + playerChoice + " contra " + computerChoice
    userScore_class.innerHTML = userScore
    console.log('playerScore => ', userScore);
    console.log('pcScore => ', pcScore)
    return result_class;
  } else if (playerChoice === computerChoice) {
    result_class.innerHTML = "Empate! " + playerChoice + " contra " + computerChoice
    console.log('playerScore => ', userScore);
    console.log('pcScore => ', pcScore)
    return result_class;
  } else {
    result_class.innerHTML = "Perdiste, " + playerChoice + " contra " + computerChoice
    pcScore++
    pcScore_class.innerHTML = pcScore
    console.log('playerScore => ', userScore);
    console.log('pcScore => ', pcScore)
    return result_class;
  }

}

