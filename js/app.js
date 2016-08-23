$(start)
var start           = [0,1,2,3,4,5,6,7,"x"];
var shuffled;
var width           = 3;
var currentBoard    = []
var newBoard        = []



function start () {

  // $('li').prepend('<img id="theImg" src="/Users/Mac/generalAssembly/Development/wdi-project-1/images/escherLizardsAgain.jpg" />')

  createTiles(start);

  $("#shuffle").on("click", shuffle);
  $("ul").on("click", "li", move); 
}

function createTiles (array) {
  var $ul = $("ul");
  $("li").remove();
  $.each(array, function(index, value) {
    if (value !== "x") {
    $("<li id="+value+"><img src='./images/escherLizardsAgain.jpg'></li>").appendTo($ul);
  }
  });
}

function shuffle() {
  var randomTileIndex, lastTile, numberOfTiles; 
  shuffled = start.slice(0);

  for (numberOfTiles = shuffled.length; numberOfTiles; numberOfTiles-- ) {
    randomTileIndex             = Math.floor(Math.random() * numberOfTiles);
    lastTile                    = shuffled[numberOfTiles - 1];
    shuffled[numberOfTiles -1]  = shuffled[randomTileIndex]
    shuffled[randomTileIndex]   = lastTile;
  }

  createTiles(shuffled);
} 

function move() {
  if (!shuffled) return alert("You need to shuffle"); 
  // var playedTile = (this.id)
  // $(shuffled).each(function (index, value){
  //   if(value === parseInt(playedTile)) {
  //     var playedTileIndex = index
  //     if ((playedTileIndex === 2 || playedTileIndex === 5) && (playedTileIndex+1 === 3 || playedTileIndex+1 === 6)) {
  //       alert("no");
  //     }

  //   }
  // })

  
  var $square       = $(this);
  var $x            = $("#x");
  var $lis          = $("li");
  var lisArray      = [].slice.call($lis);
  var id            = parseInt($square.attr("id"));
  var index         = shuffled.indexOf(id);
  var currentSquare = shuffled[index];
  var newIndex, newSquare;


  if ($lis[index] === "x") return alert("Don't click on x");
  if ((shuffled[index+1] === "x") && (index === 2 || index === 5)) return alert ("Not ok") 
  if ((shuffled[index-1] === "x") && (index === 3 || index === 6)) return alert ("Not Aok") 



  var prevLeft  = parseInt($square.css("left"));
  var prevTop   = parseInt($square.css("top"));
  var prevXLeft = parseInt($("#x").css("left"));
  var prevXTop  = parseInt($("#x").css("top"));

  if (shuffled[index-width] === "x")  {
    $square.animate({
      top: prevTop - 100 + "px"
    })
    $x.animate({
      top: prevXTop + 100 + "px"
    })
    newIndex = index-width;
  } else if (shuffled[index+width] === "x") {
    $square.animate({
      top: prevTop + 100 + "px"
    })
    $x.animate({
      top: prevXTop - 100 + "px"
    }) 
    newIndex = index+width;
    //left
  } else if (shuffled[index-1] === "x") { 
    $square.animate({
      left: prevLeft - 100 + "px"
    })
    $x.animate({
      left: prevXLeft + 100 + "px"
    }) 
    newIndex = index-1;
    //right
  } else if (shuffled[index+1] === "x") {
    $square.animate({
      left: prevLeft + 100 + "px"
    })
    $x.animate({
      left: prevXLeft - 100 + "px"
    }) 
    newIndex = index+1;
  } 
  newSquare          = shuffled[newIndex];
  shuffled[newIndex] = currentSquare;
  shuffled[index]    = newSquare;
}

function displayBoard(array){
  var board = "\n";
  var i,j,temparray,chunk = 3;
  for (i=0,j=array.length; i<j; i+=chunk) {
    board += array.slice(i,i+chunk).toString()+"\n";
  }
  return board;
}



/*
   X+1    Y+1       N+1   
    1     2,4                     3/3,5,6,7,8,9     -can't play if the square is greater than x index +3
    2     1,3,5                   4/6,7,8,9         -can't play if the square === x index + 2
    3     2,6       1,4,6         5/7,8,9
    4     1,5,7     2,3,          6/8,9     
    5     2,4,6,8   1,3,          7/9
    6     3,5,9     1,2,4,7,      8/
    7     4,8       1,2,3,5,6,    9/
    8     5,7,9     1,2,3,4,6
    9     6,8       1,2,3,4,7
    */







