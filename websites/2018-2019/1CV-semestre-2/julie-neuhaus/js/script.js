


$(document).ready(function(){
 if($(window).width() >= 1024) {     
  var totalHeight = $(document.body).outerHeight();
	var scrollHContainer = $('.scroll-h-container');
	var lastScrollHItem = $('.scroll-h-item:last-child');
	var scrollContainerWidth = lastScrollHItem.offset().left + lastScrollHItem.outerWidth();

	var scrollVContainer = $('.scroll-v-container');
	var lastScrollVItem = $('.scroll-v-item:last-child');
	var scrollContainerHeight = lastScrollVItem.offset().top + lastScrollVItem.outerHeight();

	$(window).scroll(function () {
		var percent = $(window).scrollTop() / (totalHeight - window.innerHeight);
		
		scrollHContainer.css({
			transform: 'translateX('+(-percent * (scrollContainerWidth - $('.scroll-h').outerWidth()))+'px)'
		})

		// scrollVContainer.css({
		// 	transform: 'translateY('+(-percent * (scrollContainerHeight - $('.scroll-v').outerHeight()))+'px)'
		// })
	})
 }
});
