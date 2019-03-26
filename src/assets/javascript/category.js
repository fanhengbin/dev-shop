$(function () {
    $(".filter-order a").click(function () {
        $(this).siblings('a').removeClass('active'); // 删除其兄弟元素的样式
        $(this).addClass('active'); // 为点击元素添加类名
    });
    $('.sort-price').on('click', function (ev) {
        $('.sort-price').toggleClass('iconfont icon-xiangxiajiantou').toggleClass('iconfont icon-xiangshangjiantou');
    });
});
window.onscroll = function () {
    var t = document.documentElement.scrollTop;
    if (t >= 600) {
        $('#topbar').css('display', 'block');
    } else {
        $('#topbar').css('display', 'none');
    }
}