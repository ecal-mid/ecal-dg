$(document).ready(function () {
    click();
    audio_play();

});



$(".animationfrequenceone").hover(function () {
        audioherzone.play();
    },
    function () {
        audioherzone.load();
    });

$(".animationfrequencetwo").hover(function () {
        audioherzonetwo.play();
    },
    function () {
        audioherzonetwo.load();
    });

$(".animationfrequencethree").hover(function () {
        audioherzonethree.play();
    },
    function () {
        audioherzonethree.load();
    });


function play1() {

    var vid = document.getElementById("video1");
    var textPlay = document.getElementById("play1");
    count1++;


    if (count1 % 2 == 1) {
        textPlay.style.display = "none";
        vid.play();
    } else {
        textPlay.style.display = "block";
        vid.pause();
    }
}

function click() {

    $('div.texteactiver').on('click', function () {
        $('html, body').animate({
            scrollTop: $("section.section-two").offset().top
        }, 1000)
    })
    $('div.titredetransitionone').on('click', function () {
        $('html, body').animate({
            scrollTop: $("section.section-three").offset().top
        }, 1000)
    })
    $('div.titredetransitiontwo').on('click', function () {
        $('html, body').animate({
            scrollTop: $("section.section-four").offset().top
        }, 1000)
    })





    // $('.appareiloneforiphone').on(
    //     'click', function () {

    // $('.appareiloneforiphone').animate({ marginLeft: '+=50%'});

    //     }
    // )

    // $('.appareiliphone').on(
    //     'click',
    //     function () {
    //         $(".appareiliphone").toggleClass(".moveappareiliphone");
    //     }
    // )

    $('.appareiliphone').on(
        'click',
        function () {
            //$('.animationfonctionnementallhideone').hide();
            $('.appareiliphone').addClass(".moveappareiliphone");
            setTimeout(function () {
                $('.appareiliphone').removeClass(".moveappareiliphone");
            }, 3000);
        }
    )


    $('.oreille1').on(
        'click',
        function () {
            $('#text').toggleClass('oreille1contenuon');
            $('#oreille2').toggleClass('oreilleOff');
            $('#oreille3').toggleClass('oreilleOff');
            $('#oreille4').toggleClass('oreilleOff');
            $('#oreille5').toggleClass('oreilleOff');
            $('#oreille6').toggleClass('oreilleOff');
            $('#oreille7').toggleClass('oreilleOff');
            $('#oreille8').toggleClass('oreilleOff');
        }
    )
    $('.oreille2').on(
        'click',
        function () {
            // $('#text').toggleClass('oreille1contenuon');
            $('#oreille1').toggleClass('oreilleOff');
            $('#oreille3').toggleClass('oreilleOff');
            $('#oreille4').toggleClass('oreilleOff');
            $('#oreille5').toggleClass('oreilleOff');
            $('#oreille6').toggleClass('oreilleOff');
            $('#oreille7').toggleClass('oreilleOff');
            $('#oreille8').toggleClass('oreilleOff');
        }
    )

    $('#titre1').on(
        'click',
        function () {
            $(this).toggleClass('oreilleOff');
        }
    )
    $('#titre2').on(
        'click',
        function () {
            $('#titre2').toggleClass('oreilleOff');
        }
    )
    $('#oreilleauditifSVG').on(
        'click',
        function () {
            $('#oreilleauditifSVG').hide();
            $('.animationformeone').show();
        }
    )
    $('.containerformeone').on(
        'click',
        function () {
            $('#oreilleauditifSVG').show();
            $('.animationformeone').hide();
        }
    )
    $('#menuiconacacher').on(
        'click',
        function () {
            $('#menuiconacacher').hide();
            $('#menuamontrer').show();
            $(".panel").toggleClass("show-panel");
        }
    )
    $('#menuamontrer').on(
        'click',
        function () {
            $('#menuiconacacher').show();
            $('#menuamontrer').hide();
            $(".panel").toggleClass("show-panel");
        }
    )
    $('.titredetransitionone').on(
        'click',
        function () {
            write();
            musiquetalk.play();

        }
    )
    $('.anim-wrapper').on(
        'click',
        function () {
            //$('.animationfonctionnementallhideone').hide();
            $('.anim-wrapper').addClass("scaleFluide");
            setTimeout(function () {
                $('.anim-wrapper').removeClass("scaleFluide");
            }, 3000);
        }
    )
    $('.anim-wrapperfonctionnementdeux').on(
        'click',
        function () {
            //$('.animationfonctionnementallhideone').hide();
            $('.anim-wrapperfonctionnementdeux').addClass("scaleFluide");
            setTimeout(function () {
                $('.anim-wrapperfonctionnementdeux').removeClass("scaleFluide");
            }, 3000);
        }
    )
    $('.anim-wrapperfonctionnementtrois').on(
        'click',
        function () {
            //$('.animationfonctionnementallhideone').hide();
            $('.anim-wrapperfonctionnementtrois').addClass("scaleFluide");
            setTimeout(function () {
                $('.anim-wrapperfonctionnementtrois').removeClass("scaleFluide");
            }, 3000);
        }
    )
    $('.anim-wrapperquatre').on(
        'click',
        function () {
            //$('.animationfonctionnementallhideone').hide();
            $('.anim-wrapperquatre').addClass("scaleFluide");
            setTimeout(function () {
                $('.anim-wrapperquatre').removeClass("scaleFluide");
            }, 3000);
        }
    )
    $('.anim-wrappercinque').on(
        'click',
        function () {
            //$('.animationfonctionnementallhideone').hide();
            $('.anim-wrappercinque').addClass("scaleFluide");
            setTimeout(function () {
                $('.anim-wrappercinque').removeClass("scaleFluide");
            }, 3000);
        }
    )
    $('.anim-wrappersix').on(
        'click',
        function () {
            //$('.animationfonctionnementallhideone').hide();
            $('.anim-wrappersix').addClass("scaleFluideSix");
            setTimeout(function () {
                $('.anim-wrappersix').removeClass("scaleFluideSix");
            }, 3000);
        }
    )
    $('.anim-wrappersept').on(
        'click',
        function () {
            //$('.animationfonctionnementallhideone').hide();
            $('.anim-wrappersept').addClass("scaleFluide");
            setTimeout(function () {
                $('.anim-wrappersept').removeClass("scaleFluide");
            }, 3000);
        }
    )


    $('.anim-wrapperinnovationone').on(
        'click',
        function () {
            //$('.anim-wrapperhistorique').hide();
            $('.anim-wrapperinnovationone').addClass("scaleFluide");
            setTimeout(function () {
                $('.anim-wrapperinnovationone').removeClass("scaleFluide");
            }, 3000);
        }
    )
    $('.anim-wrapperinnovationtwo').on(
        'click',
        function () {
            //$('.anim-wrapperhistorique').hide();
            $('.anim-wrapperinnovationtwo').addClass("scaleFluide");
            setTimeout(function () {
                $('.anim-wrapperinnovationtwo').removeClass("scaleFluide");
            }, 3000);
        }
    )
    $('.anim-wrapperinnovationthree').on(
        'click',
        function () {
            //$('.anim-wrapperhistorique').hide();
            $('.anim-wrapperinnovationthree').addClass("scaleFluide");
            setTimeout(function () {
                $('.anim-wrapperinnovationthree').removeClass("scaleFluide");
            }, 3000);
        }
    )
    $('.anim-wrapperinnovationquatre').on(
        'click',
        function () {
            //$('.anim-wrapperhistorique').hide();
            $('.anim-wrapperinnovationquatre').addClass("scaleFluide");
            setTimeout(function () {
                $('.anim-wrapperinnovationquatre').removeClass("scaleFluide");
            }, 3000);
        }
    )
    $('.anim-wrapperhistorique').on(
        'click',
        function () {
            //$('.anim-wrapperhistorique').hide();
            $('.anim-wrapperhistorique').addClass("scaleFluide");
            setTimeout(function () {
                $('.anim-wrapperhistorique').removeClass("scaleFluide");
            }, 3000);
        }
    )
    $('.ecouteurToMove').on(
        'click',
        function () {

            if (is_touch_device()) {
                var rightAMettre = $('.appareilamettre').css("right");
                var bottomAMettre = $('.appareilamettre').css("bottom");
                var heightAMettre = $('.appareilamettre').css("height");
                var widthAMettre = $('.appareilamettre').css("width");
                var displayAMettre = $('.appareilamettre').css("display");
                console.log(rightAMettre + " / " + bottomAMettre);

                var classForMoving = {
                    "display": displayAMettre,
                    "right": rightAMettre,
                    "bottom": bottomAMettre,
                    "height": heightAMettre,
                    "margin-right": "5%"
                };
                $('#appareilone').css(classForMoving);
                soundElement.pause();
            }
        }
    )
}

function is_touch_device() {
    var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
    var mq = function (query) {
        return window.matchMedia(query).matches;
    }

    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
    }

    // include the 'heartz' as a way to have a non matching MQ to help terminate the join
    // https://git.io/vznFH
    var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
    return mq(query);
}


var playing = false;

function audio_play() {
    $('.texteactiver').on(
        'click',
        function () {
            if (!playing) {
                $('.player_audio').trigger('play');
                playing = true;
            }
            // else { 
            //   $('.player_audio').trigger('pause');
            //   playing = false;
            // }

        });
    $('.appareiltwelve').on(
        'click',
        function () {
            if (playing) {
                $('.player_audio').trigger('pause');
                playing = false;
            }
        });
    

        $('#appareilone').on(
        'click',
        function () {
            if(is_touch_device()){
                if (playing) {
                $('.player_audio').trigger('pause');
                playing = false;
            }
            }
        });
}


function write() {
    var text = "Maintenant que tu peux entendre, il est temps que tu comprennes les fréquences que tu as perdues. Si tu veux en savoir plus, observe les fréquences ci-dessous avant de passer sur l’explicatif des appareils auditifs.";
    for (var i = 0; i < text.length; i++) {
        (function (i) {
            var letter = text.slice(i, i + 1);
            var pause = 0;

            if (i > 31) {
                pause = 200;
            }
            if (i > 97) {
                pause = pause + 200;
            }

            if (i > 124) {
                pause = pause + 200;
            }

            setTimeout(function () {
                $('.write-test').append(letter);
            }, ((50 * i) + pause));
        })(i)


    }

}


// $('a[href=#target]').
//     click(function(){
//         var target = $('a[name=target]');
//         if (target.length)
//         {
//             var top = target.offset().top;
//             $('html,body').animate({scrollTop: top}, 1000);
//             return false;
//         }
//     });

// addclass
// removeclass