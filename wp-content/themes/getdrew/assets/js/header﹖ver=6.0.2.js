/*
 * ATTENTION!
 * Only add functions here if they MUST be defined before the page loads
 * jQuery is in noconflict mode (replace $ with jQuery)
 */

// Image Fit (used in onload or within doc ready) - It lives here b/c images can load before the dom is finished loading
function imageFit(img){
	var container = jQuery(img).parent();
	if (container.innerHeight() > jQuery(img).height()) {
		jQuery(img).css({
			'height': '100%',
			'width': 'auto'
		});
	} else if (container.width() > jQuery(img).width()) {
		jQuery(img).removeAttr('style');
	}
}