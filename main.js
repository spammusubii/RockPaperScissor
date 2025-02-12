const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const rpsButtons = [rock, paper, scissor];
const result = document.querySelector('.result');
const gameButton = document.querySelector('.game-button');
let numberOfRounds = document.querySelector("#numberOfRounds").value;
let numberOfRoundsPlayed = 0;
let humanWins = 0;
let computerWins = 0;
const numberOfRoundsInput = document.querySelector("#numberOfRounds");

gameButton.addEventListener('click', (e) => {
    if (e.target.textContent === "Start") {
        startGame();
    } else {
        resetGame();
        changeInputAvailability();
        if (!paper.disabled) {
            changeRpsButtonsAvailability();
        }
    }
})

rpsButtons.forEach(button => button.addEventListener('click', (e) => {
    const humanChoice = e.target.id;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    if (numberOfRoundsPlayed == numberOfRounds){
        changeRpsButtonsAvailability();
        declareGameWinner(`${computerWins > humanWins ? 'computer' : computerWins === humanWins ? 'tie' : 'human'}`)
    }
}))

// Disable/Enable Rock, Paper, Scissors buttons
function changeRpsButtonsAvailability() {
    const rpsList = rpsButtons.forEach(element=>element.disabled=!element.disabled);
    return rpsList;
}

// Disable/Enable number of rounds input
function changeInputAvailability() {
    numberOfRoundsInput.disabled = !numberOfRoundsInput.disabled;
}

// declare function getComputerChoice
function getComputerChoice() {
    // create variable result to contain computer's choice
    let computerChoice;

    // Use Math.random to receive a number between 0 and 1
    // Multiply random number by 3 to get 3 possible values
    // and use Math.floor to round to nearest whole number
    // set variable, rNum, to the value
    const rNum = Math.floor(Math.random()*3) + 1;

    // Use if and else if statements to convert number to either rock/paper/scissor
    // IF rNum is equal to 1
    if (rNum === 1) {
        // Set result to rock
        computerChoice = "rock";
    }
    // ELSE IF rNum is equal to 2
    else if (rNum === 2) {
        // Set result to paper
        computerChoice = "paper"; 
    }
    // ELSE
    else {
        // Set result to scissor
        computerChoice = "scissor";
    }
    // return result
    return computerChoice;
}

// Declare function playRound with parameters humanChoice and computerChoice
function playRound(humanChoice, computerChoice){
    let winner;
    // If humanChoice is equal to rock
    if (humanChoice === "rock"){
        // if computerChoice is equal to paper, then computer wins
        if (computerChoice === "paper"){
            computerWins += 1;
            winner = "computer"
        }
        // else if computerChoice is equal to scissor, human wins
        else if (computerChoice === "scissor"){
            humanWins += 1;
            winner = "human";
        }
        // else its a tie
        else {
            humanWins += 1;
            computerWins += 1;
            winner = "tie";
        }
    }
    // ELSE IF humanChoice is equal to paper
    else if (humanChoice === "paper"){
        // if computerChoice is equal to scissor, then computer wins
        if (computerChoice === "scissor"){
            computerWins += 1;
            winner = "computer"
        }
        // if computerChoice is equal to rock, then human wins
        else if (humanChoice === "rock"){
            humanWins += 1;
            winner = "human";
        }
        // else its a tie
        else {
            humanWins += 1;
            computerWins += 1;
            winner = "tie";
        }
    }
    // ELSE IF humanChoice is equal to scissor
    else {
        // if computerChoice is equal to rock, then computer wins
        if (computerChoice === "rock"){
            computerWins += 1;
            winner = "computer"
        }
        // if computerChoice is equal to paper, then human wins
        else if (computerChoice === "paper"){
            humanWins += 1;
            winner = "human";
        }
        // else its a tie
        else {
            humanWins += 1;
            computerWins += 1;
            winner = "tie";
        }
    }

    ++numberOfRoundsPlayed;
    declareRoundWinner(winner, humanChoice, computerChoice);
}

function declareRoundWinner(winner, humanChoice, computerChoice) {
     // IF human is winner
    if (winner === "human"){
        // output you win, human's choice beats computer's choice
        result.innerHTML += `<p>Round ${numberOfRoundsPlayed}: You win! Your choice of ${humanChoice} beat the computer's choice of ${computerChoice}.</p>`
    }
    // ELSE IF computer is winner
    else if (winner === "computer"){
        // output you lose, computer's choice beats human's choice
        result.innerHTML += `<p>Round ${numberOfRoundsPlayed}: You lose! The computer's choice of ${computerChoice} beat your choice of ${humanChoice}.</p>`
    }
    // ELSE its a tie
    else {
        // output tie, both you and the computer chose ###, so both of you get a point
        result.innerHTML += `<p>Round ${numberOfRoundsPlayed}: It's a tie! You both chose ${humanChoice}.</p>`
    }
}

function declareGameWinner(winner) {
    if (winner === "human"){
        result.innerHTML += `<p>After ${numberOfRounds + (numberOfRounds == 1 ? " round" : " rounds")}, you won by a score of ${humanWins} to ${computerWins}.</p>`;
    }
    // ELSE IF computer is greater than  human
        // output that computer won
    else if (winner === "computer"){
        result.innerHTML += `<p>After ${numberOfRounds + (numberOfRounds == 1 ? " round" : " rounds")}, you lost by a score of ${humanWins} to ${computerWins}.</p>`;
    }
    // ELSE
        // tie game
    else {
        result.innerHTML += `<p>After ${numberOfRounds + (numberOfRounds == 1 ? " round" : " rounds")}, there was a tie of ${humanWins} to ${computerWins}.</p>`;
    }
}

// start the game
function startGame(){
    resetGame();
    // Get the number of rounds to play
    numberOfRounds = document.querySelector("#numberOfRounds").value;
    // enable buttons and start game with the provided number of rounds
    changeInputAvailability();
    changeRpsButtonsAvailability();
    gameButton.textContent = `Reset`;
}

function resetGame(){
    // reset rounds played back to 0
    numberOfRoundsPlayed = 0;
    // initialize human score to 0
    humanWins = 0;
    // initialize computer score to 0
    computerWins = 0;
    // change button to start game
    gameButton.textContent = `Start`;
    result.textContent = "";
}