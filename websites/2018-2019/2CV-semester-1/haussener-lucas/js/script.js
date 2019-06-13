// var nombreClick = 0;

// $(".circle").click(function(){
// 	nombreClick = nombreClick + 1;
// 	console.log(nombreClick);
//   $(".circle-one").addClass("show");
//     if (nombreClick == 2){
//    	$(".circle-two").addClass("show");}

//     else if (nombreClick == 3){
//    	$(".circle-tree").addClass("show");}
    
//    	else if (nombreClick == 4){
//    	$(".circle-foure").addClass("show");}
    
    
// });

// 	$(".circle-line-two").click(function(){
// 	nombreClick = nombreClick + 1;
// 	console.log(nombreClick);
//     $(".circle-line-two-v2").addClass("show-line-two");
//     if (nombreClick == 5){
//    	$(".circle-line-two-v2").addClass("show-line-two");}

//  });

var imgNumber = 20;

$( document ).on( "click", function() {
	var randDessous = Math.floor(Math.random() * imgNumber) + 1;
	$("#img-dessous").attr("src","img/anim/img" + randDessous +".png");
	var randDessus = Math.floor(Math.random() * imgNumber) + 1;
	$("#img-dessus").attr("src","img/anim/img" + randDessus +".png");
});

$( document ).on( "mousemove", function( event ) {
  var rDessous = map(event.pageX, 0, $( window ).width(), 0, 360);
  $('#img-dessous').css('transform', 'rotate(' + rDessous + 'deg)')
  var rDessus = map(event.pageX, $( window ).width(), 0, 0, 360);
  $('#img-dessus').css('transform', 'rotate(' + rDessus + 'deg)')
});

// outils
function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}