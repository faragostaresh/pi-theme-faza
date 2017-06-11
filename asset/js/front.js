(function ($) {
    //Fix navbar multiple level
    var navbar = $('.pi-navbar-nav');
    var hasBrand = navbar.parents('.navbar').find('.navbar-brand').length;
    navbar.find('>li').each(function () {
        var $this = $(this);
        var caretStr = '<span class="pi-navbar-caret"></span>';
        caretStr += '<span class="pi-navbar-caret pi-navbar-caret-outer"></span>';
        if ($this.find('li').length) {
            $this.append(caretStr);
        }
    });
    navbar.find('ul').addClass('dropdown-menu');

    if (!hasBrand) {
        navbar.css('marginLeft', '-15px');
    }
})(jQuery)

/* $(document).ready(function() {
    var stickyNavTop = $('.pi-header-user').offset().top;
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) {
            $('.pi-header-user').addClass('sticky');
        } else {
            $('.pi-header-user').removeClass('sticky');
        }
    };
    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });
}); */