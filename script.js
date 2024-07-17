function getComputerChoice(){
    let randomNumber=Math.random();
    if(randomNumber<0.33){
        return "rock";
    }
    else if(randomNumber<0.66){
        return "paper";
    }
    else{
        return "scissors";
    }
}
let humanScore=0;
let computerScore=0;
function playRound(humanChoice,computerChoice){
    if(humanChoice===computerChoice){
        humanScore++;
        computerScore++;
        score.textContent=`You: ${humanScore} - Computer: ${computerScore}`;
        roundResult.textContent="Round Tied! Both get 1 point";
    }
    else if(computerChoice==="rock" && humanChoice==="paper"
        || computerChoice==="paper" && humanChoice==="scissors"
        || computerChoice==="scissors" && humanChoice==="rock"
    ){
        humanScore++;
        score.textContent=`You: ${humanScore} - Computer: ${computerScore}`;
        roundResult.textContent=`You Win! ${humanChoice[0].toUpperCase()+humanChoice.slice(1)} beats ${computerChoice[0].toUpperCase()+computerChoice.slice(1)}`;
    }
    else{
        computerScore++;
        score.textContent=`You: ${humanScore} - Computer: ${computerScore}`;
        roundResult.textContent=`You Lose! ${computerChoice[0].toUpperCase()+computerChoice.slice(1)} beats ${humanChoice[0].toUpperCase()+humanChoice.slice(1)}`;
    }
    if(humanScore===5 || computerScore===5){
        if(humanScore===5 && computerScore!==5){
            roundResult.textContent="You have won the game!";
        }
        else if(computerScore===5 && humanScore!==5){
            roundResult.textContent="You have lost the game!";
            
        }
        else{
            roundResult.textContent="Game Tied!";
        }
        rock.removeEventListener("click",rockClickHandler);
        paper.removeEventListener("click",paperClickHandler);
        scissors.removeEventListener("click",scissorsClickHandler);
        const playAgain=document.createElement("button");
        playAgain.classList.add("reset");
        playAgain.addEventListener("click", ()=> location.reload());
        playAgain.textContent="Play Again";
        result.appendChild(playAgain);
    }
}

const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const scissors=document.querySelector(".scissors");
const rockClickHandler = () => {
    const computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
};
rock.addEventListener("click", rockClickHandler);

const paperClickHandler = () => {
    const computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
};
paper.addEventListener("click", paperClickHandler);

const scissorsClickHandler = () => {
    const computerSelection = getComputerChoice();
    playRound("scissors", computerSelection);
};
scissors.addEventListener("click", scissorsClickHandler);

const result=document.querySelector(".result");
const roundResult=document.createElement("div");
roundResult.classList.add("roundResult");
const score=document.createElement("div");
score.classList.add("score");
result.appendChild(score);
result.appendChild(roundResult);
