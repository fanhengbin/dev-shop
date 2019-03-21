
$(document).ready(function () {
    var  password001, password002, phonenumber, check2, check3, check4;
    //   监听密码变化
    $('#password1').on('input propertychange', function () {
        password001 = $('#password1').val();
    });
    //  离开焦点后发生变化
         var Regxx = /^\w{6,18}$/;
    $('#password1').blur(function () {
        //    密码长度的限制     
        if (!Regxx.test( password001)) {
            $('#pass1').hide();
            $('#pass1-01').show();
        }
        else {
            $('#pass1-01').hide();
            $('#pass1').show();
            check2 = 1;
        }
    });
    //   监听再次输入密码变化
    $('#password2').on('input propertychange', function () {
        password002 = $('#password2').val();
    });
    //  离开焦点后发生变化
    // 确认密码是否和密码相同
    $('#password2').blur(function () {
        if (password002 != password001) {
            $('#pass2').hide();
            $('#pass2-01').show();
        }
        else {
            $('#pass2-01').hide();
            $('#pass2').show();
            check3 = 1;
        }
    });
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
        if ( check2 == 1 && check3 == 1 && check4 == 1) {
            alert("注册成功！");
            //    获取本地的登陆页面
            $(location).prop('href', 'loading.html');
            //    将值存到缓存区
            window.localStorage.setItem("account", phonenumber);
            window.localStorage.setItem("password", password001);
            //    清空所有信息
            $('#password1').val("");
            $('#password2').val("");
            $('#phone1').val("");
        } else {
            alert("有错误！！！");
        }
    });
});

