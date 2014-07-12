head.ready(function() {

	$(' .subnav .has-dropdown > a ').on('click', function() {
		$('.search__form').slideUp('fast');
		$(this).parent().toggleClass('is-active');
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