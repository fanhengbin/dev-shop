$(function(){
	var index = 0;
	//轮播图向左
	$('.slide-left').click(function () {
		index--;
		if (index < 0) {
			index = $('.banner-slide li').length - 1;
		}
		$('.banner-slide li').eq(index).show().siblings().hide();
		$('.focuses li').eq(index).addClass('current').siblings().removeClass('current');
	});
	//轮播图向右
	$('.slide-right').click(function () {
		index++;
		if (index == $('.banner-slide li').length) {
			index = 0;
		}
		$('.banner-slide li').eq(index).show().siblings().hide();
		$('.focuses li').eq(index).addClass('current').siblings().removeClass('current');
	});
	//轮播图焦点
	$('.focuses li').click(function () {
		var index = $(this).index();
		$('.banner-slide li').eq(index).fadeIn().siblings().fadeOut();
		$(this).addClass('current').siblings().removeClass('current');
	});
});
	//返回top
	window.onscroll = function () {
		var t = document.documentElement.scrollTop;
		if (t >= 600) {
			$('#topbar').css('display', 'block');
		} else {
			$('#topbar').css('display', 'none');
		}
	}