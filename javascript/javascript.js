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
    $('#section-slider__next').click(function() {
        $('.section-client-say__slider-items').slick("slickNext");
    });

    $('#section-slider__prev').click(function() {
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
});


 

/*
function cargarmapa() {
  var punto = new google.maps.LatLng(
    41.129220338983,
    -3.23365432098762
    );
  var opciones = {
    zoom: 6,
    center: punto,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var m=new google.maps.Map(document.getElementById("mapa"),
    opciones);
}*/


