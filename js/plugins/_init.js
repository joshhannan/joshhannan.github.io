// Scripts - Client

$(function(){
	var current_body;
	var current_remainder;
	var window_width = $(window).outerWidth(true);
	if( window_width > 640 ) {
		current_body = parseInt(window_width)*0.75;
		current_remainder = parseInt(window_width)*0.25;
	} else {
		current_body = parseInt(window_width)*0.25;
		current_remainder = parseInt(window_width)*0.75;
	}
	$(window).resize(function() {
		window_width = $(window).outerWidth(true);
		if( window_width > 640 ) {
			current_body = parseInt(window_width)*0.75;
			current_remainder = parseInt(window_width)*0.25;
		} else {
			current_body = parseInt(window_width)*0.25;
			current_remainder = parseInt(window_width)*0.75;
		}
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

/*===========================================================================================
	PLUGINS
===========================================================================================*/

	$('select').select_it();

	$('input[type=checkbox]').check_it();
	
	$('#google-map').google_map_it({
		locations: [
			{ lat: '41.6706', lng: '-71.2783', title: 'Title' }
		]
	});

	$('.social_share').share_it({
		buttons: [
			{
				button_type: 'email',
				button_html: '<span class="icon">&#xf003;</span>'

			},{
				button_type: 'facebook',
				button_html: '<span class="icon">&#xf09a;</span>'

			},{
				button_type: 'twitter',
				button_html: '<span class="icon">&#xf099;</span>'
			},{
				button_type: 'google_plusone_share',
				button_html: '<span class="icon">&#xf0d5;</span>'
			},{
				button_type: 'linkedin',
				button_html: '<span class="icon">&#xf0e1;</span>'
			},{
				button_type: 'compact',
				button_html: '<span class="icon">&#xf067;</span>'
			}
		]
	});

});