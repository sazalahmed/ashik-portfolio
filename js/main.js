$(function () {

    "use strict";


    // Menu fix js
    var navoff = $('.main_menu').offset().top;
    $(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('.main_menu').addClass('sticky_menu');
        } else {
            $('.main_menu').removeClass('sticky_menu');
        }
    });




    // Testimonial Slider
    $('.testi_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        // variableWidth: true,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });












});
