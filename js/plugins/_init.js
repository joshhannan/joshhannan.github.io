// Scripts - Client

$(function(){
	var current_body;
	var current_remainder;
	var window_width = $(window).outerWidth(true);
	current_body = parseInt(window_width)*0.75;
	current_remainder = parseInt(window_width)*0.25;
	console.log(current_body+' '+current_remainder);
	$(window).resize(function() {
		window_width = $(window).outerWidth(true);
		current_body = parseInt(window_width)*0.75;
		current_remainder = parseInt(window_width)*0.25;
		console.log(current_body+' '+current_remainder);
	});
	$('.menu_toggle').click(function() {
		if( $(this).hasClass('open') ) {
			$(this).removeClass('open');
			$('.slide_menu').removeClass('open');
			$('.slide_menu').animate({
				right: '-'+current_remainder
			}, 300, function() {
				$(this).removeClass('open');
			});
			$('body, header').animate({
				right: '0px',
				width: '100%'
			}, 300, function() {
				$(this).removeClass('menu_open');
			});
			$('body').removeClass('menu_open');
		} else {
			$(this).addClass('open');
			$('.slide_menu').animate({
				right: '0px',
				width: current_remainder
			}, 300, function() {
				$(this).addClass('open');
			});
			$('body, header').addClass('open').animate({
				right: current_remainder,
				width: current_body
			}, 300);
		}
	});
	$('.menu_close').click(function() {
		$(this).removeClass('open');
		$('.menu_toggle').removeClass('open');
		$('.slide_menu').animate({
			right: '-'+current_remainder
		}, 300, function() {
			$(this).removeClass('open');
		});
		$('body, header').animate({
			right: '0px',
			width: '100%'
		}, 300, function() {
			$(this).removeClass('menu_open');
		});
	});

	$('select').select_it();

});