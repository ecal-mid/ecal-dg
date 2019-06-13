function getOS() {
  var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
}


// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 71
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);


var opacity = 1;

var fimg;

var randomize = true;

var w = window.innerWidth;
var h = window.innerHeight;


// detect IP


// $(document).ready(function () {
// 2
//     $.get('http://jsonip.com', function (res) {
// 3
//         $('p').html('IP Address is: ' + res.ip);
//         console.log('IP Adress');
// 4
//     });
// 5
// });



 



window.onresize = resize;

function resize(){

w = window.innerWidth;
h = window.innerHeight;
   
  document.getElementById("detect-screenwidth").style.width = w/1920 * 100+"%"; 
  // 1680 your computer
  document.getElementById("text-screenwidth").innerHTML  = w + "px";

  document.getElementById("detect-screenheight").style.width = h/1080 * 100+"%"; 
  // 981 your computer
  document.getElementById("text-screenheight").innerHTML  = h + "px";
}
// Blink engine detection










$(document).ready(function() {
  image_big();
	scroll();
  click0();
  click1();
  click2();
  click3();
  click4();
  click5();
  click6();
  click7();
  click8();
  click9();
  click10();
  click11();
  click12();
  click13();
  click14();
  click15();
  click16();
  click20();
  clickFlash();
});

var contOpen = false;
function click0() {
    $('.click1').on(
    'click',
      function() {
        $('#menu').addClass('rotated');
      }
    )
}

function click1() {
    $('.containeropen1').on(
    'click',
      function() {
        contOpen = true;
        $('#container-pena').addClass('container-visible');
      }
    )
}

function click2() {
    $('.containerclose1').on(
    'click',
      function() {
        contOpen = false;
        $('#container-pena').removeClass('container-visible');
      }
    )
}

function click3() {
    $('.containeropen2').on(
    'click',
      function() {

        $('#container-bentham').addClass('container-visible');
      }
    )
}

function click4() {
    $('.containerclose2').on(
    'click',
      function() {

        $('#container-bentham').removeClass('container-visible');
      }
    )
}

function click5() {
    $('.containeropen3').on(
    'click',
      function() {

        $('#container-panopticon').addClass('container-visible');
      }
    )
}

function click6() {
    $('.containerclose3').on(
    'click',
      function() {

        $('#container-panopticon').removeClass('container-visible');
      }
    )
}

function click7() {
    $('.containeropen4').on(
    'click',
      function() {

        $('#container-foucault').addClass('container-visible');
      }
    )
}

function click8() {
    $('.containerclose4').on(
    'click',
      function() {

        $('#container-foucault').removeClass('container-visible');
      }
    )
}

function click9() {
    $('.containeropen5').on(
    'click',
      function() {

        $('#container-asimov').addClass('container-visible');
      }
    )
}

function click10() {
    $('.containerclose5').on(
    'click',
      function() {

        $('#container-asimov').removeClass('container-visible');
      }
    )
}

function click11() {
    $('.containeropen6').on(
    'click',
      function() {

        $('#container-orwell').addClass('container-visible');
      }
    )
}

function click12() {
    $('.containerclose6').on(
    'click',
      function() {

        $('#container-orwell').removeClass('container-visible');
      }
    )
}

function click13() {
    $('.containeropen7').on(
    'click',
      function() {

        $('#container-paglen').addClass('container-visible');
      }
    )
}

function click14() {
    $('.containerclose7').on(
    'click',
      function() {

        $('#container-paglen').removeClass('container-visible');
      }
    )
}

function click15() {
    $('.containeropen8').on(
    'click',
      function() {

        $('#container-metahaven').addClass('container-visible');
      }
    )
}

function click16() {
    $('.containerclose8').on(
    'click',
      function() {

        $('#container-metahaven').removeClass('container-visible');
      }
    )
}

function clickFlash() {
    $('.clickFlash').on(
    'click',
      function() {
        flash();
      }
    )
}



function click20() {
    // $('.click3').on(
    // 'click',
    //   function() {
    //   $('#topleft, #topright, #bottomleft, #bottomright, #curviligne').toggleClass('visible');
      
    //   }
    // )
}

// function click21() {
//     $('.click3').on(
//     'click',
//       function() {
//       $('#flash').addClass('flash');
//     setTimeout(function() {
//         $('#flash').removeClass('flash');
//     }, 1000)
//       }
//     )
// }



function image_big() {
    $('.vignette').on(
    'click',
      function() {

        $(this).toggleClass('big');
        var scrollY = $(this).position().top;
        // console.log(scrollY);
        $('html, body').animate({
        scrollTop: scrollY
      }, 1000);
      }
    )
}









//Detect__Datas CSS

// $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {
//   console.log(JSON.stringify(data, null, 2));
// });


// function ipdetect(){
   
//   document.getElementById("text-IP").innerHTML  = geobytesipaddress;

// }


// function findIP(onNewIP) { //  onNewIp - your listener function for new IPs
//   var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection; //compatibility for firefox and chrome
//   var pc = new myPeerConnection({iceServers: []}),
//     noop = function() {},
//     localIPs = {},
//     ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
//     key;

//   function ipIterate(ip) {
//     if (!localIPs[ip]) onNewIP(ip);
//     localIPs[ip] = true;
//   }
//   pc.createDataChannel(""); //create a bogus data channel
//   pc.createOffer(function(sdp) {
//     sdp.sdp.split('\n').forEach(function(line) {
//       if (line.indexOf('candidate') < 0) return;
//       line.match(ipRegex).forEach(ipIterate);
//     });
//     pc.setLocalDescription(sdp, noop, noop);
//   }, noop); // create offer and set local description
//   pc.onicecandidate = function(ice) { //listen for candidate events
//     if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
//     ice.candidate.candidate.match(ipRegex).forEach(ipIterate);
//   };
// }



// var ul = document.createElement('text-IP');
// ul.textContent = 'Your IPs are: '
// document.body.appendChild(ul);

// function addIP(ip) {
//   console.log('got ip: ', ip);
//   var li = document.createElement('li');
//   li.textContent = ip;
//   ul.appendChild(li);
// }

// findIP(addIP);

function data(){

$(document).ready(function () {
    $.getJSON("http://jsonip.com/?callback=?", function (data) {

        document.getElementById("text-IP").innerHTML  = (data.ip);
    });
});

$.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function(data) {

        document.getElementById("text-lastvisit").innerHTML  = (data.geobytescity) + ", " + (data.geobytescode) + " (" + (data.geobytesinternet)+ ")";
    });

}








// console.log($('#circle'));

$('#circle').click(function () {
  $(this).addClass('circle__disable-pointer');
  $('#menu').removeClass('menu--horizontal');
  $('#topleft, #topright, #bottomleft, #bottomright, #curviligne').toggleClass('visible');
  // $('body').addClass('flash');
  setTimeout(function(){$('body').removeClass('flash');}, 1000);


  fimg = document.getElementById("flashImg");
  
  flash();

})

var flashImages = $('.flash-image');


function flash(){
  var countOpacity = 1;
  // console.log(flashImages);


  var randomIndex = Math.floor(Math.random() * flashImages.length);
  var currentImage = flashImages[randomIndex];

  // console.log($(currentImage));
  
  $(currentImage).css({
    // 'opacity': 1
    'opacity': countOpacity
  })
  

  // setTimeout(function () {
  //   $(currentImage).css({
  //     'opacity': 0
  //   })

  // }, 1000)
decrease();

function decrease(){
countOpacity -= 0.02; // countOpacity = countOpacity - 0.01
 
$(currentImage).css({
      'opacity': countOpacity
    })

if(countOpacity > 0){
requestAnimationFrame(decrease);
}else{
      /////
      countOpacity = 0;
    }

  }

}

var count = 0;
var rotation = 0;
var flashInterval = null;

var terminateFlash = null
$(window).mousewheel(function(e) {
  clearTimeout(terminateFlash);
  terminateFlash = setTimeout(function () {
    clearInterval(flashInterval);
    flashInterval = null;
    flashImages.css({opacity: 0});
  }, 100)
	rotation = rotation + e.deltaY * 0.09;
	$('.menu__rotate').css({
		transform: 'translate(-50%,-50%) rotate('+ rotation +'deg)'
	})

  var threshold = 20;
  if (Math.abs(e.deltaY) > threshold && !flashInterval && !contOpen) {
    flashInterval = setInterval(function () {
      count ++;
      if (count > flashImages.length - 1) {
        count = 0;
      }
      //console.log(count);
      requestAnimationFrame(function () {
        flashImages.css({opacity: 0});
        var currentImage = flashImages[count];
        $(currentImage).css({'opacity': 1})

      })
      
    }, 50)

  } else if (Math.abs(e.deltaY) < threshold) {
    clearInterval(flashInterval);
    flashInterval = null;
    flashImages.css({opacity: 0});
  }
})

$('a').each(function (index) {
  this.addEventListener('click', function (e) {
    e.preventDefault();
    var self = this;
    setTimeout(function () {
      window.location = self.href;
    }, 750);
  })
})


// Detect__Browser CSS

if (isChrome) {
  $('#detect-browser').css({
    width: '16vw'
  })
} else if (isEdge) {
  $('#detect-browser').css({
    width: '32vw'
  })
} else if (isSafari) {
  $('#detect-browser').css({
    width: '48vw'
  })
} else if (isOpera) {
  $('#detect-browser').css({
    width: '64vw'
  })
} else if (isIE) {
  $('#detect-browser').css({
    width: '80vw'
  })
} else if (isFirefox) {
  $('#detect-browser').css({
    width: '98.8vw'
  })
}

// Detect__Browser HTML

if (isChrome) {
  document.getElementById("text-browser").innerHTML="Chrome";
  
} else if (isEdge) {
  document.getElementById("text-browser").innerHTML="Edge";

} else if (isSafari) {
  document.getElementById("text-browser").innerHTML="Safari";

} else if (isOpera) {
  document.getElementById("text-browser").innerHTML="Opera";

} else if (isIE) {
  document.getElementById("text-browser").innerHTML="Explorer";
  
} else if (isFirefox) {
   document.getElementById("text-browser").innerHTML="Firefox";

}




// Detect__OS CSS

if (os = 'Mac OS') {
  $('#detect-os').css({
    width: '20vw'
  })
} else if (os = 'iOS') {
  $('#detect-os').css({
    width: '40vw'
  })
} else if (os = 'Windows') {
  $('#detect-os').css({
    width: '60vw'
  })
} else if (os = 'Android') {
  $('#detect-os').css({
    width: '80vw'
  })
} else if (os = 'Linux') {
  $('#detect-os').css({
    width: '99vw'
  })
}  


// Detect__Width CSS

// var w = window.innerWidth;

if (window.screen.width >= 1800) {
  $('#detect-screenwidth').css({
    width: '99vw'
  })
} else if (window.screen.width >= 1280) {
  $('#detect-screenwidth').css({
    width: '80vw'
  })
} else if (window.screen.width >= 1024) {
  $('#detect-screenwidth').css({
    width: '60vw'
  })
} else if (window.screen.width >= 960) {
  $('#detect-screenwidth').css({
    width: '40vw'
  })
} else if (window.screen.width >= 800) {
  $('#detect-screenwidth').css({
    width: '20vw'
  })
}

// Detect__Height CSS

if (window.screen.height >= 1800) {
  $('#detect-screenheight').css({
    width: '99vw'
  })
} else if (window.screen.height >= 1280) {
  $('#detect-screenheight').css({
    width: '80vw'
  })
} else if (window.screen.height >= 1024) {
  $('#detect-screenheight').css({
    width: '60vw'
  })
} else if (window.screen.height >= 960) {
  $('#detect-screenheight').css({
    width: '40vw'
  })
} else if (window.screen.height >= 800) {
  $('#detect-screenheight').css({
    width: '20vw'
  })
}

window.onload = checkName();

function checkName(){
  var path = window.location.pathname;
var page = path.split("/").pop();

if(page = "data.html"){
resize();
data(); 
}

}



		