$(document).ready(function() {
	$('.nav-icon').click(function() {
		$(this).toggleClass('active');
		$(this).siblings('.menu').slideToggle();
	});
	function resize() {
		if (window.innerWidth > 767) {
			$('.menu').show();
		} else {
			$('.nav-icon').removeClass('active');
			$('.menu').hide();
		}
	}
	$(window).resize(function() {
		resize();
	});
	resize();

	$('.card').click(function() {
		$(this).find('.overlay').fadeIn('slow');
		$('body').addClass('hidden');
	});
	$('.cross-icon').click(function(e) {
		e.stopPropagation();
		$(this).parents('.overlay').fadeOut('slow');
		$('body').removeClass('hidden');
	});
});
