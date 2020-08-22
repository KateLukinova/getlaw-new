$(document).ready(function () {

    AOS.init({
        duration: 1300,
    });

    new WOW().init();

    $('.button__dropdown').click(function(){
        $('.link-box').toggleClass('show')
    });

    $('.link-box__item').click(function () {
        $('.link-box').removeClass('show')
    })

    $("nav ul li").click(function() {
        $("li").removeClass("active");
        $(this).addClass("active");
    });


    var currentSlide = 0;
    var currentSection = 0;
    $('#fullpage').fullpage({
        sectionSelector: '.vertical-scrolling',
        slideSelector: '.horizontal-scrolling',
        navigation: true,
        slidesNavigation: true,
        slidesNavPosition: 'top',
        controlArrows: false,
        anchors: ['section1', 'section2', 'section3'],
        menu: '#menu',

        afterRender: function(){
            currentSection = getSection();
            currentSlide = getSlide();
        }

    });

    // var scrolledPixels = 0;
    $('html').bind('wheel', function (e) {
        // scrolledPixels += Math.abs(e.originalEvent.deltaY);

        // if (scrolledPixels >= 500) {
            scrolledPixels = 0;
            // scroll direction
            if (e.originalEvent.deltaY < 0) {
                // is previous slide
                if ($('.fp-section.active').find('.fp-slide.active').prev('.fp-slide').length) {
                    $.fn.fullpage.moveTo('section' + currentSection, currentSlide - 1);
                    currentSlide--;
                } else {
                    currentSlide = $('#page' + currentSection - 1).find('.fp-slide').length - 1;
                    if (currentSection > 1) {
                        currentSection--;
                        $.fn.fullpage.moveTo('section' + (currentSection + 1), currentSlide);
                    }
                }
            }
            else if (e.originalEvent.deltaY > 0) {
                // is next slide
                if ($('.fp-section.active').find('.fp-slide.active').next('.fp-slide').length) {
                    $.fn.fullpage.moveTo('section' + currentSection, currentSlide + 1);
                    currentSlide++;
                } else {
                    if (currentSection < 2) {
                        currentSection++;
                    }
                    $.fn.fullpage.moveTo('section' + (currentSection), 0);
                    currentSlide = 0;
                }
            }
        // }
    });

    $('#menu1').click(function(){
        currentSlide = 0;
        currentSection = 1;
    });

    $('#menu2').click(function(){
        currentSlide = 0;
        currentSection = 2;
    });

    $('#menu3').click(function(){
        currentSlide = 0;
        currentSection = 3;
    });

    $('#menu4').click(function(){
        currentSlide = 0;
        currentSection = 4;
    });

    //tabs

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    })

    function getSection() {
        return parseInt($('.fp-section.active').first().attr('id').replace(/page/g,''));
    }

    function getSlide() {
        return $('.fp-section.active').find('.fp-slide.active').index();
    }
});






