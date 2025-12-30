window.onload = () => {

  var cell = document.querySelectorAll(".cell");
  var pm = document.querySelector("p");
  var restartbtn = document.querySelector("button");
  var player = "X";
  var board = ["","","","","","","","",""];
  var gamefinished = false;
  var winner = false;



  function wincheck() {
    var win = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];

    var winner = false;

    for(var i = 0; i <win.length; i++){
      var a = win[i][0];
      var b = win[i][1];
      var c = win[i][2];
      if(board[a] != "" && board[a] == board[b] && board[a] == board[c]){
        winner = true;
      }
    }
    return winner;
  }


  function drawcheck() {

    var draw = true;

    for(var i = 0; i <board.length; i++){
      if(board[i] == ""){
        draw = false;
      }
    }
    return draw;
  }


  cell.forEach((cell, index) => {
    cell.onclick = () => {
      if(gamefinished){

      }
      else if(board[index] != ""){

      }
      else{
        board[index] = player;
        cell.innerHTML = player;

        if(wincheck()){
          pm.innerHTML = "Winner : " + player;
          gamefinished = true;
        }
        else if(drawcheck()){
          pm.innerHTML = "Game draw...";
          gamefinished = true;
        }
        else{
          if(player == "X"){
            player = "O";
          }
          else{
            player = "X";
          }

          pm.innerHTML ="Trun : " + player;
        }
      }
    };
  });


  restartbtn.onclick = () => {
    board = ["","","","","","","","",""];
    player = "X";
    pm.innerHTML = "Trun : X";
    gamefinished = false;
    for(var i = 0; i < cell.length; i++){
      cell[i].innerHTML = "";
    }
  };
};