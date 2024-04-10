console.log('hi');

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Error');
    }
}

const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper'
    } else if (randomNumber === 2) {
        return 'scissors'
    } else {
        console.log('Error')
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'It\'s a tie';
    }

    if (userChoice === 'bomb') {
        return 'User won!';
    }
    
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer won!';
        } else {
            return 'User won!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer won!';
        } else {
            return 'User won!';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer won!';
        } else {
            return 'User won!';
        }
    }

}

getUserChoice('rock');

const playGame = () => {
    let userChoice = getUserChoice('Paper');
    let computerChoice = getComputerChoice();
    console.log('User : ' + userChoice);
    console.log('Computer : ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();