function reg(){
        var user = document.getElementById("user");
        var password1 = document.getElementById("password");
        var password2 = document.getElementById("surepas");
        var reg = /(^1[3|4|5|7|8][0-9]{9}$)/;
        var rega = /^(13[0-9]|15[012356789]|17[01678]|18[0-9]|14[57])[0-9]{8}$/;
		 
        if(!rega.test($('#user').val()))
        {
            alert('请填写正确的手机号');
            return false; 
        }
        if(password1.value==''){
            alert('请输入密码');
            return false;
        }
        if(password1.value.length < 6 || password1.value.length > 20) {
		//alert("密码长度限制在6-20位!");
		alert("密码长度限制在6-20位!");
		return false;
	}
        if(password1.value!=password2.value){
            alert('密码不同请重新输入');
            password2.focus();
            return false;
        }        
}
	