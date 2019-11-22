$(document).ready(function () {
  $('li.theory-listing-item').on('click', function () {
    if ($(this).hasClass('active')) {
      return;
    }

    var $this               = $(this),
      $currentActive        = $('.theory-listing ul li.active');
      $currentShownContent  = $('.theory-listing-details .theory-content.one');
      $contentToShow        = $('.theory-listing-details .theory-content.one')

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
    $this.addClass('active');
    $contentToShow.removeClass('hidden');
    
  });
});