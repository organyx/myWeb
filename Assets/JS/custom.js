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

      

  jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').delay(1000).animate({
      width:jQuery(this).attr('data-percent')
    },2000);
  });


});
