
var sideLength = 10;

//Get start over figured out and you're good to go

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

  //Form submits on keypress Enter
  $('input[name=quantity]').keypress(function(e) {
    if(e.which == 13) {
      if($('input[name=quantity]').focus()) {
        $('input[type=submit]').click();
      }
    }
  });

 //Set number of divs per side
  $('input[type=submit]').click(function() {
    sideLength = $('input[name=quantity]').val();
    $('#grid').empty();
    if (sideLength > 0 && sideLength <= 100) {
      $('#mask').fadeOut(500);
      $('.window').fadeOut(500);
      $(genGrid);
      $(blackDraw);
    } else {
      $('#popuptitle').text('Cheeky bastard');
      $('#popuptext').text('Enter a number smaller than 100, please. I don\'t want to freeze up your browser.')
    }
  });

//BUILDING BUTTONS AND CONTROLS

  //Start over
  $('#start').click(function() {
    $('#popuptitle').text('Starting over?');
    $('#popuptext').text('How many pixels per side would you like (max 100)?')
    $('#grid').empty();
    //Repeating the popup steps above; might be good to refactor?
    $('#mask').css({'width': maskWidth, 'height': maskHeight});
    $('#mask').fadeIn(500);
    $('#mask').fadeTo("slow", 0.9);
    $(id).css('top', winH/2-$(id).height()/2);
    $(id).css('left', winW/2-$(id).width()/2);
    $(id).fadeIn(2000);
    $('input[type=submit]').click(function() {
      sideLength = $('input[name=quantity]').val();
      $('#grid').empty();
      if (sideLength > 0 && sideLength <= 100) {
        $('#mask').fadeOut(500);
        $('.window').fadeOut(500);
        $('#rainbow, #eraser, #dot').removeClass('highlighted');
        $(genGrid);
        $(blackDraw);
      } else {
        $('#popuptitle').text('Cheeky bastard');
        $('#popuptext').text('Between 1 and 100, please.')
      }
    });
    $('input[name=quantity]').keypress(function(e) {
      if(e.which == 13) {
        if($('input[name=quantity]').focus()) {
          $('input[type=submit]').click();
        }
      }
    });
  });

  //Turn on eraser
  $('#eraser').click(function() {
    if ($(this).hasClass('highlighted')) {
      $(this).removeClass('highlighted');
        if($('#rainbow').hasClass('highlighted')) {
          $(rainbow);
        } else {
          $(blackDraw);
        }
    } else {
      $(this).addClass('highlighted');
      $(eraser)};
  });

  //Dot mode
  $('#dot').click(function() {
    $(this).toggleClass('highlighted');
    $('.divGrid').toggleClass('dot');
  });

  //Rainbow mode
  $('#rainbow').click(function() {
    if($('#rainbow').hasClass('highlighted')) {
      $(this).removeClass('highlighted');
      $(blackDraw);
    } else {
      $(this).addClass('highlighted');
      $(rainbow)};
  });
});



function genGrid() {
  //Set grid size and generate
  divDimension = 1000 / sideLength;
  for (var i = 0; i < (sideLength*(sideLength / 2.5)); i++) {
    $("#grid").append($('<div class="divGrid"></div>'));
      }
  $('.divGrid').css('height', divDimension + 'px').css('width', divDimension + 'px');
}

function blackDraw() {
$('.divGrid').on('mouseenter', function(){
  $(this).css("background-color", "black");
  });
}

function eraser() {
  $('.divGrid').on('mouseenter', function(){
    $(this).css("background-color", "white");
    });
}

function rainbow() {
  $('.divGrid').on('mouseenter', function() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    $(this).css("background-color", "rgba(" + r + "," + g + "," + b + ", 0.6)");
  });
}













//Below is anyafink's solution which I don't love. am setting aside for now
//for my flawed genGrid, which I'll fix later i spose
/*
    for(var i = 0; i < sideLength; i++) {
      var $row = $('<div class="row"></div>');
      $('#grid').append($row.clone());
    }

    for(var i = 0; i < sideLength; i++) {
      var $square = $('<div class="square"></div>');
      $('.row').append($square.clone());
    }

    var calc = 100/sideLength;
    calc -= calc * .01;

    $('.row').css({'height': calc + '%'});
    $('.square').css({'width': calc + '%'});
  }
});

*/
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
