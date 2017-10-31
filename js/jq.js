/*global $, window*/
///reference path = "jq/../typings/index.d.ts" / >
$(function () {
    'use strict';
    // adjust header height:
    var hei = $(window).height(),
        myHeader = $('.header'),
        mySlider = $('.slider');
    myHeader.height(hei);
    $(window).on('resize', function () {
        myHeader.height(hei);
        //Adjust Bxslider list item center :
        mySlider.each(function () {
            $(this).css('paddingTop', (hei - $('.slider li').height()) / 2);
        });
    });

    // Navbar link active :
    $('.links li a').on("click", function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    // Initialize the slider :
    mySlider.bxSlider({
        pager: false,
        keyboardEnabled: true,

    });

    // Adjust Bxslider list item center :
    mySlider.each(function () {
        $(this).css('paddingTop', (hei - $('.slider li').height()) / 2);
    });
    // smooth scroll  :
    $('.links li a').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });

    // when hover over an item from our services icon:

    //auto slider of clients:
    (function autoClients() {
        $('.clients .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoClients();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.clients div').eq(0).addClass('active').fadeIn();
                    autoClients();
                });
            }

        });
    }());
  
    // add class active to the clicked shuffle:
    $('.controls li').on('click', function () {
        $(this).addClass('selected').siblings().removeClass('selected');
    });
    // nice scroll:
    $('html').niceScroll({
        cursorcolor: '#1abc9c',
        cursorwidth: '8px',
        cursorborder: 'none'
    });

});