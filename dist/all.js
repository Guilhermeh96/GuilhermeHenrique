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
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});

