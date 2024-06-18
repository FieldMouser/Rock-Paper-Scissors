let playerChoice, computerChoice;
let header = document.getElementById("result");
let computerChosen = document.getElementById("computerChoice");

function getComputerChoice() {
    let choice = Math.random() * 3;

    if (choice < 1) {
        computerChoice = "Камень";
    } else if (choice < 2) {
        computerChoice = "Бумага";
    } else {
        computerChoice = "Ножницы";
    }
}

function result() {
    computerChosen.textContent = computerChoice;
    
    if (playerChoice === computerChoice) {
        header.textContent = 'Ничья';
        
    } else if ((playerChoice === "Бумага" && computerChoice === "Камень") ||
               (playerChoice === "Ножницы" && computerChoice === "Бумага") ||
               (playerChoice === "Камень" && computerChoice === "Ножницы")) {
        header.textContent = 'Победа';
    } else {
        header.textContent = 'Поражение';
    }
}

function playerChosenRock() {
    playerChoice = "Камень";
    getComputerChoice();
    result();
}

function playerChosenPaper() {
    playerChoice = "Бумага";
    getComputerChoice();
    result();
}

function playerChosenScissors() {
    playerChoice = "Ножницы";
    getComputerChoice();
    result();
}
