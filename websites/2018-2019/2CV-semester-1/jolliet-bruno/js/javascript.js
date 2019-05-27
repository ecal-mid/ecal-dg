
$(document).ready(function() {

  filtre();
  initiative_name_vert();
  initiative_name_rouge();
  barre_pourcentage();
  lien_article();
  resize_image();

});



function filtre() {
  $('.btn').on(
      'click',
      function () {
        if ($(this).hasClass('btn-oui')) {
          $('body').removeClass('filter-non filter-suspens').toggleClass('filter-oui');
        } else if ($(this).hasClass('btn-non')) {
          $('body').removeClass('filter-oui filter-suspens').toggleClass('filter-non');
        } else if ($(this).hasClass('btn-active')) {
          $('body').removeClass('filter-oui filter-non');
        } else if ($(this).hasClass('btn-suspens')) {
           $('body').removeClass('filter-oui filter-non').toggleClass('filter-suspens');
        }
      }
    );
}

function initiative_name_rouge() {
  $('.carre-rouge').on(
      'mouseenter',
      function () { 

        var dataIni = $(this).attr('data-initiative');
        $('#header').empty().append(dataIni).addClass('data_initiative_titre');

      }
    ).on(
      'mouseleave',
      function () { 
        $('#header').empty().append('INITIATIVES POPULAIRES SUISSE').addRemove('data_initiative_titre');

      }
    );
}

function initiative_name_vert() {
  $('.carre-vert').on(
      'mouseenter',
      function () { 

        var dataIni = $(this).attr('data-initiative');
        $('#header').empty().append(dataIni).addClass('data_initiative_titre');

      }
    ).on(
      'mouseleave',
      function () { 
        $('#header').empty().append('INITIATIVES POPULAIRES SUISSE').addRemove('data_initiative_titre');

      }
    );
}


// function click () {
//   $('body').on(
//       'click',
//       function () {
//         console.log($(window).scrollTop());
//      }


//   );     
// }


// var scroll = 0;

// $(window).on('click', function (e) {
//   scroll += e.originalEvent.deltaY
//   scroll = Math.max(0, scroll);

//   if (scroll > 5) {
//     $('body').addClass('intro-off');
//   }
// })




function closetext() {
   
   var element = document.getElementById("texteintro");
   
   $('body').addClass('intro-off');
   

}

function opentext() {
   
   var element = document.getElementById("header");
   
   $('body').toggleClass('intro-in');
   

}



function openNav() {
  document.getElementById("myNav").style.height = "auto";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}


function barre_pourcentage() {
    $('.canton').on('mouseenter', function(){
      var name = this.getAttribute('name')
      $('.barremenu2vert').toggleClass(name + '-barre-1');
      $('.contenu_initiative').find('.default').hide()
      $('.contenu_initiative').find('.' + name).css({display: 'flex'})
    }).on('mouseleave', function(){
      var name = this.getAttribute('name')
      $('.barremenu2vert').toggleClass(name + '-barre-1');
      $('.contenu_initiative').toggleClass('drapeau--' + name);
      $('.contenu_initiative').find('.default').css({display: 'flex'})
      $('.contenu_initiative').find('.' + name).hide()
    });
}



function lien_article() {

    $('a[href^="#"]').on('click', function(event) {
        var targetData = $(this).attr('href');
        var target = $(targetData);
        // console.log($(target).offset().top);
        $('html, body').animate( {
            scrollTop: target.offset().top
        }, 500); //Vitesse: 1000 = 1s

    });
    return false;
}

function resize_image() {
    $('.image_style_1').on('click', function() {
        $(this).toggleClass('image_style_2');
    });
}






