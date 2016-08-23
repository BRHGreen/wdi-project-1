$(start)
var start           = [0,1,2,3,4,5,6,7,"x"];
var shuffled;
var width           = 3;
var currentBoard    = []
var newBoard        = []

function start () {
  createTiles(start);

  $("#shuffle").on("click", shuffle);
  $("ul").on("click", "li", move); 
}

function createTiles (array) {
  var $ul = $("ul");
  $("li").remove();
  $.each(array, function(index, value) {
    $("<li id='id"+value+"'><img src='./images/text.jpg'></li>").appendTo($ul);
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

  
  var $square       = $(this);
  var $x            = $("#idx");
  var $lis          = $("li");
  var lisArray      = [].slice.call($lis);
  var id            = parseInt($square.attr("id").replace("id", ""))
  var index         = shuffled.indexOf(id);
  var currentSquare = shuffled[index];
  var newIndex, newSquare;

  if ($lis[index] === "x") return;
  
  var w = width;
  var possibleIndexes = [index-w, index+1, index+w, index-1];

  possibleIndexes = possibleIndexes.filter(function(square){
    var modIndex  = index  % w;
    var modSquare = square % w;
    var modDiff1  = modIndex - modSquare;
    var modDiff2  = modSquare - modIndex;
    return (modDiff1 < 2) && (modDiff2 < 2) && (square >= 0) && (square <= 8);
  });

  var possible = possibleIndexes.filter(function(square){
    return shuffled[square] === "x";
  });

  if (possible.length <= 0) return;

  var prevLeft  = parseInt($square.css("left"));
  var prevTop   = parseInt($square.css("top"));
  var prevXLeft = parseInt($("#idx").css("left"));
  var prevXTop  = parseInt($("#idx").css("top"));

  console.log(prevLeft, prevTop, prevXLeft, prevXTop)

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
  } else if (shuffled[index-1] === "x") { 
    $square.animate({
      left: prevLeft - 100 + "px"
    })
    $x.animate({
      left: prevXLeft + 100 + "px"
    }) 
    newIndex = index-1;
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
