$(function () {
    function remove(obj) {
        var list = obj.closest('div');
        list.remove();
        Emptycart();
    }
    $('.cart-item span').click(function () {
        remove($(this));
    });
    function Emptycart() {
        var unload = $('.unloaded-nav .cart-item').length;
        var load = $('.loaded-nav .cart-item').length;
        if ((unload <= 0) || (load <= 0)) {
            $(".empty-cart").show();
            $('.exist-cart').hide();
        }
        else {
            return false;
        }
    }
})