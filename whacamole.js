const cell = document.querySelectorAll('.cell')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
const modalOverlay = document.querySelector('.modal-overlay');
const winnerDetails = document.querySelector('.winner-container > span');
const newGameButton = document.querySelector('.new-game-button');
const stopmole = document.querySelector('.mole');

// let board = 

let score = document.querySelector('#score')


let result = 0;
let currentTime = timeLeft.textContent

function randomCell() {

    if(currentTime > 0){
    cell.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = cell[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    hitPostition = randomPosition.id
}}

cell.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPostition && currentTime > 0){
            result = result + 1
            score.textContent = result

        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(randomCell, 500)
}




function countDown() {
    currentTime-- 
    timeLeft.textContent = currentTime

    if (currentTime > 0) {
        moveMole()

    } else if(currentTime == 0){
        clearInterval(timerId)
        newGameButton.style.display = 'flex';
       
        
    }
}

let timerId = setInterval(countDown, 1000)
