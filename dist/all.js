$(document).ready(function() {
   $(window).scroll(function(){                          
        if ($(this).scrollTop() > 150) {
            $('#top').removeClass('navUp').addClass('navDown');
        } else {
            $('#top').removeClass('navDown').addClass('navUp');
        }
    });
});
$(document).ready(function() {

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

$(document).ready(function() {

    $('.main').click(function(){
    $('body').removeClass();
    });

    $('.palette1').click(function(){
    $('body').removeClass();
    $('body').addClass('uiColorWhite');
    });

    $('.palette2').click(function(){
    $('body').removeClass();
    $('body').addClass('uiColorTurquoise');
    });

    $('.palette3').click(function(){
    $('body').removeClass();
    $('body').addClass('uiColorBlue');
    });

});

$(document).ready(function(){
    var $root = $('html, body');
    $('a').click(function() {
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 80
        }, 800);
        return false;
    });
});

