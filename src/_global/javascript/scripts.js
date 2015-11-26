jQuery('.M__mainNavsearch-container').click(function () {
    jQuery('.is-activated').removeClass('is-activated');
    jQuery(this).addClass('is-activated');
    jQuery('#__menuSearch-main').addClass('is-activated');

});


jQuery('.O__mainNavList-item--magazine').click(function () {
    jQuery('.is-activated').removeClass('is-activated');
    jQuery(this).find('.M__mainNavButton-main').addClass('is-activated');
    jQuery('#__menuMagazine-main').addClass('is-activated');
});


jQuery('.O__mainNavList-item--magazine').find('.M__mainNavButton-main');


$(document).ready(function () {
    $(".fancybox").fancybox({
        openEffect: 'fade',
        /* none, fade, elastic */
        closeEffect: 'fade',
        openSpeed: 0,
        /* ms, "slow", "normal", "fast"*/
        closeSpeed: 0,
        /* mouseWheel : false,*/
        helpers: {
            /*title : null */
            title: {
                type: 'inside' /* 'float', 'inside', 'outside', 'over', 'null' */
            }
        }
    });
});

