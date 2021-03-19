$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 3,
    });
    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        console.log(currentSlide);
    });
    $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        console.log(currentSlide);
    });

        // Обновление слайдера
    $('.slider').slick('setPosition');

        // Пролистывание слайдера
    $('.slider').slick('goTo', 3);
    
    $('link').click(function(event){
        $('.slider').slick('goTo', 3);
    });
});