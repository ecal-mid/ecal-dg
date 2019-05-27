var audio = document.getElementById("audio"); 
var hoverPanel = "no";
var scale = 1;

 

$(".panel").on( "mouseenter", function() {
   hoverPanel = "yes";
})  .on( "mouseleave", function() {
     hoverPanel = "no";
});
$(".infos").click(function(e){
	$("#informations").toggleClass("informations-show");
});

$(".nav").click(function(e){
	$(".nav").toggleClass("z-index");
});

console.log(scale)

	console.log(hoverPanel);

$('.text-intro').on('mousewheel', function (e) {
	$(".text-intro").addClass("text-intro-hide");
	audio.pause(); 
});

if(hoverPanel == "no"){

$('.scroll-scale').on('mousewheel', function (e) {
	$('.scroll-downs').addClass('hide-scroll');

	var delta = e.originalEvent.deltaY * 0.001;
	scale += delta;
	color = scale * 12.75;
	opacity = scale * 0.05;
	if (scale >= 0.9 & scale <= 20.1 & hoverPanel == "no"){
      $("body").removeClass('panel-is-open');
            $("body").addClass('panel-is-close');


	$("div").removeClass('panel-show');
	$("div").removeClass('button-panel');

	$('.scroll-scale').css({
		transform: ' scale('+ scale +')'
	})
	$('#last-circle').css({
		backgroundColor: 'rgba(0 , 0, 0, ' + opacity + ')'
	})


	$('#text-two').css({
		color: 'rgba( 255, 255, 255, ' + opacity + ')' 
	})

	}

	else if (scale <= 0.9 & hoverPanel == "no")  
	{
			scale = 0.9;

	}

	else if (scale >= 20.1 & hoverPanel == "no")  
	{
			scale = 20.1;
			frameLooper();

	}

});}

var $dOut = $('#date'),
    $hOut = $('#hours'),
    $mOut = $('#minutes'),
    $sOut = $('#seconds'),
    $ampmOut = $('#ampm');
var months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

var days = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

function update(){
  var date = new Date();
  
  var ampm = date.getHours() < 12
             ? 'AM'
             : 'PM';
  
  var hours = date.getHours() == 0
              ? 12
              : date.getHours() > 12
                ? date.getHours() - 12
                : date.getHours();
  
  var minutes = date.getMinutes() < 10 
                ? '0' + date.getMinutes() 
                : date.getMinutes();
  
  var seconds = date.getSeconds() < 10 
                ? '0' + date.getSeconds() 
                : date.getSeconds();
  
  var dayOfWeek = days[date.getDay()];
  var month = months[date.getMonth()];
  var day = date.getDate();
  var year = date.getFullYear();
  
  var dateString = dayOfWeek + ', ' + month + ' ' + day + ', ' + year;
  
  $dOut.text(dateString);
  $hOut.text(hours);
  $mOut.text(minutes);
  $sOut.text(seconds);
  $ampmOut.text(ampm);
} 

update();
window.setInterval(update, 1000);


var string = "All of reality is actually an incredibly complex computer simulation created by an advanced civilization. This controlling civilization may be an existing alien culture, or it may be a future iteration of humanity, one of many spun out into the far-future multiverse of parallel realities."; /* type your text here */
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("text-two").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',1400); /* change 70 for speed */
};


$( ".button" ).click(function(e) {
	$(this).next().find(".panel").toggleClass("panel-show");
	$(this).toggleClass("button-panel");
	$("body").toggleClass("panel-is-open");
	$(this).removeClass("button-hover");
	$("body").toggleClass("panel-is-close");
	$(this).removeClass("go-click");
	$(this).next().find(".panel").removeClass("go-click-panel");
});






// $('.button-hover').on("mouseover" function(e) {
// 	console.log("ok")
//    	$(this).addClass("go-click");
// 	$(this).next().find(".panel").addClass("go-click-panel");
//   }) .on("mouseleave" function(e) {
//     $(this).removeClass("go-click");
// 	$(this).next().find(".panel").removeClass("go-click-panel");  });


// })
// $(' .button').on('mouseleave', function(e){
// 		$(this).removeClass("go-click");
// 		$(this).next().find(".panel").removeClass("go-click-panel");

// })}

if ($("div").hasClass('panel-show')) {
alert("ok")
}


consoleText(['Hello World.', 'Welcome to the real world', 'You are currently living in a computer simulation', 'Scroll in if you want to know more about it :)'], 'text',['white']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['black'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 8;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
};




