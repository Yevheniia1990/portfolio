$(document).ready(function(){

     var $container = $(".masonry-container");
  $container.imagesLoaded(function () {
    $container.masonry({
      columnWidth: ".item",
      itemSelector: ".item"
    });
  });
  $('.item').imagefill();

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

/*//masonry
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: 364
    });
});*/

/*$(document).load(function() {
  var $container = $(".masonry-container");
  $container.imagesLoaded(function () {
    $container.masonry({
      columnWidth: ".grid-sizer",
      itemSelector: ".item"
    });
  });*/
});


/*$('.carousel').carousel({
  interval: 1000,
  keyboard: true,
  ride: false,
  wrap: true,
})


$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: 364
});

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

