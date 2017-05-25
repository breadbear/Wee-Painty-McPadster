


sideLength = 10;

$(document).ready(function() {


  //Popup adapted from flerovium: http://www.jqueryscript.net/lightbox/Simple-jQuery-Plugin-For-Opening-A-Popup-Window-On-Page-load.html
  var id = '#dialog';
  //Get the screen height and width
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();

  //Set height & width to mask the whole screen
  $('#mask').css({'width': maskWidth, 'height': maskHeight});

  //Transition effect
  $('#mask').fadeIn(500);
  $('#mask').fadeTo("slow", 0.9);

  //Get the window height and width
  var winH = $(window).height();
  var winW = $(window).width();

  //Set the popup window to center
  $(id).css('top', winH/2-$(id).height()/2);
  $(id).css('left', winW/2-$(id).width()/2);

  //transition effect
  $(id).fadeIn(2000);

 //Set number of divs per side, build grid
  $('input[type=submit]').click(function() {
    sideLength = $('input[name=quantity]').val();
    $('#mask').fadeOut(500);
    $('.window').fadeOut(500);
    $(genGrid);
  });

//Note: add to the above to make this work when you push Enter too

/*
  //If close button is clicked
  $('.window .close').click(function (e) {
    //Cancel the link behavior
    e.preventDefault();
    $('#mask').hide();
    $('.window').hide();
  });


//if mask is clicked
$('#mask').click(function() {
  $(this).hide();
  $('.window').hide();
});
*/

  function genGrid() {
    divDimension = 400 / sideLength;
    for (var i = 0; i < (sideLength*sideLength); i++) {
      $("#grid").append($('<div class="divGrid"></div>'));
    }
    $('.divGrid').css('height', divDimension + 'px').css('width', divDimension + 'px');
  }
});



  //for (var i=0; i<sideLength.length; i++) {
//Let's get started! Set initial grid size like https://beachfern.github.io/sketchpad/

/* First attempt at making the div grid


//The following solution works, but it takes for fucking ever to load
$(document).ready(function() {
  for (var i = 0; i < (sideLength*sideLength); i++) {
    $("#grid").append($('<div class="divGrid"></div>'));
    $('.divGrid').css('height', divDimension + 'px');
    $('.divGrid').css('width', divDimension + 'px');

    I'm gonna try to pull the jQuery selectors out of the loop to speed it up

$('.divGrid').height(divDimension).width(divDimension);

$(document).ready(function() {
  $('#divGrid').height(divDimension).width(divDimension);
    for (var i = 0; i < (divDimension*sideLength); i++) {
      $('#divGrid').clone().appendTo('#grid');
    }
});

first attempt at copying:

function genGrid(sideLength) {
  for (i = 0, i < sideLength * sideLength; i ++) {
    $('<div>', {class: 'divDimension'}).appendTo($('#grid'));
  }
  makeSquare()
}

function makeSquare() {
  square = 400 / sideLength
  $('.divDimension').css({'height', square + 'px'}, {'width', square + 'px'});
}

  }

*/

/*
function drawGrid() {



  //Draws grid based on user input


};

function colorChange(){

  //change div color on mouseenter, maybe using addClass() or background-color
  //Also you'll definitely want to use $(this)
}

function(){

  //Darken on second pass like https://anyafink.github.io/sketchpad/
}

function() {

//update sideLength from form input when user clicks submit

}

function(){
  //RGB color selector like https://ridergit.github.io/Sketchpad/

}

function(){

  //eraser
}
*/
