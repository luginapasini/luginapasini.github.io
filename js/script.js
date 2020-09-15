$('.page-scroll').on('click', function(e){

// href
var tujuan = $(this).attr('href');
// element
var elementTujuan = $(tujuan);


$('html,body').animate({
    scrollTop: elementTujuan.offset().top -50
}, 1500, 'easeInOutExpo');

e.preventDefault();



});
