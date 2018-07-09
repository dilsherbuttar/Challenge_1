var move = 'x'
var row = document.getElementById('table1').rows;
var row1 = document.getElementById('table1').rows[0].cells;
var row2 = document.getElementById('table1').rows[1].cells;
var row3 = document.getElementById('table1').rows[2].cells;
var columns = [[],[],[]];

for(var i = 0; i < 3; i++){
  for(var j = 0; j < 3; j++){
    columns[i].push(row[j].cells[i]);
  }
};


var board = [];
for(var i = 0; i < row.lenght; i++){
  for(var j = 0; j < row.lenght; j++){
    board
  }
  
}

var result = document.getElementById('result');

function changeText(id){
  if(id.innerText === ""){
    
    id.innerHTML = move;
    
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
  var rows = [row1, row2, row3]
  for(var i = 0; i < rows.length; i++){
    
    if(Array.prototype.every.call(rows[i], isInnerTextX)){
      alert("x wins");
      location.reload();
      
    }
    
    if(Array.prototype.every.call(rows[i], isInnerTextO)){
      alert("o wins");
      location.reload();
      
    }
  }
  
}

function checkMajorDiagonal(){
  if( isInnerTextO(row1[0]) && isInnerTextO(row2[1]) && isInnerTextO(row3[2]) ){
   alert("o wins");
   location.reload();
   
 }
 
 if( isInnerTextX(row1[0]) && isInnerTextX(row2[1]) && isInnerTextX(row3[2]) ){
   alert("x wins");
   location.reload();
 }
 
}

function checkMinorDiagonal(){
  if( isInnerTextO(row1[2]) && isInnerTextO(row2[1]) && isInnerTextO(row3[0]) ){
    alert("o wins");
    location.reload();
  
  }

  if( isInnerTextX(row1[2]) && isInnerTextX(row2[1]) && isInnerTextX(row3[0]) ){
    alert("x wins");
    location.reload();
  }

}

function checkColumns(){
  for(var i = 0; i < 3; i++){
    if(Array.prototype.every.call(columns[i], isInnerTextX ) ) {
      alert("x wins");
      location.reload();
    }
  }
  
  for(var i = 0; i < 3; i++){
    if(Array.prototype.every.call(columns[i], isInnerTextO ) ) {
      alert("y wins");
      location.reload();
    }
  }
  
  
}





























