$(function () {
    function remove(obj) {
        var list = obj.closest('div');
        list.remove();
        console.log($('.cart-item').length/2);
        if ($('.cart-item').length/2 <= 0) {
            Emptycart();
        }
        else {
            return true;
        }
    }
    $('.cart-item span').click(function () {
        remove($(this));
    });
    function Emptycart() {
        $(".empty-cart").show();
        $('.exist-cart').hide();
    }
})