

function openNav() {
    document.getElementById("mobile-nav").style.width = "300px";
    $('.mob_menu_bg').addClass('show');
}


function closeNav() {
    document.getElementById("mobile-nav").style.width = "0";
    $('.mob_menu_bg').removeClass('show');
    document.html.style.backgroundColor = "white";
}


$('.carousel-banner1').slick(
    {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 300000000
    }
);
$('.carousel-banner2').slick(
    {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 50000000
    }
);
$('.carousel-banner3').slick(
    {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 600000000
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

$(function(){
    $('.accordion__title').on('click', function(){
        // $('.accordion .active').removeClass('active');
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active').
            find('.accordion__content').slideUp(200);
        } else {
            $('.accordion .active').removeClass('active').
            find('.accordion__content').slideUp(200);;
            $(this).parent().addClass('active').
            find('.accordion__content').slideDown(200);
        }
    });
});