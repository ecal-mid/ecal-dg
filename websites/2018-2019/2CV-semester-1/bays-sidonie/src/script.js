$(document).ready(function() {
  click();
  mousehover();

  console.log('Hello "kjsdhl"');

});

$('.mot').on(
    'click',
    function() {
      $('.grandbloc').toggleClass('on');
      $('.lignes').toggleClass('hide');
      $("#exercice1h1").text("théorie")

      if ($("#pmot").text() == "X") {
        $("#pmot").text("?")
        $("#exercice1h1").text("exercice 1")
      } else {
        $("#pmot").text("X")
      }
    }
  )

trucs = [["res/sens2.svg", "deux", "séparation", "polarité", "dichotomie", "différence","dualité"],
		    ["res/sens3.svg", "trois", "mouvement", "dialogue", "germination", "vibration","action"],
        ["res/sens4.svg", "quatre", "base", "foyer", "intégrale", "soleil","stable"],
        ["res/sens5.svg", "cinq", "savoir", "main", "intellect", "travail","pouvoir"],
        ["res/sens6.svg", "six", "espace", "temps", "mort", "ténèbre","flux"],
        ["res/sens7.svg", "sept", "reflet", "lumière", "volonté", "maïs","miroir"],
        ["res/sens8.svg", "huit", "harmonie", "pluie", "simplicité", "ruisseler","justice"],
        ["res/sens9.svg", "neuf", "idées", "intention", "humanité", "réalité","espoir"],
        ["res/sens10.svg", "dix", "naissance", "espace", "neutre", "créatif","résolution"],
        ["res/sens11.svg", "onze", "résolution", "clarté", "floraison", "améliorer","naissance"],
        ["res/sens12.svg", "douze", "matin", "résumé", "aube", "comprendre","vie"],
        ["res/sens13.svg", "treize", "vague", "énergie", "équilibre", "onde","évolution"]];

trucsIndexMax = trucs.length;
trucsIndex = -1

$("#sens0").click(function(){
  if (trucsIndex < trucsIndexMax-1) {
    trucsIndex += 1;
  } else {
    trucsIndex = 0;
  }

  $("#imgsens0").attr('src',trucs[trucsIndex][0]);
  $(".pplace_mot1").text(trucs[trucsIndex][1]);
  $(".pplace_mot2").text(trucs[trucsIndex][2]);
  $(".pplace_mot3").text(trucs[trucsIndex][3]);
  $(".pplace_mot4").text(trucs[trucsIndex][4]);
  $(".pplace_mot5").text(trucs[trucsIndex][5]);
  $(".pplace_mot6").text(trucs[trucsIndex][6]);
})


$('.place_mot1').on(
    'click',
    function() {
      $(".place_mot1").toggleClass('on');
      console.log('Hello "hihii"');

    }
  )

$('.place_mot2').on(
    'click',
     function() {
      $(".place_mot1").toggleClass('on');
      console.log('Hello "hihii"');

    }
  )

$('.place_mot3').on(
    'click',
     function() {
      $(".place_mot1").toggleClass('on');
      console.log('Hello "hihii"');

    }
  )

$('.place_mot4').on(
    'click',
    function() {
      $(".place_mot1").toggleClass('on');
      console.log('Hello "hihii"');

    }
  )

 {
  $('#sens0').on(
    'mouseenter',
    function() {
      $('#sens0').toggleClass('on');
      console.log('Hello "kjsdhl"');
      $('#sens1').toggleClass('on');
      console.log('Hello "popopo"');

    }
  )


   $('.place_mot1').on(
    'mouseenter',
    function() {
      $(".place_mot1").toggleClass('on');
      console.log('Hello "hihii"');

    }
  )

    $('.place_mot2').on(
    'mouseenter',
    function() {
      $(".place_mot2").toggleClass('on');
      console.log('Hello "hihii"');

    }
  )

     $('.place_mot3').on(
    'mouseenter',
    function() {
      $(".place_mot3").toggleClass('on');
      console.log('Hello "hihii"');

    }
  )

      $('.place_mot4').on(
    'mouseenter',
    function() {
      $(".place_mot4").toggleClass('on');
      console.log('Hello "hihii"');

    }
  )

        $('.place_mot5').on(
    'mouseenter',
    function() {
      $(".place_mot5").toggleClass('on');
      console.log('Hello "hihii"');

    }
  )
           $('.place_mot6').on(
    'mouseenter',
    function() {
      $(".place_mot6").toggleClass('on');
      console.log('Hello "hihii"');

    }
  )


 }
