$(document).ready(function(){
    $('#menu-toggle').click(function(){
        $('#mobile-menu').toggleClass('show');
    })
    $('#menuClose').click(function(){
        $('#mobile-menu').removeClass('show')
    });
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {  // Change '50' to your preferred scroll distance
        $('header').css('background-color', 'rgba(0, 0, 0, 0.8)');  // Change to your desired background color
      } else {
        $('header').css('background-color', 'transparent');
      }
    });
  });
