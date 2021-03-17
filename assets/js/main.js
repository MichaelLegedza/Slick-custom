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
        waitForAnimate: true,
        centerMode: false,
        variableWidth: true,
    });
});