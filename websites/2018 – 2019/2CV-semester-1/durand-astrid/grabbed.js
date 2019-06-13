var grabbed = false;
var contentIndex = 1;

$('.drag-button').click(function () {
	$('.column:last-child').removeClass('show-content-' + contentIndex);
	contentIndex = contentIndex + 1;
	$('.column:last-child').addClass('show-content-' + contentIndex);
	$('.pellicules').removeClass("pellicule-clicked");
	$('body').removeClass("pelliculeFocus");
})

// $('p').css({
//     color : 'red', // couleur rouge
//     width : '300px', // largeur de 300px
//     height : '200px' // hauteur de 200px
// });


$('.drag-button').on('mousedown', function (e) {
	$('.pellicules').removeClass("pellicule-clicked");
	$('body').removeClass("pelliculeFocus");
	$(".pellicules-container").removeClass("unscroll");
	var column1 = $('.column:first-child');
	var mouseX = e.clientX;
	var windowWidth = $(window).outerWidth();
	var halfWindowWidth = windowWidth/2;
	var columnX = column1.width();
	if (Math.abs(columnX - mouseX) < 20) {
		grabbed = true;
	}

})

$(window).on('mouseup', function () {
	grabbed = false;
})

$(window).outerWidth();

var dragButtonWidth = $(".drag-button").width();

$(window).on('mousemove', function (e) {
		$(".pellicules-container").removeClass("unscroll");

		if (grabbed && e.clientX >= ($(window).outerWidth()/2) && e.clientX <= ($(window).outerWidth() - 100) ) {
		$('.column:first-child').css({
			width: e.clientX + 'px'
		})

		var widthColumn = $(".column:first-child").outerWidth()
		console.log(widthColumn);

		$('.more').css({
						left: widthColumn - 100

		})

		$('.less').css({
			left: widthColumn - 50
		})



		$('.informations-panel').css({
			width: ($(window).outerWidth() - e.clientX) + 'px',
		})

		$(".drag-button").css({
		left  : e.clientX - (dragButtonWidth / 2)
	})
	}
});

$( window ).resize(function() {
	$('.column:first-child').css({
		width: 50 + '%',
	})

	if($(window).outerWidth() >= 940){
	$('.more').css({
		left: 'calc(50% - 5rem - 20px)'
		})

	$('.less').css({
		left: 'calc(50% - 2.5rem - 10px)'
	})}
	else{
		$('.more').css({
		left: 'calc(100% - 5rem - 20px)'
		})

	$('.less').css({
		left: 'calc(100% - 2.5rem - 10px)'
	})

	}


	$('.informations-panel').css({
		width: 50 + '%',
	})
	$(".drag-button").css({
		left  : 'calc(50% - 1vh)'
	})
});
