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

const getHumanChoice = () => {
    let yourChoice = prompt("Please Choose rock, paper or scissors");
    let humanChoice = yourChoice.toLowerCase();

    switch(humanChoice) {
        case "rock":
            return "rock";
            break;
        case "paper":
            return "paper";
            break;
        case "scissors":
            return "scissors";
            break;
        default:    
            return "Please Choose the following string values: rock, paper or scissors";
            
    }
}




let humanScore = 0;
let computerScore = 0;


const playRound = () => {
    


    let humanChoice = getHumanChoice();
    humanChoice = humanChoice.toLowerCase();
    let computerChoice = getComputerChoice();

   

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win!, ${humanChoice} beats ${computerChoice}. Your score is ${humanScore} and Computer score is ${computerScore}`);
        
        
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        computerScore++;
        console.log(`Computer win! ${computerChoice} beats ${humanChoice}. Your score is ${humanScore} and Computer score is ${computerScore}`);

        
    } else {
        console.log("Invalid! Please Choose rock, paper or scissors");
    }
    
}

const playGame = () => {


    
        
    for (i = 1; i < 6; i++) {
        playRound();

    }

    console.log(`Your score is ${humanScore} and Computer Score is ${computerScore}`);

    

}



playGame(); 

