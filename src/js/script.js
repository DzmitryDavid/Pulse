$(document).ready(function() {
    $('.carousel__inner').slick({
        infinite: true,
        // adaptiveHeight: true,
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="./assets/img/carousel/left.png"></button>',

        nextArrow: '<button type="button" class="slick-next"><img src="./assets/img/carousel/right.png"></button>',
        // autoplay: true,
        // autoSpeed: 1500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    // dots: true
                }   
            }   
        ]
    });
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab-active)', function() {
        $(this)
        .addClass('catalog__tab-active').siblings().removeClass(' catalog__tab-active')
        .closest('div.container').find('div.catalog__content').
        removeClass('catalog__content-active')
        .eq($(this).index()).addClass('catalog__content-active');
    });

    
    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content-active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list-active');
            })
        })
    }
    
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

//Modal

    $('[data-modal=consultation]').on('click', () => {
        $('.overlay, #consultation').fadeIn('slow');
    }); 
    $('.modal__close').on('click', () => {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    

    $('.button__mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('#order, .overlay').fadeIn('slow');
        })
    });

    function validateForm(form) {
        $(form).validate({
            rules: {
                name: {
                    minlength: 2,
                    required: true
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                } 
            },
            messages: {
                name: {
                    required: "Пожалуйста введите своё имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста введите почту",
                    email: "Неправильно введен адрес почты" 
                }
            }
        });
    }
    validateForm('#consultation-form');
    validateForm('#consultation form');
    validateForm('#order form');

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type:"POST",    
            url: "./assets/mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow'); 


            $('form').trigger('reset');
        });
        return false
    });
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href='#up']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"0px"});
        return false;
}); 

    new WOW().init();
});
 


