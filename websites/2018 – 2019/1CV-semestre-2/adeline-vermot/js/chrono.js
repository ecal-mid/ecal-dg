(function () {
  	var centi = 0;
  	var sec = 0;
  	var min = 0;

  	var loc;
  	var compt = 0;

  	function chrono()
  		{
  			centi++;
  			centi*10;//=======pour passer en dixièmes de sec
  			//=== on remet à zéro quand on passe à 1seconde, 1min, 1heure, 1jour
  			if (centi > 9) {
  				centi = 0;
  				sec++;
  			}

  			if (sec > 59) {
  				sec = 0;
  				min++;
  			}

  			if (min > 59) {
  				min = 0;
  				h++;
  			}

  			//======

  			//================ On ajoute un zero pour avoir 1h01:05sec

  			if (sec < 10) {
  				var sec_ = "0" + sec;
  			}
  			else {
  				var sec_ = sec;
  			}

  			if (min < 10) {
  				var min_ = "0" + min;
  			}
  			else {
  				var min_ = min;
  			}
  			//===============

  			var loc =  min_ + ":" + sec_ + ":" + centi;
  			//================= Pour que cela s'affiche dans l'élément "time"
  			document.getElementById("time").innerHTML = loc;
  			//=================lancement du chrono
  			reglage = window.setTimeout("chrono();",100);
  		}


  	function debut()  //== Activation et désactivation des boutons
  		{
  				document.parametre.lance.disabled = "disabled";
  				document.parametre.pause.disabled = "";

  		}
  	function arret()
  		{
  				window.clearTimeout(reglage); // arrêter le temps
  				document.parametre.lance.disabled = "";
  				document.parametre.pause.disabled = "disabled";
  		}
  		//=============

      $(document).ready(function () {
      	console.log('DOM IS LOADED');
      	enableClick();
      });

      function enableClick(){
      	var object = $('div');
      	var object2 = $ ('body');

      	object.on('click', function () {
      		object2.toggleClass('blue');
      	})
      }




})();
