(function () {
	var appearOnScroll = $('.appear-on-scroll');
	$(window).on('scroll', function () {
		appearOnScroll.each(function (index, elem) {
			var offsetTop = $(elem).offset().top - $(window).scrollTop();
			if (offsetTop < window.innerHeight && offsetTop + $(elem).height() > 0) {
				$(elem).removeClass('out-viewport');
				$(elem).addClass('in-viewport');
			} else {
				$(elem).removeClass('in-viewport');
				$(elem).addClass('out-viewport');
			}
		})
	})
})();