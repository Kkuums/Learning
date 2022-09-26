const playerOneButton = document.querySelector('#playerOneButton')
const playerTwoButton = document.querySelector('#playerTwoButton')
const resetButton = document.querySelector('#reset')
const maxScore = document.querySelector('#maxScore')

const currentScore = document.querySelector('#currentScore')

let playerOneScoreSpan = document.createElement('span')
let playerTwoScoreSpan = document.createElement('span')

let playerOneScore = 0
let playerTwoScore = 0

playerOneButton.addEventListener('click', function() {
    playerOneScore += 1
    displayScore()
    setColor()
    checkWinner()
})

playerTwoButton.addEventListener('click', function() {
    playerTwoScore += 1
    displayScore()
    setColor()
    checkWinner()
})

resetButton.addEventListener('click', function() {
    currentScore.innerText = 'Current score: 0 to 0'
    playerOneButton.disabled = false
    playerTwoButton.disabled = false
    playerOneScoreSpan.style.color = 'black'
    playerTwoScoreSpan.style.color = 'black'
    playerOneScore = 0
    playerTwoScore = 0
})


function displayScore() {
    currentScore.innerText = ''
    playerOneScoreSpan.innerText = playerOneScore
    playerTwoScoreSpan.innerText = playerTwoScore
    currentScore.append('Current score: ', playerOneScoreSpan, ' to ', playerTwoScoreSpan)
}

function checkWinner() {
    if (playerOneScore >= maxScore.value) {
        setColor()
        displayScore()
        playerOneButton.disabled = true
        playerTwoButton.disabled = true
    } else if (playerTwoScore >= maxScore.value) {
        setColor()
        displayScore()
        playerOneButton.disabled = true
        playerTwoButton.disabled = true
    }
}

function setColor() {
    if (playerOneScore > playerTwoScore) {
        playerOneScoreSpan.style.color = 'green'
        playerTwoScoreSpan.style.color = 'red'
    } else if (playerTwoScore > playerOneScore) {
        playerOneScoreSpan.style.color = 'red'
        playerTwoScoreSpan.style.color = 'green'
    }
}