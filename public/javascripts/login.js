/**
 * Created by mac on 16/9/12.
 */
(function () {
    var alertDiv = $("#alert-div");

    $("#login-form").on("submit", function (event) {
        event.preventDefault();

        $.post("/api/login", {
            login: this.login.value, password: md5(this.password.value)
        }).done(function (data) {
            switch (data.state) {
                case 1:
                    location.href = "/users/homepage";
                    break;
                case 3:
                    alertDiv.html("登录名不存在");
                    break;
                case 4:
                    alertDiv.html("密码错误");
                    break;
                default:
                    alertDiv.html("未知错误");
                    break;
            }
        }).fail(function () {
            alertDiv.html("无法连接服务器");
        });
    });
})();