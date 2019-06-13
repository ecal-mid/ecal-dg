$(document).ready(function(){

    create_bacteries();
    kill_bacteries();

    var nombreAnim = 7;
    var nombreBack = 10;

    var counterAnim = -1;
    var lastCounterAnim;
    var firstAnim = true;

    var counterBack = -1;
    
    function createRandomAnimation () {
        counterAnim++;
        counterAnim = counterAnim % nombreAnim + 1;

        counterBack++;
        counterBack = counterBack % nombreBack + 1;
        
        var animation = document.createElement('div');
        $(animation).addClass('animation');

        animation.style.backgroundImage = 'url(images/bact' + counterBack +'.jpg)';
        
        var image = new Image();
        image.src = "anim/mutation/mutation" + counterAnim + "/apngb-animated.png";
        $(image).addClass('anim');
        $(animation).append(image);

        $('.animations').append(animation);

        requestAnimationFrame(function () {
            $(animation).css({
                opacity: 1
            })

            setTimeout(function () {
                var animation = document.querySelectorAll('.animation');
                var animations = document.querySelectorAll('.animations');

                if (animation[animation.length - 2]) {
                    animation[animation.length - 2].remove();
                }
            }, 500);
        })
    }

    var buttons = $('.button');
    buttons.each(function () {
        var openId = $(this).data('open');
        var closeId = $(this).data('close');
        var toggleId = $(this).data('toggle');
        var openIdNum = $(this).data('num');

        $(this).on('click', function () {

            createRandomAnimation();

            // //////////////////////////////animation rotation ///////7
            
            // if(counterAnim == 0){
            //     counterAnim =1;
            // }
            // console.log(counterAnim);
            

            // var anim = document.getElementById(`mut${counterAnim}`);
            // anim.style.display = "block";

            // if (!firstAnim){ //ne peux pas supprimer la dernière anim si c'est la première

            // var oldAnim = document.getElementById(`mut${lastCounterAnim}`);
            // oldAnim.style.display = "none";

            // }

            // firstAnim = false;

            // lastCounterAnim = counterAnim;
            //   ////////////////////////////// end of animation rotation

            //    //////////////////////////////background rotation ///////7
           


            // if(counterBack == 0){
            //     counterBack =1;
            // }
           
            // var background = document.getElementById('page2');
           

            // background.style.backgroundImage = 'url(images/bact' + counterBack +'.jpg)';

           
            //   ////////////////////////////// end of background rotation



            

            
            //anim.style.display = "block";

            
            if (openId) {
                if (openId == "#page2") {
                    //console.log(openIdNum);
                    $('.anim').removeClass('on');
                    $('.anim-' + openIdNum).addClass('on');
                }
                $(openId).show();
            } else if (closeId) {
                $(closeId).hide();
            } else if (toggleId) {
                $(toggleId).toggle();
            }
            
        })
    })
});


function updateBacteraAnimations() {
    var bacterias = $('.bacteria');
    bacterias.each(function () {
        (function (elem) {
            function move () {
                var animationLength = 500 + Math.random() * 2000;
                var randomX = Math.random() * window.innerWidth;
                var randomY = Math.random() * window.innerHeight;

                $(elem).css({
                    transition: "transform " + animationLength + "ms ease-in-out, opacity 1s ease-in-out, width 1.5s ease-in-out, height 1.5s ease-in-out",
                    transform: "translate(" + randomX + "px," + randomY + "px)"
                })

                elem.timeout = setTimeout(function () {
                    move();
                }, animationLength);
            }

            if (!elem.timeout) {
                move();
            }
        })(this);
    });
}

function create_bacteries() {
    var images = ['bactext1.png', 'bactext2.png', 'bactext3.png'];

    setTimeout(function () {
        if ($('.bacteria').length < 10) {
            var newBacteria = document.createElement('div');
            var randomIndex = Math.floor(Math.random() * images.length);
            var randomImage = new Image()
            randomImage.src = 'images/' + images[randomIndex];

            $(randomImage).addClass('bacteria-image');
            $(newBacteria).append(randomImage);

            $(newBacteria).addClass('bacteria');
            $(newBacteria).css({
                opacity: 0
            })

            setTimeout(function () {
                $(newBacteria).css({
                    opacity: 1
                })
            }, 1000)

            $('#page0').append(newBacteria);
            }
        create_bacteries();
        updateBacteraAnimations();
    }, 3000)

}

function kill_bacteries () {
    $('.kill-button').click(function () {
        var num = Math.floor(Math.random() * 5);
        var bacteries = $('.bacteria');

        for (var i = 0; i < bacteries.length; i++) {
            var bac = bacteries.get(i);
            if (i < num) {
                if (bac) {
                    (function (bac) {
                        console.log(bac);
                        $(bac).addClass('killed');
                        setTimeout(function () {
                            bac.parentNode.removeChild(bac);
                        }, 1000)
                    })(bac)
                }
            } else {
                $(bac).css({
                    width: bac.offsetWidth + 100,
                    height: bac.offsetHeight + 100
                })
            }
        }
    })

}




