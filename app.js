var move = 'x'
var row1 = document.getElementById('table1').rows[0].cells;
var row2 = document.getElementById('table1').rows[1].cells;
var row3 = document.getElementById('table1').rows[2].cells;

var result = document.getElementById('result');

function changeText(id){
  if(id.innerText === ""){
    
    id.innerHTML = move;
   
    if(move === 'x'){
      move = 'o';
      checkRows();
      checkMajorDiagonal();
      checkMinorDiagonal();
      return;
    }
    
    if(move === 'o'){
      move ='x';
      checkRows();
      checkMajorDiagonal();
      checkMinorDiagonal();
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
      result.innerHTML+= "x wins";
      //refresh page or not more clicks
      return;
    }
    
    if(Array.prototype.every.call(rows[i], isInnerTextO)){
      result.innerHTML += "o wins";
      return;
    }
  }
  
}

function checkMajorDiagonal(){
  if( isInnerTextO(row1[0]) && isInnerTextO(row2[1]) && isInnerTextO(row3[2]) ){
   result.innerHTML += "o wins";
   return;
  }
  
  if( isInnerTextX(row1[0]) && isInnerTextX(row2[1]) && isInnerTextX(row3[2]) ){
   result.innerHTML+= "x wins";
   return;
  }
  
}

function checkMinorDiagonal(){
   if( isInnerTextO(row1[2]) && isInnerTextO(row2[1]) && isInnerTextO(row3[0]) ){
    result.innerHTML += "o wins";
    return;
  }
  
  if( isInnerTextX(row1[2]) && isInnerTextX(row2[1]) && isInnerTextX(row3[0]) ){
    result.innerHTML+= "x wins";
    return;
  }
  
}
  


