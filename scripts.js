$(function(){

	$('.example_button').click(function() {
		$('body').overlay_it({
			html: '<div class="body"></div>'
		});
		$('.overlay_it_box .body').load('newsletter_template.html');
	});

});

/*
	overlay_it
	by: Josh Hannan
*/
!function(a){a.fn.overlay_it=function(b){var c=a.extend({html:"<h1>Testing</h1>",close_html:"<span>Close</span>"},b);return a(this).each(function(){a(this).prepend('<div class="overlay_it_container"><div class="overlay_it_box">'+c.html+'<div class="close">'+c.close_html+"</div></div></div>"),a(".overlay_it_box .close").click(function(){a(".overlay_it_container").hide()}),a(".overlay_it_container .overlay_it_box").click(function(a){a.stopPropagation()}),a(".overlay_it_container").click(function(){a(".overlay_it_container").hide()})}),this}}(jQuery);
/*
	select_it
	by: Josh Hannan
*/
!function(a){a.fn.select_it=function(){var e,f,g,h,c=[],d=0;return a(this).each(function(){c=[],d++,a(this).hide(),a(this).html(),e=a(this).data("placeholder")?a(this).data("placeholder"):"...",a(this).children("option").each(function(b){var d=a(this).val(),e=a(this).text();c[b]=['<li value="'+d+'">'+e+"</li>"]}),c=c.join("\r"),a(this).after('<div id="select_'+d+'" class="select_it"><div class="select_it_box"><span class="displayed">'+e+'</span><span class="tab"></span></div><ul style="display: none;">'+c+"</ul></div><!--/select_it-->"),a(".select_it .select_it_box").click(function(b){b.stopPropagation(),h=a(this).parents(".select_it").attr("id"),a("#"+h+" ul").show()}),a(".select_it ul li").click(function(b){b.stopPropagation(),h=a(this).parents(".select_it").attr("id"),a("#"+h+" ul li").removeClass("selected"),a("#"+h+" ul").hide(),f=a(this).html(),a(this).addClass("selected"),a(this).parents(".select_it").prev("select").find("option").each(function(){g=a(this).val(),g==f&&(a("select").find("option").removeAttr("selected"),a(this).attr("selected","selected"))}),a("#"+h+" .select_it_box .displayed").html(f)})}),a(document).click(function(){a(".select_it ul").hide()}),this}}(jQuery);

