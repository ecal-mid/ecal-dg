$(document).ready(function () {
	setInterval(function (){
		var date = new Date();
		var fHour = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
		$('.hour').html(fHour);
	}, 1000);

	var chapters = $('.chapitre');
	var titles = chapters.find('h1');
	titles.click(function () {
		var parent = this.parentNode;
		var definition = $(parent).find('.definition');
		definition.slideToggle(200);
	})

	var rankingLeft = $('.topplayer-ranking--left');
	var leftPannels = $('.left-pannel');
	var leftPannelImages = $('.left-pannel-image');
	rankingLeft.click(function () {
		var index = Array.from(rankingLeft).indexOf(this);
		if (leftPannels[index] && leftPannelImages[index]) {
			$(leftPannels).each(function () {
				if (this !== leftPannels[index]) {
					$(this).removeClass('left-pannel--show');
				}
			})

			$(leftPannelImages).each(function () {
				if (this !== leftPannelImages[index]) {
					$(this).removeClass('left-pannel-image--show');
				}
			})
			$(leftPannels[index]).toggleClass('left-pannel--show');
			$(leftPannelImages[index]).toggleClass('left-pannel-image--show');
		}
	})

	var rankingRight = $('.topplayer-ranking--right');
	var rightPannels = $('.right-pannel');
	var rightPannelImages = $('.right-pannel-image');
	rankingRight.click(function () {
		var index = Array.from(rankingRight).indexOf(this);
		if (rightPannels[index] && rightPannelImages[index]) {
			$(rightPannels).each(function () {
				if (this !== rightPannels[index]) {
					$(this).removeClass('right-pannel--show');
				}
			})

			$(rightPannelImages).each(function () {
				if (this !== rightPannelImages[index]) {
					$(this).removeClass('right-pannel-image--show');
				}
			})

			$(rightPannels[index]).toggleClass('right-pannel--show');
			$(rightPannelImages[index]).toggleClass('right-pannel-image--show');
		}
	})
})

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
};
