function computerPlay(){
    const computerChoice = '';

    const randomNumber = Math.floor(Math.random() * 2);
    
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

