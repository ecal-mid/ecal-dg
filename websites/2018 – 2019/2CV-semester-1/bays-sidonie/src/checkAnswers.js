//supprimer la ligne suivante
// $('.lignes2').toggleClass('on');
//pas plus loin

(function () {
	var lignes = $('.lignes');

	q = 0;

	$(window).on('keypress', function (e) {
		inc = false;
		var key = e.key;
		if (key == 'Enter') {
			lignes.each(function (index, elem) {
				if (index == q) {
					var answer = $(elem).data().answer;
					var answerElement = $(elem).find('.answer');
					var userInput = parseFloat(answerElement.val())
					if (userInput == answer) {
						inc = true;
						$(elem).removeClass('onp');
						$(elem).addClass('on');
						$(lignes[index + 1]).addClass('show');
						$('.svgjuste').show();
						$('.svgjuste2').show();
						musique.play();

						if (index == 0){
							$("#bravoh1").text("bravo")
						}
						if (index == 1){
							$("#bravoh1").text("oui !")
						}

						if (index == 2){
							$("#bravoh1").text("juste !")
						}

						if (index == 3){
							$("#bravoh1").text("excellent")
						}

						if (index == 4){
							$("#exercice1h1").text("exercice 2")
							$("#exercice1h1").addClass("on")
							$("#bravoh1").text("wouah")
						}

						if (index == 5){
							$("#bravoh1").text("sublime")
							$("#exercice1h1").removeClass("on")
						}

						if (index == 6){
							$("#bravoh1").text("Quel talent")
						}

						if (index == 7){
							$("#bravoh1").text("magique !")
						}

						if (index == 8){
							$("#bravoh1").text("impressionnant")
						}

						if (index == 9){
							$("#exercice1h1").text("exercice 3")
							$("#bravoh1").text("virtuose")
							$("#exercice1h1").addClass("on")
						}

						if (index == 10){
							$("#bravoh1").text("quel génie")
						}

						if (index == 11){
							$("#bravoh1").text("savant !")
							$("#exercice1h1").removeClass("on")
						}

						if (index == 12){
							$("#bravoh1").text("Ouuuuui")
						}

						if (index == 13){
							$("#bravoh1").text("incroyable")
						}

						if (index == 14){
							console.log("ok");
							$('#sens4').addClass('texte2');
							$('#sens4').removeClass('texte3');
							$('.lignes2').toggleClass('on');
							$('.lignes').hide();
							$("#exercice1h1").text("symbolique")
							$("#bravoh1").text("")
							$("#exercice1h1").addClass("on")
						}

					} else {
						$(elem).removeClass('on');
						$(elem).removeClass('onp');
						setTimeout(function () {
							$(elem).addClass('onp');
						}, 100)
						$('.svgjuste').hide();
						$('.svgjuste2').hide();
						$("#bravoh1").text("non !")
						musique2.play();
					}
				}
			})
		}

		if (inc) {
			q += 1;

			lignes.each(function (index, elem) {
				if (q == 15) {
					bottom = document.getElementById("lignes2id");
					bottom.scrollIntoView({ block: 'end',  behavior: 'smooth' });
				}
				if (index == q) {
					this.scrollIntoView({ block: 'end',  behavior: 'smooth' });
					setTimeout(function(){
							var answerElement = $(elem).find('.answer');
							answerElement.focus();
						}, 900);
				}
			})
		}
	})
})();

function afterScroll() {
	console.log("ok");
}

function moveDiv() {
    var $span = $("#popup");

    $span.fadeOut(200, function() {
        var maxLeft = $(window).width() - $span.width();
        var maxTop = $(window).scrollTop()+$(window).height() - $span.height();
        var leftPos = Math.max($span.width(), Math.floor(Math.random() * (maxLeft + 1)))
        var topPos = Math.max($span.height(), Math.floor(Math.random() * (maxTop + 1)))

        $span.css({ left: leftPos, top: topPos }).fadeIn(200);
    });
};

moveDiv();
setInterval(moveDiv, 900);
