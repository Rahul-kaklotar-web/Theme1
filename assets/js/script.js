/*
	---------------------------------------------------------------------

    Template Name: Digibiz
    Template Description: Digibiz - HTML Template
    Version: 1.0
    Template Author: Rahul Kaklotar

    ---------------------------------------------------------------------

    JS INDEX
    ================
	1. Scroll Navbar
	2. Menu On Hover
	3. Preloader
    4. Back To Top
    5. projects section swiper
    6. Testimonials section swiper1
    7. accordian (about page)
    8. Project-1 Lightbox (projects Page)
    9. Project-1 Isotope and Filter (projects Page)

 */

(function($) {
    "use strict";

    // 1.Scroll Navbar

    $(function() {
        var header = $(".start-style");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 10) {
                header.removeClass('start-style').addClass("scroll-on");
            } else {
                header.removeClass("scroll-on").addClass('start-style');
            }
        });
    });

    // 2. Menu On Hover
    $('body').on('mouseenter mouseleave', '.nav-item', function(e) {
        if ($(window).width() > 991) {
            var _d = $(e.target).closest('.nav-item');
            _d.addClass('show');
            setTimeout(function() {
                _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
            }, 1);
        }
    });

    // 3. Preloader
    $(window).on('load', function() {
        if ($('#preloader').length) {
            $('#preloader').delay(500).fadeOut('slow', function() {
                $(this).remove();
            });
        }
    });

    // 4. Back To Top
    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        $('#back-to-top').click(function() {
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
    });

    // 5. projects section swiper
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        effect: "slide",
        autoplay: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
        }
    });

    // 6. Testimonials section swiper1
    var swiper = new Swiper('.swiper-container1', {
        loop: true,
        spaceBetween: 50,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewheel: true,
        effect: "fade",
        keyboard: true,
        autoplay: true,

    });
    // 7. accordian (about page)
    $(".business-solution #accordion").on("hide.bs.collapse show.bs.collapse", e => {
        $(e.target)
            .prev()
            .find("i:last-child")
            .toggleClass("bx-caret-up bx-caret-down");
    });
    // 8. Project Lightbox (projects Page) 
    const portfolioLightbox = GLightbox({
        selector: '.glightbox'
    });
    // 9. Porfolio Isotope and Filter (projects Page)
    $(window).on('load', function() {
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item'
        });

        $('#portfolio-flters li').on('click', function() {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            portfolioIsotope.isotope({
                filter: $(this).data('filter')
            });
        });
    });
})(jQuery);