
$(document).ready(function () {
  $(".get-code").click(function () {
    var time = 60;
    var timer = setInterval(function(){
        time--;
        window.localStorage.setItem("number-loading",  time);
        $(".get-code").text("（"+time+"s）重发");
        if(time==0){
            clearInterval(timer);
            window.localStorage.removeItem('number-loading');
            $(".get-code").text("获取验证码");
        }
    },1000);
});
  var i = 1;
  $('#email-001').on('input propertychange', function () {
    account1 = $('#email-001').val();
  });
  // 从缓存区获取账号和密码
  var hoster1 = window.localStorage.getItem("account");
  $('#loading').click(function () {
    // 判断账号密码是否错误
    if (account1 == hoster1) {
      $('#email-001').val("");
      $('.paragraph').hide();
      $(location).prop('href', 'success.html');
    } else {
     $('.paragraph').show();
    }
  });
});

