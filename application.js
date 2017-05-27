
var sideLength = 10;

$(document).ready(function() {

  //LANDING POPUP adapted from flerovium: http://www.jqueryscript.net/lightbox/Simple-jQuery-Plugin-For-Opening-A-Popup-Window-On-Page-load.html
  var id = '#dialog';

  //Get the screen height and width
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();

  $(popUp);

  function popUp() {
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

  //Submit on enter
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
      $(cheekyBastard);
    }
  });
}

//BUTTONS AND CONTROLS

  //Start over
  $('#start').click(function() {
    $('#popuptitle').text('Starting over?');
    $('#popuptext').text('How many pixels per side would you like (max 100)?')
    $('#grid').empty();
    $('#rainbow, #eraser, #dot').removeClass('highlighted');
    $(popUp);
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
      $(rainbow);
    };
  });

});

//Major functions

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


function cheekyBastard() {
  $('#popuptitle').text('I see what you did there.');
  $('#popuptext').text('100 or less, please, you cheeky bastard. I don\'t want to freeze up your browser.')
}
