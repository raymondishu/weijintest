'use static'
$(function() {
	function resize() {
		var windowWidth = $(window).width();
		var isSmallScreen = windowWidth < 768;
		$('#carousel > .carousel-inner > .item').each(function(i, item) {
			var $item = $(item);
			var imgSrc = isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
			if (isSmallScreen) {
				//ctrl+e img生成
				$item.css('background-image','');
				$item.html('<img src="'+imgSrc+'" alt="" />');
			} else {
				$item.empty();
				$item.css('background-image', "url(" + imgSrc + ")");
			}
		});
	}
	$(window).on('resize', resize).trigger('resize');
	  // 提示框效果
  	$('[data-toggle="tooltip"]').tooltip();
});