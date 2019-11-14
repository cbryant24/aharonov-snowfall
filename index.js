$(document).ready(function () {

  $.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  $(window).on('resize scroll', function() {
    console.log('hello world') 
    $('.color-red').each( function() {
      if ($(this).isInViewport()) {
        $(this).addClass('letter-color');
      }
    }) 
  });
})