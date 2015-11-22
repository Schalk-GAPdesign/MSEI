jQuery('.M__mainNavsearch-container').click(function() {
    jQuery(this).addClass('is-activated')
    jQuery('#__menuSearch-main').addClass('is-activated')
    jQuery('#__secondaryNav-main').removeClass('is-activated')
    jQuery('#__menuMagazine-main').removeClass('is-activated')
    jQuery('.O__mainNavList-item--magazine').find('.M__mainNavButton-main').removeClass('is-activated')
});


jQuery('.O__mainNavList-item--magazine').click(function() {
    jQuery(this).find('.M__mainNavButton-main').addClass('is-activated')
    jQuery('#__menuMagazine-main').addClass('is-activated')
    jQuery('#__secondaryNav-main').removeClass('is-activated')
    jQuery('#__menuSearch-main').removeClass('is-activated')
    jQuery('.M__mainNavsearch-container').removeClass('is-activated')
    
    
   
});
jQuery('.O__mainNavList-item--magazine').find('.M__mainNavButton-main')
//# sourceMappingURL=scripts.js.map