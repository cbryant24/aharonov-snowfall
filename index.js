$(document).ready(function () {

  // $('.article-highlight__description.zero').css({ height: '100%', display: 'block', opacity: 1});
  
  $('li.theory-listing-item').on('click', function () {
    if ($(this).hasClass('active')) {
      return;
    }

    var $this               = $(this),
      $theoryOne            = $('.theory-listing.one'),
      $theoryTwo            = $('.theory-listing.two'),
      $theoryThree          = $('.theory-listing.three'),
      $theoryFour           = $('.theory-listing.four'),
      $theoryFive           = $('.theory-listing.five'),
      $currentActive        = $('.theory-listing ul li.active');
      $currentShownContent  = $('.theory-listing-details .theory-content.one');
      $contentToShow        = $('.theory-listing-details .theory-content.one')

    // debugger

    if ($currentActive.hasClass('two')) {
      $currentShownContent  = $('.theory-listing-details .theory-content.two');
    }

    if ($currentActive.hasClass('three')) {
      $currentShownContent  = $('.theory-listing-details .theory-content.three');
    }

    if ($currentActive.hasClass('four')) {
      $currentShownContent  = $('.theory-listing-details .theory-content.four');
    }

    if ($currentActive.hasClass('five')) {
      $currentShownContent  = $('.theory-listing-details .theory-content.five');
    }

    if ($this.hasClass('two')) {
      $contentToShow  = $('.theory-listing-details .theory-content.two');
    }

    if ($this.hasClass('three')) {
      $contentToShow  = $('.theory-listing-details .theory-content.three');
    }

    if ($this.hasClass('four')) {
      $contentToShow  = $('.theory-listing-details .theory-content.four');
    }

    if ($this.hasClass('five')) {
      $contentToShow  = $('.theory-listing-details .theory-content.five');
    }


    $currentActive.removeClass('active');
    $currentShownContent.addClass('hidden');
    // debugger
    $this.addClass('active');
    $contentToShow.removeClass('hidden');
    // if ($this.hasClass('five')) {
    //   $('.aharonov-effect__article-theory-box ul').css('min-height', '73rem');
    // } else {
    //   $('.aharonov-effect__article-theory-box ul').css('min-height', '60rem');
    // }
    
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