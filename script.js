// banner 
const headPhoto = document.querySelector('.headphoto');
const banerText1 = document.querySelector('.banertext h1');
const banerText2 = document.querySelector('.banertext p');

const candleImages = ['img/tlo.min.png', 'img/tlo2.jpg', 'img/tlo3.jpg'];
const candleHeadname = ['super świetne świeczki','swieczki boli jak sie pala','pal swieczki jak blanta'];
const candleArticle = ['swieczki super i na kazda okazje. seksik bibka i takie tam',' to prawda. madrzy ludzie','dokladnie tak ziomus'];

let activeElement = 0;

function changeElement () {
    activeElement++;
    if (activeElement == candleImages.length) {
    activeElement = 0;
    }
    headPhoto.src = candleImages[activeElement];
    banerText1.textContent = candleHeadname[activeElement];
    banerText2.textContent = candleArticle[activeElement];
}

setInterval(changeElement, 5000);

// burger

$('.burger').on('click', function(){
    $('nav').toggleClass('active');
})

//scrollOnSection

$('.menu li a').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
     scrollTop: $(goToSection).offset().top
    })
   });

//    efekty scrolla na s1


$(document).on('scroll',function(){
    
    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop()

    const $art1 = $('.data1');
    const art1FromTop = $art1.offset().top
    const art1Height = $art1.outerHeight()

    const $img2 = $('.image2');
    const img2FromTop = $img2.offset().top
    const img2Height = $img2.outerHeight()

    const $art2 = $('.data2');
    const art2FromTop = $art2.offset().top
    const art2Height = $art2.outerHeight()

    const $img1 = $('.image1');
    const img1FromTop = $img1.offset().top
    const img1Height = $img1.outerHeight()

    if (scrollValue > art1FromTop + art1Height - windowHeight) {
        $art1.addClass('active');
      }
    
      if (scrollValue > art2FromTop + art2Height - windowHeight) {
        $art2.addClass('active');
      }
    
      if (scrollValue > img1FromTop + img1Height - windowHeight) {
        $img1.addClass('active');
      }
      if (scrollValue > img2FromTop + img2Height - windowHeight) {
        $img2.addClass('active');
      }

      if (scrollValue < 100) {
        $('.more div').removeClass('active');
      }
})

