head.ready(function() {

	$(' .subnav .has-dropdown ').on('click', function() {
		$(this).toggleClass('is-active');
		return false;
	});

});