$(document).ready(function(){
    var checked_one,checked_five=1, checked_three=1,checked_two, checked_four=1;
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
        $('#background').css("display","block");
        $('#name').val("");
        $('#number').val("");
        $('#detail').val("");
        $("#cmbProvince option:first").prop("selected", 'selected');
        addressInit('cmbProvince', 'cmbCity', 'cmbArea'); 
        checked_one = 1;
    });
    // 点击地址上的修改
    $('.edit').click(function(){
        // div.style.display = "block";
        // var index2 = $('.edit').index(this);
        $('#background').css("display","block")
    });
    $('#name').on('input propertychange', function () {
        if ($('#name').val() === "") {
            checked_three = 1
         }
         else{
            checked_three = 0
        }
    });
    $('#name').blur(function () {
        if ($('#name').val() === "") {
            checked_three = 1
         }
         else{
            checked_three = 0
        }
    });
    //   监听电话号码变化
    $('#number').on('input propertychange', function () {
        if ($('#number').val() === "") {
            checked_five = 1
         }
         else{
            checked_five = 0
        }
    });
    //  离开焦点后发生变化  
    //手机号码正则表达式
    var reg = /^1[3578][01379]\d{8}|1[34578][01256]\d{8}|(134[012345678]\d{7}|1[34578][012356789]\d{8})$/g;
    function validateTel (tel){
        if(reg.test(tel)){
        checked_five = 0   
        }
        else{
        checked_five = 1
        }
  }
    $('#detail').on('input propertychange', function () {
        if ($('#detail').val() === "") {
            checked_four = 1
        }
        else{
            checked_four = 0
        }
    });
    $('#detail').blur(function () {
        if ($('#detail').val() === "") {
            checked_four = 1
        }
        else{
            checked_four = 0
        }
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
    // 点击确认弹窗内信息
    var time =0;
    $('.confirm').click(function(){
        if($('#cmbProvince').val()!=="请选择省份"){
            checked_two =1
        }
        $('#number').blur(function () {
            phonenumber = $('#number').val();
            validateTel(phonenumber);
        });
        if(checked_one == 1&&checked_two ==1 && checked_three !== 1&&checked_four !== 1&& checked_five !==1){
            checked_five=checked_four=checked_three=1;
            checked_one=checked_two=0;
            div.style.display = "none";
            $('.order-address-check.checked').css("display","block");
        }
        validateTel(phonenumber);
        time = 10; //设定间隔时间（秒）
        //启动计时器，倒计时time秒后自动关闭计时器。
        var index = setInterval(function(){
            time--;
            if (time == 0) {
                clearInterval(index);
            }
        }, 1000);
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