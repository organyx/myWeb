$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    if($(window).width() > 880) {
      $('.nav_home').click(function() {
          $('html, body').animate({
              scrollTop: $(".link_home").offset().top
          }, 2000);
      });
      $('.nav_services').click(function() {
          $('html, body').animate({
              scrollTop: $(".link_services").offset().top -
                  150
          }, 2000);
      });
      $('.nav_skills').click(function() {
          $('html, body').animate({
              scrollTop: $(".link_skills").offset().top -
                  180
          }, 2000);
      });
      $('.nav_about').click(function() {
          $('html, body').animate({
              scrollTop: $(".link_about").offset().top -
                  180
          }, 2000);
      });
      $('.nav_contact').click(function() {
          $('html, body').animate({
              scrollTop: $(".link_contact").offset().top -
                  100
          }, 2000);
      });
    }
    /**************
        Icon resize & Disable Skills for mobile
     */
    $(function() {
      var $window = $(window);

      $(window).on('resize', function () {

        //Disable Skills for mobile
        if ($window.width() < 500) {
          document.getElementById("knowledge").className += " off";
       }else{
         document.getElementById("knowledge").className =
         document.getElementById("knowledge").className.replace
         ( /(?:^|\s)off(?!\S)/g , '' );
        };


        //Icon resize
       if ($window.width() < 768) {
         document.getElementById("fa").className =
         document.getElementById("fa").className.replace
         ( /(?:^|\s)fa-5x(?!\S)/g , '' );
         document.getElementById("fa").className += " fa-2x";
      }else{
        document.getElementById("fa").className =
        document.getElementById("fa").className.replace
        ( /(?:^|\s)fa-2x(?!\S)/g , '' );
        document.getElementById("fa").className += " fa-5x";
       };




      });
    });

    /**************
        FancyBox
     */
    $(".fancybox").fancybox();
    /**************
        Sticky nav bar
     */

     $(window).on('load resize orientationchange orientationChanged', function() {
       var stickyMenu = $('#primary_nav').offset().top;
       var w = $(window);

       w.scroll(function(){
         if(jQuery(window).width() > 880){
           if( w.scrollTop() > stickyMenu ) {
               $('#NavBar').css({position: 'fixed', top: '0px'});
           } else {
               $('#NavBar').css({position: 'static', top: '0px'});
           }
         }
       });
     });

    /**************
        Skill bars
     */
    jQuery('.skillbar').each(function() {
        jQuery(this).find('.skillbar-bar').delay(1000).animate({
            width: jQuery(this).attr('data-percent')
        }, 2000);
    });
});
