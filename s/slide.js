var slideEng = {};

(function($) {

  slideEng.slideCenter = function(slide) {
    if (slide.children('*').length === 1) {
      slide.children('*').css(
        'margin-top',
        (($(window).height() - slide.children('*').height())/2)+'px'
      );
    }
  }

  slideEng.slideSize = function() {
    var winheight = $(window).height();
    $('body').css('font-size', (winheight / 20) + 'px');
    $('.slide').height(winheight - 2);
  }

  slideEng.nextSlide = function() {
    var currentslide = $('.slide:visible').eq(0);
    var next = currentslide.next('.slide');
    currentslide.hide();
    if (next.length === 0) {
      next = $('.slide:first');
    }
    next.show();
    slideEng.slideCenter(next);
  }

  slideEng.prevSlide = function() {
    var currentslide = $('.slide:visible').eq(0);
    var prev = currentslide.prev('.slide');
    currentslide.hide();
    if (prev.length === 0) {
      prev = $('.slide:last');
    }
    prev.show();
    slideEng.slideCenter(prev);
  }

  slideEng.makeGoButtons = function() {
    $('textarea').
      attr('spellcheck',''). // turn off spell checking in FireFox
      after('<button class="gobutton">Go</button>');
    $('button.gobutton').click(function(e) {
      eval($(this).prev()[0].value);
    });
  }

  $(document).ready(function(){
    slideEng.makeGoButtons();
    // resize the slides to fill the window
    slideEng.slideSize();
    $(window).resize(slideEng.slideSize);

    // This section processes pageup and pagedown.
    // We record and check if they were pressed before
    // we process the keyup events. We clear the state
    // on when the user switches away from the page.
    var down33 = false;
    var down34 = false;
    $(document).blur(function(e){
      down33 = false;
      down34 = false;
    });
    $(document).keydown(function(e){
      switch (e.which) {
      case 33:
        down33 = true;
        e.stopPropagation();
        break;
      case 34:
        down34 = true;
        e.stopPropagation();
        break;
      }
    });
    $(document).keyup(function(e){
      switch (e.which) {
      case 33:
        if (down33) {
          slideEng.prevSlide();
          down33 = false;
          e.stopPropagation();
        }
        break;
      case 34:
        if (down34) {
          slideEng.nextSlide();
          down34 = false;
          e.stopPropagation();
        }
        break;
      }
    });
    $('.slide').eq(0).show();
    slideEng.slideCenter($('.slide:first'));
  });
})(jQuery);

