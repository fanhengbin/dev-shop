$(document).ready(function(){
    $('.order-address-check.checked').mouseover(function(){
        $('.order-address-check-ctrl').show();
    });
    $('.order-address-check.checked').mouseout(function(){
        $('.order-address-check-ctrl').hide();
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
        $('.order-address-check.checked').remove();
    });
    var div = document.getElementById('background');  
    $('.order-address-check.add').click(function(){
        div.style.display = "block";
    });
    $('.edit').click(function(){
        div.style.display = "block";
    });
    $('#close-button').click(function(){
        div.style.display = "none";
    });
    window.onclick = function close(e) {
        if (e.target == div) {
            $('#background').style.display = "none";
        }
    }  
})