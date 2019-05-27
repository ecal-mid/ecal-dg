(function () {
	var input = $('.header__search-bar input');
	input.on('input', function (e) {
		var self = this
		var matches = data.reduce(function (matches, cData) {
			if (cData.titre && cData.type != 'annee') {
				if (cData.titre.toLowerCase().indexOf(self.value.toLowerCase()) > -1) {
					matches.push(cData.element);
				}
			}
			return matches
		}, [])

		if (self.value.length > 0) {
			document.body.classList.add('hide-all');
		} else {
			console.log('normal')
			for (let i = 0; i < data.length; i++) {
				data[i].element.classList.remove('carre--hide');
			}
		}

		for (let i = 0; i < data.length; i++) {
			if (data[i].type != 'annee') {
				if (matches.indexOf(data[i].element) < 0) {
					data[i].element.classList.add('carre--hide');
				} else {
					data[i].element.classList.remove('carre--hide');
				}
			}
		}
	})
})()