

$(document).ready(function(){
    $('.loading-box-animation').animate({left: 0}, 820).delay(300).animate({position: "absolute", left:"100vw"}, 900);
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
      });

    window.setTimeout(function() {
        $('.loading-box-animation').removeClass('loading-box-animation')
    }, 2000);

    window.setTimeout(function() {
        $('.content').animate({position: "absolute", left:"0vw"}, 600)
    }, 1300);
    
    window.setTimeout(function() {
        $('.bg.hidden').show().removeClass('hidden')
    }, 1000);

    window.setTimeout(function() {
        $('.logo.flex.hidden').fadeIn(1000).removeClass('hidden')
    }, 1700);

    window.setTimeout(function() {
        $('.content.hidden').show().removeClass('hidden')
    }, 1000);

    window.setTimeout(function() {
        $('.title.hidden').fadeIn(1000).removeClass('hidden')
    }, 2200);

    window.setTimeout(function() {
        $('.sub-title.hidden').fadeIn(1000).removeClass('hidden')
    }, 2300);

    window.setTimeout(function() {
        $('.nav.hidden').fadeIn(1000).removeClass('hidden')
    }, 2200);

    window.setTimeout(function() {
        $('.index.hidden').slideDown(1000).removeClass('hidden')
    }, 2600);

});

