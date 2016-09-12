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

