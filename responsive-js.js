/*
 * Responsive jQuery script skeleton
 */

// Vars
var viewportWidth 		= $(window).width(),
	viewportHeight 		= $(window).height(),
	breakpoint      	= 900;

function myResponsiveFunction() 
{
	// Recalculate on resize
	var viewportWidth 	= $(window).width(),
		viewportHeight 	= $(window).height();
	
	// Viewport is small, we don't need to run this script
	// However, we might need to set some styles back to original
	if ( viewportWidth < breakpoint ) 
	{
		// Stuff to be done to get all styles back to original
		
		// Quit script execution
		return false;
	}

	// Code if viewport is beyond the breakpoint 

}
	 
// Run on page load if viewport is big enough
if ( viewportWidth >= breakpoint ) {
	myResponsiveFunction();
}

// Run everytime the window is resized, after 50 milliseconds
// Timer by Zevan Rosser (http://zreference.com/). Source: http://jsfiddle.net/Zevan/c9UE5/5/
$(window).resize(function() {
    clearTimeout(this.id);
    this.id = setTimeout(myResponsiveFunction, 50);
});		