$(start)
var start    = [0,1,2,3,4,5,6,7,""];
var shuffled;
var width    = 3;


function start () {
  createTiles(start);
  $("#shuffle").on("click", shuffle); 
  $("ul").on("click", "li", move); 
}

function createTiles (array) {
  var $ul = $("ul");
  $("li").remove();
  $.each(array, function(index, value) {
    $("<li id="+value+">"+value+"</li>").appendTo($ul);
  })
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

function move () {
  if (!shuffled) return + alert("You need to shuffle"); 
  var $square  = $(this);
  var $lis     = $("li");
  var lisArray = [].slice.call($lis);
  var index    = lisArray.indexOf(this);

  console.log(this)

  $(this).animate({
      left: '-100px'
  })


  $square.css("background", "red");

  if (shuffled[index-width] === "") 
    $(this).animate({
      top: '-100px'
  })
    return console.log("up");

  if (shuffled[index-1]     === "")  
    $(this).animate({
      left: '-100px'
  })
    return console.log("left");

  if (shuffled[index+1]     === "") return console.log("right");
  if (shuffled[index+width] === "") return console.log("down");
  else { console.log("no")}

  

  
}










