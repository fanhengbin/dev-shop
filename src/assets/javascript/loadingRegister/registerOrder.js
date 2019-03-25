
$(document).ready(function () {
    var  password001, password002, phonenumber, check2, check3, check4;
    //   监听电话号码变化
    $('#phone1').on('input propertychange', function () {
        phonenumber = $('#phone1').val();
    });
    //  离开焦点后发生变化  
    //手机号码正则表达式
    var reg = /^1[3578][01379]\d{8}|1[34578][01256]\d{8}|(134[012345678]\d{7}|1[34578][012356789]\d{8})$/g;
    $('#phone1').blur(function () {
        //   手机号码的要求
        if (!reg.test(phonenumber)) {
            $('#phone-1').hide();
            $('#phone-1-01').show();
        }
        else {
            $('#phone-1-01').hide();
            $('#phone-1').show();
            check4 = 1;
        }
    });
    $('.register').click(function () {
        //  判断是否全部正确
        if ( check4 == 1) {
            alert("注册成功！");
            //    获取本地的登陆页面
            $(location).prop('href', 'loading.html');
            //    将值存到缓存区
            window.localStorage.setItem("account", phonenumber);
            //    清空所有信息
            $('#phone1').val("");
        } else {
            $('#phone-1').hide();
            $('#phone-1-01').show();
        }
    });
});

