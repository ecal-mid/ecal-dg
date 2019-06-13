$(document).ready(function () {
    var wrappers = $('.wrapper');
    wrappers.each(function () {
        var columns = $(this).find('.column');
        var contents = $(this).find('.content');

        columns.on('mouseover', function () {
            var rows = $(this).find('.row');

            contents.hide();
            var content = $(this).children('.content')
            content.show();

            rows.css({
                height: '50%'
            });

            columns.css({
                width: (20 / 3) + '%'
            });

            $(this).css({
                width: '80%'
            });
        });

        columns.each(function () {
            var rows = $(this).find('.row');
            rows.on('mouseover', function () {
                requestAnimationFrame(function () {
                    contents.hide();
                    var content = $(this).children('.content')
                    content.show();

                    rows.css({
                        height: '20%'
                    });

                    $(this).css({
                        height: '80%'
                    });
                }.bind(this));
            });
        });
    })
});

$('.imgBottom').click(function () {
    $('html,body').animate({
            scrollTop: $('.court2').offset().top
        },
        'slow');
});


$('.imgTop').click(function () {
    $('html,body').animate({
            scrollTop: $('.court1').offset().top
        },
        'slow');
});
