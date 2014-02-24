$(document).ready(function() {
	var servicesScrollPos = document.getElementById("services").scrollTop;
	var scrollToTopDiv = $('.scroll-to-top');
	scrollToTopDiv.hide();

	var scrollTopFunction = function() {
		var browserScrollPos = $(document).scrollTop();
		if (browserScrollPos == 0) {
			scrollToTopDiv.fadeOut();
		} else if (browserScrollPos > servicesScrollPos) {
			scrollToTopDiv.fadeIn();
		}
	};

	$(window).scroll(scrollTopFunction);
});
