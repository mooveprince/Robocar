function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});


var revClick = false;
var fwdClick = false; 

$('#reverse').click (function () {
    revClick = !revClick;
    $(this).toggleClass('disabled-click', revClick);
    $(this).find('span').toggleClass('disabled-glyphicon', revClick);

    $('#forward').toggleClass('disabled-click', false);
    $('#forward').find('span').toggleClass('disabled-glyphicon', false);  
    fwdClick = false;      
});

$('#forward').click (function () {
    fwdClick = !fwdClick;
    $(this).toggleClass('disabled-click', fwdClick);
    $(this).find('span').toggleClass('disabled-glyphicon', fwdClick);

    $('#reverse').toggleClass('disabled-click', false);
    $('#reverse').find('span').toggleClass('disabled-glyphicon', false);
    revClick = false
});

$('#slow').click (function () {
    console.log ("SLOWER CLICKED");
});

$('#fast').click (function () {
    console.log ("FASTER CLICKED");
});

$('#stop').click (function () {
    console.log ("STOP CLICKED");
});

