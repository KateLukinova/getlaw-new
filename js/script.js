$(document).ready(function () {

    $('.button__dropdown').click(function(){
        $('.link-box').toggleClass('show')
    });

    $('.link-box__item').click(function () {
        $('.link-box').removeClass('show')
    })

    //main screen carousel

    var current_pos;

    $('.main-carousel').owlCarousel({
        items: 1,
        mouseDrag: false,
        touchDrag: false,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        navText: ['', ''],
        dots: true,
        onInitialized: function(e) {
            current_pos = e.item.index;

        },
        onTranslate: function(e) {
            var direction = e.item.index > current_pos? 1 : 0,
                indicator_c = direction? 'next' : 'prev',
                $dots = $(e.currentTarget).find('.owl-dots'),
                $current_dot = $dots.children().eq(current_pos);

            $current_dot.html('<div class="dot-indicator '+ indicator_c +'">');

            current_pos = e.item.index;

            setTimeout(function() {
                $current_dot.html('');
            }, 200);
        }
    });

});




