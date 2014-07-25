head.ready(function() {

	$(' .js-btn-call ').on('click', function() {
		$(' .popup[data-popup="call"] ').addClass(' is-active ');
		$(' .overlay ').addClass(' is-active ');
		return false;
	});

	$(' .overlay ').on('click', function() {
		$(' .popup ').removeClass(' is-active ');
		$(' .overlay ').removeClass(' is-active ');
		return false;
	});

	$('.fancybox').fancybox({
		prevEffect		: 'none',
		nextEffect		: 'none'
	});

	$('.flexslider').flexslider({
		animation: "slide",
		slideshow: false,
		controlNav: "thumbnails",
		manualControls: "flexslider__control-thumbs",
		directionNav: false,
		namespace: "flexslider__",
		selector: ".flexslider__slides > li",
	});


	$('.rating').raty({
		path      : 'img',
		// cancelOff : 'cancel-off-big.png',
		// cancelOn  : 'cancel-on-big.png',
		size      : 18,
		starHalf  : 'star-on.png',
		starOff   : 'star-off.png',
		starOn    : 'star-on.png',
		// target    : '#precision-hint',
		cancel    : false,
		targetKeep: true,

		precision : true,
		score: function() {
			return $(this).attr('data-score');
		}
	});

	$(' .subnav .has-dropdown > a ').on('click', function() {
		if($(this).parent().hasClass('is-active')){
			$('.subnav .has-dropdown').removeClass('is-active');
		}
		else{
			$('.search__form').slideUp('fast');
			$('.subnav .has-dropdown').removeClass('is-active');
			$(this).parent().addClass('is-active');
		}
		return false;
	});

	$('.search__ordertrigger').on('click', function() {
		$('.subnav .has-dropdown').removeClass('is-active');
		$(this).parent().find('.search__form').slideToggle('fast');
		return false;
	});

	$(document).click(function(event) {
		// $('.js-select').removeClass('is-open');
		if($(event.target).parents().index($('.subnav')) == -1) {
			$('.subnav .has-dropdown').removeClass('is-active');
		}
		if($(event.target).parents().index($('.search__order')) == -1) {
			$('.search__form').slideUp('fast');
		}
	});

});