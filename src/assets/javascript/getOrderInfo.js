$(document).ready(function(){
    var checked_one,checked_two;
    // 鼠标划上已经写好的地址上面会显示修改和删除
    $('.order-address-check.checked').mouseover(function(){
        var index3 = $('.order-address-check.checked').index(this);
        $('.order-address-check-ctrl').eq(index3).show();
    });
    // 鼠标离开已经写好的地址上面会显示修改和删除
    $('.order-address-check.checked').mouseout(function(){
        var index3 = $('.order-address-check.checked').index(this);
        $('.order-address-check-ctrl').eq(index3).hide();
    });
    // 点击地址选中和取消选中
    $('.order-address-check.checked').click(function(){
        var index3 = $('.order-address-check.checked').index(this);
        $('.order-address-check-checked').eq(index3).toggle();
    });
    // 鼠标划上新增地址上面会显示红色
    $('.order-address-check.add').mouseover(function(){
        $('.iconfont.icon-zengjia').css("color","rgb(213, 28, 41)");
        $('.order-address-add-text').css("color","rgb(213, 28, 41)");
    });
    // 鼠标离开新增地址上面会复原
    $('.order-address-check.add').mouseout(function(){
        $('.iconfont.icon-zengjia').css("color","#aaa");
        $('.order-address-add-text').css("color","#aaa");
    });
    // 点击地址上的删除
    $('.delete').click(function(){
        var index1 = $('.delete').index(this);
        $('.order-address-check.checked').eq(index1).remove();
    });
    var div = document.getElementById('background');
    // 点击地址上的新增
    $('.order-address-check.add').click(function(){
        $('#background').css("display","block")
        checked_one = 1;
    });
    // 点击地址上的修改
    $('.edit').click(function(){
        // div.style.display = "block";
        // var index2 = $('.edit').index(this);
        $('#background').css("display","block")
    });
    // 点击关闭弹窗会清空弹窗内信息
    $('#close-button').click(function(){
        div.style.display = "none";
        $('.name').val("");
        $('.number').val("");
        $('.detail').val("");
        $("#cmbProvince option:first").prop("selected", 'selected');
        addressInit('cmbProvince', 'cmbCity', 'cmbArea'); 
    });
    // 点击确认会清空弹窗内信息
    $('.confirm').click(function(){
        div.style.display = "none";
        checked_two = 1;
        $('.name').val("");
        $('.number').val("");
        $('.detail').val("");
        $("#cmbProvince option:first").prop("selected", 'selected');
        addressInit('cmbProvince', 'cmbCity', 'cmbArea'); 
        if(checked_one == 1&&checked_two ==1){
            $('.order-address-check.checked').css("display","block")
        }
    });
    // 点击返回会清空弹窗内信息
    $('.cancel').click(function(){
        div.style.display = "none";
        // $('.name').val("");
        // $('.number').val("");
        // $('.detail').val("");
        // $("#cmbProvince option:first").prop("selected", 'selected');
        // addressInit('cmbProvince', 'cmbCity', 'cmbArea'); 
    });
    window.onclick = function close(e) {
        if (e.target == div) {
            $('#background').style.display = "none";
        }
    }  
})