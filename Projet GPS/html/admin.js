$(function() {
	// Gestion sections
	$('.menu-element').click(function(event) {
		var id = $(this).attr('id');
		console.log("Click on id "+id);
		$('.menu-element').removeClass('selected-menu');
		$(this).addClass('selected-menu');
		$('article').hide();
		$('article[value='+id+']').show();
	});

	

	$('.menu-header').click(function(event) {
		$('.menu-header a').animate({
			width: "toggle"},
			'fast');
		$('.menu-element a').animate({
			width: "toggle"},
			'fast');
		});
});
