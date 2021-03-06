$(document).ready(function () {

    AOS.init({
        duration: 1300,
    });

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

    //main-carousel

    $('.carousel-doc').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        focusOnSelect: true,
        loop: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    infinite: true
                }
            }
        ]
    });
    $(".button-prev").click(function () {
        $('.carousel-doc').slick('slickPrev');
    });
    $(".button-next").click(function () {
        $('.carousel-doc').slick('slickNext');
    });

    //pages-carousel

    $('.pages-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        arrows: false,
        asNavFor: '.pages-nav'
    });
    $('.pages-nav').slick({
        asNavFor: '.pages-carousel',
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        vertical: true
    });
    $(".page-button-prev").click(function () {
        $('.pages-carousel').slick('slickPrev');
        $('.pages-nav').slick('slickPrev');
    });
    $(".page-button-next").click(function () {
        $('.pages-carousel').slick('slickNext');
        $('.pages-nav').slick('slickNext');
    });

    //show search

    $( ".img-search-button" ).click(function() {
        $(this).siblings('.search-result').addClass('show').parent().css('height', '600px');
    });

    //show modal

    $( ".login-button" ).click(function() {
        $('.modal').addClass('show');
    });

    //hide modal

    $( ".modal-close" ).click(function() {
        $('.modal').removeClass('show');
    });

    //show recovery button

    $( "#recovery-button" ).click(function() {
        $('.enter-wrap').css('display', 'none');
        $('.recovery-password').css('display', 'block');
    });

    //show menu mobile

    $( ".menu-icon" ).click(function() {
        $('nav').addClass('show');
    });

    //hide menu mobile

    $( ".nav__item" ).click(function() {
        $('nav').removeClass('show');
    });

    $( ".close-menu" ).click(function() {
        $('nav').removeClass('show');
    });

    //show sidebar mobile

    $( ".sidebar-button" ).click(function() {
        $(this).toggleClass('active')
        $('.them-sidebar').toggleClass('show');
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





    document.addEventListener("wheel", nullWheelHandler, { passive: false });
    document.addEventListener("wheel", wheelHandler);


    var currentSlide = 0;
    var currentSection = 0;
    $('#fullpage').fullpage(fullPageSettings());

    // console.log('section = ' + currentSection)
    // console.log('slide = ' + currentSlide)

    $.fn.fullpage.setAutoScrolling(false);

    var scrolledPixels = 0;


    function getSection() {
        return parseInt($('.fp-section.active').first().attr('id').replace(/page/g,''));
    }

    function getSlide() {
        return $('.fp-section.active').find('.fp-slide.active').index();
    }

    function setActiveMenu() {
        $('#menu li').removeClass('active');
        $('#menu li').eq(currentSection - 1).addClass('active');
    }

    function getSectionAndSlide() {
        if (window.location.href.indexOf('#') > -1) {
            var sectionAndSlideStr = window.location.href.substring(window.location.href.lastIndexOf('#') + 1);

            if (sectionAndSlideStr.indexOf('/') > -1) {
                currentSlide = parseInt(sectionAndSlideStr.substring(sectionAndSlideStr.lastIndexOf('/') + 1));
                currentSection = parseInt(sectionAndSlideStr.substr(0, sectionAndSlideStr.indexOf('/')).replace('page',''));
            } else {
                currentSection = parseInt(sectionAndSlideStr.replace('page',''));
                currentSlide = 0;
            }
        } else {
            currentSection = 1;
        }

        console.log(currentSection)
        console.log(currentSlide)
    }

    function wheelHandler(e) {
        // e.preventDefault();
        getSectionAndSlide();

        scrolledPixels += Math.abs(e.wheelDeltaY);
        console.log(scrolledPixels)

        if (scrolledPixels >= 1000) {
            scrolledPixels = 0;

            // document.removeEventListener("wheel", wheelHandler);

            // debugger
            // scroll direction
            if (e.wheelDeltaY > 0) {
                // is previous slide
                if ($('.fp-section.active').find('.fp-slide.active').prev('.fp-slide').length) {
                    $.fn.fullpage.moveTo('page' + currentSection, currentSlide - 1);
                    currentSlide--;
                } else {
                    // currentSlide = $('#page' + currentSection - 1).find('.fp-slide').length - 1;
                    if (currentSection > 1) {
                        currentSection--;
                        currentSlide = $("section[data-anchor='page" + currentSection + "']").find('.horizontal-scrolling').length - 1;
                        // $("#menu" + currentSection).trigger('click');
                        $.fn.fullpage.setScrollingSpeed(0);
                        // $.fn.fullpage.destroy('all');
                        // $('#fullpage').fullpage(fullPageSettings());
                        // $.fn.fullpage.setAutoScrolling(true);
                        // $("html, body").animate({scrollTop: 500});
                        $.fn.fullpage.moveTo('page' + (currentSection), currentSlide);
                        // $.fn.fullpage.setAutoScrolling(false);

                        $.fn.fullpage.setScrollingSpeed(770);
                    }
                }
            } else if (e.wheelDeltaY < 0) {
                // is next slide
                if ($('.fp-section.active').find('.fp-slide.active').next('.fp-slide').length) {
                    $.fn.fullpage.moveTo('page' + currentSection, currentSlide + 1);
                    currentSlide++;
                } else {
                    if (currentSection < 7) {
                        currentSection++;
                    }
                    // debugger
                    // var sadf = 'section' + currentSection;
                    $.fn.fullpage.setScrollingSpeed(0);
                    // $.fn.fullpage.destroy('all');
                    // $.fn.fullpage.setAutoScrolling(true);
                    // $("html, body").animate({scrollTop: 500});

                    // $('#fullpage').fullpage(fullPageSettings());
                    $.fn.fullpage.moveTo('page' + (currentSection));
                    // $.fn.fullpage.setAutoScrolling(false);

                    $.fn.fullpage.setScrollingSpeed(770);
                    // $("#menu" + currentSection).trigger('click');
                    currentSlide = 0;
                }
            }
            setActiveMenu();
            // $.fn.fullpage.setAutoScrolling(false);
        }
    }

    function nullWheelHandler(e) {
        e.preventDefault();
    }

    function fullPageSettings() {
        return {
            sectionSelector: '.vertical-scrolling',
            slideSelector: '.horizontal-scrolling',
            navigation: true,
            slidesNavigation: true,
            slidesNavPosition: 'top',
            controlArrows: false,
            anchors: ['page1', 'page2', 'page3','page4', 'page5', 'page6', 'page7'],
            menu: '#menu',

            afterRender: function() {
                // currentSection = getSection();
                // currentSlide = getSlide();
                getSectionAndSlide();
                setActiveMenu();
            },

            afterSlideLoad: function () {
                console.log('asdf')
                // document.addEventListener("wheel", wheelHandler);
                getSectionAndSlide();
            }

            // afterLoad: function

        };
    }

    AOS.init({
        duration: 1000,
        disable: 'mobile'
    })
});






