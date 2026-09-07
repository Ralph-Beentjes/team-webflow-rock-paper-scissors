alert('👾 WELCOME TO ROCK, PAPER, SCISSORS! 👾\n\n' +
    'Click OK and open the console \n\n' + 
    'Windows/Linux: Ctrl + Shift + J\n' +
    'Mac: Cmd + Option + J')
  
 
 console.log('Welcome to the Arena! Two enter, only one leaves. Who will it be? The mighty computer or you, the puny human? Let the battle commence!')
 console.log('To start fighting for your miserable life, type game() and press enter.')

let userScore = 0;
let computerScore = 0;

function computerPlay(){
    let computerChoice = '';

    const randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber == 0){
        computerChoice = 'rock';
    } else if (randomNumber == 1){
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }

    return computerChoice;
}

function userPlay(){
    let userChoice = '';

    let userInput = prompt('Please enter your weapon of choice: rock, paper or scissors').toLowerCase().trim();

    switch(userInput){
        case 'rock':
            userChoice = 'rock';
            console.log('You chose for the hardest option, a rock!')
            break;
        case 'paper':
            userChoice = 'paper';
            console.log('You chose the flimsy paper, will that work? Let\'s see!')
            break;
        case 'scissors':
            userChoice = 'scissors';
            console.log('You chose the sharp scissors, let\'s see if they can cut through!')
            break;
        default:
            alert('Oops, you silly! That\'s not a correct input. Please enter rock, paper or scissors.');
            userChoice = userPlay();
    }

    return userChoice;
}

function playRound(){

    const computerSelection = computerPlay();
    const userSelection = userPlay();

    if (computerSelection == userSelection){
        console.log('It\'s a tie! You both chose ' + userSelection + '.');
    } else if (computerSelection == 'rock' && userSelection == 'scissors'){
        console.log('You lose! Rock beats scissors.');
        computerScore++;
    } else if (computerSelection == 'paper' && userSelection == 'rock'){
        console.log('You lose! Paper beats rock.');
        computerScore++;
    } else if (computerSelection == 'scissors' && userSelection == 'paper'){
        console.log('You lose! Scissors beats paper.');
        computerScore++;
    } else {
        console.log('You win! ' + userSelection + ' beats ' + computerSelection + '.');
        userScore++;
    }
}

function game(){

    while(userScore < 3 && computerScore < 3){
        playRound();
        console.log('Current Score: You - ' + userScore + ' | Computer - ' + computerScore);
    }

    if (userScore == 3){
        console.log('Congratulations! You have defeated the mighty computer and are allowed to leave... for now');
    } else {
        console.log('Mwuahaha! The mighty computer has defeated you! Enjoy your eternity in a digital graveyard, human!');
    }

    userScore = 0;
    computerScore = 0;
}
