//  $(".onglet").click(function(){
//         if(!$(this).hasClass("onglet_back")) {
//           // fermeture du sous menu (retire class)
//           $(".hide_txt").slideUp();
//           $(this).siblings(".onglet").removeClass("onglet_back");
          
//           // ouverture du sous menu (ajoute class)
//           $(this).next(".hide_txt").slideDown();
//           $(this).addClass("onglet_back");
//         }
        
//         else if($(this).hasClass("onglet_back")) {
//           $(this).removeClass("onglet_back");
//           $(this).next(".hide_txt").slideUp();
//         }
// });

        $(".onglet").click(function(){
            var autres_onglets = $(this).siblings(".onglet");
            autres_onglets.removeClass("onglet_back");
            autres_onglets.next(".hide_txt").slideUp("slow");
            $(this).toggleClass("onglet_back");
            $(this).next(".hide_txt").slideToggle("slow");
        });