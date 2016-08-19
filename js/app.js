//Create playing board which consists of a four by four grid.
//Equal sections of a picture should be divided up into 15 of these 16 squares
//the 15 square should be blank 
//


$(start)

function start (){

  var $next = $('#next').on('click', bigger)

  var $prev = $('#prev').on('click', smaller) 

  function bigger() {
    $('main').css({'height':'500px', 'width':'500px'})
     }

  function smaller() {
    $('main').css({'height':'300px', 'width':'300px'})
    }
  
}