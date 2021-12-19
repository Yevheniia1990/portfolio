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

// json news parse
   var items = JSON.parse(data);

   for (var i = 0; i <= items.length - 1; i++) {

       //values
       var item_img = items[i]['img-of-news'];
       var category = items[i]['category'];
       var title = items[i]['title'];
       var text = items[i]['text'];
       var link = items[i]['link'];

       //elements
       var elem = document.querySelector('.section-news-container');

       var main_elem = document.createElement("div");
       main_elem.className = "section-news-container__item";
       elem.append(main_elem);
       if (i % 2 == 1) {
            main_elem.className = "section-news-container__item section-news-container__item-rev";   
        }

       var container = document.createElement("div");
       container.className = 'container';
       main_elem.append(container);

       var row = document.createElement("div");
       row.className = 'row';
       container.append(row);

       var col_6 = document.createElement("div");
       col_6.className = 'col-6';
       row.append(col_6);

       var section_news_image = document.createElement("div");
       section_news_image.className = 'section-news-image';
       col_6.append(section_news_image);

       var image = document.createElement("img");
       image.className = 'image';
       section_news_image.append(image);
       image.src = item_img;

       var overlay = document.createElement("div");
       overlay.className = 'overlay';
       section_news_image.append(overlay);

       var more = document.createElement("a");
       more.className = 'text';
       overlay.append(more);
       more.innerText = 'leer más';
       more.href = link;



       var col_6_2 = document.createElement("div");
       col_6_2.className = 'col-6';
       row.append(col_6_2);

       var col_text = document.createElement("div");
       col_text.className = 'col-text';
       col_6_2.append(col_text);

       var section_news_text_h4 = document.createElement("div");
       section_news_text_h4.className = 'section-news-text-h4';
       col_text.append(section_news_text_h4);
       section_news_text_h4.innerText = category;

       var section_news_text_h3 = document.createElement("div");
       section_news_text_h3.className = 'section-news-text-h3';
       col_text.append(section_news_text_h3);
       section_news_text_h3.innerText = title;

       var section_news_line = document.createElement("hr");
       section_news_line.className = 'section-news-line';
       col_text.append(section_news_line);

       var section_news_text = document.createElement("p");
       section_news_text.className = 'section-news-text';
       col_text.append(section_news_text);
       section_news_text.innerText = text;

       var more2 = document.createElement("a");
       more2.className = 'button-border';
       col_text.append(more2);
       more2.innerText = 'leer más';
       more2.href = link;
   }
//end json news parse



});

//var newData = JSON.stringify(userData)

