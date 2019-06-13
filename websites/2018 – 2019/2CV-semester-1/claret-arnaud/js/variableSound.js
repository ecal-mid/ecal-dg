(function () {
	var appareilone = $('.appareilone');
	var appareilamettre = $('.appareilamettre');
	var sound = $('.player_audio');

	$(window).on('mousemove', function () {
		var offsetAppareilOne = appareilone.offset();
		var x1 = offsetAppareilOne.left;
		var y1 = offsetAppareilOne.top;

		var offsetAppareilAMettre = appareilamettre.offset();
		var x2 = offsetAppareilAMettre.left;
		var y2 = offsetAppareilAMettre.top;

		var dist = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
		volume = Math.min(1, (dist / 800));
		var soundElement = sound[0];
		soundElement.volume = volume;

		if (volume < 0.1) {
			soundElement.pause();
		}
	})
})();