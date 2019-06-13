
var windowObj = $(window);
var documentObj = $(document);
var windowH;
var documentH;

$(document).ready(function () {
	mesures();


});
	// enableClick();
//});

 //function enableClick (){
 //	var object = $('#enter');
 //	var body= $('body');

 	//object.on('click', function() {
 	//	object.addClass('disparaitre');
 	//})
//}




windowObj.on('scroll', function() {
	scrollCount();
})
windowObj.on('resize', function() {
	mesures();
})

function mesures() {
	 windowH = windowObj.height();
	 documentH = documentObj.height();
	 console.log(windowH + ' : ' + documentH);
}

function scrollCount() {
	var scrollPosY = windowObj.scrollTop();
	var objRotate = $('.sabre');
	var multi = 1;
	var degre =  ((scrollPosY / documentH)) * -360 * multi;
	objRotate.css('transform', 'rotateZ(' + degre + 'deg)');
}
