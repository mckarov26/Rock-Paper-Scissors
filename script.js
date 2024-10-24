//This is the Javascript File!
//Code below! 

const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    switch(computerChoice) {
        case 1: 
            return "rock";
            break;
        case 2: 
            return "paper";
            break;
        case 3:
            return "scissors";
            break;  
        
            
    }   
}






let humanScore = 0;
let computerScore = 0;
let roundNum = 1;
let maxRoundNum = 5;


const playRound = (humanChoice, computerChoice) => {
    

    const playGame = document.getElementById("playRound");
    const info = document.getElementById("info");
   
  
   

   

    if (humanChoice === computerChoice && roundNum <= maxRoundNum) {
        
        
        humanScore++;
        computerScore++;
        playGame.textContent = `Round ${roundNum}`;
        info.textContent = `You both chose ${humanChoice}. Your score is ${humanScore} and Computer score is ${computerScore}`;
        
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors" && roundNum <= maxRoundNum) ||
        (humanChoice === "paper" && computerChoice === "rock" && roundNum <= maxRoundNum) ||
        (humanChoice === "scissors" && computerChoice === "paper" && roundNum <= maxRoundNum)
    ) {
        
        humanScore++;
        playGame.textContent = `Round ${roundNum}`;
        info.textContent = `${humanChoice} beats ${computerChoice}. Your score is ${humanScore} and Computer score is ${computerScore}`;
        
        
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors" && roundNum <= maxRoundNum) ||
        (computerChoice === "paper" && humanChoice === "rock" && roundNum <= maxRoundNum) ||
        (computerChoice === "scissors" && humanChoice === "paper" && roundNum <= maxRoundNum)
    ) {
        
        computerScore++;
        playGame.textContent = `Round ${roundNum}`;
        info.textContent = `${computerChoice} beats ${humanChoice}. Your score is ${humanScore} and Computer score is ${computerScore}`;

        
    } else {
        info.textContent = `5 Rounds is Over, Do you wanna Play Again? `
    }

    
    roundNum++;
    
}
   
    
const checkWinner = () => {

    const whoWins = document.getElementById("checkWinner");

    if (roundNum > maxRoundNum) {

        if (humanScore > computerScore) {
            whoWins.textContent = "You win in this game. Good Job!";
        } else if (humanScore < computerScore) {
            whoWins.textContent = "You lose in this game. Try again next time!";
        } else if (humanScore === computerScore) {
            whoWins.textContent = "Tie! Human and Computer Wins!";
        }

    }
    
}
    












    


document.getElementById("rock").addEventListener("click", () => {
    const humanChoice = "rock";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    checkWinner();
});


document.getElementById("paper").addEventListener("click", () => {
    const humanChoice = "paper";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    checkWinner();
} )

document.getElementById("scissors").addEventListener("click", () => {
    const humanChoice = "scissors";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    checkWinner();
})


