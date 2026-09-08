alert('👾 WELCOME TO ROCK, PAPER, SCISSORS! 👾\n\n' +
    'Click OK and open the console to play a game of Rock, Papers, Scissors \n\n' + 
    'Windows/Linux: Ctrl + Shift + J\n' +
    'Mac: Cmd + Option + J')
  
 
 console.log('Welcome to the Arena! Two enter, only one leaves. Who will it be? The mighty computer or you, the puny human? Let the battle commence!')
 console.log('To start fighting for your miserable life, type game() and press enter.')
 console.log('If you want to know the rules of the game, type instructions() and press enter.')

let userChoice = '';
let userScore = 0;
let computerScore = 0;

function instructions(){
    return 'The rules are simple. You and the computer will take turns choosing a weapon of choice: rock, paper or scissors. ' +
    'Rock beats scissors, scissors beats paper and paper beats rock. ' +
    'The first to reach 3 points wins the game. ' +
    'Good luck, human! Youll need it!'
}

function computerPlay(){
    let computerChoice = '';

    const randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber == 0){
        computerChoice = 'rock';
    } else if (randomNumber == 1){
        computerChoice = 'paper';``
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function userPlay(){
    let userInput = prompt('Please enter your weapon of choice: rock, paper or scissors \n\n' + 'Current Score: You - ' + userScore + ' | Computer - ' + computerScore);
    userChoice = '';

    if (userInput !== null) {
        userInput = userInput.toLowerCase().trim();
    }

   if (userInput === null){
        console.log('You have chosen to forfeit the game. The mighty computer wins by default. You remain in the digital arena. If you wish to try again, press game() and enter');
        return computerScore = 3;
   }

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

    if (userChoice == ''){
        return;
    }
    
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
        userScore = 0;
        computerScore = 0;

        return 'Congratulations! You have defeated the mighty computer and are allowed to leave... for now. If you wish to play again, press game() and enter.';
    } else {
        userScore = 0;
        computerScore = 0;
        
        return 'Mwuahaha! The mighty computer has defeated you! Enjoy your eternity in a digital graveyard, human! But I feel generous, you can try again, press game() and enter.';
    }
}
