/*START WITH INITIAL PELLICULE*/
$(".pellicules").mouseover(function (e) {
	var elementOver = $(this);
	var elementTitle = $(this).data("title");
	console.log(elementTitle);
$(".films-name").text(elementTitle);
})



var zoomLevel = 1;
var currentPelliculeIndex = 0;
var position = 0;
var positionLeft = 0;
var getId = 'none';
var getClickId = "none";

var pelliculesSelector = $('.pellicules-selector');

var pelliculesContainer = $('.pellicules-container');
var less = $('.less');

less.click(function () {
	zoom(true);
	pellicules.removeClass("pellicule-clicked");
	$("div").removeClass("show-synopsis");
	$(".pellicules-container").removeClass("unscroll");
	$("body").removeClass("pelliculeFocus");
})

var more = $('.more');

more.click(function () {
	zoom(false);
})



var pellicules = $('.pellicules');

var variableHolder = {};
pellicules.each(function (){
	getId = this.id;
	variableHolder[getId] = $("#" + getId).offset();
});

userHaveClick = "no";

pellicules.click(function (event) {
	userHaveClick = "yes";
	getClickId = this.id;
	idCliked = getClickId;
	$("body").addClass("pelliculeFocus");
	$(this).addClass("pellicule-clicked");
	$(".pellicules-container").addClass("unscroll");
	currentPelliculeIndex = pellicules.index(this);
	position = $(this).offset();
	positionLeft = position.left;

	

		$('.informations-panel').css({
			width: '50%',
			trasition: '.5s'
		})

		$('.pellicules-container').css({
			width: '50%',
			trasition: '.5s'
		})

		$(".drag-button").css({
		left  : 'calc(50% - 1vh)'
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



	pelliculesContainer.animate({ scrollLeft: 0 }, 500,function() {
  });

	pelliculesContainer.animate({ scrollTop: position.top }, 500,function() {
	});



	zoomLevel = 1;
	updatePelliculeSelector();
})

	$(".informations").click(function (event){
		if(	userHaveClick == "yes"){$('.synopsis' + "#" + getClickId).toggleClass("show-synopsis");}
		else if(userHaveClick == "no") {$('.synopsis') + "#" + $("festen").toggleClass("show-synopsis");}
	});

		console.log(userHaveClick)



function zoom (direction) {
	if (direction == true) {
		zoomLevel *= 0.5;
	} else {
		zoomLevel /= 0.5;
	}
	zoomLevel = Math.min(1, zoomLevel);
	zoomLevel = Math.max(0.2, zoomLevel);
	updatePelliculeSelector();
}

function updatePelliculeSelector() {
	pelliculesSelector.css({
		transform: 'translateX(' + (-currentPelliculeIndex * 50 * zoomLevel + (25 * (1 - zoomLevel)) )+ 'vw)  scale(' + zoomLevel + ')'
	})
	console.log(positionLeft);

}
$(window).scroll(function() {

    if ($(window).scrollTop() >= 20) { // this refers to window
		$(".buttons").addClass("hide-buttons");
		$(".films-name").addClass("hide-buttons");
		$(".informations").addClass("hide-buttons");


    }
    else {
    	$(".buttons").removeClass("hide-buttons");
    	$(".films-name").removeClass("hide-buttons");

    }
});
