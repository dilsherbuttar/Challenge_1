var move = 'x'
var row1 = document.getElementById('table1').rows[0].cells;
var row2 = document.getElementById('table1').rows[1].cells;
var row3 = document.getElementById('table1').rows[2].cells;

var testFunction = function(){
  console.log('hi');
}

function changeText(id){
  id.innerHTML = move;
 
  if(move === 'x'){
    move = 'o';
    return;
  }
  
  if(move === 'o'){
    move ='x';
    return;
  }
  
  
}
  


