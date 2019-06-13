$(document).ready(function () {
	var mode = 'endurance';

	$('#history').click(function() {
		$('.slide').slideUp("slow");
		$('.hidden-history-endurance').slideDown("slow", function () {
			this.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		});
		$('body').removeClass('switch-rules switch-karts switch-play').addClass('switch-history');
  });

	$('#rules').click(function() {
		$('.slide').slideUp("slow");
    $('.hidden-rules-endurance').slideDown("slow", function () {
			this.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		});
		$('body').removeClass('switch-history switch-karts switch-play').addClass('switch-rules');
  });

	$('#karts').click(function() {
		$('.slide').slideUp("slow");
    $('.hidden-karts-endurance').slideDown("slow", function () {
			this.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		});
		$('body').removeClass('switch-history switch-rules switch-play').addClass('switch-karts');
  });





	$('#sprint').click(function() {
		if (mode !== 'sprint') {
			mode = 'sprint';
    	$('.slide').slideUp("slow");
		}

		if($('body').hasClass('switch-history')) {
			$('.hidden-history-sprint').slideDown("slow", function () {
				this.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			});
		} else if($('body').hasClass('switch-rules')) {
			$('.hidden-rules-sprint').slideDown("slow", function () {
				this.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			});
		} else if($('body').hasClass('switch-karts')) {
			$('.hidden-karts-sprint').slideDown("slow", function () {
				this.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			});
		}
  });

	$('#endurance').click(function() {
		if (mode !== 'endurance') {
			mode = 'endurance';
    	$('.slide').slideUp("slow");
		}

		if($('body').hasClass('switch-history')) {
			$('.hidden-history-endurance').slideDown("slow", function () {
				this.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			});
		} else if($('body').hasClass('switch-rules')) {
			$('.hidden-rules-endurance').slideDown("slow", function () {
				this.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			});
		} else if($('body').hasClass('switch-karts')) {
			$('.hidden-karts-endurance').slideDown("slow", function () {
				this.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			});
		}
  });

	$('#speedway').click(function() {
		if (mode !== 'speedway') {
			mode = 'speedway';
    	$('.slide').slideUp("slow");
		}

		if($('body').hasClass('switch-history')) {
			$('.hidden-history-speedway').slideDown("slow", function () {
				this.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			});
		} else if($('body').hasClass('switch-rules')) {
			$('.hidden-rules-speedway').slideDown("slow", function () {
				this.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			});
		} else if($('body').hasClass('switch-karts')) {
			$('.hidden-karts-speedway').slideDown("slow", function () {
				this.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			});
		}
  });



/////////////



	$('#history').click(function() {
		$('.footer').show("slow");

		// Alternative animation for example
		// slideToggle("fast");
	});
	$('#rules').click(function() {
		$('.footer').show("slow");

		// Alternative animation for example
		// slideToggle("fast");
	});
	$('#karts').click(function() {
		$('.footer').show("slow");

		// Alternative animation for example
		// slideToggle("fast");
	});



});
