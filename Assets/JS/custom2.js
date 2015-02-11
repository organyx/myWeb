  $(document).ready(function () {
      $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
              $('.scrollup').fadeIn();
          } else {
              $('.scrollup').fadeOut();
          }
      });
      $('.scrollup').click(function () {
          $("html, body").animate({
              scrollTop: 0
          }, 600);
          return false;
      });

      $('.nav_home').click(function(){

        $('html, body').animate({
          scrollTop: $(".link_home").offset().top
        }, 2000);

       });

      $('.nav_services').click(function(){

        $('html, body').animate({
          scrollTop: $(".link_services").offset().top - 100
        }, 2000);

       });

      $('.nav_skills').click(function(){

        $('html, body').animate({
          scrollTop: $(".link_skills").offset().top - 100
        }, 2000);

       });

      $('.nav_about').click(function(){

        $('html, body').animate({
          scrollTop: $(".link_about").offset().top - 100
        }, 2000);

       });

      $('.nav_contact').click(function(){

        $('html, body').animate({
          scrollTop: $(".link_contact").offset().top - 100
        }, 2000);

       });



       /**************
          Sticky nav bar
       */

       $(function() {

         // grab the initial top offset of the navigation
         var sticky_navigation_offset_top = $('#NavBar').offset().top;

         // our function that decides weather the navigation bar should have "fixed" css position or not.
         var sticky_navigation = function(){
           var scroll_top = $(window).scrollTop(); // our current vertical position from the top

           // if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
           if (scroll_top > sticky_navigation_offset_top) {
             $('#NavBar').css({ 'position': 'fixed', 'top':0});
           } else {
             $('#NavBar').css({ 'position': 'relative' });
           }
         };

         // run our function on load
         sticky_navigation();

         // and run it again every time you scroll
         $(window).scroll(function() {
            sticky_navigation();
         });

       });

       /**************
          Skill bars
       */

  jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').delay(1000).animate({
      width:jQuery(this).attr('data-percent')
    },2000);
  });


});