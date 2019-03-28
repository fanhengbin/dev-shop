$(function () {
    function Emptycart() {
        var unload = $('.unloaded-nav .cart-item').length;
        var load = $('.loaded-nav .cart-item').length;
        if(unload <= 0){
            $('.unloaded-nav .empty-cart').show();
            $('.unloaded-nav .exist-cart').hide();
        }else if (load <=0){
            $('.loaded-nav .empty-cart').show();
            $('.loaded-nav .exist-cart').hide();
        };
    }
    function remove(obj) {
        var list = obj.closest('div');
        list.remove();
        Emptycart();
    }
    $('span.cart-close').click(function () {
        remove($(this));
    });
})