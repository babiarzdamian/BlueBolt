$( document ).ready(function() {

    var url = $("#videoFrame").attr('src');
    // $("#videoFrame").attr('src', '');

    $("#videoModal").on('hide.bs.modal', function(){
        $("#videoFrame").attr('src', '');
    });

    $("#videoModal").on('show.bs.modal', function(){
        $("#videoFrame").attr('src', url);
    });

    $(function () {
        $(window).scroll(function () {
            var top_offset = $(window).scrollTop();
            if (top_offset == 0) {
                $('.navbar-fixed-top').removeClass('menu-bg');
            } else {
                $('.navbar-fixed-top').addClass('menu-bg');
            }
        })
    });

    function pauseVidBG() {
       var video = document.getElementById("video-bg");
       var button = document.getElementById("play");
       if (video.played) {
          video.pause();
       } else {
          video.play();
       }
    }

    function submitEmail() {

        var email = $('#emailText').val();

        jQuery.post('./php/send_news.php', {
            email: email
        },function(data){
            $('#submissionResponse').html(data);
        },html);

    }

    if($(window).width() <= 769) {
        $('.mobile-slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        })
    }
    $('.owl-secondary').owlCarousel({
        loop:true,
        nav:false,
        dots: true,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    var owl = $('.owl-secondary');
        owl.owlCarousel();
        // Go to the next item
        $('.customNextBtn').click(function() {
            owl.trigger('next.owl.carousel');
        })
        // Go to the previous item
        $('.customPrevBtn').click(function() {
            owl.trigger('prev.owl.carousel');
        })
    

    function pass_id(id){
        $('.slider-content').each(function () {
            var img = $(this).find('img');
            var img_src = img.attr('data-gif');
            img.attr('src','');
            if($(this).attr('data-id') == id){
                $(this).addClass('visible');
                img.attr('src', img_src);
            }
        })
    }
    $('.counter-div').click(function () {
        $('.slider-content').removeClass('visible');
        $('.counter-div').removeClass('active');
        $(this).addClass('active');
        var id = $(this).attr('data-id');
        // console.log(id);
        pass_id(id);
    })

    $('#menu-toggle').click(function () {
        $('#main-menu').toggleClass('hidden-xs');
    })

    $("#main-menu li").click(function() {
        var menu_id = $(this).attr('data-id');
        $('html, body').animate({
            scrollTop: $("#"+menu_id).offset().top - 150
        }, 1000);
    });

    $(".logo").click(function() {
        $('html, body').animate({
            scrollTop: $("#top").offset().top
        }, 1000);
    });
    $(".safety-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#safety-section").offset().top
        }, 1000);
    });
    $(".magenta-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#animation-section").offset().top
        }, 1000);
    });
    $(".contact-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact-section-title").offset().top
        }, 1000);
    });
    $(".first-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#howitworks-section-title").offset().top - 120
        }, 1000);
    });
    $(".second-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#administrator-section").offset().top - 150
        }, 1000);
    });
    $(".submit-btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#submissionResponse").offset().top
        }, 1000);
    });
    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top + 200;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
    };

    if($(window).width() >= 769) {

        /*jslint browser: true */
        /*global $ */

        (function () {
            'use strict';

            var invisibleClassName = 'fadeOutUpss',
                scrollWait = 40;

            function isInvisible(el) {
                var wh = $(window).height() - 300,
                    wt = $(window).scrollTop(),
                    eh = $(el).height() - 300,
                    et = $(el).offset().top;
                return ((wh + wt) <= et || wt >= (et + eh));
            }

            function checkVisibleAll(elements) {
                elements.each(function () {
                    $(this)[(isInvisible(this) ? 'add' : 'remove') + 'Class'](invisibleClassName);
                    if ($(this).hasClass('fadeOutUpss')) {
                        // $(this).find('.animated').removeClass('fadeInDown')
                        // $(this).find('.animated').addClass('fadeOutUp')
                    }else {
                        $(this).find('.animated').addClass('fadeInDown')
                        // $(this).find('.animated').removeClass('fadeOutUp')
                        // if($(this).attr('id') == 'section4'){
                        //     setTimeout(function () {
                        //         $('.active-first').trigger('click');
                        //     }, 1000);

                        // }
                    }
                });
            }

            $.fn.visible = function () {
                var elements = this,
                    scrollTimer = null;

                // Don't check too often
                function scrolled() {
                    clearTimeout(scrollTimer);
                    scrollTimer = setTimeout(function () {
                        checkVisibleAll(elements);
                    }, scrollWait);
                }

                // Onload
                checkVisibleAll(elements);

                $(window).bind("scroll resize", scrolled);
                return this;
            };
        }());

        $('.section').visible();
        //$('.sction:even').visible();

        $('.section').each(function () {


        })
        // setTimeout(function () {
        //     $('#section1 .white-btn').addClass('fadeInDown');
        // }, 400);
        // setTimeout(function () {
        //     $('#section1 .image-banner').addClass('fadeInDown');
        // }, 200);
        //$(window).on('resize scroll', function() {
        //     if ($('#section2').isInViewport()) {
         //        boolean1 = false;
         //        boolean2 = true;
         //        boolean3 = false;
         //        boolean4 = false;
         //        $('#section2 h2').addClass('fadeInDown');
         //        $('#section2 .item').each(function (i) {
         //            var el = $(this);
         //            setTimeout(function () {
         //                el.addClass('fadeInDown');
         //            }, 200 * i);
         //        })
         //    }
         //   if ($('#section3').isInViewport()) {
         //       $('#section3 img').addClass('fadeInDown');
         //        setTimeout(function () {
         //            $('#section3 .text-wrapper-animation').addClass('fadeInDown');
         //        }, 500);
         //        setTimeout(function () {
         //            $('#section3 .text-wrapper-animation .blue-btn').addClass('fadeInDown');
         //        }, 800);
         //    }
         //    if ($('#section4').isInViewport()) {
         //        boolean1 = false;
         //        boolean2 = false;
         //        boolean3 = false;
         //        boolean4 = true;
         //        $('#section4 h2').addClass('fadeInDown');
         //        $('#section4 .counter-div').each(function (i) {
         //            var el = $(this);
         //            setTimeout(function () {
         //                el.addClass('fadeInDown');
         //            }, 200 * i);
         //        })
         //        setTimeout(function () {
         //            $('#section4 .active-first').addClass('active');
         //        }, 800);
         //        setTimeout(function () {
         //            $('#section4 .slider-content').addClass('fadeInDown');
         //        }, 1000);
         //    }

        //})
    }

});