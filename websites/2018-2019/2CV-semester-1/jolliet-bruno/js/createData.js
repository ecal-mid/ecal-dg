(function() {
	var content = $('.content')

	for (var i = 0; i < data.length; i++) {
		createRect(data[i])
	}

	function createRect(data) {
		var type = data.type
		if (type == 'annee') {
			var element = document.createElement('div');
			element.classList.add('carre');
			element.classList.add('carre-date');
			element.innerHTML = data.annee;
		} else if (type == 'initiative') {
			var acceptee = data.acceptee
			if (acceptee == true) {
				var element = document.createElement('a');
				element.classList.add('carre');
				element.classList.add('carre-vert');
				element.setAttribute('data-initiative', data.titre);
				element.href = data.url;
			} else {
				var element = document.createElement('div');
				element.classList.add('carre');
				element.classList.add('carre-rouge');
				element.setAttribute('data-initiative', data.titre);
				
				$(element).click(function () {
					var nav = $('#myNav');
					
					var titre = nav.find('.nav-titre');
					titre.html(data.titre);

					var annee = nav.find('.nav-annee');
					annee.html(data.annee);

					var non = nav.find('.nav-non');
					non.html(data.non);

					var oui = nav.find('.nav-oui');
					oui.html(data.oui);

					var participation = nav.find('.nav-participation');
					participation.html(data.participation);

					var canton = nav.find('.nav-canton_oui');
					canton.html(data.canton_oui);

					var canton = nav.find('.nav-canton_non');
					canton.html(data.canton_non);

					var canton = nav.find('.nav-parlement');
					canton.html(data.parlement);

					var canton = nav.find('.nav-electeur');
					canton.html(data.electeur);
					
					openNav();
				})
			}
		} else if (type == 'suspens') {
			var element = document.createElement('div');
			element.classList.add('carre');
			element.classList.add('carre-gris');

			$(element).click(function () {
				var nav = $('#myNav');
				
				var titre = nav.find('.nav-titre');
				titre.html(data.titre);

				var annee = nav.find('.nav-annee');
				annee.html(data.annee || '');

				var non = nav.find('.nav-non');
				non.html(data.non || '');

				var oui = nav.find('.nav-oui');
				oui.html(data.oui || '');

				var participation = nav.find('.nav-participation');
				participation.html(data.participation || '');

				var canton = nav.find('.nav-canton');
				canton.html(data.canton || '');
					
				openNav();
			})
		}

		data.element = element
		content.append(element);
	}

})()