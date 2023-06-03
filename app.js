const squares = document.querySelectorAll('.square');
const arraySquares = Array.from(squares);
const gameBoard = document.getElementById('gameboard');
const displayTurn = document.getElementById('display-turn');
const result = document.getElementById('result');
let turn = 'O';

const winCombo = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

// change turn function for players.
function changeTurn(){
     turn = turn === 'O' ? 'X' : 'O' ;
}

// winnig logic.

function checkWin(){
   let squareTexts = document.getElementsByClassName("squareText");
   winCombo.forEach((combo) =>{
    if((squareTexts[combo[0]].innerText === squareTexts[combo[1]].innerText) && (squareTexts[combo[1]].innerText === squareTexts[combo[2]].innerText) && (squareTexts[combo[0]].innerText !== '')){
       result.innerHTML = squareTexts[combo[0]].innerText + " 's Winner &#128526";
       displayTurn.style.display = 'none';
    }
   })
}

// making square to functioning when user click on it.
arraySquares.forEach((square) =>{
    let squareText = square.querySelector(".squareText");
    square.addEventListener('click',(e) =>{
        if(squareText.innerText === ''){
            squareText.innerText = turn
            squareText.classList.add(turn);
            changeTurn();
            displayTurn.innerHTML = "It is turn for " + turn;  
            checkWin();
              
        }
        
    })
})


