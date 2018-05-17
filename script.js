/* global $ */

$(document).ready(function(){
    $('.loading-box-animation')
        .animate({left: 0}, 820)
        .delay(300)
        .animate({position: "absolute", left:"100vw"}, 900);

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if(scroll >= 50) {
            $(".logo").addClass("change");
        } else {
            $(".logo").removeClass("change");
        }
    });
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if(scroll >= 50) {
            $(".logo h6").addClass("txt-change");
        } else {
            $(".logo h6").removeClass("txt-change");
        }
    });
    $(window).scroll(function() {    

        /*
        var scroll = $(window).scrollTop();

        n number of case studies

        for each case study, determine the corresponding offset().top

        var study1TopPosition = $('.case-study-01').offset().top;
        var study1BottomPosition = study1TopPosition + $('.case-study-01').outerHeight()

        
        if (scroll >= study1TopPosition && scroll <= study1BottomPosition) {
            // do whatever you want to $('.case-study-01')
        } else if ...

        */

        var scroll = $(window).scrollTop();
        var study1TopPosition = $('.case-study-01').offset().top;
        var study1BottomPosition = study1TopPosition + $('.case-study-01').outerHeight();

        if (study1TopPosition === 0) {
            return;
        }

        if (scroll < study1TopPosition) {
            $(".current-index-number").addClass("hidden");
            $(".next-index-number").addClass("hidden");
            $(".scroll-text").show();
            $(".scroll-arrow").show();
            $(".current-index-number").fadeOut(1000);
        } else if(scroll >= study1TopPosition && scroll <= study1BottomPosition) {
            $(".current-index-number").removeClass("hidden");
            $(".scroll-text").hide();
            $(".scroll-arrow").hide();
            $(".next-index-number").removeClass("hidden");
            $(".current-index-number").fadeIn(1000);
        }
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
        $('.index.hidden').slideDown(800).removeClass('hidden')
    }, 2300);

    window.setTimeout(function() {
        $('.scroll-text.hidden').fadeIn(1000).removeClass('hidden')
        $('.scroll-arrow.hidden').fadeIn(1000).removeClass('hidden')
    }, 2600);

    window.setTimeout(function() {
        $('.case-study-section.hidden').fadeIn(1000).removeClass('hidden')

        // then wire up the onscroll listener
    }, 3000);

});