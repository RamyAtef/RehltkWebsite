$(function () {
    'use strict';
    $("body").niceScroll();

    $("body").niceScroll({
        cursorcolor: "aquamarine",
        cursorwidth: "16px"
    });


    // Adjust Slider Height
    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (upperH + navH));




    // ncie scroll code

    // Smoothly Scroll To Navbar
    $('.collapse .links-inHome').click(function (e) {
        e.preventDefault();
        $('html, body').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top

        }, 1000);
    });

    // Smoothly Scroll To btn-down

    $('.col .btn-down').click(function (e) {
        e.preventDefault();
        $('html, body').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top

        }, 1000);
    });


    // start scrollTop button

    // Caching The Scroll Top Element
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {

        if ($(this).scrollTop() >= 700) {

            scrollButton.show();

        } else {

            scrollButton.hide();
        }
    });

    // Click On Button To Scroll Top

    scrollButton.click(function () {

        $("html,body").animate({
            scrollTop: 0
        }, 600);

    });
    // start scrollTop button



    //   start loading page
    $(".loading-overlay .spinner").fadeOut(2000, function () {

        // Show The Scroll

        $("body").css("overflow", "auto");

        $(this).parent().fadeOut(2000, function () {

            $(this).remove();
        });
    });

    //    end loading page



});