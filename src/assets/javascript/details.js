$(function(){
// 按钮选中效果
$(".property-sibling-item dd a").click(
    function(){
        $(this).css({"border-color":" #000","color":"#000"})
        .siblings("a").css({"border-color":" #BFBFBF","color":"#595959"});
       console.log($(this));
    }
)
// 商品数量
$("#minus").click(
    function(){
        var inputVal=$(this).next()
        var val=parseInt(inputVal.val());
        if(val==1){return;}
        var num=val-1;
        inputVal.val(num);
    }
)
$("#add").click(
    function(){
        var inputVal=$(this).prev()
        var val=parseInt(inputVal.val());
        // if(val==0){return;}
        var num=val+1;
        inputVal.val(num);
    }
)
});