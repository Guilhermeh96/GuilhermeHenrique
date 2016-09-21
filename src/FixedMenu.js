$(document).ready(function() {
   $(window).scroll(function(){                          
        if ($(this).scrollTop() > 150) {
            $('#top').removeClass('navUp').addClass('navDown');
        } else {
            $('#top').removeClass('navDown').addClass('navUp');
        }
    });
});