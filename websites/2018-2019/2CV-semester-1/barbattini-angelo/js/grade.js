(function () {
    var grades = $('.grade');
    var life = 5;
    grades.each(function (index, grade) {
        // Timeline
        var timeline = $(grade).find('.grade__timeline');
        var start = $(grade).find('.grade__game-circle');
        var interval = null;
        start.on("mousedown", function () {
            var knife = $(timeline).find('.grade__timeline-knife');
            var time = parseFloat($(timeline).data('time')) * 1000;
            var elapsedTime = 0;
            var timelineWidth = $(timeline).width() - knife.width();
            var intervals = 10;
            var step = (timelineWidth / time) * intervals;
            var offsetX = 0;
            var knife = $(timeline).find('.grade__timeline-knife');

            if (!interval) {
                interval = setInterval(() => {
                    offsetX += step;
                    knife.css({
                        left: (offsetX + knife.width() * 0.5) + "px"
                    })
                    elapsedTime += intervals;

                    // On loose
                    if (elapsedTime >= time) {
                        clearInterval(interval);
                        var modal = $('.modal__game-over');
                        modal.removeClass('modal__anim-' + life)
                        life--;
                        modal.addClass('modal__anim-' + life)
                        modal.addClass('modal--show');

                        setTimeout(function () {
                            if (life > 0) {
                                modal.removeClass('modal--show');
                                hideNextPanel();
                            } else {
                                window.location.reload();
                            }
                        }, 3000)
                    }
                }, intervals);
            }
        })

        // Game
        var game = $(grade).find('.grade__game');
        var circle = $(game).find('.grade__game-circle');
        var targets = $(game).find('.grade__game-target');
        var targetsToReach = targets.length;
        var currentCircle = null;
        var circleOffsetX = 0;
        var circleOffsetY = 0;
        circle.on('mousedown', function (e) {
            currentCircle = this;
            circleOffsetX = e.offsetX;
            circleOffsetY = e.offsetY;
            $(this).addClass('grade__game--disable-events');
        })

        $(game).on('mousemove', function (e) {
            if (currentCircle) {
                $(currentCircle).css({
                    left: (e.offsetX - circleOffsetX + $(currentCircle).width() * 0.5) + "px",
                    top: (e.offsetY - circleOffsetY + $(currentCircle).height() * 0.5) + "px"
                })
            }
        })

        $(grade).on('mouseup', function () {
            targets.each(function (index, target) {
                if (currentCircle && interval) {
                    var targetPosition = $(target).position();
                    var circlePosition = $(currentCircle).position()

                    var maxDist = 60
                    var dist = Math.sqrt(Math.pow(targetPosition.left - circlePosition.left, 2) + Math.pow(targetPosition.top - circlePosition.top, 2));
                    if (dist < maxDist) {
                        $(target).addClass('grade__game-target--reached');
                        targetsToReach--;

                        // On win
                        if (targetsToReach == 0) {
                            clearInterval(interval);
                            var modal = $('.modal__win');
                            var text = modal.find('h6');
                            text.html($(grade).data('winText'));
                            var img = modal.find('img');
                            img.attr("src", $(grade).data('winImg'));
                            modal.addClass('modal--show');
                            setTimeout(function () {
                                hideNextPanel();
                                modal.removeClass('modal--show');
                            }, 4000)
                        }
                    }
                }
            })
            $(currentCircle).removeClass('grade__game--disable-events')
            currentCircle = null;
        })

        function hideNextPanel() {
            var pannelToHide = $(grade).attr("data-target");
            $(pannelToHide).addClass("off");
        }



    })
})();