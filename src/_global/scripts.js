

    /////////

jQuery('.M__mainNavsearch-container').click(function() {
    jQuery(this).addClass('is-activated');
    jQuery('#__menuSearch-main').addClass('is-activated');
    jQuery('#__secondaryNav-main').removeClass('is-activated');
    jQuery('#__menuMagazine-main').removeClass('is-activated');
    jQuery('.O__mainNavList-item--magazine').find('.M__mainNavButton-main').removeClass('is-activated');
});


jQuery('.O__mainNavList-item--magazine').click(function() {
    jQuery(this).find('.M__mainNavButton-main').addClass('is-activated');
    jQuery('#__menuMagazine-main').addClass('is-activated');
    jQuery('#__secondaryNav-main').removeClass('is-activated');
    jQuery('#__menuSearch-main').removeClass('is-activated');
    jQuery('.M__mainNavsearch-container').removeClass('is-activated');



});
jQuery('.O__mainNavList-item--magazine').find('.M__mainNavButton-main');



////////////////////////


var stickyElement = function () {
    // element to be sticky
    var $stickyEl = $("article");
    // element that will stop the sticky element
    var $stopEl = $('footer');

    $stickyEl.waypoint('sticky', {
        wrapper: '<div class="article-sticky-wrapper" />',
        stuckClass: 'sticky',
        offset: -1
    });

    $stopEl.waypoint(function (direction) {
        if (direction == 'down') {
            // when scrolling down
            // replace pos:fixed with absolute and set top value to
            // the distance from $stopEl to viewport top minus the
            // height of the stickyElement
            var footerOffset = $stopEl.offset();
            $stickyEl.css({
                position: 'absolute',
                top: footerOffset.top - $stickyEl.outerHeight()
            });
        } else if (direction == 'up') {
            // remove the inline styles so sticky styles apply again
            $stickyEl.attr('style', '');
        }

    }, {
        // trigger the waypoint when the bottom of stickyEl touches top of stopEl
        offset: function () {
            return $stickyEl.outerHeight();
        }
    });
};

stickyElement();

