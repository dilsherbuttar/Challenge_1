var move = 'x'
var row = document.getElementById('table1').rows;
var xResults = 0;
var oResults = 0;
var xResultsDisplay = document.getElementById('xScore');
var oResultsDisplay = document.getElementById('oScore');
var table = document.getElementById('table1');
xResultsDisplay.innerText = `x: ${xResults}`;
oResultsDisplay.innerText = `o: ${oResults}`;


var board = [[],[],[]];
var columns = [[],[],[]];

for(var i = 0; i < 3; i++){
  for(var j = 0; j < 3; j++){
    board[i].push(row[i].cells[j]);
  }
};

for(var i = 0; i < 3; i++){
  for(var j = 0; j < 3; j++){
    columns[i].push(row[j].cells[i]);
  }
};


function changeText(id){
  if(id.innerText === ""){
    
    id.innerText = move;
    
    if(move === 'x'){
      move = 'o';
      checkRows();
      checkMajorDiagonal();
      checkMinorDiagonal();
      checkColumns();
      return;
    }
    
    if(move === 'o'){
      move ='x';
      checkRows();
      checkMajorDiagonal();
      checkMinorDiagonal();
      checkColumns();
      return;
    }
    
  } else {
    alert('try different square!')
  }
  
  
}

function isInnerTextX(value){
  return value.innerText === 'x';//refactor it later with ||
};

function isInnerTextO(value){
  return value.innerText === 'o';
}

function checkRows(){
 
  for(var i = 0; i < 3; i++){
    
    if(Array.prototype.every.call(board[i], isInnerTextX)){
      alert("x wins");
      xResults++;
      xResultsDisplay.innerText = `x: ${xResults}`;
      row[0].cells[0].innerText = "";
      clearBoard();
      move = 'x';
      
      
    }
    
    if(Array.prototype.every.call(board[i], isInnerTextO)){
      alert("o wins");
      oResults++;
      oResultsDisplay.innerText = `o: ${oResults}`;
      row[0].cells[0].innerText = "";
      clearBoard();
      move = 'o';
      
    }
  }
  
}

function checkMajorDiagonal(){
  if( isInnerTextO(board[0][0]) && isInnerTextO(board[1][1]) && isInnerTextO(board[2][2]) ){
   alert("o wins");
   oResults++;
   oResultsDisplay.innerText = `o: ${oResults}`;
   row[0].cells[0].innerText = "";
   clearBoard();
   move = 'o';
   
 }
 
 if( isInnerTextX(board[0][0]) && isInnerTextX(board[1][1]) && isInnerTextX(board[2][2]) ){
  alert("x wins");
  xResults++;
  xResultsDisplay.innerText = `x: ${xResults}`;
  row[0].cells[0].innerText = "";
  clearBoard();
  move = 'x';
}

}

function checkMinorDiagonal(){
  if( isInnerTextO(board[0][2]) && isInnerTextO(board[1][1]) && isInnerTextO(board[2][0]) ){
    alert("o wins");
    oResults++;
    oResultsDisplay.innerText = `o: ${oResults}`;
    row[0].cells[0].innerText = "";
    clearBoard();
    move = 'o';
    
  }

  if( isInnerTextX(board[0][2]) && isInnerTextX(board[1][1]) && isInnerTextX(board[2][0]) ){
   alert("x wins");
   xResults++;
   xResultsDisplay.innerText = `x: ${xResults}`;
   row[0].cells[0].innerText = "";
   clearBoard();
   move = 'x';
 }

}

function checkColumns(){
  for(var i = 0; i < 3; i++){
    if(Array.prototype.every.call(columns[i], isInnerTextX ) ) {
     alert("x wins");
     xResults++;
     xResultsDisplay.innerText = `x: ${xResults}`;
     row[0].cells[0].innerText = "";
     clearBoard();
     move = 'x';
   }
 }
 
 for(var i = 0; i < 3; i++){
  if(Array.prototype.every.call(columns[i], isInnerTextO ) ) {
    alert("o wins");
    oResults++;
    oResultsDisplay.innerText = `o: ${oResults}`;
    row[0].cells[0].innerText = "";
    clearBoard();
    move = 'o';
  }
}


}

function clearBoard(){
  for(var i = 0; i < 3; i++){
    for(var j = 0; j < 3; j++){
      row[i].cells[j].innerText = "";
    }
  }
}





























