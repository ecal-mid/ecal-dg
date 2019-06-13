(function () {
  /*!
   * Drag & ScrollTo v0.0.1 (http://getbootstrap.com)
   * Copyright 2011-2014 Alexandre Bianchi, Scanix
   * Licensed under MIT
   */

  // Center the title when the page load or refresh
/*   var centerTitle = function (e) {
    $('body, html').scrollTop($('#hack').offset().top - 860);

      $('body, html').scrollLeft($('#hack').offset().left - ($(window).width() / 2));
  }*/

  window.scrollTo(2950, 550);

  var centerTitle = function (e) {
      $('body, html').scrollTop($('#hack').offset().top - 400);
      $('body, html').scrollLeft($('#hack').offset().left - ($(window).width() / 2) + 50);
  }


  $(document).ready(function () {
      centerTitle();
  });

  $(window).unload(function () {
      centerTitle();
  });

  // Position the viewport on the anchor's position
  $(function () {
      $('a.page-scroll').bind('click', function (event) {
          var $anchor = $(this);
          $('body, html').animate({
              scrollTop: $($anchor.attr('href')).offset().top - 150
          }, {
              queue: false,
              duration: 1000,
              easing: 'easeInOutExpo'
          });
          $('body, html').animate({
              scrollLeft: $($anchor.attr('href')).offset().left - 85
          }, {
              queue: false,
              duration: 1000,
              easing: 'easeInOutExpo'
          });
          event.preventDefault();
      });
  });

  //Allow drag to scroll
  var clicked = false,
      clickY, clickX;
  $(document).on({
      'mousemove': function (e) {
          clicked && updateScrollPos(e);
      },
      'mousedown': function (e) {
          clicked = true;
          clickY = e.pageY;
          clickX = e.pageX;
      },
      'mouseup': function () {
          clicked = false;
          $('html').css('cursor', 'auto');
      }
  });

  var updateScrollPos = function (e) {
      $('html').css('cursor', 'row-resize');
      $(window).scrollTop($(window).scrollTop() + (clickY - e.pageY));
      $(window).scrollLeft($(window).scrollLeft() + (clickX - e.pageX));
  };
})();
