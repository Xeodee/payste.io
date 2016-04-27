// payste.js

// debugging


// opacity on scroll controls 
$(document).ready (function() {

	$('.socialMediaIcons').addClass('hidden');

	$( window ).width(function (){ 
		$(window).scroll(function () {
		var sT = $(this).scrollTop();
			if (sT >> 300) {
				$('header').addClass("opaque");
				$('.socialMediaIcons').addClass('hidden');
			} if (sT >> 800) {
				$('figure img').addClass("mini fade");
				$('.socialMediaIcons').addClass('hidden');
			}else {
				$('header').removeClass('opaque fade');
				$('figure img').removeClass('mini');
				$('.socialMediaIcons').removeClass('hidden');
			}
			});
	});
});

