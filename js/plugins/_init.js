// Scripts - Client

$(function(){
	$('.menu_toggle').click(function() {
		if( $(this).hasClass('open') ) {
			$(this).removeClass('open');
			$('.slide_menu').removeClass('open');
			$('body').removeClass('menu_open');
		} else {
			$(this).addClass('open');
			$('.slide_menu').addClass('open');
			$('body').addClass('menu_open');
		}
	});
	$('.menu_close').click(function() {	
		$(this).removeClass('open');
		$('.slide_menu').removeClass('open');
		$('body').removeClass('menu_open');
	});

});