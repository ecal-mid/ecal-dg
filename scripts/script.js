(function () {
  // Handle projects
  var body = $('body');
  var projects = $('.project');

  projects.each(function () {
    var listItem = $(this).parent();
    var parentList = listItem.parent();
    var site = $(this).find('.project__site');
    var button = listItem.find('.list__item-inner');
    var closeButton = $(this).find('.project__close');

    button.click(function () {
      $(this).slideDown(300, function () {
        this.scrollIntoView({ behavior: 'smooth' });
        parentList.addClass('list--focus');

        setTimeout(function () {
          body.addClass('lock-scroll');
          
          // Load the project
          if (!site.attr('src')) {
            var src = site.data('src');
            site.attr('src', src);
            site.on('load', function () {
              $(this)
                .parent()
                .parent()
                .addClass('project--loaded');
            })
          }
        }, 800);
      });
    }.bind(this));

    closeButton.click(function () {
      body.removeClass('lock-scroll');
      parentList.removeClass('list--focus');
      $(this).slideUp(300, function () {
        listItem[0].scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      });
    }.bind(this));
  });

  // Handle assignements
  var assignments = $('.assignment');
  assignments.each(function () {
    var assignement = $(this);
    var parent = $(this).parent();

    parent.click(function () {
      if (assignement.is(':visible')) {
        // Hide assignement
        var targetHeight = $(this).outerHeight() - assignement.outerHeight();
        
        $(this).css('height', targetHeight);
        var duration = parseFloat(
          $(this).css('transition-duration').split(',')[0]
        );

        setTimeout(function () {
          assignement.hide();
          $(this).css('height', 'auto');
        }.bind(this), duration * 1000);
      } else {
        // Show assignement
        $(this).css('height', $(this).outerHeight());
        assignement.show();

        // Debounce animation
        requestAnimationFrame(function () {
          $(this).css('height', '100vh');
        }.bind(this))
      }

      this.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
})();