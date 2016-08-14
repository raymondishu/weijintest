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
				$item.css('background-image', '');
				$item.html('<img src="' + imgSrc + '" alt="" />');
			} else {
				$item.empty();
				$item.css('background-image', "url(" + imgSrc + ")");
			}
		});

		var $ulContainer = $('.nav-tabs');
		var width = 0;
		$ulContainer.children().each(function(index, element) {
			width += element.clientWidth;
		});
		var windowWidth = $(window).width();
		if (width > windowWidth) {
			$ulContainer
				.css('width', width)
				.parent().css('overflow-x', 'scroll');
		}
	}
	$(window).on('resize', resize).trigger('resize');
	// 提示框效果
	$('[data-toggle="tooltip"]').tooltip();
	// 新闻点击切换
	$('.news-nav a').click(function(e) {
		// e.preventDefault();
		// e.stopPropagation();
		// 不要阻止默認事件
		$('.news-title').text($(this).data('title'));

	});


	var OFFSET = 50;
	// 轮播图触摸
	$('.carousel').each(function(i, item) {
		var startX, endX;
		item.addEventListener('touchstart', function(e) {
			//console.log(e);
			startX = e.touches[0].clientX;
			e.preventDefault();
		});
		item.addEventListener('touchmove', function(e) {
			endX = e.touches[0].clientX;
			e.preventDefault();
		});
		item.addEventListener('touchend', function(e) {
			var offsetX = endX - startX;
			//console.log(offsetX)
			if (offsetX > OFFSET) {
				// 上一张
				$(this).carousel('prev');
			} else if (offsetX < -OFFSET) {
				// 上一张
				$(this).carousel('next');
			}
			e.preventDefault();
		});
	});


});