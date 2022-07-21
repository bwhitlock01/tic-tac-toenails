let playerX = 'X'
let playerO = 'O'
let playCount = 0
let nextPlayer = playerX
let message, winner
let TL
document.getElementById('totalMoves').innerHTML = `Total Moves: ${playCount}`;

function findWinner () {
  if (
    (TL == TM && TL == TR) ||
    (ML == MM && ML == MR) ||
    (BL == BM && BL == BR) ||
    (TL == ML && TL == BL) ||
    (TM == MM && TM == BM) ||
    (TR == MR && TR == BR) ||
    (TL == MM && TL == BR) ||
    (TR == MM && TR == BL)
   ) {
      winner = true
    } else {
      winner = false
    }
    console.log(`winner: ${winner}`)
}

function setNextPlayer () {
  findWinner();
  if (playCount == 0 || playCount % 2 == 0) {
    nextPlayer = playerX
  } else {
    nextPlayer = playerO
  }
  if (playCount == 9) {
    message = `End of game`
  } if (winner == true) {
    message = `Winner!`
  }
  else {
    message = `Next Move: ${nextPlayer}`
  }
  document.getElementById('instructions').innerHTML = message;
  document.getElementById('totalMoves').innerHTML = `Total Moves: ${playCount}`;
}

function resetGame() {
  const emptyString = ''
  document.getElementById('TL').innerHTML = emptyString;
  document.getElementById('TM').innerHTML = emptyString;
  document.getElementById('TR').innerHTML = emptyString;
  document.getElementById('ML').innerHTML = emptyString;
  document.getElementById('MM').innerHTML = emptyString;
  document.getElementById('MR').innerHTML = emptyString;
  document.getElementById('BL').innerHTML = emptyString;
  document.getElementById('BM').innerHTML = emptyString;
  document.getElementById('BR').innerHTML = emptyString;
  playCount = 0
  winner = false
}

document.getElementById('TL').addEventListener("click", function () {
  // do the things when there is a user input
  TL = document.getElementById('TL').innerHTML
  console.log(`TL on click: ${TL}`);
  console.log(TL === "");
  if (TL === "") {
    document.getElementById('TL').innerHTML = nextPlayer;
    playCount = playCount + 1;
    TL = document.getElementById('TL').innerHTML
    console.log(`TL after click: ${TL}`)
    setNextPlayer();
  }
});

document.getElementById('TM').addEventListener("click", function () {
  // do the things when there is a user input
  TM = document.getElementById('TM').innerHTML
  console.log(`TM on click: ${TM}`);
  console.log(TM === "");
  if (TM === "") {
    document.getElementById('TM').innerHTML = nextPlayer;
    playCount = playCount + 1;
    TM = document.getElementById('TM').innerHTML
    console.log(`TM after click: ${TM}`)
    setNextPlayer();
  }
});

document.getElementById('TR').addEventListener("click", function () {
  // do the things when there is a user input
  TR = document.getElementById('TR').innerHTML
  console.log(`TR on click: ${TR}`);
  console.log(TR === "");
  if (TR === "") {
    document.getElementById('TR').innerHTML = nextPlayer;
    playCount = playCount + 1;
    TR = document.getElementById('TR').innerHTML
    console.log(`TR after click: ${TR}`)
    setNextPlayer();
  }
});

document.getElementById('ML').addEventListener("click", function () {
  // do the things when there is a user input
  ML = document.getElementById('ML').innerHTML
  console.log(`ML on click: ${ML}`);
  console.log(ML === "");
  if (ML === "") {
    document.getElementById('ML').innerHTML = nextPlayer;
    playCount = playCount + 1;
    ML = document.getElementById('ML').innerHTML
    console.log(`ML after click: ${ML}`)
    setNextPlayer();
  }
});

document.getElementById('MM').addEventListener("click", function () {
  // do the things when there is a user input
  MM = document.getElementById('MM').innerHTML
  console.log(`MM on click: ${MM}`);
  console.log(MM === "");
  if (MM === "") {
    document.getElementById('MM').innerHTML = nextPlayer;
    playCount = playCount + 1;
    MM = document.getElementById('MM').innerHTML
    console.log(`MM after click: ${MM}`)
    setNextPlayer();
  }
});

document.getElementById('MR').addEventListener("click", function () {
  // do the things when there is a user input
  MR = document.getElementById('MR').innerHTML
  console.log(`MR on click: ${MR}`);
  console.log(MR === "");
  if (MR === "") {
    document.getElementById('MR').innerHTML = nextPlayer;
    playCount = playCount + 1;
    MR = document.getElementById('MR').innerHTML
    console.log(`MR after click: ${MR}`)
    setNextPlayer();
  }
});


document.getElementById('BL').addEventListener("click", function () {
  // do the things when there is a user input
  BL = document.getElementById('BL').innerHTML
  console.log(`BL on click: ${BL}`);
  console.log(BL === "");
  if (BL === "") {
    document.getElementById('BL').innerHTML = nextPlayer;
    playCount = playCount + 1;
    BL = document.getElementById('BL').innerHTML
    console.log(`BL after click: ${BL}`)
    setNextPlayer();
  }
});

document.getElementById('BM').addEventListener("click", function () {
  // do the things when there is a user input
  BM = document.getElementById('BM').innerHTML
  console.log(`BM on click: ${BM}`);
  console.log(BM === "");
  if (BM === "") {
    document.getElementById('BM').innerHTML = nextPlayer;
    playCount = playCount + 1;
    BM = document.getElementById('BM').innerHTML
    console.log(`BM after click: ${BM}`)
    setNextPlayer();
  }
});

document.getElementById('BR').addEventListener("click", function () {
  // do the things when there is a user input
  BR = document.getElementById('BR').innerHTML
  console.log(`BR on click: ${BR}`);
  console.log(BR === "");
  if (BR === "") {
    document.getElementById('BR').innerHTML = nextPlayer;
    playCount = playCount + 1;
    BR = document.getElementById('BR').innerHTML
    console.log(`BR after click: ${BR}`)
    setNextPlayer();
  }
});