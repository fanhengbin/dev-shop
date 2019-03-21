jQuery(function($) {
	var index = 0;
	$('.slide-left').click(function() {
		index--;
		if(index < 0) {
			index = $('.banner-slide li').length - 1;
		}
		$('.banner-slide li').eq(index).show().siblings().hide();
		 $('.focuses li').eq(index).addClass('current').siblings().removeClass('current');
	});
	$('.slide-right').click(function() {
		index++;
		if(index == $('.banner-slide li').length) {
			index = 0;
		}
		$('.banner-slide li').eq(index).show().siblings().hide();
		 $('.focuses li').eq(index).addClass('current').siblings().removeClass('current');
	});
	$('.focuses li').click(function(){
      var index=$(this).index();
      $('.banner-slide li').eq(index).fadeIn().siblings().fadeOut();
      $(this).addClass('current').siblings().removeClass('current');
    });
});