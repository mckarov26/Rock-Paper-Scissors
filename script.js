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
        default:
            
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
            return "Invalid! Please Choose rock, paper or scissors";
    }
}

let humanScore = 0;
let computerScore = 0;


const playRound = (humanChoice, computerChoice) => {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win!, ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        console.log(`Computer win! ${computerChoice} beats ${humanChoice}`);
        computerChoice++;
    } else {
        console.log("Invalid input!");
    }
}

