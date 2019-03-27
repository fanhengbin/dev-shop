$(function () {
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
	//首页mouseover ——————开始
	function over(obj) {
		obj.find('img').css({ 'width': '180px', 'height': '180px' });
		obj.children().css('display', 'block');
		//					var next=obj.next();
		//					obj.children().css({'width':'','height':''});
		//					obj.children().css({'width':'180px','height':'180px'});
		//					next.css('display','block');
	}
	function out(obj) {
		obj.find('img').css({ 'width': '200px', 'height': '245px' });
		obj.find('div:first').siblings().css('display', 'none');
	}
	$('.detail-rs-item-wrap').mouseenter(function () {
		over($(this));
	});
	$('.detail-rs-item-wrap').mouseleave(function () {
		out($(this));
	});
	//首页mouseover ——————结束
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