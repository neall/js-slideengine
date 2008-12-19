var slideEng = {};

(function() {
  slideEng.slideSize = function() {
    $('.slide').height($(window).height() - 2);
  }

  slideEng.nextSlide = function() {
    var currentslide = $('.slide:visible').eq(0);
    var next = currentslide.next('.slide');
    currentslide.hide();
    if (next.length > 0) {
      next.show();
    } else {
      $('.slide').eq(0).show();
    }
  }

  slideEng.prevSlide = function() {
    var currentslide = $('.slide:visible').eq(0);
    var prev = currentslide.prev('.slide');
    currentslide.hide();
    if (prev.length > 0) {
      prev.show();
    } else {
      $('.slide:last').eq(0).show();
    }
  }
})();

$(document).ready(function(){
  slideEng.slideSize();
  $(window).resize(slideEng.slideSize);
  $(document).keyup(function(e){
    switch (e.which) {
    case 33:
      slideEng.prevSlide();
      e.stopPropagation();
      break;
    case 34:
      slideEng.nextSlide();
      e.stopPropagation();
      break;
    }
  });
  $('.slide').eq(0).show();
});
