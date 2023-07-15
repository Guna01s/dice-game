'use strict';

// <--- FINAL CODE --->

let keyBtn = `FOR DICE ROLL [PRESS ®️ - r ]
FOR HOLD VALUE [PRESS ®️ - h ]
FOR NEW GAME [PRESS ®️ - n ]`;
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const currentScore0 = document.getElementById('current--0');
const currenScore1 = document.getElementById('current--1');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
let nameEl = document.querySelector('.name');

let activePlayer = 0;
let score = [0, 0];
let random;
let currentScore = 0;
let playing = true; // used for start and end the game

/* (if playing === true - we can continue game)
when we reached tha max score it will changed to false
then the whole code will dosent work so the game will end */

score0.textContent = 0;
score1.textContent = 0;
alert(keyBtn);
diceEl.classList.add('hidden'); // for hide dice Image

// player background color change to active player
let switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

let diceRoll = function () {
  if (playing) {
    //<---generate random dice roll (NUMBER)-->;
    random = Math.trunc(Math.random() * 6) + 1; // dice roll

    //<--calling function to change the dice Image-->
    //   rollImg();
    //<-- display the dice image -->
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${random}.png`;
    if (random !== 1) {
      // add dice NO to current score
      currentScore += random;
      // <-- switch player -->
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};

let holdBtn = function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).innerText =
      score[activePlayer];
    if (score[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document.getElementById(`name--${activePlayer}`).textContent = 'YOU WON';
    }
    switchPlayer();
  }
};

let newGame = function () {
  score = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;
  document.getElementById(`name--0`).textContent = 'PlAYER 1';
  document.getElementById(`name--1`).textContent = 'PlAYER 2';
  if (playing) {
    score0.textContent = 0;
    score1.textContent = 0;
    currentScore0.textContent = 0;
    currenScore1.textContent = 0;
    diceEl.classList.add('hidden');
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    player1.classList.add('player--active'); // background will stay in P-1
    player2.classList.remove('player--active');
    // activePlayer = activePlayer === 1 ? 0 : 0; // whenever we click newgame it will auto start with P-1
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // player1.classList.toggle('player--active');
    // player2.classList.toggle('player--active');

    // nameEl.;
  }
};

document.addEventListener('keydown', function (e) {
  // console.log(e.key); // namba yendha key ah press pannalum console la andha key name show aagum
  if (e.key === 'r') {
    diceRoll();
  } else if (e.key === 'h') {
    holdBtn();
  } else if (e.key === 'n') {
    newGame();
  }
});

btnRoll.addEventListener('click', diceRoll);
btnHold.addEventListener('click', holdBtn);
btnNew.addEventListener('click', newGame);

// <<<< ------- these code reinforeced ------->>>>
// -----------------------------------------------------------------

// document.getElementById(`current--${activePlayer}`).textContent = 0;
// currentScore = 0;
// activePlayer = activePlayer === 0 ? 1 : 0;
// switchBackground(); // change background when player active

// -----------------------------------------------------------------
// const add = function () {
//   player2.classList.remove('player--active');
//   player1.classList.add('player--active');
// };
/*
  // this function used for change the dice pic on same as number
  let rollImg = () => {
    if (random === 1) {
      diceEl.setAttribute('src', 'dice-1.png');
      // activeP1toP2();
    } else if (random === 2) {
      diceEl.setAttribute('src', 'dice-2.png');
    } else if (random === 3) {
      diceEl.setAttribute('src', 'dice-3.png');
    } else if (random === 4) {
          diceEl.setAttribute('src', 'dice-4.png');
        } else if (random === 5) {
          diceEl.setAttribute('src', 'dice-5.png');
        } else if (random === 6) {
          diceEl.setAttribute('src', 'dice-6.png');
        }
      };*/

// ----------------------------------------------------------------

// document.addEventListener('keydown', function (h) {
//   if (h.key === 'h') {
//     holdBtn();
//   }
// });

// -----------------------------------------------------------------

// document.addEventListener('keydown', function (n) {
//   if (n.key === 'n') {
//     newGame();
//   }
// });

// ------------------------------------------------------------------
/*
let newGame = function () {
  playing = true;
  if (playing) {
    diceEl.classList.add('hidden');
    score0.textContent = 0;
    score1.textContent = 0;
    currentScore0.textContent = 0;
    currenScore1.textContent = 0;
    score = [0, 0];
    random = Math.trunc(Math.random() * 6) + 1;
    currentScore = 0;
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).innerText =
      score[activePlayer];
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
    switchPlayer();
  }
};*/
