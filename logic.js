function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);

    if (random === 0) {
        window.alert("CPU has chosen Rock");
        return 0;  
    } else if (random === 1) {
        window.alert("CPU has chosen Paper");
        return 1;  
    } else {
        window.alert("CPU has chosen Scissors");
        return 2;  
    }
}

function getHumanChoice() {
    let input = window.prompt("Enter either Rock, Paper, or Scissors.");

    if (input === "rock") {
        window.alert("You chose Rock");
        return 0;  
    } else if (input === "paper") {
        window.alert("You chose Paper");
        return 1;  
    } else if (input === "scissors") {
        window.alert("You chose Scissors");
        return 2;  
    } else {
        window.alert("Invalid choice, defaulting to Rock");
        return 0;  
    }
}

function determineWinner(humanSelection, cpuSelection) {
    if (humanSelection === cpuSelection) {
        return "It's a tie!";
    } else if (
        (humanSelection === 0 && cpuSelection === 2) ||  
        (humanSelection === 1 && cpuSelection === 0) ||  
        (humanSelection === 2 && cpuSelection === 1)     
    ) {
        return "You win!";
    } else {
        return "CPU wins!";
    }
}

let humanSelection = getHumanChoice();
let cpuSelection = getComputerChoice();
let result = determineWinner(humanSelection, cpuSelection);

window.alert(result);
