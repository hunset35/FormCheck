$("#form-input").submit(function(e){
            
    e.preventDefault();

    var errorMessage = "";

    var name = $("#name").val();
    var email = $("#email-address").val();
    var pass1 = $("#pass1").val();
    var pass2 = $("#pass2").val();
    var message = $("#message").val();
    
    function CheckEmailAddress(emailAddress){

        var emailcheck = /.+@+.+\.com/;

        return emailcheck.test(emailAddress);
    }

    if(name == ""  ){

        errorMessage = "請輸入姓名和電子信箱";

    }else if(!CheckEmailAddress(email)){

        errorMessage = "信箱格式錯誤";

    }else if(pass1 != pass2 ){

        errorMessage = "確認密碼不符";
    
    }else if(pass1 == "" || pass2 == ""){

        errorMessage = "請輸入密碼";
    
    }else if (message == ""){

        errorMessage = "請輸入訊息";
    }

    if(errorMessage == ""){
        $("#error").html("信息已送出!");
        $("#error").css("color","green");
    }else {
        $("#error").html(errorMessage);
        $("#error").css("color","red");
    }
    
});