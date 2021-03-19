$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'linear',
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        // autoplaySpeed: 1000,
        // pauseOnFocus: true,
        // pauseOnHover: true,
        // pauseOnDotsHover: true,

        // свайп на компьютере
        draggable: true,   
        // свайп на мобильных устройствах
        swipe: true,   
        // момент срабатывания слайда при свайпе
        touchThreshold: 10,
        // передвижение при свайпе 
        touchMove: true,
        // скорость перемещения слайдов при помощи стрелок
        waitForAnimate: false,
        centerMode: false,
        variableWidth: false,
        rows: 1,
        sliderPerRow: 1,
        vertical: false,
        verticalSwiping: false,
        // Привязка слайдера к другому слайдеру.
        asNavFor: ".slider-big",
        responsive: [
            {
                breakpoin: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoin: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
        mobileFirst: false,
        appendArrows: $('.content'),
        appendDots: $('.content')
    });
    $('.slider-big').slick({
        arrows: false,
        fade: true,
        // Привязка слайдера к другому слайдеру.
        asNavFor: ".slider",
    });
});