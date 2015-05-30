Template.layout.rendered = function() {
    $('.input-blocker').height(window.innerHeight/2-35);
    $('#main').height(window.innerHeight);
    $('#main').width(window.innerWidth);
    $('#main').css('box-shadow','inset 0px 0px' + window.innerWidth/2 + window.innerWidth/8 + ' #000000');
    $('.pull-down').each(function() {
        $(this).css('margin-top', $(this).parent().height()-$(this).height())
    });
};

$( window ).resize(function() {
    $('.input-blocker').height(window.innerHeight/2-35);
    $('#main').height(window.innerHeight);
    $('#main').width(window.innerWidth);
    $('#main').css('box-shadow','inset 0px 0px' + window.innerWidth + window.innerWidth/8 + ' #000000');
});

