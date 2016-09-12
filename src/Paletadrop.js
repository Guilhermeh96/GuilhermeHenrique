$(document).ready(function() {

	$('.paletteNav').hide();

	$('.dropbtn').click(function() {
		$('.paletteNav').toggle();
	});

	$('html').click(function() {
  		$('.paletteNav').hide();
	});

	$('.dropbtn').click(function(event){
    	event.stopPropagation();
	});

});
