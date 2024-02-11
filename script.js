function endGame() { 
    document.getElementById('player1Card').innerHTML = '';
    document.getElementById('player2Card').innerHTML = '';
    document.getElementById('player3Card').innerHTML = '';
    document.getElementById('player4Card').innerHTML = '';
    const button = document.getElementById('start-main');
    button.style.display= "block";
    ShowUserInput();
}

function ShowUserInput(){
    var z = document.getElementById("board-size");
    z.style.display = 'none';
    var x = document.getElementById("user-input");
    if (x.style.display=='none') {
        x.style.display='block';
    }else{
        x.style.display = 'none';
    }
    var y = document.getElementById('game-controls');
        y.style.display = 'none';
}


function logUsers() {
    var x = document.getElementById("leaderBox");
    if (x.style.display=='none') {
        x.style.display='block';
    }else{
        x.style.display = 'none';
    }
    var x = document.getElementById("board-size");
    if (x.style.display=='none') {
        x.style.display='block';
    }else{
        x.style.display = 'none';
    }
    let player1 = document.getElementById("player1-name").value;
    let player2 = document.getElementById("player2-name").value;
    let player3 = document.getElementById('player3-name').value;
    let player4 = document.getElementById('player4-name').value;
    const playerData1 = {
        name: player1,
        points: points1,
      };
      let existingUserData = localStorage.getItem('playerData1');
  // Check if there is any existing user data
  if (existingUserData) {
    // Parse the existing data and add the new user data to it
    existingUserData = JSON.parse(existingUserData);
    existingUserData.push(playerData1);
  } else {
    // If no existing data, create a new array with the first user data
    existingUserData = [playerData1];
  }
    const playerData2 = {
        name: player2,
        points: points2,
      };
      let existingUserData2 = localStorage.getItem('playerData2');
  // Check if there is any existing user data
  if (existingUserData2) {
    // Parse the existing data and add the new user data to it
    existingUserData2 = JSON.parse(existingUserData2);
    existingUserData2.push(playerData2);
  } else {
    // If no existing data, create a new array with the first user data
    existingUserData2 = [playerData2];
  }
    const playerData3 = {
        name: player3,
        points: points3,
      };
      let existingUserData3 = localStorage.getItem('playerData3');
  // Check if there is any existing user data
  if (existingUserData3) {
    // Parse the existing data and add the new user data to it
    existingUserData3 = JSON.parse(existingUserData3);
    existingUserData3.push(playerData3);
  } else {
    // If no existing data, create a new array with the first user data
    existingUserData3 = [playerData3];
  }
    const playerData4 = {
        name: player4,
        points: points4,
      };
      let existingUserData4 = localStorage.getItem('playerData4');
  // Check if there is any existing user data
  if (existingUserData4) {
    // Parse the existing data and add the new user data to it
    existingUserData4 = JSON.parse(existingUserData4);
    existingUserData4.push(playerData4);
  } else {
    // If no existing data, create a new array with the first user data
    existingUserData4 = [playerData4];
  }
}

function showLeaderBoard(){
    let box = document.getElementById('lead');
    
    var x = document.getElementById("board-size");
    if (x.style.display=='none') {
        x.style.display='block';
    }else{
        x.style.display = 'none';
    }
    for (var key in localStorage) {
        var value = localStorage.getItem(key);
        box.innerHTML += key + ': ' + value + '<br>';
      }
    



}
function hideMenu(){
    var x = document.getElementById("board-size");
    x.style.display='none';
    var y = document.getElementById("user-input");
    y.style.display="none";
    const button = document.getElementById('start-main');
    button.style.display= "none";
}

function showBoardGame() {
    var x = document.getElementById("game-controls");
    x.style.display = 'block';
    showLeaderBoard();
    createBingoCard(COLS, ROWS);

    player1Card = createBingoCard(COLS, ROWS);
    player2Card = createBingoCard(COLS, ROWS);
    player3Card = createBingoCard(COLS, ROWS);
    player4Card = createBingoCard(COLS, ROWS);

    displayBingoCard(player1Card, ROWS, COLS, "player1Card");
    displayBingoCard(player2Card, ROWS, COLS, "player2Card");
    displayBingoCard(player3Card, ROWS, COLS, "player3Card");
    displayBingoCard(player4Card, ROWS, COLS, "player4Card");

    function updatePlayerCardGrid(COLS) {
        var playerCards = document.getElementsByClassName("player-card");

        for (var i = 0; i < playerCards.length; i++) {
          playerCards[i].style.gridTemplateColumns = "repeat(" + COLS + ", 1fr)";
        }
    }
    updatePlayerCardGrid(COLS);
}

function showPlayer1() {
    var x = document.getElementById("player1Card");
    if (x.style.display == 'none') {
        x.style.display = 'grid';
    } else {
        x.style.display = 'none';
    }
}
function showPlayer2(){
    var x = document.getElementById("player2Card");
    if (x.style.display == 'none') {
        x.style.display = 'grid';
    } else {
        x.style.display = 'none';
    }
}
function showPlayer3(){
    var x = document.getElementById("player3Card");
    if (x.style.display == 'none') {
        x.style.display = 'grid';
    } else {
        x.style.display = 'none';
    }
}

function showPlayer4(){
    var x = document.getElementById("player4Card");
    if (x.style.display == 'none') {
        x.style.display = 'grid';
    } else {
        x.style.display = 'none';
    }
}


function roundCounter(counter) {
    if(counter==25){
        alert("Maximun amount of rounds!"); 
        endGame();
    }
  }

function drawBall() {

   // const MAX_NUM = 75;
    let button = document.getElementById('drawBall');
    let disp = document.getElementById('ballDrawn');
    let counter = document.getElementById('gameRound');
    let count = 0;

    button.onclick = function () {
      let number = Math.floor(Math.random() * MAX_NUM) + 1;
      disp.innerHTML = number;
      count++;
      counter.innerHTML = count;
      roundCounter(count);
      markNumber(player1Card, number);
      markNumber(player2Card, number);
      markNumber(player3Card, number);
      markNumber(player4Card, number);
      displayBingoCard(player1Card, ROWS,COLS,'player1Card'); 
      displayBingoCard(player2Card, ROWS,COLS,'player2Card'); 
      displayBingoCard(player3Card, ROWS,COLS,'player3Card'); 
      displayBingoCard(player4Card, ROWS,COLS,'player4Card'); 
      checkWin(player1Card, points1);
      checkWin(player2Card, points2);
      checkWin(player3Card, points3);
      checkWin(player4Card, points4);
      if (checkFullHouse(player1Card,points1)) { 
        document.getElementById('winDisplay').textContent =  'Player 1 has won the game!';
        alert("Player 1 has won the game!");  
        
    } else if (checkFullHouse(player2Card,points2)) { 
            document.getElementById('winDisplay').textContent = 'Player 2 has won the game!'; 
            alert("Player 2 has won the game!"); 
           
        }else if (checkFullHouse(player3Card,points3)) { 
            document.getElementById('winDisplay').textContent = 'Player 3 has won the game!';
            alert("Player 3 has won the game!");  
           
        }else if (checkFullHouse(player4Card,points4)) { 
            document.getElementById('winDisplay').textContent = 'Player 4 has won the game!'; 
            alert("Player 4 has won the game!"); 
           
        }
}
    }


 function createBingoCard(COLS,ROWS) { 
    const card = []; 
    const usedNumbers = new Set(); 
  
    while (usedNumbers.size < ROWS * COLS) { 
        const num = Math.floor(Math.random() *MAX_NUM) + 1; 
        if (!usedNumbers.has(num)) { 
            usedNumbers.add(num); 
        } 
    } 
  
    const numbersArray = 
        Array.from(usedNumbers); 
    for (let i = 0; i < ROWS; i++) { 
        card.push(numbersArray 
            .slice(i * COLS, (i + 1) * COLS)); 
    } 
  
    return card; 
} 
  
function displayBingoCard(card, ROWS, COLS, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
  
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        const cell = document.createElement('div');
        cell.textContent = card[i][j];
        if (card[i][j] === 'X') {
          cell.classList.add('marked');
        }
        container.appendChild(cell);
      }
    }
  }
  
  function markNumber(card, number) { 
    for (let i = 0; i < ROWS; i++) { 
        for (let j = 0; j < COLS; j++) { 
            if (card[i][j] == number && card[i][j] !== 'X') { 
                card[i][j] = 'X'; 
                return true; 
            } 
        } 
    } 
    return false; 
}
 
  
function checkRowAndCol(card) {
    for (let i = 0; i < ROWS; i++) { 
        let rowFilled = true; 
        let colFilled = true; 
        for (let j = 0; j < COLS; j++) { 
            if (card[i][j] !== 'X') { 
                rowFilled = false; 
            } 
            if (card[j][i] !== 'X') { 
                colFilled = false; 
            } 
        } 
        if (rowFilled || colFilled) { 
            return true; 
        } 
    } 
    
}
function checkFullHouse(card) {
        const ROWS = card.length;
        const COLS = card[0].length;
      
        // Check if all cells in a row are marked
        function isRowFull(row) {
          return row.every((cell) => cell === 'X');
        }
      
        // Check if all rows have at least one marked cell
        function areAllRowsFull() {
          return card.every(isRowFull);
        }
      
        // Check if all cells in a column are marked
        function isColumnFull(columnIndex) {
          return card.every((row) => row[columnIndex] === 'X');
        }
      
        // Check if all columns have at least one marked cell
        function areAllColumnsFull() {
          return card[0].every((cell, columnIndex) => isColumnFull(columnIndex));
        }
      
        return areAllRowsFull() && areAllColumnsFull();
      }
      


function checkDiag(card) {
    let rowFilled = true; 
    let columnFilled = true; 
    for (let i = 0; i < ROWS; i++) { 
        if (card[i][i] !== 'X') { 
            rowFilled = false; 
        } 
        if (card[i][COLS - 1 - i] !== 'X') { 
            columnFilled = false; 
        } 
    } 
    if (rowFilled|| columnFilled) { 
        return true; 
    } 
  
    return false; 
    
}

function checkWin(card, points) { 
    // Check rows and columns for a Bingo pattern 
    if (checkRowAndCol(card)) {
        points++;
        return false;
    }
    // Check diagonals for a Bingo pattern 
    if (checkDiag(card)) {
        points = points + 3;
        return false;
    }  
    if (checkFullHouse(card)) {
        return true; // Return true if full house is detected
    }

    return false;
}
function show3x3(){
    hideMenu();
    COLS =3;
    ROWS =3;
    showBoardGame();

}
function show4x4(){
    hideMenu();
    COLS =4;
    ROWS =4;
    showBoardGame();
}
function show5x5(){
    hideMenu();
    COLS =5;
    ROWS =5;
    showBoardGame();
}
let points1=0;
let points2=0;
let points3=0;
let points4=0;
let counter = 0;
let ROWS = 5; 
let COLS = 5; 
const MAX_NUM = 50; 
ShowUserInput();
logUsers();

