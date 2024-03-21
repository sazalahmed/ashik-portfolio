$(function () {

    "use strict";

    var navoff = $('.main_menu').offset().top;
    $(window).on("scroll", function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('.main_menu').addClass('sticky_menu');
        } else {
            $('.main_menu').removeClass('sticky_menu');
        }
    });

















});
