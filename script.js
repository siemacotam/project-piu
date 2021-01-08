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

setInterval(changeElement, 3000);

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
   })