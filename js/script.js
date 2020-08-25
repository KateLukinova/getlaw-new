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
        anchors: ['section1', 'section2', 'section3','section4', 'section5', 'section6', 'section7'],
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
                    if (currentSection < 7) {
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

    $('#menu5').click(function(){
        currentSlide = 0;
        currentSection = 5;
    });

    $('#menu6').click(function(){
        currentSlide = 0;
        currentSection = 6;
    });

    $('#menu7').click(function(){
        currentSlide = 0;
        currentSection = 7;
    });

    //tabs

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    })

    // Accordion
    if( $(".toggle .toggle-title").hasClass('active') ){
        $(".toggle .toggle-title.active").closest('.toggle').find('.toggle-inner').show();
    }
    $(".toggle .toggle-title").click(function(){
        if( $(this).hasClass('active') ){
            $(this).removeClass("active").closest('.toggle').removeClass('show').find('.toggle-inner').slideUp(500);
        }
        else{	$(this).addClass("active").closest('.toggle').addClass('show').find('.toggle-inner').slideDown(500);
        }
    });


    //input range
    var _R = document.querySelector('#rangeInput[type=range]');

    document.documentElement.classList.add('js');

    _R.addEventListener('input', function (e) {
        _R.style.setProperty('--val', +_R.value);
    }, false);

    //input range2
    var _R2 = document.querySelector('#rangeInput2[type=range]');

    document.documentElement.classList.add('js2');

    _R2.addEventListener('input', function (e) {
        _R2.style.setProperty('--val2', +_R2.value);
    }, false);

    //input range3
    var _R3 = document.querySelector('#rangeInput3[type=range]');

    document.documentElement.classList.add('js3');

    _R3.addEventListener('input', function (e) {
        _R3.style.setProperty('--val3', +_R3.value);
    }, false);

    //input range4
    var _R4 = document.querySelector('#rangeInput4[type=range]');

    document.documentElement.classList.add('js4');

    _R4.addEventListener('input', function (e) {
        _R4.style.setProperty('--val4', +_R4.value);
    }, false);


    function getSection() {
        return parseInt($('.fp-section.active').first().attr('id').replace(/page/g,''));
    }

    function getSlide() {
        return $('.fp-section.active').find('.fp-slide.active').index();
    }
});







