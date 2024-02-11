//Ends game once called, returns to main page or user input page.
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

//Shows or hides the boxes for the players input
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


//Shows or hides the board sizes after completing boxes of input 
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

//Stores the players information in the localStorage
function storePlayerDetails(playerName, playerPoints, playerWins) {
    // Get existing player details from local storage
    const existingPlayerDetails = JSON.parse(localStorage.getItem('playerDetails')) || [];
  
    // Check if player already exists
    const existingPlayerIndex = existingPlayerDetails.findIndex(player => player.name === playerName);
  
    if (existingPlayerIndex > -1) {
      //Player already exists, update their points
      existingPlayerDetails[existingPlayerIndex].points = playerPoints;
      existingPlayerDetails[existingPlayerIndex].wins = playerWins;
    } else {
      // Player does not exist, add new player
      existingPlayerDetails.push({
        name: playerName,
        points: playerPoints,
        wins: playerWins
      });
    }
  
    //Updates local storage
    localStorage.setItem('playerDetails', JSON.stringify(existingPlayerDetails));
  }


//Shows the localStorage information in a div
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

//Option to show or hide the leaderboard anytime you wish
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

//Shows or hides the main menu
function hideMenu(){
    var x = document.getElementById("board-size");
    x.style.display='none';
    var y = document.getElementById("user-input");
    y.style.display="none";
    const button = document.getElementById('start-main');
    button.style.display= "none";
}

//Shows the actual bingo cards
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


//Shows players
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

//Checks rounds
function roundCounter() {
    if(count==25){
        alert(count); 
        count=0;

        endGame();
    }
  }

//Actuallly makes the game functional drawing a ball
function drawBall() {

    let button = document.getElementById('drawBall');
    let disp = document.getElementById('ballDrawn');
    let counter = document.getElementById('gameRound');
    let count = 0;
//Updates round counter everytime the button is clicked and draws a ball
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
      //Marks the numbers pulled
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

      //Checks for full house
      if (checkFullHouse(player1Card,points1)) { 
        wins1+=1;
        storePlayerDetails(document.getElementById('player1-name').value, points1, wins1);
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

    //Creates bingo card from columns and rows

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
  
//Displays the bingo cards
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

//Checks if the number pulled is in the board and marks it with an X
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
 
 //Checks for bingo in rows or cols 
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

//Checks for full house
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
      
        function isColumnFull(columnIndex) {
          return card.every((row) => row[columnIndex] === 'X');
        }
      
        function areAllColumnsFull() {
          return card[0].every((cell, columnIndex) => isColumnFull(columnIndex));
        }
      
        return areAllRowsFull() && areAllColumnsFull();
      }
      

//Checks bingo diagonal
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

//Calculates points
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

//Checks if they have bingo 
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

//Calculates the winner comparing points in a round
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
    
//Shows the different bingo cards based on size option
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

