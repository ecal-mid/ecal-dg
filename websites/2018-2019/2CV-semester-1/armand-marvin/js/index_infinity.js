(function(){

var siteInit = true;

var rotation = 0;

var canRotate = true;
var rotateTimeout = null;

$(window).on('mousewheel', function (e) {

    if (canRotate) {
        if (siteInit == true) {
            $('.panel').addClass('panel--hide');
            siteInit = false;
        } else {
            var originalEvent = e.originalEvent;
            var delta = originalEvent.deltaY;
            var cube = $('.cube');

            
            if (delta > 0) {
                rotation = rotation - 90;
            } else {
                rotation = rotation + 90;
            }

            cube.css({
                transform: 'translateZ(-50vh) rotateX('+ rotation +'deg)'
            })
        }
    }

    canRotate = false;

    clearTimeout(rotateTimeout);
    rotateTimeout = setTimeout(function () {
        canRotate = true;
    }, 300);
})      



    var box = document.getElementById("box");
    var pointer = document.getElementById("pointer");
    
    function property(elem,property){
        return parseInt(window.getComputedStyle(elem).getPropertyValue(property));
    }
    
    // var boxWidth = property(box,"width");
    // var boxHeight = property(box,"height");
    // var pointerWidth = property(pointer,"width");
    // var pointerHeight = property(pointer,"height");
    // var bodyWidth = document.body.clientWidth;
    // var bodyHeight = document.body.clientHeight;
    // var actualx = (bodyWidth/2) - boxWidth/2;
    // var actualy = (bodyHeight/2) - boxHeight/2; 
    // var originx,originy = 0;
    // function reset(){
    //     bodyWidth = document.body.clientWidth;
    //     bodyHeight = document.body.clientHeight;
    //     actualx = (bodyWidth/2) - boxWidth/2;
    //     actualy = (bodyHeight/2) - boxHeight/2; 
    // }
    window.onresize = function(){
        var previousWidth = bodyWidth;
        var previousHeight = bodyHeight;
        reset();
        var actualOriginx = originx+(bodyWidth - previousWidth);
        var actualOriginy = originy+(bodyHeight - previousHeight);
        setOrigin(actualOriginx,actualOriginy);
        setPointer(actualOriginx,actualOriginy);
    }
    // box.style.transformOrigin = "0px 0px";
    
    // document.body.onclick = function(event){
    //     var x = event.clientX;
    //     var y = event.clientY;
    //     originx = x - actualx;
    //     originy = y - actualy;
    //     // console.log(`origin: ${originx},${originy}`);
    //     // console.log("actual "+actualx+" "+actualy);
    //     setOrigin(originx,originy,box);
    //     setPointer(originx,originy);
    // }

    function setOrigin(x,y,elem){
        elem.style.transformOrigin = x+"px "+y+"px";
    }
    function setPointer(x,y){
        pointer.style.top = (y - pointerHeight/2)+"px";
        pointer.style.left = (x - pointerWidth/2)+"px";
    }
})();

var myVar = setInterval(myTimer ,1000);
function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();



var siteInit = true;

var rotation = 0;

var canRotate = true;
var rotateTimeout = null;

$(window).on('mousewheel', function (e) {

    if (canRotate) {
        if (siteInit == true) {
            $('.panel').addClass('panel--hide');
            siteInit = false;
        } else {
            var originalEvent = e.originalEvent;
            var delta = originalEvent.deltaY;
            var cube = $('.cube');

            
            if (delta > 0) {
                rotation = rotation - 90;
            } else {
                rotation = rotation + 90;
            }

            cube.css({
                transform: 'translateZ(-50vh) rotateX('+ rotation +'deg)'
            })
        }
    }

    canRotate = false;

    clearTimeout(rotateTimeout);
    rotateTimeout = setTimeout(function () {
        canRotate = true;
    }, 300);
})      



 