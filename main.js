function computerPlay() {
    let random = Math.floor(Math.random() * 3)
    if (random === 0) {
        return 'Rock'   
    } else if (random === 1) {
        return 'Paper'
    } else if (random === 2) {
        return 'Scissors'
    }
}

function game() {
    let player = 0
    let computer = 0
        function singleRound(playerSelection, computerSelection) {
        playerSelection = prompt('Enter Rock, Paper or Scissors')
        computerSelection = computerPlay()
        let Rock = /Rock/ig 
        let Paper = /Paper/ig
        let Scissors = /Scissors/ig
        
        if (playerSelection.match(Rock) && computerSelection === 'Rock') {
            return 'No one wins.'
        } else if (playerSelection.match(Paper) && computerSelection === 'Paper') {
            return 'No one wins.'
        } else if (playerSelection.match(Scissors) && computerSelection === 'Scissors') {
            return 'No one wins.'
        } else if (playerSelection.match(Rock) && computerSelection === 'Paper') {
            computer++
            return `You lose! ${computerSelection} beats ${playerSelection}`
        } else if (playerSelection.match(Paper) && computerSelection === 'Scissors') {
            computer++
            return `You lose! ${computerSelection} beats ${playerSelection}`
        } else if (playerSelection.match(Scissors) && computerSelection === 'Rock') {
            computer++
            return `You lose! ${computerSelection} beats ${playerSelection}`
        } else {
            player++
            return `You win! ${playerSelection} beats ${computerSelection}`
        } 
    }

    for (let i = 0; i < 5; i++){
        console.log(singleRound())
    }

    if (player > computer){
        console.log('Player wins!')
    } else if (player < computer){
        console.log('Computer wins!')
    } else if (player === computer) {
        console.log('Is a tie!')
    }
        
            
    return singleRound()
}

game()