// A $( document ).ready() block.
function clamp (value, min, max) {
  return Math.min(Math.max(value, min), max);
};

$( document ).ready(function() {
  setTimeout(function () {
    $('html, body').animate({
        scrollLeft: 0
    }, 0);

    $(".start").click(function() {
    $(".start").hide();
    $('html, body').animate({
        scrollLeft: $(".finish").offset().left
    }, 20000); /*animation time length*/
    });

    var mx = 0;
    var my = 0;
    $(window).mousemove(function(e) {
        var min = window.innerHeight * 0.2 + 5;
        var max = window.innerHeight * 0.8 - 10;

        mx = e.clientX - 25;
        my = clamp(e.clientY, min, max) - 25

        $('.kart-cursor').css({
            left: mx,
            top: my
        });
    });

    function checkObs () {
      var obstacles = $('.obs');
      obstacles.each(function () {
        var boundingBox = this.getBoundingClientRect();
        var x = boundingBox.x;
        var y = boundingBox.y;
        var width = boundingBox.width;
        var height = boundingBox.height;

        if (mx >= x && my >= y && mx <= x + width && my <= y + height) {
          $('.loose-video').show();
          $('.loose').fadeIn(4000);
          $('html, body').stop();
          setTimeout(function(){
            window.location.reload(); // you can pass true to reload function to ignore the client cache and reload from the server
          },7000); //delayTime should be written in milliseconds e.g. 1000 which equals 1 second

        }
      })

      requestAnimationFrame(checkObs);
    }

    checkObs()

    $(".finish").hover(function() {
      $('.win-video').show();
      $('.won').fadeIn(4000);
      setTimeout(function(){history.back();}, 7000);
    });
  }, 100)

});
