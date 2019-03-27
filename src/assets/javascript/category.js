$(function () {
    //筛选列表 active特效 ----开始
    $(".filter-order a").click(function () {
        $(this).siblings('a').removeClass('active'); // 删除其兄弟元素的样式
        $(this).addClass('active'); // 为点击元素添加类名
    });
    $(".list-inline a").click(function () {
        $(this).siblings('a').removeClass('active'); // 删除其兄弟元素的样式
        $(this).addClass('active'); // 为点击元素添加类名
    });
    //筛选列表 active特效 ----结束
    //价格图标切换
    $('.sort-price').on('click', function (ev) {
        $('.sort-price').toggleClass('iconfont icon-xiangxiajiantou').toggleClass('iconfont icon-xiangshangjiantou');
    });
});
//检测返回首部
window.onscroll = function () {
    var t = document.documentElement.scrollTop;
    if (t >= 600) {
        $('#topbar').css('display', 'block');
    } else {
        $('#topbar').css('display', 'none');
    }
}