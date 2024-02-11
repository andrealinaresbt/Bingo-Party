function endGame() { 
    
    document.getElementById('player1Card').innerHTML = '';
    document.getElementById('player2Card').innerHTML = '';
    document.getElementById('player3Card').innerHTML = '';
    document.getElementById('player4Card').innerHTML = '';
    const button = document.getElementById('start-main');
    alert("Going back to menu");
    points1=0;
    points2=0;
    points3=0;
    points4=0;
    //const buttonlead = document.getElementById('leaderBox');
    //buttonlead.display="block";
    button.style.display= "block";
    count = 0;
    let disp = document.getElementById('ballDrawn');
    let counter = document.getElementById('gameRound');
    disp.innerHTML ='-';
    counter.innerHTML='-';
    var x = document.getElementById("user-input");
    x.style.display ='block';
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
    
}

function storePlayerDetails(playerName, playerPoints, playerWins) {
    // Get existing player details from local storage
    const existingPlayerDetails = JSON.parse(localStorage.getItem('playerDetails')) || [];
  
    // Check if player already exists in player details
    const existingPlayerIndex = existingPlayerDetails.findIndex(player => player.name === playerName);
  
    if (existingPlayerIndex > -1) {
      // Player already exists, update their points
      existingPlayerDetails[existingPlayerIndex].points = playerPoints;
      existingPlayerDetails[existingPlayerIndex].wins = playerWins;
    } else {
      // Player does not exist, add new player details
      existingPlayerDetails.push({
        name: playerName,
        points: playerPoints,
        wins: playerWins
      });
    }
  
    // Update local storage with updated player details
    localStorage.setItem('playerDetails', JSON.stringify(existingPlayerDetails));
  }

function displayPlayerDetails() {
    storePlayerDetails(document.getElementById('player1-name').value, points1, wins1);
    storePlayerDetails(document.getElementById('player2-name').value, points2, wins2);
    storePlayerDetails(document.getElementById('player3-name').value, points3, wins3);
    storePlayerDetails(document.getElementById('player4-name').value, points4, wins4);
    const playerDetails = JSON.parse(localStorage.getItem('playerDetails'));
    const container = document.getElementById('leaderBox');
    let html = '<p>LEADER BOARD</p>';
  
    if (playerDetails && playerDetails.length > 0) {
      
      playerDetails.forEach(player => {
        html += '<div>' +
          'Name: ' + player.name  +
          '<p>Points: ' + player.points + '</p>' +
          '<p>Wins: ' + player.wins + '</p>' +
          '<p>-------------------------</p>' +
          '</div>';
      });
  
      container.innerHTML = html;
    } else {
      container .innerHTML = 'No player details found.'+ localStorage.getItem('playerDetails');
    }
    container.style.fontWeight = 'bold';
  }
function showLeaderBoard(){
    displayPlayerDetails();
    var y = document.getElementById("leaderBox");
    if (y.style.display=='none') {
        y.style.display='block';
    }else{
        y.style.display = 'none';
    }


    var x = document.getElementById("board-size");
    if (x.style.display=='none') {
        x.style.display='block';
    }else{
        x.style.display = 'none';
    }
    

}


function logUsers() {
    var x = document.getElementById("board-size");
    if (x.style.display=='none') {
        x.style.display='block';
    }else{
        x.style.display = 'none';
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
    displayPlayerDetails();
    var y = document.getElementById("leaderBox");
    y.style.display='block';

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


function roundCounter() {
    if(count==25){
        alert(count); 
        count=0;

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
      if (count>25) {
        
        calculateWins();
        count=0;
        alert('Maximun rounds! Its over.');
        
        endGame();
        
      }
      if (count==25) {
        displayPlayerDetails();
    var y = document.getElementById("leaderBox");
    y.style.display='block';
        
      }
      markNumber(player1Card, number);
      markNumber(player2Card, number);
      markNumber(player3Card, number);
      markNumber(player4Card, number);
      displayBingoCard(player1Card, ROWS,COLS,'player1Card'); 
      displayBingoCard(player2Card, ROWS,COLS,'player2Card'); 
      displayBingoCard(player3Card, ROWS,COLS,'player3Card'); 
      displayBingoCard(player4Card, ROWS,COLS,'player4Card'); 
    
      checkWinVoF(player1Card, points1);
      checkWinVoF(player2Card, points2);
      checkWinVoF(player3Card, points3);
      checkWinVoF(player4Card, points4);
//Calls checkWin method to change the values of the points
      points1= checkWinPoints(player1Card, points1);
      points2= checkWinPoints(player2Card, points2);
      points3= checkWinPoints(player3Card, points3);
      points4= checkWinPoints(player4Card, points4);

      //Updates the localStorage
      storePlayerDetails(document.getElementById('player1-name').value, points1, wins1);
      storePlayerDetails(document.getElementById('player2-name').value, points2, wins2);
      storePlayerDetails(document.getElementById('player3-name').value, points3, wins3);
      storePlayerDetails(document.getElementById('player4-name').value, points4, wins4);


      if (checkFullHouse(player1Card,points1)) { 
        wins1+=1;
        calculateWins();
        endGame();
        
    } else if (checkFullHouse(player2Card,points2)) { 
        wins2+=1;
        storePlayerDetails(document.getElementById('player2-name').value, points2, wins2);
        calculateWins();
            endGame();
      
           
        }else if (checkFullHouse(player3Card,points3)) { 
        wins3+=1;
        storePlayerDetails(document.getElementById('player3-name').value, points3, wins3);
            calculateWins();
            endGame();
      
        }else if (checkFullHouse(player4Card,points4)) { 
            wins4+=1;
            storePlayerDetails(document.getElementById('player4-name').value, points4, wins4);
            calculateWins();
            endGame();

           
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

function checkWinPoints(card, points) { 
    // Check rows and columns for a Bingo pattern 
    if (checkRowAndCol(card)) {
        points++;  
        return points;
    }
    // Check diagonals for a Bingo pattern 
    if (checkDiag(card)) {
        points = points + 3;
        return points;
    }  
    if (checkFullHouse(card)) {
        points = points + 5;
        return points; // Return true if full house is detected
    }

    return points;
}

function checkWinVoF(card, points) { 
    // Check rows and columns for a Bingo pattern 
    if (checkRowAndCol(card)) {
        
        return false;
    }
    // Check diagonals for a Bingo pattern 
    if (checkDiag(card)) {
       
        return false;
    }  
    if (checkFullHouse(card)) {
        
        return true; // Return true if full house is detected
    }

    return false;
}

function calculateWins() {
    if (points1 > points2 && points1 > points3 && points1 > points4) {
        wins1 = wins1 + 1;
        storePlayerDetails(document.getElementById('player1-name').value, points1, wins1);
        alert('Player 1 won with ' + points1 + ' points');
        return wins1;
    } else if (points2 > points1 && points2 > points3 && points2 > points4) {
        wins2 = wins2 + 1;
        storePlayerDetails(document.getElementById('player2-name').value, points2, wins2);
        alert('Player 2 won with ' + points2 + ' points');
        return wins2;
    } else if (points3 > points2 && points3 > points1 && points3 > points4) {
        wins3 = wins3 + 1;
        storePlayerDetails(document.getElementById('player3-name').value, points3, wins3);
        alert('Player 3 won with ' + points3+ ' points');
        return wins3;
    } else if (points4 > points2 && points4 > points3 && points4 > points1) {
        wins4 = wins4 + 1;
        storePlayerDetails(document.getElementById('player4-name').value, points4, wins4);
        alert('Player 4 won with ' + points4 + ' points');
        return wins4;
    }
}
    

function show3x3(){
    hideMenu();
    COLS =3;
    ROWS =3;
    count=0;
    showBoardGame();

}
function show4x4(){
    hideMenu();
    COLS =4;
    ROWS =4;
    count=0;
    showBoardGame();
}
function show5x5(){
    hideMenu();
    COLS =5;
    ROWS =5;
    count=0;
    showBoardGame();
}

let html ='';
let ROWS = 5; 
let points1=0;
let points2=0;
let points3=0;
let points4=0;
let count = 0;
let wins1=0;
let wins2=0;
let wins3=0;
let wins4=0;
let COLS = 5; 
const MAX_NUM = 50; 
ShowUserInput();
logUsers();

