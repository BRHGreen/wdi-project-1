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
    $("<li id=id"+value+"><img src='./images/text.jpg'></li>").appendTo($ul);
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
  $(shuffled).each(function(index, value){
    console.log(index, value)

  })

  if (!shuffled) return alert("You need to shuffle"); 

  
  var $square       = $(this);
  var $x            = $("#x");
  var $lis          = $("li");
  var lisArray      = [].slice.call($lis);
  var id            = parseInt($square.attr("id"));
  var index         = shuffled.indexOf(id);
  var currentSquare = shuffled[index];
  var newIndex, newSquare;
  console.log(index)


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
