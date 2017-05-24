

sideLength = 100;
divDimension = 400 / sideLength;


//The following solution works, but it takes for fucking ever to load
$(document).ready(function() {
  for (var i = 0; i < (sideLength*sideLength); i++) {
    $("#grid").append($('<div class="divGrid"></div>'));
  }
  $('.divGrid').css('height', divDimension + 'px').css('width', divDimension + 'px');
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
