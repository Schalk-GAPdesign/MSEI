jQuery(document).ready(function () {

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
    jQuery(".fancybox").fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        openSpeed: 0,
        closeSpeed: 0,
        helpers: {
            title: {
                type: 'inside'
            }
        }
    });
});
