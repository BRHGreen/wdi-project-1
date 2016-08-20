
//Create playing board which consists of a four by four grid.
//Equal sections of a picture should be divided up into 15 of these 16 squares
//the 15 square should be blank 
//animate tiles to slide when clicked
//Game play logic: 
//A tile sould only be able to move when clicked if it is next to the blank tile
//It should then only be able to move one direction into the blank space
//To achieve this create a 'click' event listener


$(start)

var start = [1,2,3,4,5,6,7,8];
var shuffle = []
var plays = [];
var elements = [
{id: 0},
{id: 1},
{id: 2},
{id: 3},
{id: 4},
{id: 5},
{id: 6},
{id: 7},
{id: 8}


  // var item = "<li id='element.id'>"+ element.id + "</li>"
  // $('ul').append(item);

  ]
  

  function start () {

    createTiles()



    function createTiles() {
      $(elements).each(function(index){

        $("<li id="+index+">"+index+"</li>").appendTo("ul");
      })
    }

    function remove() {

    }


    $("#shuffle").click(shuffle)

    function shuffle () {
      $("li").remove()
      $(elements).each(function(index){
        index = Math.floor(Math.random()*8);
        $("<li id="+index+">"+index+"</li>").appendTo("ul");
      })
    }

    // function shuffle () {
    //   $("elements").each(function {
        
    //   })
    // }



  // shuffle elements array

  // loop over elements array once shuffled, for each element inside the array append a li to the ul container

  // once inside, loop over lis and create a new array of the ids
  // [4,5,1,2,8,7,6]
  // current playing array

  // click event on lis
  // compare the two arrays, if they are exactly the same, WIN, if not, keep playing the game




}



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





