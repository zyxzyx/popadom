// Default JavaScript Functions and Initiations

// Setup WOW.js
var wow = new WOW({
    boxClass: 'content-block',
    animateClass: 'active',
    offset: 1,
    mobile: true,
    live: true
});
// Initiate WOW.js
wow.init();

// Load Custom Google Font
WebFont.load({
    google: {
        families: ['Open Sans:400,700', 'Yeseva One:400']
    }
});

var navMenu = $("#navigation-menu");
stickyCls = "navigation-sticky";
hdr = $('.header').height();
nm = $('#navigation-menu').height();
$(window).scroll(function() {
    if ($(this).scrollTop() > hdr) {
        navMenu.addClass(stickyCls);
        if($(".navigation-toggle-label").is(":visible") != true){
            $(".nav-text").show(500);
        }

        // 
    } else {
        navMenu.removeClass(stickyCls);
        $(".nav-text").hide();
    }
});
