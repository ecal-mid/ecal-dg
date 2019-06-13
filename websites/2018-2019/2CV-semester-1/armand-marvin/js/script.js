var siteInit = true;

var rotation = 0;

var canRotate = true;
var rotateTimeout = null;

$(window).on('mousewheel', function (e) {

	if (canRotate) {
		if (siteInit == true) {
			$('.panel').addClass('panel--hide');
			siteInit = false;
		} else {
			var originalEvent = e.originalEvent;
			var delta = originalEvent.deltaY;
			var cube = $('.cube');

			
			if (delta > 0) {
				rotation = rotation - 90;
			} else {
				rotation = rotation + 90;
			}

			cube.css({
				transform: 'translateZ(-50vh) rotateX('+ rotation +'deg)'
			})
		}
	}

	canRotate = false;

	clearTimeout(rotateTimeout);
	rotateTimeout = setTimeout(function () {
		canRotate = true;
	}, 300);
})		