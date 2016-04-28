// payste.js

// debugging


// opacity on scroll controls 
$(document).ready (function() {
	var sT = 0,
		vidHeight = parseInt($('#video').height()),
		totalPageLength = parseInt($('body').height()),
		scrolledPercent = parseInt((sT / totalPageLength));

	// init at dom level ...

	$('.socialMediaIcons ul li a').addClass('loadHidden');

	// when rendering the dom ...



	// on scroll measurements

	$(window).width(function () {
		$(window).scroll(function () {

			sT = parseInt($(window).scrollTop()),
				scrolledPercent = parseInt($(window).scrollTop() / ($('body').height()-$(window).height()) * 100),
				headerTotalHeight = parseInt($('header').outerHeight());


			console.log(scrolledPercent);

			if (sT < vidHeight && scrolledPercent < 90) {
				$('header').addClass("opaque");
			}
			if (sT > vidHeight && scrolledPercent < 90) {
				$('figure img').addClass("mini fade");
				$('header').removeClass('opaque fade');
			}
			if(scrolledPercent > 90){
				$('header').attr('style','margin-top: -'+headerTotalHeight+'px;');
				console.log('>')
			}
			if(scrolledPercent < 90){
				$('header').attr('style','margin-top: 0').delay(500).removeAttr('style');
				console.log('<')

			}
		});
		$('header').hover(function () {
			console.log($(this).attr('class'))
			$(this).addClass('opaque');

		}, function () {
			console.log('Top: ' + sT + ' Video end: ' + vidHeight + ' ')
			console.log($(this).attr('class'))
			if ($(this).hasClass('opaque') && sT > vidHeight) {
				$(this).removeClass('opaque')
			}

		});

		function repositionMediaIcons(){
			$.each($('.socialMediaIcons ul li a'),function(el,k){
				var positionTop = $('.socialMediaIcons ul li a')[el].getBoundingClientRect().top,
					positionLeft = $('.socialMediaIcons ul li a')[el].getBoundingClientRect().left,
					correctedPositionTop = positionTop-20;
				$(this).css({
					'position':'fixed',
					'bottom' : '-30px',
					'left' : positionLeft+'px'
				});
			})
		};

		$(window).load(function(){
			sT = parseInt($(window).scrollTop());
			$('.socialMediaIcons ul li a').addClass('transitionTiming300').removeClass('loadHidden');
			setTimeout(function(){
				$('header').removeClass('loadHidden');
				if(sT < vidHeight){
					$('header').addClass('opaque')
				}
			},500);
		});

		$('.socialMediaIcons ul li a').hover(function(){

			$(this).css({
				'bottom':'0'
			});
		},function(){

			$(this).css({
				'bottom':'-30px'
			});
		});

	});
});

