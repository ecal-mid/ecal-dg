$( document ).ready(function() {

});


$(window).scroll(function() {
	trigger_top();
});
var appearOnScroll = $('.trigger');
var text_phone = $('.phone_text');


//-------------------------
function trigger_top() {
		appearOnScroll.each(function (index, elem) {


			var offsetTop = $(elem).offset().top - $(window).scrollTop();
			if (offsetTop < window.innerHeight && offsetTop + $(elem).height() > 0) {
				$(elem).removeClass('out-viewport');
				$(elem).addClass('in-viewport');
				var phoneText = $(elem).attr('data-text-phone');
				var phoneColor = $(elem).attr('data-color-phone');
				var phoneImage = $(elem).attr('data-image-phone');
				text_phone.empty().removeClass('white black').css('background-image', 'url()').append('<p>' + phoneText + '</p>').addClass(phoneColor);
				if (phoneImage) {
					text_phone.css('background-image', 'url(' + phoneImage + ')');
				}
			} else {
				$(elem).removeClass('in-viewport');
				$(elem).addClass('out-viewport');
			}
			phoneColor = phoneText = phoneImage =null;
		})
}

//-------------------------