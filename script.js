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
// console.log(getComputerChoice())
function getHumanChoice(){
    let humanChoice=prompt("Enter rock,paper or scissors: ","rock");
    return humanChoice.toLowerCase();
}
// console.log(getHumanChoice());
let humanScore=0;
let computerScore=0;
function playRound(humanChoice,computerChoice){
    if(humanChoice===computerChoice){
        console.log("Round Tied! Both get 1 point");
        humanScore++;
        computerScore++;
    }
    else if(computerChoice==="rock" && humanChoice==="paper"
        || computerChoice==="paper" && humanChoice==="scissors"
        || computerChoice==="scissors" && humanChoice==="rock"
    ){
        console.log(`You Win! ${humanChoice[0].toUpperCase()+humanChoice.slice(1)} beats ${computerChoice[0].toUpperCase()+computerChoice.slice(1)}`);
        humanScore++;
    }
    else{
        console.log(`You Lose! ${computerChoice[0].toUpperCase()+computerChoice.slice(1)} beats ${humanChoice[0].toUpperCase()+humanChoice.slice(1)}`);
        computerScore++;
    }
}
function playGame(){
    console.log("Welcome to Rock,Paper,Scissor! The Game has 5 rounds")
    for(let i=0;i<5;i++){
        const humanSelection=getHumanChoice();
        const computerSelection=getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
    if(humanScore>computerScore){
        console.log("You have won the game");
    }
    else if(computerScore>humanScore){
        console.log("You have lost the game");
    }
    else{
        console.log("Game Tied");
    }
}
playGame();