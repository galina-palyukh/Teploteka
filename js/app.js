

function openNav() {
    document.getElementById("mobile-nav").style.width = "300px";
    $('.mob_menu_bg').addClass('show');
}


function closeNav() {
    document.getElementById("mobile-nav").style.width = "0";
    $('.mob_menu_bg').removeClass('show');
    document.html.style.backgroundColor = "white";
}

//
// $(function(){
//     $('.submenu__static-nav__item').on('click', function(){
//         // $('.accordion .active').removeClass('active');
//         if ($(this).parent().hasClass('active')) {
//             $(this).parent().removeClass('active').
//             find('.wrapper-sub2menu').slideUp(600);
//         } else {
//             $('.static-nav__item .active').removeClass('active').
//             find('.wrapper-sub2menu').slideUp(600);;
//             $(this).parent().addClass('active').
//             find('.wrapper-sub2menu').slideDown(600);
//         }
//     });
// });

$('.carousel-banner1').slick(
    {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        speed: 100,
        autoplaySpeed: 3000000
    }
);
$('.carousel-banner2').slick(
    {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        speed: 350,
        autoplaySpeed: 5000000
    }
);
$('.carousel-banner3').slick(
    {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        speed: 350,
        autoplaySpeed: 8000000
    }
);

$('.goods-slider__top').slick(
    {
        dots:false,
        // vertical: true,
        slidesToShow: 3,
        autoplaySpeed: 600000000,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: "<div class='portfolio-arrow portfolio-arrow--prev'></div>",
        nextArrow: "<div class='portfolio-arrow portfolio-arrow--next'></div>",
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

    }
);

$('.priсe_slider-wrapper').slick(
    {
        dots:false,
        vertical: true,
        slidesToShow: 3,
        autoplaySpeed: 300000000,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: "<div class='portfolio-arrow portfolio-arrow--prev'></div>",
        nextArrow: "<div class='portfolio-arrow portfolio-arrow--next'></div>",

    }
);


var toggleActive = function(){

    if ($(window).width() < 850) {
        $('.static-nav__item').first().removeClass('active');
    } else {
        $('.static-nav__item').first().addClass('active');
    }
};





$(window).on('resize', toggleActive);

$( document ).ready (toggleActive);



