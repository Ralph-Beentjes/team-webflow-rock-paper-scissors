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

    console.log(computerChoice);

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
