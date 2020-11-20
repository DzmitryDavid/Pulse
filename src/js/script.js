$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        // adaptiveHeight: true,
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="/assets/img/carousel/left.png"></button>',

        nextArrow: '<button type="button" class="slick-next"><img src="/assets/img/carousel/right.png"></button>',
        // autoplay: true,
        // autoSpeed: 1500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }   
            }   
        ]
    });
    
});