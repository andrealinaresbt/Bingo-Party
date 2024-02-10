
function ShowUserInput(){
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

function showLeaderBoard(){
    
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

function showBoardGame5x5(){
    var x = document.getElementById("game-controls");
    var y = document.getElementById('game-controls');
    y.style.display = 'block';
    showLeaderBoard();
    createBingoCard(5,5);
    player1Card = createBingoCard(); 
    player2Card = createBingoCard(); 
    player3Card = createBingoCard(); 
    player4Card = createBingoCard(); 
    displayBingoCard(player1Card, "player1Card"); 
    displayBingoCard(player2Card, 'player2Card'); 
    
    displayBingoCard(player3Card, "player3Card"); 
    displayBingoCard(player4Card, 'player4Card'); 
    document.getElementById('markButton').disabled = false; 
    document.getElementById('startButton').disabled = true; 
    document.getElementById('resetButton').disabled = false; 
    document.getElementById('numberInput').disabled = false; 
    
}; 


function roundCounter() {
    let count =1;
    let btn= document.getElementById('drawBall');
    let disp = document.getElementById('gameRound');
    btn.onclick = function () {
        if (count ==25) {
            displayEndOfRound();
            }
            else{
        count++;
        disp.innerHTML= count;
    }
        
    }
    
}


const ROWS = 5; 
const COLS = 5; 
const MAX_NUM = 50; 
  
let currentPlayer = 1; 
let player1Card, player2Card, player3Card,player4Card; 
  

function drawBall() {
roundCounter();
const number=  Math.floor(Math.random() *MAX_NUM) + 1;
let disp = document.getElementById('ballDrawn');
disp.innerHTML =number;
if (number >= 1 && 
    number <= MAX_NUM) { 
    if (markNumber(player1Card, number) && 
        markNumber(player2Card, number)) { 
        displayBingoCard(player1Card, 'player1Card'); 
        displayBingoCard(player2Card, 'player2Card'); 

        if (checkWin(player1Card)) { 
            document.getElementById('winDisplay').textContent =  
                    '???? Player 1 has won the game! ????'; 
            
}else if (checkWin(player2Card)) { 
    document.getElementById('winDisplay').textContent =  '???? Player 2 has won the game! ????';
}else if (checkWin(player3Card)) { 
    document.getElementById('winDisplay').textContent =  '???? Player 3 has won the game! ????';
    
}else if (checkWin(player4Card)) { 
    document.getElementById('winDisplay').textContent =  '???? Player 4 has won the game! ????';
}}}}  


    function createBingoCard() { 
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
  
function displayBingoCard(card, containerId) { 
    const container = 
        document.getElementById(containerId); 
    container.innerHTML = ''; 
  
    for (let i = 0; i < ROWS; i++) { 
        for (let j = 0; j < COLS; j++) { 
            const cell = 
                document.createElement('div'); 
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
            if (card[i][j] === number) { 
                card[i][j] = 'X'; 
                return true; 
            } 
        } 
    } 
    return false; 
} 
  
  
function checkWin(card) { 
  
    // Check rows and columns for a Bingo pattern 
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
  
    // Check diagonals for a Bingo pattern 
    let diagonal1Filled = true; 
    let diagonal2Filled = true; 
    for (let i = 0; i < ROWS; i++) { 
        if (card[i][i] !== 'X') { 
            diagonal1Filled = false; 
        } 
        if (card[i][COLS - 1 - i] !== 'X') { 
            diagonal2Filled = false; 
        } 
    } 
    if (diagonal1Filled || diagonal2Filled) { 
        return true; 
    } 
  
    return false; 
} 
function show3x3(){
    hideMenu();
    showBoardGame5x5(3,3);

}
function show4x4(){
    hideMenu();
    showBoardGame5x5();
}
function show5x5(){
    hideMenu();
    showBoardGame5x5();
}

ShowUserInput();
logUsers();