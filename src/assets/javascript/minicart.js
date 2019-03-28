$(function () {
    function remove(obj) {
        var list = obj.closest('div');
    }
    $('.cart-item span').click(function () {
        remove($(this));
    });
})