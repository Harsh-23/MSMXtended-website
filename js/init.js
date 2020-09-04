(function($) {
    $(function() {
        $(".sidenav").sidenav();
    }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function() {
    $(".carousel").carousel();
});
$('.carousel.carousel-slider').carousel({
    indicators: true
});
$(document).ready(function() {
    $('.collapsible').collapsible();
});