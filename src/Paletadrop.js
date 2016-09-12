$(document).ready(function() {

	$('.paletaNav').hide();

	$('.dropbtn').click(function() {
		$('.paletaNav').toggle();
	});

	$('html').click(function() {
  		$('.paletaNav').hide();
	});

	$('.dropbtn').click(function(event){
    	event.stopPropagation();
	});

});
