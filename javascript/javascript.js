$(document).ready(function(){

    $('.section-hero__slider').slick({
            dots: true,
            infinite: true,
            fade: true,
            autoplay: true,
            cssEase: 'linear',
            autoplaySpeed: 5000,
            accessibility: false,
            pauseOnHover: false,
            lazyLoad: 'progressive',
            arrows: false,
            appendDots:$('#section-slider__dots'),
        });

    $('#section-slider__next').click(function() {
        $('.section-hero__slider').slick("slickNext");
    });

    $('#section-slider__prev').click(function() {
        $('.section-hero__slider').slick("slickPrev");
    });

    $('.section-client-say__slider-items').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        appendDots:$('.section-client-say__dots'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
           ]
    });
    $('.section-client-say__slider__btn-next').click(function() {
        $('.section-client-say__slider-items').slick("slickNext");
    });

    $('.section-client-say__slider__btn-prev').click(function() {
        $('.section-client-say__slider-items').slick("slickPrev");
    });

    var $container = $(".masonry-container");
  $container.imagesLoaded(function () {
    $container.masonry({
      columnWidth: ".item",
      itemSelector: ".item"
    });
  });
  $('.item').imagefill();

   var mydata = JSON.stringify(data);
console.log(mydata);


});

//var newData = JSON.stringify(userData)

