//Business Logic**********************************************************

//Selection of Squares
var board1 =
  [0,0,0,0,0,0,
  0,0,0,0,0,0,
  0,0,0,0,0,0,
  0,0,0,0,0,0,
  0,0,0,0,0,0,
  0,0,0,0,0,0]

  var board2 =
    [0,0,0,0,0,0,
    0,0,0,0,0,0,
    0,0,0,0,0,0,
    0,0,0,0,0,0,
    0,0,0,0,0,0,
    0,0,0,0,0,0]


var player1 = prompt("Player1, Enter your name : ");
//winning function
var winning = function(board){
  var value = true;
  board.forEach(function(bo) {
    if(bo === 1){
      value = false;
    }
  })
  if(value === true){
    alert("You Win");
    index = 2;
  }
}


//winning computer function
var winningComp = function(board){
  var value = true;
  board.forEach(function(bo) {
    if(bo === 1){
      value = false;
    }
  })
  if(value === true){
    alert("Computer Wins");
    index = 2;
  }
}

var player1Value = [];
var player2Value = [];
var index = 2;


var changeTurn = (function(index){
  if(index === 0){
     return index += 1;
  } else if (index === 1){
     return index -= 1;
  }
})

///computer turn function
var computerTurn = function(){
  var compValue = computerRand();
  while(board1[compValue-1] === 2){
    compValue = computerRand();
  }
  if(index === 1 && board1[compValue-1] != 2){
    if(board1[compValue-1] === 1){
      alert("Computer hit a ship");
      $("#a"+compValue).addClass("hit");
      board1[compValue-1] = 2;
      winningComp(board1);
      computerTurn();
    } else if (board1[compValue-1] === 0){
      alert("Computer miss");
      $("#a"+compValue).addClass("miss");
      board1[compValue-1] = 2;
    }
  }
}

///computer selection function
var compSelect = function(){
  for(i=0;i<5;i++){
    var compValue = computerRand();
    while(board2[compValue-1] === 1){
      compValue = computerRand();
    }
    board2[compValue-1]= 1;
  }
}

///computer random function
var computerRand = function(){
  return Math.floor(Math.random() * 36) + 1;
}

//User Interface Logic**********************************************************

$(document).ready(function(){

  $("span").text(player1);

  $("form.player1Board").submit(function(event){
     event.preventDefault();
     $("input:checkbox[name=player1]:checked").each(function(){
       var value = $(this).val();
       player1Value.push(value);
     });
     player1Value.forEach(function(value){
       board1[value] = 1;
     })
     $(".player1").hide();
     $(".combined").show();
     index = 1;
     compSelect();
   });


$("#b1, #b2, #b3, #b4, #b5, #b6, #b7, #b8, #b9, #b10, #b11, #b12, #b13, #b14, #b15, #b16, #b17, #b18, #b19, #b20, #b21, #b22, #b23, #b24, #b25, #b26, #b27, #b28, #b28, #b29, #b30, #b31, #b32, #b33, #b34, #b35, #b36").click(function() {
$(this).find("input[type=checkbox]").attr("checked",true);
  var smtg2 = this.id;
  var number = parseInt(smtg2.replace("b",""));
  if(index === 1 && board2[number-1] != 2){
    if(board2[number-1] === 1){
      alert("You hit a ship");
      $(this).addClass("hit");
      board2[number-1] = 2;
      winning(board2);
    } else if (board2[number-1] === 0){
      alert("You miss");
      $(this).addClass("miss");
      board2[number-1] = 2;
      computerTurn();
    }


  }

})

$("button#restart").click(function(){
  location.reload();
})


});
