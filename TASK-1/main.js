const projectName = 'samplepage';

$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
       $('#navbar').removeClass('fixed-top');
    } else {
       $('#navbar').addClass('fixed-top');
    }
});