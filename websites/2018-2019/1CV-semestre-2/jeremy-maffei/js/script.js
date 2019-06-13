$(document).ready(function() {
	overlayOpen();

	var wordColumns = $('.word-column');
	wordColumns.on('mouseenter', function () {
		wordColumns.css({
			width: '20%'
		});

		$(this).css({
			width: '60%'
		})
	})

	var currentVideo = null;
	$('.words').click(function () {
		if (currentVideo !== null) {
			$('.video').removeClass('show-video');
			currentVideo = null;
		}
	})

	var words = $('.word');
	words.each(function () {
		$(this).on('click', function () {
			(function (elem) {
				requestAnimationFrame(function () {
					if (currentVideo === null) {
						var target = $(elem).data('target');
						currentVideo = $(target);
						currentVideo.addClass('show-video');
					}
				})
			})(this)
		})
	});

	$('.close-video').click(function () {
		console.log('sdlkfjh');
		$('.video').removeClass('show-video');
	})



});

function overlayOpen() {
	$('.element, .element2').on("click", function() {
		console.log(999999);
		var overlay = $(this).data('overlay');
		$(overlay).addClass('overlay-open');
	})

	$('.button__close').on("click", function(){
		$('.overlay').removeClass('overlay-open');
	})
}



 // $(document).ready(function)( {

 // 	var date = new Date();

	// $('hour').html ('date.getHour')));

	// });

