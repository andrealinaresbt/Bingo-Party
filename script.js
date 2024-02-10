

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

function showBoardGame(j,k){
    var x = document.getElementById("game-controls");
    var y = document.getElementById('game-controls');
    y.style.display = 'block';
    showLeaderBoard();
    let player1card = createBingoCard(5,5);
    displayBingoCard(player1card, 'bingo-board');

}

function roundCounter() {
    let count =0;
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

function drawBall() {
    roundCounter();
    let ballDrawnNumber =[];
    let ballDrawnLetter = [];
    let BallDrawn=()=>{
        let repeatedNum = 0;
        let ballLetter;
        let ballNumber = 1 + Math.floor(Math.random()*50);
        for (let index = 0; index < 50; index++) {
            
            
        }
        if (repeatedNum == 0) {
            if (ballNumber <=10) {
                this.ballDrawnLetter.push("B");
                this.ballDrawnNumber.push(ballNumber);
                
            }else if (ballNumber >10 && ballNumber<=20) {
                this.ballDrawnLetter.push("I");
                this.ballDrawnNumber.push(ballNumber);
                
            }else if (ballNumber >20 && ballNumber<=30) {
                this.ballDrawnLetter.push("N");
                this.ballDrawnNumber.push(ballNumber);
                
            }else if (ballNumber >30 && ballNumber<=40) {
                this.ballDrawnLetter.push("G");
                this.ballDrawnNumber.push(ballNumber);
                
            }else if (ballNumber >40 && ballNumber<=50) {
                this.ballDrawnLetter.push("O");
                this.ballDrawnNumber.push(ballNumber);
                
            }
            
        }else{
            ballNumber =  1 + Math.floor(Math.random()*50);
        }
        repeatedNum=0;

    }
    
    
    
}

function createBingoCard(column, row){
    /*let matrix=[];
    let generateMatrix=()=>{
        for (let index = 0; index < column; index++) {
            let arrayProv = [];
            for (let i= 0; i < column; i++) {
                arrayProv[i]= Math.floor(Math.random()*50 +1);
                for (let outer = 0; outer < arrayProv.length; outer++) {
                    for (let inner = 0; inner < arrayProv.length; inner++) {
                        if (inner!= outer && arrayProv[outer]== arrayProv[inner]) {
                            arrayProv[outer] = Math.floor(Math.random()*50 +1);
                            
                        }
                    }
                    
                }
                
            }
            matrix.push(arrayProv);
            
        }
        
    }
return matrix;*/
const card = []; 
    const usedNumbers =[]; 

    //roundCounter();
    while (usedNumbers.size < ROWS * COLS) { 
        let num = Math.floor(Math.random()*50) + 1; 
        for (let index = 0; index < array.length; index++) {
            if (!(ballNumber =this.usedNumbers[index])) { 
                usedNumbers.add(num); 
            } 
            
        }
        let numbersArray = []; 
    for (let i = 0; i < ROWS; i++) { 
        card.push(numbersArray.slice(i * COLS, (i + 1) * COLS)); 
    } 
  
    return card; 
} 
}


function displayBingoCard(card, column, row){
    const container = document.getElementById("bingo-board");
    container.innerHTML ='';
    for (let index = 0; index < row; index++) {
        for (let ix = 0; ix < column; ix++) {
            const cell = document.createElement('div');
            cell.textContent== card[index][ix];
            if(card[index][ix] == "X"){
                cell.classList.add('marked');
            }
            container.appendChild(cell);
        }
        
    }
}

function show3x3(){
    hideMenu();
    showBoardGame(3,3);

}
function show4x4(){
    hideMenu();
    showBoardGame();
}
function show5x5(){
    hideMenu();
    showBoardGame();
}

ShowUserInput();
logUsers();