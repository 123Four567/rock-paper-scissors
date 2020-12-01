let buttons = document.querySelectorAll('button')
let div = document.createElement('div')
let round = document.createElement('h2')
let finalResult = document.createElement('h1')
let scoreCom = document.createElement('p')
let scorePlay = document.createElement('p')

div.appendChild(scorePlay)
div.appendChild(scoreCom)
div.appendChild(round)
div.appendChild(finalResult)
document.body.appendChild(div)

let singleRoundFunc = 0
buttons.forEach( button => {
    button.addEventListener('click', (e) => {
        singleRoundFunc++
        singleRound(e.target.innerText)
        if (singleRoundFunc == 5){
            singleRoundFunc -= 5
            if (player > computer) {
                player = 0
                computer = 0
                finalResult.textContent = 'Player wins!'
            } else if (player < computer) {
                player = 0
                computer = 0
                finalResult.textContent = 'Computer wins!'
            } else if (player = computer) {
                player = 0
                computer = 0
                finalResult.textContent = 'Is a tie!'
            }
        } else if (singleRoundFunc < 5) {
            finalResult.textContent = ""
        }

    })
})

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


let player = 0
let computer = 0

function singleRound(playerSelection,computerSelection) {
         
    computerSelection = computerPlay()

        
    if (playerSelection.match(/Rock/ig) && computerSelection === 'Rock') {
        round.textContent = 'No one wins.'
    } else if (playerSelection.match(/Paper/ig) && computerSelection === 'Paper') {
        round.textContent = 'No one wins.'
    } else if (playerSelection.match(/Scissors/ig) && computerSelection === 'Scissors') {
        round.textContent = 'No one wins.'
    } else if (playerSelection.match(/Rock/ig) && computerSelection === 'Paper') {
        computer++
        round.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection.match(/Paper/ig) && computerSelection === 'Scissors') {
        computer++
        round.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection.match(/Scissors/ig) && computerSelection === 'Rock') {
        computer++
        round.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
    } else {
        player++
        round.textContent = `You win! ${playerSelection} beats ${computerSelection}`
    } 
        
    scorePlay.textContent = 'Player: ' + player
    scoreCom.textContent = 'Computer: ' + computer
}
 
    
              

