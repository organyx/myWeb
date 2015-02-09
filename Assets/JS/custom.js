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
/*
    function isElementInViewport(elem) {
      var $elem = $(elem);

      var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
      var viewportTop = $(scrollElem).scrollTop();
      var viewportBottom = viewportTop + $(window).height();

      var elemTop = Math.round( $elem.offset().top );
      var elemBottom = elemTop + $elem.height();

      return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
  }

    function checkAnimation() {
      $('.bar').each(function(){
        var $e = $(this).find('.fill');
        
        if(!$e.hasClass('started')){
          if (isElementInViewport($e)) {
            var level = $e.data('level');
            $e.animate({
              width: level
            }, 2000);
            $e.addClass('started');
          }
        }
      });
    }*/
});

