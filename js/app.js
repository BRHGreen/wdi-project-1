$(start)
var start    = [0,1,2,3,4,5,6,7,"x"];
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


  $square.css("background", "red");

  if (shuffled[index-width] === "x") {
    $(this).animate({
      top: '-102px'
  })
    $("#x").animate({
      bottom: '-102px'
  })    
    return console.log("up");
  }

  else if (shuffled[index-1]     === "x") { 
    $(this).animate({
      left: '-102px'
  })
    $("#x").animate({
        right: '-102px'
  }) 
    return console.log("left");
  }

  else if  (shuffled[index+1]     === "x") {
    $(this).animate({
      left: '102px'
    })
      $("#x").animate({
        left: '-102px'
    }) 
  return console.log("right");
  }

  else if (shuffled[index+width] === "x") {
      $(this).animate({
        bottom: '-102px'
    })
      $("#x").animate({
        top: '-102px'
    }) 
  return console.log("down");
  }

  else {
    console.log('no')
  }



  

  
}










