  var width = $(window).width();
  if (width > 800){
var portfolio = $('.pellicule-clicked'),
    wrapScreenHeight = portfolio.height(),
    wrapHeight = portfolio.height(),
    listHeight = portfolio.find('.images-container').height();

var informationPanel = $('.informations-panel');


informationPanel.on('mousemove', function(e) {
        dP = ((e.pageY / wrapHeight));
    TweenMax.to(portfolio, 0.1, {scrollTop: ((listHeight * dP) - wrapScreenHeight), ease:Power3.easeInOut });

});}

$(window).resize(function() {
  var width = $(window).width();
  if (width <= 800){
    $("#dogme-scroll").click(function (event) {
      console.log("click");
      $("body").animate({ scrollTop: $(this).offset().top }, 500);
      });
    }

  });








$('.toggle').click(function(e) {
  	e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});
