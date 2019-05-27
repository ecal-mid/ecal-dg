(function () {
	var draggables = $('.draggable');
	var offsetClick = null;
	var currentDraggable = null;

	draggables.on('dragstart', function(e) { 
		event.preventDefault();
	});

	draggables.on('mousedown', function (e) {
		currentDraggable = this;
		offsetClick = [
			e.clientX - $(this).offset().left,
			e.clientY - ($(this).offset().top - window.innerHeight)
		]
	});

	$(window).on('mousemove', function (e) {
		if (currentDraggable) {
			var mouseX = e.clientX;
			var mouseY = e.clientY;

			$(currentDraggable).css({
				top: (mouseY - offsetClick[1]) + 'px',
				left: (mouseX - offsetClick[0]) + 'px'
			})
		}
	})

	$(window).on('mouseup', function () {
		currentDraggable = null;
		offsetClick = null;
	})
})()