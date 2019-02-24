// JavaScript Document
// This changes the opacity of the navbar on scroll
$(window).scroll(function () {
	var scrollTop = $(this).scrollTop();
	$('#navbar').css({
		opacity: function () {
			var elementHeight = $(this).height(),
				opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.1) + 0.5;
			if (opacity < 1) {
				return opacity;
			} else {
				return 1;
			}
		}
	});
});