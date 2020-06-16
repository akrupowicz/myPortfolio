// Animacja struktura HTML w JQ
$('.main').on('click', function () {
    $('html, body').animate({
        scrollTop: $('.s1').offset().top
    }, 700)
    ico.classList.toggle('active');
    nav.classList.toggle('on');
})
$('.me').on('click', function () {
    $('html, body').animate({
        scrollTop: $('.s2').offset().top
    }, 800)
    ico.classList.toggle('active');
    nav.classList.toggle('on');
})
$('.btn').on('click', function () {
    $('html, body').animate({
        scrollTop: $('.s2').offset().top
    }, 1000)

})
$('.portfolio').on('click', function () {
    $('html, body').animate({
        scrollTop: $('.s3').offset().top
    }, 900)
    ico.classList.toggle('active');
    nav.classList.toggle('on');
})
$('.contact').on('click', function () {
    $('html, body').animate({
        scrollTop: $('.s4').offset().top
    }, 1000)
    ico.classList.toggle('active');
    nav.classList.toggle('on');
})



// Nav i Header JQ

const $doc = $(document);
const $nav = $('.menu');
const $header = $('.jumbo');
const $main = $('.about');


$doc.on('scroll', function () {
    const scrollPos = $doc.scrollTop();

    const sectionOffset = $main.offset().top;

    const headerHeight = $header.outerHeight();

    $header.css({
        'opacity': 1.2 - scrollPos / headerHeight,
        'filter': 'grayscale(' + 2 * scrollPos / headerHeight + ')'
    })

    if ($(window).scrollTop() > 150 && $(window).width() > 1024) {
        $nav.addClass('menuScroll');
    } else {
        $nav.removeClass('menuScroll');
    }


})

// Sekcja O mnie JQ
$doc.on('scroll', function () {

    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();

    const $art1 = $('.art1');
    const art1FromTop = $art1.offset().top;
    const art1Height = $art1.outerHeight();

    const $art2 = $('.art2');
    const art2FromTop = $art2.offset().top;
    const art2Height = $art2.outerHeight();

    const $art3 = $('.art3');
    const art3FromTop = $art3.offset().top;
    const art3Height = $art3.outerHeight();

    if (scrollValue > art1FromTop + art1Height - windowHeight) {
        $art1.addClass('active');
    }

    if (scrollValue > art2FromTop + art2Height - windowHeight) {
        $art2.addClass('active');
    }

    if (scrollValue > art3FromTop + art3Height - windowHeight) {
        $art3.addClass('active');
    }

    if (scrollValue < 100) {
        $('article').removeClass('active');
    }
})