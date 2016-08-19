//Create playing board which consists of a four by four grid.
//Equal sections of a picture should be divided up into 15 of these 16 squares
//the 15 square should be blank 
//animate tiles to slide when clicked
//Game play logic: 
//A tile sould only be able to move when clicked if it is next to the blank tile
//It should then only be able to move one direction into the blank space
//To achieve this create a 'click' event listener


$(start)


  
var positions = {
  a: $("#1"),
  b: $("#2"),
  c: $("#3"),
  d: $("#4"),
  e: $("#5"),
  f: $("#6"),
  g: $("#7"),
  h: $("#8"),
  i: $("#9"),
  j: $("#10"),
  k: $("#11"), 
  l: $("#12"),
  m: $("#13"),
  n: $("#14"),
  o: $("#15"),
  p: $("#x")
}
 console.log(positions)



function start () {

$("li").click(move);

function move () {  
    $(this).animate({left: '100px'});
    positions.p = $("#15")
    console.log(positions)
}





}



// $(function() {
//     $("#drag").sortable({ 
//     });
// });

// $(function() {
//     $( '#drag' ).sortable({
//         stop: function () {
//             var nbElems = ul.length;
//             $('ul.currentposition').each(function(idx) {
//                 $(this).val(nbElems - idx);
//             });
//         }
//     });
// });

// var tile = $(this).on('click', function (){
//   
// })
// }


//board click function:


//level select function: 
  // var $next = $('#next').on('click', bigger)

  // var $prev = $('#prev').on('click', smaller) 

  // function bigger() {
  //   $('main').css({'height':'500px', 'width':'500px'})
  //    }

  // function smaller() {
  //   $('main').css({'height':'300px', 'width':'300px'})
  //   }
