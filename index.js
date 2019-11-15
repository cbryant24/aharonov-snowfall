$(document).ready(function () {

  // $('.article-highlight__description.zero').css({ height: '100%', display: 'block', opacity: 1});
  
  $('li .theory-listing').on('click', function () {
    // debugger
    if ($(this).parent().hasClass('.active')) {
      return;
    }

    var $this               = $(this),
      $theoryOne            = $('.theory-listing.one'),
      $theoryTwo            = $('.theory-listing.two'),
      $theoryThree          = $('.theory-listing.three'),
      $theoryFour           = $('.theory-listing.four'),
      $theoryFive           = $('.theory-listing.five'),
      $currentActive        = $('.aharonov-effect__article-theory-box li.active');
      $currentShownContent  = $('.aharonov-effect__article-theory-box li.active .theory-content');

    $currentActive.removeClass('active');
    $currentShownContent.addClass('hidden');
    // debugger
    $this.parent().addClass('active');
    $this.siblings('.theory-content').removeClass('hidden');
    if ($this.hasClass('five')) {
      $('.aharonov-effect__article-theory-box').css('min-height', '72.5em');
    } else {
      $('.aharonov-effect__article-theory-box').css('min-height', '53.5em');
    }
    
    // if ($this.hasClass('one') && $highlightOneVisible) {
    //   $highlightOne.hide().css({ height: '0%', opacity: 0 });
    //   $highlightImageOne.css('filter', 'grayscale(100%)');
    //   $('.article-highlight__description.zero').css({ height: '100%', display: 'block', opacity: 1});
    //   return

      
    // };

    // if ($this.hasClass('two') && $highlightTwoVisible) {
    //   $highlightTwo.hide().css({ height: '0%', opacity: 0 });
    //   $highlightImageTwo.css('filter', 'grayscale(100%)');
    //   $('.article-highlight__description.zero').css({ height: '100%', display: 'block', opacity: 1});
    //   return
    // };

    // if ($this.hasClass('three') && $highlightThreeVisible) {
    //   $highlightThree.hide().css({ height: '0%', opacity: 0 });
    //   $highlightImageThree.css('filter', 'grayscale(100%)');
    //   $('.article-highlight__description.zero').css({ height: '100%', display: 'block', opacity: 1});
    //   return
    // };

    // if ($this.hasClass('one')) {
    //   if ($highlightTwoVisible) {
    //     $highlightTwo.hide().css({ height: '0%', opacity: 0 });
    //     $highlightImageTwo.css('filter', 'grayscale(100%)');
    //   }

    //   if ($highlightThreeVisible) {
    //     $highlightThree.hide().css({ height: '0%', opacity: 0 });
    //     $highlightImageThree.css('filter', 'grayscale(100%)');
    //   }

    //   if($highlightZeroVisible) {
    //     $('.article-highlight__description.zero').hide().css({ height: '0%', opacity: 0});
    //   }

    //   if (!$highlightOneVisible) {
    //     $highlightOne.show().css({ height: '100%',opacity: 1 });
    //     $highlightImageOne.css('filter', 'grayscale(0%)');
    //   }
    // }

    // if ($this.hasClass('two')) {
    //   if ($highlightOneVisible) {
    //     $highlightOne.hide().css({ height: '0%', opacity: 0 });
    //     $highlightImageOne.css('filter', 'grayscale(100%)');
    //   }

    //   if ($highlightThreeVisible) {
    //     $highlightThree.hide().css({ height: '0%', opacity: 0 });
    //     $highlightImageThree.css('filter', 'grayscale(100%)');
    //   }

    //   if($highlightZeroVisible) {
    //     $('.article-highlight__description.zero').hide().css({ height: '0%', opacity: 0});
    //   }

    //   if (!$highlightTwoVisible) {
    //     $highlightTwo.show().css({ height: '100%',opacity: 1 });
    //     $highlightImageTwo.css('filter', 'grayscale(0%)');
    //   }
    // }

    // if ($this.hasClass('three')) {
    //   if ($highlightTwoVisible) {
    //     $highlightTwo.hide().css({ height: '0%', opacity: 0 });
    //     $highlightImageTwo.css('filter', 'grayscale(100%)');
    //   }

    //   if ($highlightOneVisible) {
    //     $highlightOne.hide().css({ height: '0%', opacity: 0 });
    //     $highlightImageOne.css('filter', 'grayscale(100%)');
    //   }

    //   if($highlightZeroVisible) {
    //     $('.article-highlight__description.zero').hide().css({ height: '0%', opacity: 0});
    //   }

    //   if (!$highlightThreeVisible) {
    //     $highlightThree.show().css({ height: '100%',opacity: 1 });
    //     $highlightImageThree.css('filter', 'grayscale(0%)');
    //   }
    // }
  })
})