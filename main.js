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

// Declare function getHumanChoice
function getHumanChoice(){

    // Declare variable humanChoice as undefined
    let humanChoice;

    // use while loop to repeat until given a valid response or q is given
    while (humanChoice === undefined){
        // Use prompt to get human's choice
        // Ask for rock, paper, or scissor and
        // rock can be 1, paper can be 2, and scissor can be 3, or quit can be q
        // store in response variable
        let response = prompt("Rock (1), paper (2), or scissor (3)").toLowerCase();

        // Use if/else if/else to see what the human chose
        // IF response is equal to "1" or "rock"
            // humanChoice = "rock"
        if (response === "rock" || response === "1"){
            humanChoice = "rock";
        }
        // ELSE IF response is equal to "2" or "paper"
            // humanChoice = "paper"
        else if (response === "paper" || response === "2"){
            humanChoice = "paper";
        }
        // ELSE IF response is equal to "3" or "scissor"
            // humanChoice = "scissor"
        else if (response === "scissor" || response === "3"){
            humanChoice = "scissor";
        }
        // repeat until correct choice is given or exit
    }

    // return humanChoice
    return humanChoice;
}

// Declare function playRound with parameters humanChoice and computerChoice
function playRound(humanChoice, computerChoice){
    let winner;
    // If humanChoice is equal to rock
    if (humanChoice === "rock"){
        // if computerChoice is equal to paper, then computer wins
        if (computerChoice === "paper"){
            computer += 1;
            winner = "computer"
        }
        // else if computerChoice is equal to scissor, human wins
        else if (computerChoice === "scissor"){
            human += 1;
            winner = "human";
        }
        // else its a tie
        else {
            human += 1;
            computer += 1;
            winner = "tie";
        }
    }
    // ELSE IF humanChoice is equal to paper
    else if (humanChoice === "paper"){
        // if computerChoice is equal to scissor, then computer wins
        if (computerChoice === "scissor"){
            computer += 1;
            winner = "computer"
        }
        // if computerChoice is equal to rock, then human wins
        else if (humanChoice === "rock"){
            human += 1;
            winner = "human";
        }
        // else its a tie
        else {
            human += 1;
            computer += 1;
            winner = "tie";
        }
    }
    // ELSE IF humanChoice is equal to scissor
    else {
        // if computerChoice is equal to rock, then computer wins
        if (computerChoice === "rock"){
            computer += 1;
            winner = "computer"
        }
        // if computerChoice is equal to paper, then human wins
        else if (computerChoice === "paper"){
            human += 1;
            winner = "human";
        }
        // else its a tie
        else {
            human += 1;
            computer += 1;
            winner = "tie";
        }
    }

    // IF human is winner
    if (winner === "human"){
        // output you win, human's choice beats computer's choice
        console.log(`You win! ${humanChoice.slice(0,1).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`)
    }
    // ELSE IF computer is winner
    else if (winner === "computer"){
        // output you lose, computer's choice beats human's choice
        console.log(`You lose! ${computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1)} beats ${human}.`)
    }
    // ELSE its a tie
    else {
        // output tie, both you and the computer chose ###, so both of you get a point
        console.log(`It's a tie! You both chose ${humanChoice}.`)
    }
}

// Declare playGame
function playGame(){
    // initialize human score to 0
    let human = 0;

    // initialize computer score to 0
    let computer = 0;

    // create function playRound
    // Declare function playRound with parameters humanChoice and computerChoice
    function playRound(humanChoice, computerChoice){
        let winner;
        // If humanChoice is equal to rock
        if (humanChoice === "rock"){
            // if computerChoice is equal to paper, then computer wins
            if (computerChoice === "paper"){
                computer += 1;
                winner = "computer"
            }
            // else if computerChoice is equal to scissor, human wins
            else if (computerChoice === "scissor"){
                human += 1;
                winner = "human";
            }
            // else its a tie
            else {
                human += 1;
                computer += 1;
                winner = "tie";
            }
        }
        // ELSE IF humanChoice is equal to paper
        else if (humanChoice === "paper"){
            // if computerChoice is equal to scissor, then computer wins
            if (computerChoice === "scissor"){
                computer += 1;
                winner = "computer"
            }
            // if computerChoice is equal to rock, then human wins
            else if (humanChoice === "rock"){
                human += 1;
                winner = "human";
            }
            // else its a tie
            else {
                human += 1;
                computer += 1;
                winner = "tie";
            }
        }
        // ELSE IF humanChoice is equal to scissor
        else {
            // if computerChoice is equal to rock, then computer wins
            if (computerChoice === "rock"){
                computer += 1;
                winner = "computer"
            }
            // if computerChoice is equal to paper, then human wins
            else if (computerChoice === "paper"){
                human += 1;
                winner = "human";
            }
            // else its a tie
            else {
                human += 1;
                computer += 1;
                winner = "tie";
            }
        }

        // IF human is winner
        if (winner === "human"){
            // output you win, human's choice beats computer's choice
            console.log(`You win! ${humanChoice.slice(0,1).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`)
        }
        // ELSE IF computer is winner
        else if (winner === "computer"){
            // output you lose, computer's choice beats human's choice
            console.log(`You lose! ${computerChoice.slice(0,1).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`)
        }
        // ELSE its a tie
        else {
            // output tie, both you and the computer chose ###, so both of you get a point
            console.log(`It's a tie! You both chose ${humanChoice}.`)
        }
    }

    // use for loop to play 5 rounds
    for (let i = 0; i < 5; i++){
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        console.log(`Round ${i+1}: You chose ${humanChoice} and Computer chose ${computerChoice}.`);
        playRound(humanChoice, computerChoice);
    }

    // Output the winner of the game
    // IF  human is greater than computer
        // output that human won
    if (human > computer){
        console.log(`After 5 rounds, you won by a score of ${human} to ${computer}`);
    }
    // ELSE IF computer is greater than  human
        // output that computer won
    else if (computer > human){
        console.log(`After 5 rounds, you lost by a score of ${human} to ${computer}`);
    }
    // ELSE
        // tie game
    else {
        console.log(`After 5 rounds, there was a tie of ${human} to ${computer}`)
    }
}