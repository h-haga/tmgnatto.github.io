(function() {
    // if (window.hljs) {
    //     hljs.configure({
    //         tabReplace: '    '
    //     });
    //     hljs.initHighlightingOnLoad();
    // }
    var swiperBack2 = new Swiper('.main-swiper-back-2', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 100,
        onlyExternal: true,
        effect: 'coverflow',
        direction: 'vertical',
        speed: 600,
        coverflow: {
            slideShadows: false
        }
    });
    var swiperBack1 = new Swiper('.main-swiper-back-1', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 300,
        effect: 'coverflow',
        speed: 600,
        coverflow: {
            slideShadows: false
        }
    });
    var swiperFront = new Swiper('.main-swiper-front', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 100,
        effect: 'coverflow',
        speed: 600,
        coverflow: {
            slideShadows: false
        },
        pagination: '.main-swiper-front .swiper-pagination',
        paginationClickable: true,
        nextButton: '.main-swiper-front .swiper-button-next',
        prevButton: '.main-swiper-front .swiper-button-prev',
        control: [swiperBack1, swiperBack2],
        controlBy: 'container',
        keyboardControl: true,
        a11y: true,
        onSlideChangeStart: function(s) {
            if (s.activeIndex === $('.swiper-slide-gallery').index()) {
                $(s.container[0]).find('.swiper-pagination').hide();
            } else {
                $(s.container[0]).find('.swiper-pagination').show();
            }
        }
    });
    // var galleryTopSwiper = new Swiper('.swiper-gallery-top', {
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //     nested: true,
    //     resistanceRatio: 0,
    //     preloadImages: false,
    //     lazyLoading: true,
    // });
    // var galleryThumbsSwiper = new Swiper('.swiper-gallery-thumbs', {
    //     slidesPerView: 5,
    //     spaceBetween: 10,
    //     centeredSlides: true,
    //     touchRatio: 0.2,
    //     slideToClickedSlide: true,
    //     nested: true,
    //     resistanceRatio: 0,
    // });
    // galleryTopSwiper.params.control = galleryThumbsSwiper;
    // galleryThumbsSwiper.params.control = galleryTopSwiper;
})();