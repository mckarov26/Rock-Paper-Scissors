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


const playRound = (humanChoice, computerChoice) => {
    

    const resultDiv = document.getElementById("results");
   
  
   

   

    if (humanChoice === computerChoice) {
        humanScore++;
        computerScore++;
       resultDiv.textContent = `It's a tie! You both chose ${humanChoice}. Your score is ${humanScore} and Computer score is ${computerScore}`;
        
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultDiv.textContent = `You win!, ${humanChoice} beats ${computerChoice}. Your score is ${humanScore} and Computer score is ${computerScore}`;
        
        
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        computerScore++;
        resultDiv.textContent = `Computer win! ${computerChoice} beats ${humanChoice}. Your score is ${humanScore} and Computer score is ${computerScore}`;

        
    } else {
        console.log("Invalid! Please Choose rock, paper or scissors");
    }


    

 
    
}


document.getElementById("rock").addEventListener("click", () => {
    const humanChoice = "rock";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
});


document.getElementById("paper").addEventListener("click", () => {
    const humanChoice = "paper";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
} )

document.getElementById("scissors").addEventListener("click", () => {
    const humanChoice = "scissors";
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
})


