// Code Scripts

jQuery(function () {

    // Scroll

    $("a.scroll").on('click', function (event) {

        var hash = this.hash;

        $('html,body').animate({ scrollTop: $(hash).offset().top }, 800, function () { })

    });

    // Aminate aos
    AOS.init();

});









