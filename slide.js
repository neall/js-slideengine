function slideSize() {
	$('.slide').height($(window).height() - 2);
}
function nextSlide() {
	var currentslide = $('.slide:visible').eq(0);
	var next = currentslide.next('.slide');
	currentslide.hide();
	if (next.length > 0) {
		currentslide.next('.slide').show();
	} else {
		$('.slide').eq(0).show();
	}
}

$(document).ready(function(){
	slideSize();
	$(window).resize(slideSize);
	$('.slide').click(function(e){
		nextSlide();
	});
	$('.slide').eq(0).show();
});
