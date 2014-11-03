/* Disabled, since it seems to not work on mobile until I can disable it just there.
$(document).ready(function() {
	
	$("body").css("display", "none");

    $("body").fadeIn(500);
    
	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(500, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	
});
*/