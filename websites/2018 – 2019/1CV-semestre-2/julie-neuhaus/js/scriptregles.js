if ($(window).width()>1000){
    




var winHeight = $(window).innerHeight();
$(document).ready(function () {
   
});

window.addEventListener('resize', function (event) {
    //$(".panel").height($(window).innerHeight());
});
$(window).on('scroll',function(){
    $(".panelCon").css('bottom',$(window).scrollTop()*-1);
    $(".panelCon2").css('bottom',$(window).scrollTop()*-1);
});

}