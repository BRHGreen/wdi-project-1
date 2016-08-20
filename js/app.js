
//Create playing board which consists of a four by four grid.
//Equal sections of a picture should be divided up into 15 of these 16 squares
//the 15 square should be blank 
//animate tiles to slide when clicked
//Game play logic: 
//A tile sould only be able to move when clicked if it is next to the blank tile
//It should then only be able to move one direction into the blank space
//To achieve this create a 'click' event listener


$(start)

var start    = [0,1,2,3,4,5,6,7,""];
var width    = 3;
var shuffled;
var plays    = [];

function start() {
  createTiles(start);
  $("#shuffle").on("click", shuffle);
  $("ul").on("click", "li", move);
}

function createTiles(array) {
  var $ul = $("ul");
  $("li").remove();
  $.each(array, function(index, value){
    $("<li id="+value+">"+value+"</li>").appendTo($ul);
  })
}

$("li").click(function() {
  $("li").animate({left:'100px'})
})

function shuffle() {
  var randomTileIndex, lastTile, numberOfTiles;
  shuffled = start.slice(0);

  for (numberOfTiles = shuffled.length; numberOfTiles; numberOfTiles--) {
    randomTileIndex             = Math.floor(Math.random() * numberOfTiles);
    lastTile                    = shuffled[numberOfTiles - 1];
    shuffled[numberOfTiles - 1] = shuffled[randomTileIndex];
    shuffled[randomTileIndex]   = lastTile;
  }

  createTiles(shuffled);
}

function move(){
  if (!shuffled) return;
  var $square  = $(this);
  var $lis     = $("li");
  var lisArray = [].slice.call($lis);
  var index    = lisArray.indexOf(this);

  $square.css("background", "red");

  console.log(shuffled)

  if (shuffled[index-width] === "") return console.log("TOP");
  if (shuffled[index+1] === "")     return console.log("RIGHT");
  if (shuffled[index-1] === "")     return console.log("LEFT");
  if (shuffled[index+width] === "") return console.log("BOTTOM");
}








// shuffle elements array

// loop over elements array once shuffled, for each element inside the array append a li to the ul container

// once inside, loop over lis and create a new array of the ids
// [4,5,1,2,8,7,6]
// current playing array

// click event on lis
// compare the two arrays, if they are exactly the same, WIN, if not, keep playing the game


// function setup () {
//   $("li").click (function (){ 
//   $("li").each(function (){
//     start.push($("li"));
//     console.log(start)
//   })
// })
// }

// $("li").click (function(){
//   plays.push(this);
//   console.log(plays)
// })





