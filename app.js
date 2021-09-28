const plusPlayer1 = document.querySelector('#player1');
const plusPlayer2 = document.querySelector('#player2');
const reset = document.querySelector('#reset');

const player1Score = document.querySelector('.player1Display');
const player2Score = document.querySelector('.player2Display');

const winCon = document.querySelector('#winCon')



let winningScore = 0

winCon.addEventListener('change', getOption)

function getOption() {
    console.log('changed option');
    winningScore = winCon.value;
}



plusPlayer1.addEventListener('click', function () {
    console.log('Player One scored');
    player1Score.textContent++
});

plusPlayer2.addEventListener('click', function () {
    console.log('Player Two scored');
    player2Score.textContent++
});

reset.addEventListener('click', function () {
    console.log('Score reset');
    player1Score.textContent = 0;
    player2Score.textContent = 0;
    winCon.value = 'chooseWinCon'
});


if (winningScore === parseInt(player1Score.innerText)) {
    alert('You win')
    //plusPlayer1.disabled = true;
    plusPlayer2.disabled = true;
}




// if (winCon.value === 'chooseWinCon') {
//     plusPlayer1.disabled = false;
//     plusPlayer2.disabled = false;
// } else {
//     plusPlayer1.disabled = true;
//     plusPlayer2.disabled = true;
// }