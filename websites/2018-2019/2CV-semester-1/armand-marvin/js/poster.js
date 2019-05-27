(function () {
	var images = ['map-01.png', 'map-02.png', 'map-03.png', 'map-04.png', 'map-05.png'];
	var poster = $('.poster');

	var lastElement = null;
	poster.on('mousedown', function (e) {
		lastElement = addNewElement(e);
	})

	poster.on('mousemove', function (e) {
		if (lastElement) {
			$(lastElement).css({
				top: (e.clientY / window.innerHeight * 100) + "%",
				left: (e.clientX / window.innerWidth * 100) + "%",
			})
		}
	})

	$(window).on('mouseup', function () {
		lastElement = null;
	})

	animate();

	function addNewElement(e) {
		var randomImages = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
		var newElement = document.createElement('div');
		$(newElement).addClass('poster__element');
		var image = new Image();
		image.src = 'img/' + images[randomImages];
		console.log(randomImages);
		$(newElement).append(image);

		newElement.rotation = {
			angle: Math.random() * 360,
			speed: 0.5
		};
		$(newElement).css({
			top: (e.clientY / window.innerHeight * 100) + "%",
			left: (e.clientX / window.innerWidth * 100) + "%",
			width: 1000 + "px",
			// width: (Math.random() * 400 + 100) + "px",
			transform: 'translate(-50%, -50%) rotate(' + newElement.rotation.angle + 'deg)'
		})

		poster.append(newElement);
		return newElement;
	}

	function animate () {
		$('.poster__element').each(function (index, element) {
			element.rotation.angle += element.rotation.speed;
			$(lastElement).css({
				transform: 'translate(-50%, -50%) rotate(' + element.rotation.angle + 'deg)'
			})
		})
		requestAnimationFrame(animate);
	}
})();