//* *** ROCK ๐ชจ PAPER ๐งป SCISSORS โ๏ธ *** *//

const choice = ["rock", "paper", "scissors"];

function computerPlay() 
{
    const randomChoice = choice[ Math.floor(Math.random() * choice.length) ];
    return randomChoice;
}

function whoWins (playerSelection, computerSelection) 
{   
    if (playerSelection == computerSelection) {
    return "T";
    }    
    else if ( (playerSelection == "rock" && computerSelection == "scissors") 
    || (playerSelection == "scissors" && computerSelection == "paper") 
    || (playerSelection == "paper" && computerSelection == "rock" ) ) {
        return "P";
    }
    else {
        return "C";
    }
}

function playRound(playerSelection, computerSelection) 
{
    //* code here // Maybe add switch
    const result = whoWins( playerSelection, computerSelection );
    if (result == "T") {
        return "It's a tie! ๐"
    }
    else if ( result == "P" ) {
        return `The Player Wins! ๐ ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `The Computer Wins! ๐ ${computerSelection} beats ${playerSelection}`;
    }
}

function game() 
{
    let playerScore = 0;
    let computerScore = 0;

    console.log("Wilkommen!!");
    for ( let i = 0; i < 5; i++ ) 
    {
        //* code here
        const playerSelection = playerChoice();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("New Round! ๐");
        
        //Checks whoWins the round
        if (whoWins(playerSelection, computerSelection) == "P") {
            playerScore++;
        }
        else if (whoWins(playerSelection, computerSelection) == "C") {
            computerScore++;
        }
    }
    console.log("Game Over! ๐");
    
    if ( playerScore > computerScore ) {
        console.log("Final score: The player wins the rounds! ๐ฅ");
    }
    else if ( computerScore > playerScore ) {
        console.log("Final score: The computer wins the rounds! ๐ฅ๏ธ");
    }
    else {
        console.log("Final score: It's a tie! ๐จโโ๏ธ");
    }
} 

game();

function playerChoice () 
{   // Validates the input
    let validInput = false;
    while( validInput == false )
    {
        const options = prompt("rock ๐ชจ paper ๐งป scissors โ๏ธ");
        if ( options == null) {
            continue;
        }
        const lowCase = options.toLowerCase();
        if ( choice.includes(lowCase) ){
            validInput = true;
            return lowCase;
        }
    }
}