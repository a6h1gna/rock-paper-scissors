let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const displayMsg = document.getElementById("display-msg");
const rockUser = document.getElementById("r");
const paperUser = document.getElementById("p");
const scissorsUser = document.getElementById("s");
const smallFontUser = "user".fontsize(3).sub();
const smallFontComp = "comp".fontsize(3).sub();
const btn = document.getElementById("reset");

function getComputerChoice(){
    const choices = ["r","p","s"];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}

function convertToWord(word){
    if(word === "r")    return "Rock";
    if(word === "s")    return "Scissors";
    if(word === "p")    return "Paper";
}
function win(userChoice,computerChoice){
    const choice = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    displayMsg.innerHTML = 
    `${convertToWord(userChoice)}${smallFontUser} beats ${convertToWord(computerChoice)}${smallFontComp}. You Win`;
    choice.classList.add("win-glow");
    setTimeout(()=> choice.classList.remove("win-glow"), 500);
}

function lose(userChoice,computerChoice){
    const choice = document.getElementById(userChoice);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    displayMsg.innerHTML = 
    `${convertToWord(userChoice)}${smallFontUser} loses to ${convertToWord(computerChoice)}${smallFontComp}. You Lose`;
    choice.classList.add("lose-glow");
    setTimeout(()=> choice.classList.remove("lose-glow"), 400);
}

function draw(userChoice,computerChoice){
    const choice = document.getElementById(userChoice);
    displayMsg.innerHTML = 
    `${convertToWord(userChoice)}${smallFontUser} equals ${convertToWord(computerChoice)}${smallFontComp}. It's a Draw`;
    choice.classList.add("draw-glow");
    setTimeout(()=> choice.classList.remove("draw-glow"), 400);
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice+" "+computerChoice)
    {
        case "r s":
        case "s p":
        case "p r":
            win(userChoice,computerChoice);
            break;
        case "r p":
        case "s r":
        case "p s":
            lose(userChoice,computerChoice);
            break;
        case "r r":
        case "p p":
        case "s s":
            draw(userChoice,computerChoice);
            break;
    }
}

function main(){

    //Event listeners
    rockUser.addEventListener("click", () => game("r"));
    paperUser.addEventListener("click", () => game("p"));
    scissorsUser.addEventListener("click", () => game("s"));
    btn.addEventListener("click",() =>{
        userScore = 0;
        compScore = 0;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
        displayMsg.innerHTML = "Play now"
    })
}
main();
