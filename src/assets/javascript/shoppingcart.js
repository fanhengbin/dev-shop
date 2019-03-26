$(function(){
    // 商品数量
    $(".vm-minus").click(
        function(){
            var inputVal=$(this).next()
            var val=parseInt(inputVal.val());
            if(val==1){return;}
            var num=val-1;
            var price=parseInt($(this).parents('.cart-col-number').prev().find('a').html());          
            var prices=(price*num).toFixed(2);
            $(this).parents('.cart-col-number').next().find('a').text(prices);
            inputVal.val(num);
        }
    )
    $(".vm-plus").click(
        function(){
            var inputVal=$(this).prev()
            var val=parseInt(inputVal.val());
            // if(val==0){return;}
            var num=val+1;
            var price=parseInt($(this).parents('.cart-col-number').prev().find('a').html());          
            var prices=(price*num).toFixed(2);
            $(this).parents('.cart-col-number').next().find('a').text(prices);
            inputVal.val(num);
        }
    )
    });