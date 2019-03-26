$(document).ready(function(){
    $('.order-address-check.checked').mouseover(function(){
        var index3 = $('.order-address-check.checked').index(this);
        $('.order-address-check-ctrl').eq(index3).show();
    });
    $('.order-address-check.checked').click(function(){
        var index3 = $('.order-address-check.checked').index(this);
        $('.order-address-check-checked').eq(index3).toggle();
    });
    $('.order-address-check.checked').mouseout(function(){
        var index3 = $('.order-address-check.checked').index(this);
        $('.order-address-check-ctrl').eq(index3).hide();
    });
    $('.order-address-check.add').mouseover(function(){
        $('.iconfont.icon-zengjia').css("color","rgb(213, 28, 41)");
        $('.order-address-add-text').css("color","rgb(213, 28, 41)");
    });
    $('.order-address-check.add').mouseout(function(){
        $('.iconfont.icon-zengjia').css("color","#aaa");
        $('.order-address-add-text').css("color","#aaa");
    });
    $('.delete').click(function(){
        var index1 = $('.delete').index(this);
        $('.order-address-check.checked').eq(index1).remove();
    });
    var div = document.getElementById('background');  
    $('.order-address-check.add').click(function(){
        // div.style.display = "block";
        $('#background').css("display","block")
    });
    $('.edit').click(function(){
        // div.style.display = "block";
        // var index2 = $('.edit').index(this);
        $('#background').css("display","block")
    });
    $('#close-button').click(function(){
        div.style.display = "none";
    });
    $('.confirm').click(function(){
        div.style.display = "none";
    });
    $('.cancel').click(function(){
        div.style.display = "none";
    });
    window.onclick = function close(e) {
        if (e.target == div) {
            $('#background').style.display = "none";
        }
    }  
})