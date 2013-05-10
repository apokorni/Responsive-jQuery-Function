/*
 * Test Case for Responsive jQuery script skeleton
 */

// Vars
var viewportWidth 		= $(window).width(),
	viewportHeight 		= $(window).height(),
	breakpointSmall     = 600,
	breakpointLarge		= 1000;

function myResponsiveFunction() 
{
	// Recalculate on resize
	var viewportWidth 	= $(window).width(),
		viewportHeight 	= $(window).height();
	
	// Viewport is small, we don't need to run this script
	// However, we might need to set some styles back to original
	if ( viewportWidth < breakpointSmall ) 
	{
		// Stuff to be done to get all styles back to original
		$('body').removeAttr("style");
		$('.note p').replaceWith('<p>You are on a very small screen rite?</p>');
		if ( $('img').length > 0 ) {
			$('img').hide();
		}
		
		// Quit script execution
		return false;
	}

	// Code if viewport is beyond the breakpoint

	var isSmall = viewportWidth >= breakpointSmall && viewportWidth < breakpointLarge,
		isLarge = viewportWidth >= breakpointLarge;


	if ( isSmall ) {
		$('body').css({'background' : 'red'});
		$('.note p').replaceWith('<p>You are in a small screen. We know</p>');
		if ( $('img').length > 0 ) {
			$('img').hide();
		}
	}

	if ( isLarge ) {
		$('body').css({'background' : 'yellow'});
		$('.note p').replaceWith('<p>Wow! This is a really large screen you have bro!</p>');
		if ( $('img').length == 0 ) {
			$('.note').after('<img src="baby.gif" alt="Happy Dude">');
		} else {
			$('img').show();
		}
	}

}
	 
// Run on page load if viewport is big enough
if ( viewportWidth >= breakpointSmall ) {
	myResponsiveFunction();
}

// Run everytime the window is resized, after 50 milliseconds
// Timer by Zevan Rosser (http://zreference.com/). Source: http://jsfiddle.net/Zevan/c9UE5/5/
$(window).resize(function() {
    clearTimeout(this.id);
    this.id = setTimeout(myResponsiveFunction, 50);
});		